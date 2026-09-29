import React from 'react';
import { Calendar, MapPin, MessageCircle } from 'lucide-react';
import { getWhatsAppLink, trackWhatsAppClick } from '../config/constants';
import { OliveBranch } from './BotanicalDecor';

export function Speaker() {
  const handleCta = () => {
    trackWhatsAppClick();
  };

  return (
    <section id="ministrante" className="relative py-20 sm:py-28 bg-[#F3EEE6] border-y border-[#46553D]/10 overflow-hidden">
      {/* Elemento botânico decorativo */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 opacity-15 pointer-events-none">
        <OliveBranch className="w-96 h-96 text-[#46553D]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Composição Editorial de Alta Conversão */}
        <div>
          {/* Apresentação da ministrante sem fotografia intermediária */}
          <div className="flex flex-col justify-center text-center">
            
            <div className="mb-2">
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#785A42]">
                QUEM VAI MINISTRAR ESSA PALAVRA AO SEU CORAÇÃO
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2A3624] font-medium leading-[1.1] mb-6">
              <span className="text-lg sm:text-xl text-[#785A42] block font-sans font-bold tracking-widest uppercase mb-1">
                MISSIONÁRIA
              </span>
              Raquel Lopes
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#4A453E] leading-relaxed mb-6">
              <p>
                A Missionária Raquel Lopes é a convidada especial desta edição, trazendo uma palavra profunda, sensível e ungida para confrontar a autossabotagem e despertar a identidade de filhas e servas de Deus.
              </p>
              <div className="p-4 bg-[#FAF8F5] rounded-xl border-l-4 border-[#46553D] text-left">
                <p className="font-serif italic text-base sm:text-lg text-[#2A3624]">
                  "Não importa o que disseram a seu respeito. O que importa é a sentença que o Senhor já decretou sobre a sua história."
                </p>
              </div>
            </div>

            {/* Metadados Limpos */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-semibold text-[#2A3624] mb-7">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#785A42]" />
                <span>17 e 18 de Outubro</span>
              </div>
              <span className="text-[#46553D]/30 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#785A42]" />
                <span>Igreja Batista Vida • Goiânia</span>
              </div>
            </div>

            {/* Botão de Ação */}
            <div>
              <a
                href={getWhatsAppLink('Olá! Gostaria de participar das ministrações da Missionária Raquel Lopes no Congresso IMPROVÁVEIS.')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCta}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#46553D] hover:bg-[#36422f] text-white rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>QUERO OUVIR ESSA MINISTRAÇÃO</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
