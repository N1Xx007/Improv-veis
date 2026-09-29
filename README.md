<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/54aa4d48-44be-4554-8349-6695616e673d

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Meta Pixel

Esta landing page usa React + Vite + TypeScript. O documento/head está em
`index.html`, a entrada em `src/main.tsx` e o layout em `src/App.tsx`.

Adicione ao `.env` na raiz (ou às variáveis do ambiente de build da hospedagem):

```dotenv
VITE_META_PIXEL_ID=SEU_PIXEL_ID_AQUI
```

Substitua o exemplo pelo ID real do seu Pixel. O `.env` local já contém o ID
fornecido pelo responsável pelo projeto; esse arquivo é ignorado pelo Git.
O ID do Pixel é público, não é um token de acesso.
Se o valor estiver ausente, vazio ou não for numérico, nenhum script/evento do
Pixel será carregado por esta integração.

Reinicie `npm run dev` depois de alterar o `.env`. Para produção, configure a
variável **antes** de executar `npm run build` e publique a nova pasta `dist`.
O Vite incorpora variáveis `VITE_` no build; alterar apenas o ambiente de um
servidor que já está servindo arquivos estáticos não atualiza o bundle.
Referência: [variáveis de ambiente no Vite](https://vite.dev/guide/env-and-mode).

### Eventos e inicialização

- Um script de módulo no final do `<head>` de `index.html` chama
  `initializeMetaPixel()` de `src/lib/metaPixel.ts`, fora do ciclo de renderização
  do React. O helper inicializa a fila oficial `fbq`,
  carrega `fbevents.js` de forma assíncrona e envia um `PageView` por documento.
  O estado no navegador evita repetição em StrictMode e HMR.
- `vite.config.ts` gera o fallback `<noscript><img ...></noscript>` no `<body>`
  usando a mesma variável de ambiente, somente com um ID válido. Ele registra
  `PageView` apenas quando JavaScript está desativado, sem duplicar o evento
  da versão com JavaScript. A landing page React depende de JavaScript para renderizar.
- A página não tem roteador. Navegar pelas âncoras (`#faq`, `#evento` etc.) não
  cria outro `PageView`. Um carregamento/recarregamento completo cria uma nova visita.
- `trackWhatsAppClick()` envia somente `fbq('track', 'Contact')`, sem parâmetros.
  `src/config/constants.ts` reexporta o helper usado por todos os CTAs.
  Cliques durante o carregamento ficam na fila; erros do Pixel não são propagados
  para os links. Nenhum `preventDefault`, atraso ou alteração de `target` foi adicionado.
- Não adicione outro snippet, tag de Pixel no GTM ou integração equivalente em
  paralelo: isso pode duplicar os eventos fora do controle deste helper.

CTAs cobertos: barra de aviso superior, navegação, Hero, identificação,
ministrante, inscrição (`EventPassBox`), frase de impacto, FAQ, CTA final,
WhatsApp flutuante e barra fixa mobile. `EventInfo` também usa o helper, mas
esse componente não é renderizado pelo `App` atual.

### Privacidade

O código envia apenas `PageView` e `Contact`, sem nome do evento/igreja, religião,
categoria, texto do botão, mensagem do WhatsApp ou dados pessoais. O envio antigo
de `Lead`, `generate_lead` e do CustomEvent auxiliar foi removido.
`autoConfig` é desativado antes do `init` para evitar a coleta automática de
eventos e metadados da página. Nenhum dado de correspondência avançada é passado
na inicialização.

Nas configurações do Pixel no Gerenciador de Eventos, mantenha desativadas a
**correspondência avançada automática** e a detecção de eventos sem código;
remova regras antigas de eventos configuradas pela ferramenta visual.
O script de terceiros ainda utiliza dados técnicos, cookies e URL/referrer:
eventos sem parâmetros não tornam o rastreamento anônimo. Não inclua dados
pessoais ou sensíveis em URLs/parâmetros de campanhas e revise o contexto
religioso da página ao configurar a fonte de dados na Meta.

### Como testar

1. Configure seu ID real e reinicie o servidor ou refaça/publice o build.
2. No Gerenciador de Eventos, selecione o Pixel/fonte de dados e abra
   **Testar eventos**. Use a opção de testar eventos do navegador com a URL da página.
3. Abra a página sem bloqueadores de rastreamento: deve aparecer um `PageView`.
   Navegar entre seções não deve gerar outros `PageView`.
4. Clique em cada CTA, incluindo os flutuantes no celular/computador. Cada clique
   deve gerar um `Contact` e continuar abrindo o WhatsApp em outra aba.
   Não deve aparecer `Lead` ou parâmetro personalizado com dados da visitante.
5. Confira a origem **Navegador**, os detalhes dos eventos e possíveis duplicações.
   O Meta Pixel Helper também pode ajudar a inspecionar a instalação.

Verificações locais: `npm test`, `npm run lint` (TypeScript; não há ESLint
configurado) e `npm run build`. Os testes automatizados usam uma VM com rede
inexistente e ID numérico apenas de fixture; não enviam eventos reais à Meta.
O recebimento na sua conta só pode ser confirmado após configurar um ID real.
