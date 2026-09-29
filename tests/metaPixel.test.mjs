import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { createContext, runInContext } from 'node:vm';
import { transformSync } from 'esbuild';

const source = readFileSync(new URL('../src/lib/metaPixel.ts', import.meta.url), 'utf8');
// Apenas fixture numérica em VM isolada: scripts nunca executam ou acessam a Meta.
const TEST_PIXEL_ID = '123456789012345';

function setup({ pixelId = TEST_PIXEL_ID, browser = true, window = {}, scripts = [] } = {}) {
  const sandbox = createContext(browser ? {
    window,
    document: {
      querySelector: () => scripts[0] ?? null,
      createElement: () => ({}),
      head: { appendChild: script => scripts.push(script) },
    },
  } : {});
  const { code } = transformSync(source, {
    loader: 'ts',
    format: 'cjs',
    define: {
      'import.meta.env.VITE_META_PIXEL_ID': pixelId === null ? 'undefined' : JSON.stringify(pixelId),
    },
  });
  const reloadModule = () => {
    sandbox.module = { exports: {} };
    runInContext(`(function () { ${code}\n })()`, sandbox);
    return sandbox.module.exports;
  };
  return { api: reloadModule(), reloadModule, window, scripts };
}

function queuedEvents(window) {
  return JSON.parse(JSON.stringify(window.fbq?.queue ?? []));
}

test('é seguro importar e chamar as funções sem navegador', () => {
  const { api, scripts } = setup({ browser: false });
  assert.doesNotThrow(() => api.initializeMetaPixel());
  assert.doesNotThrow(() => api.trackWhatsAppClick());
  assert.equal(scripts.length, 0);
});

test('ID ausente, vazio, exemplo ou inválido não carrega nem dispara o Pixel', () => {
  for (const pixelId of [null, '', '  ', 'SEU_PIXEL_ID_AQUI', 'abc', '123 abc', '0']) {
    const { api, window, scripts } = setup({ pixelId });
    api.initializeMetaPixel();
    api.trackWhatsAppClick();
    assert.equal(scripts.length, 0);
    assert.equal(window.fbq, undefined);
  }
});

test('carrega um script assíncrono e um PageView sem parâmetros', () => {
  const { api, window, scripts } = setup({ pixelId: ` ${TEST_PIXEL_ID} ` });
  api.initializeMetaPixel();
  assert.equal(scripts.length, 1);
  assert.equal(scripts[0].src, 'https://connect.facebook.net/en_US/fbevents.js');
  assert.equal(scripts[0].async, true);
  assert.equal(window.fbq, window._fbq);
  assert.equal(window.fbq.disablePushState, true);
  assert.deepEqual(queuedEvents(window), [
    ['set', 'autoConfig', false, TEST_PIXEL_ID],
    ['init', TEST_PIXEL_ID],
    ['track', 'PageView'],
  ]);
});

test('chamadas repetidas e reavaliação do módulo não duplicam init, script ou PageView', () => {
  const { api, reloadModule, window, scripts } = setup();
  api.initializeMetaPixel();
  api.initializeMetaPixel();
  reloadModule().initializeMetaPixel();
  assert.equal(scripts.length, 1);
  const commands = queuedEvents(window);
  assert.equal(commands.filter(([command]) => command === 'init').length, 1);
  assert.equal(commands.filter(([, event]) => event === 'PageView').length, 1);
});

test('cada clique é enfileirado uma vez enquanto o script carrega', () => {
  const { api, window } = setup();
  api.initializeMetaPixel();
  api.trackWhatsAppClick();
  api.trackWhatsAppClick();
  assert.deepEqual(queuedEvents(window).slice(3), [
    ['track', 'Contact'],
    ['track', 'Contact'],
  ]);
});

test('após o carregamento, encaminha Contact sem texto, URL ou parâmetros', () => {
  const { api, window } = setup();
  api.initializeMetaPixel();
  const delivered = [];
  window.fbq.callMethod = (...args) => delivered.push(args);
  api.trackWhatsAppClick();
  assert.deepEqual(delivered, [['track', 'Contact']]);
  assert.equal(queuedEvents(window).length, 3);
});

test('falha ou indisponibilidade do Pixel não propaga erro para o clique', () => {
  const { api, window } = setup();
  api.initializeMetaPixel();
  window.fbq.callMethod = () => { throw new Error('Pixel bloqueado'); };
  assert.doesNotThrow(() => api.trackWhatsAppClick());
  delete window.fbq;
  assert.doesNotThrow(() => api.trackWhatsAppClick());
});

test('sem configuração não utiliza nem mesmo um fbq externo', () => {
  const calls = [];
  const { api } = setup({ pixelId: '', window: { fbq: (...args) => calls.push(args) } });
  api.initializeMetaPixel();
  api.trackWhatsAppClick();
  assert.deepEqual(calls, []);
});

test('reutiliza script e função já existentes sem sobrescrevê-los', () => {
  const calls = [];
  const fbq = (...args) => calls.push(args);
  const script = { src: 'https://connect.facebook.net/en_US/fbevents.js' };
  const { api, window, scripts } = setup({ window: { fbq }, scripts: [script] });
  api.initializeMetaPixel();
  assert.equal(window.fbq, fbq);
  assert.deepEqual(scripts, [script]);
  assert.deepEqual(calls.at(-1), ['track', 'PageView']);
});

test('falha de inicialização não bloqueia o carregamento da aplicação', () => {
  const { api } = setup({ window: { fbq: () => { throw new Error('indisponível'); } } });
  assert.doesNotThrow(() => api.initializeMetaPixel());
  assert.doesNotThrow(() => api.trackWhatsAppClick());
});
