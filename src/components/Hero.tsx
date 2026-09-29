import React from 'react';
import { MessageCircle, Calendar, MapPin, CheckCircle2, ShieldCheck } from 'lucide-react';
import { EventPhoto } from './EventPhoto';
import { getWhatsAppLink, trackWhatsAppClick } from '../config/constants';

export function Hero() {
  const handleCtaClick = () => {
    trackWhatsAppClick('hero_sales_primary');
  };

  return (
    <section className="relative pt-8 sm:pt-12 md:pt-16 pb-16 sm:pb-24 bg-[#FAF8F5] paper-grain overflow-hidden border-b border-[#46553D]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Topo da Página de Vendas: Identificação de Autoridade & Localização */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#F3EEE6] border border-[#46553D]/15 rounded-full text-xs font-semibold tracking-wider uppercase text-[#785A42] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#46553D]" />
            <span>CONGRESSO DE MULHERES 2026 • IGREJA BATISTA VIDA</span>
          </div>

          {/* Título Principal de Impacto */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#2A3624] font-medium leading-[0.95] mb-4">
            IMPROVÁVEIS
          </h1>

          {/* Headline de Alta Conversão */}
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#2A3624] font-normal leading-[1.15] text-balance mb-4">
            Sua história <span className="font-semibold italic text-[#785A42]">não te desqualifica</span> para aquilo que Deus ainda vai fazer.
          </h2>

          {/* Sub-headline persuasiva e empática */}
          <p className="text-sm sm:text-base md:text-lg text-[#565048] leading-relaxed max-w-2xl mx-auto text-balance">
            Talvez você se sinta improvável, cansada ou olhando para as próprias feridas. Nos dias <strong>17 e 18 de outubro</strong>, Deus preparou um ambiente seguro em Goiânia para te lembrar que o seu passado não anula o seu propósito.
          </p>
        </div>

        {/* Imagem Oficial do Evento em Destaque (Substituindo o vídeo) */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#46553D]/20 bg-[#2A3624]">
            
            <div className="relative overflow-hidden">
              <EventPhoto priority />
              
              {/* Scrim gradiente inferior suave para contraste e elegância */}
              <div className="relative bg-[#1E2719] md:bg-transparent md:absolute md:inset-0 md:bg-gradient-to-t md:from-[#1E2719]/90 md:via-transparent md:to-transparent flex flex-col justify-end p-5 sm:p-8 text-white">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div>
                    <span className="px-2.5 py-1 bg-[#46553D] text-[10px] sm:text-[11px] uppercase font-bold tracking-widest rounded text-[#FAF8F5] mb-2 inline-block shadow-sm">
                      MINISTRANTE CONVIDADA
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-wide">
                      Missionária Raquel Lopes
                    </h3>
                    <p className="text-xs sm:text-sm text-[#E8E0D2] font-medium mt-1">
                      Ministração da Palavra nos dias 17 e 18 de Outubro • Igreja Batista Vida
                    </p>
                  </div>

                  <div className="flex items-center gap-2 px-3.5 py-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-xs font-semibold text-white shrink-0 self-start sm:self-auto">
                    <Calendar className="w-4 h-4 text-[#BFA054]" />
                    <span>Sábado 19h30 & Domingo 19h</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Benefícios Claros de Página de Vendas (Bullets de Decisão) */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-[#2A3624] font-medium">
            <div className="flex items-center gap-2 p-3 bg-[#F3EEE6] rounded-lg border border-[#46553D]/10">
              <CheckCircle2 className="w-4 h-4 text-[#46553D] shrink-0" />
              <span>2 dias de alinhamento e cura</span>
            </div>
            <div className="flex items-center gap-2 p-3 bg-[#F3EEE6] rounded-lg border border-[#46553D]/10">
              <CheckCircle2 className="w-4 h-4 text-[#46553D] shrink-0" />
              <span>Missionária Raquel Lopes</span>
            </div>
            <div className="flex items-center gap-2 p-3 bg-[#F3EEE6] rounded-lg border border-[#46553D]/10">
              <CheckCircle2 className="w-4 h-4 text-[#46553D] shrink-0" />
              <span>Ambiente 100% acolhedor</span>
            </div>
          </div>
        </div>

        {/* CTA Principal de Página de Vendas — Enorme, Intencional e Imediato */}
        <div className="text-center max-w-xl mx-auto">
          <a
            href={getWhatsAppLink('Olá! Quero garantir minha participação no Congresso de Mulheres IMPROVÁVEIS.')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCtaClick}
            className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 sm:px-12 py-5 bg-[#46553D] hover:bg-[#36422f] text-white rounded-xl text-base sm:text-lg font-bold tracking-wider uppercase transition-all duration-200 shadow-xl hover:shadow-2xl active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#46553D] focus-visible:ring-offset-2"
          >
            <MessageCircle className="w-6 h-6 fill-current text-[#FAF8F5] transition-transform group-hover:scale-110" />
            <span>QUERO PARTICIPAR DO CONGRESSO</span>
          </a>

          {/* Microcopy de Confiança & Detalhes */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-y-2 gap-x-4 text-xs text-[#6E685F]">
            <span className="flex items-center gap-1.5 font-medium text-[#2A3624]">
              <ShieldCheck className="w-4 h-4 text-[#46553D]" />
              Atendimento direto pelo WhatsApp com a organização
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#785A42]" />
              17 e 18 de Outubro
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#785A42]" />
              Goiânia/GO
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
