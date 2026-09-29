import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink, trackWhatsAppClick } from '../config/constants';
import { OliveBranch } from './BotanicalDecor';

export function ImpactQuote() {
  const handleCtaClick = () => {
    trackWhatsAppClick('impact_quote_section');
  };

  return (
    <section className="relative py-24 sm:py-32 bg-[#2A3624] text-[#FAF8F5] overflow-hidden">
      {/* Detalhes botânicos dourados e discretos de iluminação suave */}
      <div className="absolute -top-10 -right-10 opacity-15 pointer-events-none">
        <OliveBranch className="w-80 h-80 text-[#FAF8F5]" />
      </div>
      <div className="absolute -bottom-10 -left-10 opacity-15 pointer-events-none rotate-180">
        <OliveBranch className="w-80 h-80 text-[#FAF8F5]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 relative z-10 text-center">
        
        {/* Ponto sutil de iluminação */}
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="w-8 h-[1px] bg-[#BFA054]/60" aria-hidden="true" />
          <span className="text-[11px] tracking-[0.3em] uppercase font-semibold text-[#BFA054]">
            UMA MENSAGEM AO SEU CORAÇÃO
          </span>
          <span className="w-8 h-[1px] bg-[#BFA054]/60" aria-hidden="true" />
        </div>

        {/* Citação Principal em Grande Escala */}
        <blockquote className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.18] text-[#FAF8F5] mb-6 text-balance">
          "Você pode até se sentir improvável. <br className="hidden sm:inline" />
          <span className="italic text-[#E8E0D2]">
            Mas isso não significa que Deus não tenha escolhido você.
          </span>"
        </blockquote>

        {/* Texto Menor de Conforto e Esperança */}
        <p className="text-base sm:text-xl text-[#D8CFBF] font-light max-w-xl mx-auto mb-10 text-balance">
          Existe propósito de Deus para a sua vida.
        </p>

        {/* Botão em Alto Contraste */}
        <div>
          <a
            href={getWhatsAppLink('Olá! Gostaria de viver esses dias no Congresso de Mulheres IMPROVÁVEIS.')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCtaClick}
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 sm:py-4.5 bg-[#FAF8F5] hover:bg-[#F3EEE6] text-[#2A3624] font-semibold text-sm sm:text-base tracking-wider uppercase rounded-lg transition-all shadow-xl hover:shadow-2xl active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <MessageCircle className="w-5 h-5 text-[#46553D] transition-transform group-hover:scale-110" />
            <span className="whitespace-nowrap">QUERO VIVER ESSES DIAS</span>
          </a>
        </div>

      </div>
    </section>
  );
}
