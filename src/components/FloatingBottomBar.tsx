import React, { useState, useEffect } from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';
import { getWhatsAppLink, trackWhatsAppClick } from '../config/constants';

export function FloatingBottomBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Aparece após rolar 200px para não sobrepor o Hero inicial
      setVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    trackWhatsAppClick('floating_bottom_bar');
  };

  if (!visible) return null;

  return (
    <aside
      aria-label="Barra de ação rápida"
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-t border-[#46553D]/15 shadow-[0_-4px_20px_rgba(42,54,36,0.1)] py-2.5 px-4 transition-all duration-300 sm:hidden"
    >
      <div className="flex items-center justify-between gap-3">
        
        {/* Lado Esquerdo: Detalhe do Evento */}
        <div className="flex flex-col">
          <span className="font-serif font-bold text-xs text-[#2A3624] tracking-wide leading-tight">
            IMPROVÁVEIS 2026
          </span>
          <span className="text-[10px] text-[#785A42] font-semibold">
            17 & 18 OUT • GOIÂNIA
          </span>
        </div>

        {/* Lado Direito: Botão de Conversão Imediata */}
        <a
          href={getWhatsAppLink('Olá! Gostaria de saber como participar do Congresso de Mulheres IMPROVÁVEIS.')}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#46553D] hover:bg-[#36422f] active:scale-95 text-white rounded-lg text-xs font-bold uppercase tracking-wider shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#46553D]"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-current" />
          <span>QUERO PARTICIPAR</span>
        </a>

      </div>
    </aside>
  );
}
