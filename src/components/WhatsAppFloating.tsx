import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink, trackWhatsAppClick } from '../config/constants';

export function WhatsAppFloating() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Exibe após 150px de rolagem para não cobrir o Hero inicial imediatamente
      setVisible(window.scrollY > 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    trackWhatsAppClick('floating_button');
  };

  if (!visible) return null;

  return (
    <aside
      aria-label="Atendimento rápido por WhatsApp"
      className="fixed bottom-5 right-4 sm:right-6 z-40 animate-in fade-in slide-in-from-bottom-3 duration-300"
    >
      <a
        href={getWhatsAppLink('Olá! Vi a página do Congresso de Mulheres IMPROVÁVEIS e gostaria de saber como participar.')}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        aria-label="Falar pelo WhatsApp com a organização"
        className="group flex items-center gap-2.5 p-3.5 sm:px-5 sm:py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-[0_6px_20px_rgba(37,211,102,0.35)] hover:shadow-[0_8px_25px_rgba(37,211,102,0.45)] transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline font-semibold text-xs tracking-wider uppercase whitespace-nowrap">
          Falar pelo WhatsApp
        </span>
      </a>
    </aside>
  );
}
