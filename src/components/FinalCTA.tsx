import React from 'react';
import { MessageCircle, Heart, ShieldCheck, Calendar, MapPin } from 'lucide-react';
import { getWhatsAppLink, trackWhatsAppClick } from '../config/constants';
import { EventPhoto } from './EventPhoto';
import { OliveBranch } from './BotanicalDecor';

export function FinalCTA() {
  const handleCtaClick = () => {
    trackWhatsAppClick('final_sales_cta_section');
  };

  return (
    <section className="relative py-24 sm:py-32 bg-[#F3EEE6] border-t border-[#46553D]/10 overflow-hidden">
      {/* Elementos botânicos decorativos */}
      <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 opacity-20 pointer-events-none">
        <OliveBranch className="w-96 h-96 text-[#46553D]" />
      </div>
      <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 opacity-15 pointer-events-none">
        <OliveBranch className="w-96 h-96 text-[#46553D]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 relative z-10 text-center">
        
        {/* Foto responsiva de encerramento */}
        <div className="mb-10 mx-auto rounded-2xl overflow-hidden shadow-xl border-2 border-[#46553D]/20 relative">
          <EventPhoto />
          <div className="relative bg-[#2A3624] md:bg-transparent md:absolute md:inset-0 md:bg-gradient-to-t md:from-[#2A3624]/90 md:via-transparent md:to-transparent flex items-end justify-center p-4">
            <span className="text-white text-xs tracking-widest uppercase font-semibold flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 text-[#BFA054] fill-current" />
              Goiânia e Região • Igreja Batista Vida
            </span>
          </div>
        </div>

        {/* Pequeno texto de data */}
        <div className="mb-3">
          <span className="text-xs sm:text-sm tracking-[0.25em] uppercase font-bold text-[#785A42]">
            17 + 18 DE OUTUBRO
          </span>
        </div>

        {/* Título de Fechamento Emocional e Persuasivo */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#2A3624] font-medium leading-[1.12] mb-6 text-balance">
          Você não chegou até aqui <br className="hidden sm:inline" />
          <span className="italic font-normal text-[#785A42]">por acaso.</span>
        </h2>

        {/* Complemento da Mensagem */}
        <p className="text-base sm:text-lg text-[#565048] max-w-2xl mx-auto leading-relaxed mb-10 text-balance">
          Talvez você tenha passado anos se sentindo desqualificada ou achando que Deus não olharia para você. Venha viver esses dois dias e lembrar que a sua história não cancela o seu chamado.
        </p>

        {/* Botão Grande de Ação Final */}
        <div className="mb-8">
          <a
            href={getWhatsAppLink('Olá! Decidi participar e quero garantir meu lugar no Congresso de Mulheres IMPROVÁVEIS.')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCtaClick}
            className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 sm:px-12 py-5 bg-[#46553D] hover:bg-[#36422f] text-white rounded-xl transition-all duration-200 shadow-xl hover:shadow-2xl active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#46553D] focus-visible:ring-offset-2"
          >
            <MessageCircle className="w-6 h-6 fill-current text-[#FAF8F5] transition-transform group-hover:scale-110" />
            <span className="font-bold tracking-wider text-base sm:text-lg uppercase whitespace-nowrap">
              QUERO ESTAR NO IMPROVÁVEIS
            </span>
          </a>
        </div>

        {/* Informações Subsequentes e Garantia de Acolhimento */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-[#6E685F] font-semibold">
          <span className="flex items-center gap-1.5 text-[#2A3624]">
            <MapPin className="w-4 h-4 text-[#785A42]" />
            Igreja Batista Vida • Panorama Parque
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-[#785A42]" />
            Sábado 19h30 • Domingo 19h
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5 text-[#46553D]">
            <ShieldCheck className="w-4 h-4 text-[#46553D]" />
            Atendimento direto no WhatsApp
          </span>
        </div>

      </div>
    </section>
  );
}
