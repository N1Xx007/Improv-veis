import React from 'react';
import { Calendar, Sparkles } from 'lucide-react';
import { getWhatsAppLink, trackWhatsAppClick } from '../config/constants';

export function TopAnnouncementBar() {
  const handleClick = () => {
    trackWhatsAppClick();
  };

  return (
    <aside aria-label="Aviso do evento" className="bg-[#2A3624] text-[#FAF8F5] py-2.5 px-4 text-xs font-medium border-b border-[#FAF8F5]/10 relative z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-3 text-center sm:text-left">
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#BFA054] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#BFA054]"></span>
          </span>
          <span className="font-semibold tracking-wider uppercase text-[#E8E0D2] text-[11px] sm:text-xs">
            17 E 18 DE OUTUBRO EM GOIÂNIA
          </span>
          <span className="hidden md:inline text-white/40">•</span>
          <span className="hidden md:inline text-white/90">
            Congresso de Mulheres na Igreja Batista Vida com a Missionária Raquel Lopes
          </span>
        </div>

        <a
          href={getWhatsAppLink('Olá! Vi o aviso do Congresso de Mulheres IMPROVÁVEIS e gostaria de participar.')}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#BFA054] hover:text-white transition-colors underline underline-offset-4 shrink-0 uppercase tracking-wider"
        >
          <Sparkles className="w-3 h-3 text-[#BFA054]" />
          <span>Falar no WhatsApp</span>
        </a>
      </div>
    </aside>
  );
}
