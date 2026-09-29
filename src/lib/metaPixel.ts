type PixelCommand =
  | ['init', string]
  | ['set', 'autoConfig', false, string]
  | ['track', 'PageView' | 'Contact'];

type FacebookPixel = {
  (...args: PixelCommand): void;
  callMethod?: (...args: PixelCommand) => void;
  queue?: PixelCommand[];
  push?: FacebookPixel;
  loaded?: boolean;
  version?: string;
  disablePushState?: boolean;
};

declare global {
  interface Window {
    fbq?: FacebookPixel;
    _fbq?: FacebookPixel;
    __metaPixelInitialized?: boolean;
  }
}

const SCRIPT_URL = 'https://connect.facebook.net/en_US/fbevents.js';

/** Inicializa uma vez por documento, inclusive com StrictMode ou HMR. */
export function initializeMetaPixel(): void {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  const pixelId = import.meta.env.VITE_META_PIXEL_ID?.trim();
  // Ausência, exemplo textual ou ID inválido mantêm o rastreamento desativado.
  if (!pixelId || !/^[1-9]\d*$/.test(pixelId) || window.__metaPixelInitialized) return;

  try {
    if (typeof window.fbq !== 'function') {
      // Fila do snippet base: preserva eventos enquanto o script carrega.
      const fbq: FacebookPixel = function (...args) {
        if (fbq.callMethod) {
          fbq.callMethod.apply(fbq, args);
        } else {
          fbq.queue!.push(args);
        }
      };
      fbq.queue = [];
      fbq.push = fbq;
      fbq.loaded = true;
      fbq.version = '2.0';
      window.fbq = fbq;
      window._fbq ??= fbq;
    }

    // A landing page usa âncoras, sem rotas client-side ou PageViews adicionais.
    window.fbq.disablePushState = true;
    // Desativa eventos/metadados automáticos. Não enviar dados de matching.
    window.fbq('set', 'autoConfig', false, pixelId);
    window.fbq('init', pixelId);
    window.fbq('track', 'PageView');
    window.__metaPixelInitialized = true;

    if (!document.querySelector(`script[src="${SCRIPT_URL}"]`)) {
      const script = document.createElement('script');
      script.async = true;
      script.src = SCRIPT_URL;
      document.head.appendChild(script);
    }
  } catch {
    // Falhas/bloqueadores de analytics não podem impedir a renderização.
  }
}

/** Nenhum texto, URL de WhatsApp, identificação de CTA ou dado pessoal é enviado. */
export function trackWhatsAppClick(): void {
  if (typeof window === 'undefined' || !window.__metaPixelInitialized) return;

  try {
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'Contact');
    }
  } catch {
    // Preserva a navegação nativa do link mesmo se o Pixel falhar.
  }
}
