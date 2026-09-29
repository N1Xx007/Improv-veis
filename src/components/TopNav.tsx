import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink, trackWhatsAppClick } from '../config/constants';

export function TopNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCtaClick = () => {
    trackWhatsAppClick();
  };

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-40 transition-all duration-200 bg-[#FAF8F5]/95 backdrop-blur-md border-b ${
        scrolled ? 'border-[#46553D]/15 shadow-sm py-3' : 'border-[#46553D]/10 py-3.5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="group font-serif text-lg sm:text-xl font-semibold tracking-wider text-[#2A3624] hover:text-[#46553D] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#46553D]"
        >
          <span>IGREJA BATISTA VIDA</span>
        </a>

        {/* Zone 2: Clean text links */}
        <nav
          aria-label="Navegação principal"
          className="hidden md:flex items-center gap-7 text-xs tracking-wider uppercase font-medium text-[#6E685F]"
        >
          <a
            href="#identificacao"
            className="hover:text-[#2A3624] transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#46553D]"
          >
            A Mensagem
          </a>
          <a
            href="#significado"
            className="hover:text-[#2A3624] transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#46553D]"
          >
            O Propósito
          </a>
          <a
            href="#ministrante"
            className="hover:text-[#2A3624] transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#46553D]"
          >
            Ministrante
          </a>
          <a
            href="#evento"
            className="hover:text-[#2A3624] transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#46553D]"
          >
            Data & Local
          </a>
          <a
            href="#faq"
            className="hover:text-[#2A3624] transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#46553D]"
          >
            Dúvidas
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-2">
          <a
            href={getWhatsAppLink('Olá! Gostaria de saber mais sobre o Congresso de Mulheres IMPROVÁVEIS.')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCtaClick}
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 text-xs font-semibold tracking-wider uppercase text-white bg-[#46553D] hover:bg-[#384530] active:scale-[0.98] rounded-md transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#46553D] focus-visible:ring-offset-2"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span className="whitespace-nowrap">Quero Participar</span>
          </a>
        </div>
      </div>
    </header>
  );
}
