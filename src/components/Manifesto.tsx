import React from 'react';
import { BotanicalDivider, OliveBranch } from './BotanicalDecor';

export function Manifesto() {
  return (
    <section id="identificacao" className="relative py-20 sm:py-28 bg-[#F3EEE6] border-y border-[#46553D]/10 overflow-hidden">
      {/* Detalhes botânicos laterais de composição */}
      <div className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/4 opacity-25 pointer-events-none">
        <OliveBranch className="w-80 h-80 text-[#46553D]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Kicker editorial */}
        <div className="text-center mb-4">
          <span className="text-xs sm:text-sm tracking-[0.25em] uppercase font-semibold text-[#785A42]">
            TALVEZ ESSA MENSAGEM SEJA PARA VOCÊ.
          </span>
        </div>

        {/* Título Principal */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#2A3624] text-center font-normal leading-[1.15] text-balance mb-8">
          Quem disse que a sua história <br className="hidden sm:inline" />
          <span className="italic font-medium text-[#785A42]">te desqualifica?</span>
        </h2>

        {/* Divisor Botânico Sutil */}
        <BotanicalDivider className="my-8" />

        {/* Corpo Editorial de Leitura Acolhedora */}
        <div className="max-w-2xl mx-auto text-base sm:text-lg text-[#3D3832] leading-relaxed space-y-6 text-center sm:text-left">
          <p>
            Talvez você esteja olhando para os seus erros, para suas feridas, para aquilo que viveu ou para aquilo que ainda acredita que falta em você.
          </p>
          <p className="font-medium text-[#2A3624]">
            Mas a sua história não anula o seu chamado.
          </p>
          <p>
            Deus não está limitado ao seu passado.
          </p>
          <p className="text-[#3A4833]">
            Ele escolhe, capacita e usa mulheres que, aos olhos humanos, pareciam improváveis.
          </p>
        </div>

        {/* Destaque Visual em Composição Editorial (sem cards de SaaS) */}
        <div className="mt-14 max-w-3xl mx-auto relative">
          <div className="relative py-8 px-6 sm:px-12 bg-[#FAF8F5] rounded-xl border border-[#46553D]/15 shadow-[0_8px_30px_rgba(70,85,61,0.06)] text-center">
            
            <p className="font-serif text-xl sm:text-2xl md:text-3xl text-[#2A3624] font-medium leading-snug tracking-wide uppercase text-balance">
              "Você pode se sentir improvável. <br className="hidden sm:inline" />
              <span className="text-[#785A42] font-semibold">
                Mas isso não significa que esteja sem propósito.
              </span>"
            </p>
            
            <div className="mt-4 flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#6E685F]">
              <span>Congresso de Mulheres</span>
              <span>•</span>
              <span>Igreja Batista Vida</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
