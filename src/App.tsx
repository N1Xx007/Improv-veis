/**
 * CONGRESSO DE MULHERES IMPROVÁVEIS 2026
 * Igreja Batista Vida — Goiânia/GO
 * 
 * Estrutura: Página de Vendas de Alta Conversão (Tráfego Pago Instagram/Facebook)
 */

import { TopAnnouncementBar } from './components/TopAnnouncementBar';
import { TopNav } from './components/TopNav';
import { Hero } from './components/Hero';
import { PainAndIdentification } from './components/PainAndIdentification';
import { Meaning } from './components/Meaning';
import { WhatToExpect } from './components/WhatToExpect';
import { Speaker } from './components/Speaker';
import { EventPassBox } from './components/EventPassBox';
import { ImpactQuote } from './components/ImpactQuote';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { FloatingBottomBar } from './components/FloatingBottomBar';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2C2926] selection:bg-[#46553D] selection:text-[#FAF8F5] pb-16 sm:pb-0">
      
      {/* 00. Barra de Aviso Superior (Urgência & Atenção) */}
      <TopAnnouncementBar />

      {/* Navegação Limpa */}
      <TopNav />

      {/* Conteúdo Principal — Estrutura de Página de Vendas */}
      <main id="main-content">
        {/* 01. Hero com VSL / Vídeo Teaser, Headline de Alta Conversão e CTA Principal */}
        <Hero />

        {/* 02. Identificação com a Dor & Para Quem É (Boxes Comparativos de Decisão) */}
        <PainAndIdentification />

        {/* 03. O Significado de Improvável (As 3 Promessas Centrais) */}
        <Meaning />

        {/* 04. O Que Espera Por Você (Os 3 Pilares da Experiência nesses 2 Dias) */}
        <WhatToExpect />

        {/* 05. Ministrante Convidada: Missionária Raquel Lopes */}
        <Speaker />

        {/* 06. O "Passe do Evento" (Box de Oferta / Inscrição Direta no WhatsApp) */}
        <EventPassBox />

        {/* 07. Frase de Impacto em Verde Profundo e CTA de Contraste */}
        <ImpactQuote />

        {/* 08. FAQ Quebra de Objeções (Acordeão Fluido & Suporte Direto) */}
        <FAQ />

        {/* 09. CTA Final: Fechamento Emocional e Convite */}
        <FinalCTA />
      </main>

      {/* Rodapé Respeitoso */}
      <Footer />

      {/* Botão Flutuante de WhatsApp para Desktop */}
      <div className="hidden sm:block">
        <WhatsAppFloating />
      </div>

      {/* Barra de Conversão Fixa no Rodapé para Mobile (Sticky Bottom Bar) */}
      <FloatingBottomBar />
    </div>
  );
}


