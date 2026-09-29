import React from 'react';
import { OliveBranch } from './BotanicalDecor';

export function Meaning() {
  return (
    <section id="significado" className="relative py-20 sm:py-28 bg-[#FAF8F5] overflow-hidden">
      {/* Elemento de Folhagens Sutis */}
      <div className="absolute -left-12 bottom-0 opacity-20 pointer-events-none">
        <OliveBranch className="w-72 h-72 text-[#46553D]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Cabeçalho da Seção com Identidade Conceitual */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#785A42]">
            O SIGNIFICADO
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#2A3624] font-medium tracking-tight mt-2">
            O que significa ser <span className="italic font-normal text-[#46553D]">Improvável?</span>
          </h2>
        </div>

        {/* Narrativa da Seção */}
        <div className="max-w-2xl mx-auto space-y-6 text-[#4A453E] text-base sm:text-lg leading-relaxed text-center sm:text-left">
          <p className="border-l-2 border-[#BFA054] pl-4 sm:pl-6 italic font-serif text-lg sm:text-xl text-[#3A4833]">
            "Talvez você tenha ouvido que não era capaz. Talvez você mesma tenha acreditado nisso."
          </p>

          <p>
            Talvez o seu passado, suas limitações ou as expectativas das pessoas tenham feito você esquecer aquilo que Deus colocou dentro de você.
          </p>

          <div className="py-4 my-2">
            <p className="font-serif text-xl sm:text-2xl text-[#2A3624] font-medium leading-snug">
              O Congresso IMPROVÁVEIS nasce para lembrar mulheres de uma verdade:
            </p>
            <p className="font-serif italic text-2xl sm:text-3xl text-[#785A42] font-semibold mt-1">
              Sua história não cancela o seu chamado.
            </p>
          </div>
        </div>

        {/* O Grande Crescendo Tipográfico (Destaque às 3 Verdades) */}
        <div className="mt-14 max-w-2xl mx-auto">
          <div className="bg-[#F3EEE6] border border-[#46553D]/15 rounded-2xl p-8 sm:p-12 shadow-sm">
            <div className="space-y-6 sm:space-y-8 text-center">
              
              <div className="group">
                <span className="text-[10px] tracking-[0.25em] text-[#785A42] uppercase font-bold block mb-1">
                  01. PROMESSA
                </span>
                <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#2A3624] font-medium tracking-wide">
                  Deus ainda chama.
                </p>
              </div>

              <div className="w-12 h-[1px] bg-[#46553D]/20 mx-auto" aria-hidden="true" />

              <div className="group">
                <span className="text-[10px] tracking-[0.25em] text-[#785A42] uppercase font-bold block mb-1">
                  02. GRAÇA
                </span>
                <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#2A3624] font-medium tracking-wide">
                  Deus ainda capacita.
                </p>
              </div>

              <div className="w-12 h-[1px] bg-[#46553D]/20 mx-auto" aria-hidden="true" />

              <div className="group">
                <span className="text-[10px] tracking-[0.25em] text-[#785A42] uppercase font-bold block mb-1">
                  03. PROPÓSITO
                </span>
                <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#785A42] font-semibold tracking-wide">
                  Deus ainda pode usar você.
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
