import React from 'react';
import { EVENT_DETAILS } from '../config/constants';
import { BotanicalDivider } from './BotanicalDecor';

export function Footer() {
  return (
    <footer className="py-12 bg-[#FAF8F5] border-t border-[#46553D]/10 text-center text-xs text-[#6E685F]">
      <div className="max-w-4xl mx-auto px-4">
        
        <BotanicalDivider className="mb-6 opacity-60" />

        <div className="font-serif text-lg text-[#2A3624] font-medium tracking-wide mb-2">
          {EVENT_DETAILS.title}
        </div>
        
        <p className="text-xs uppercase tracking-widest text-[#785A42] font-semibold mb-4">
          {EVENT_DETAILS.subtitle} • {EVENT_DETAILS.church}
        </p>

        <p className="max-w-md mx-auto leading-relaxed mb-6 text-[#7E776F]">
          {EVENT_DETAILS.location.street}, {EVENT_DETAILS.location.lot} • {EVENT_DETAILS.location.neighborhood} • {EVENT_DETAILS.location.cityRegion}
        </p>

        <div className="text-[11px] text-[#A39B90] tracking-wider">
          © {new Date().getFullYear()} {EVENT_DETAILS.church}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
