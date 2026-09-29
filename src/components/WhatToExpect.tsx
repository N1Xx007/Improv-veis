import React from 'react';
import { Sparkles, HeartHandshake, BookOpen, Clock, Calendar } from 'lucide-react';

export function WhatToExpect() {
  return (
    <section className="py-20 sm:py-28 bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#785A42]">
            A EXPERIÊNCIA DO EVENTO
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2A3624] font-medium leading-tight mt-3 mb-4">
            O que espera por você nesses <span className="italic text-[#785A42]">dois dias de congresso?</span>
          </h2>
          <p className="text-sm sm:text-base text-[#565048]">
            Não será apenas mais um evento na sua agenda. Será um marco de renovo e restauração para a sua história.
          </p>
        </div>

        {/* 3 Pilares da Experiência em Layout Editorial e Assertivo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          
          <div className="bg-[#F3EEE6] rounded-2xl p-7 border border-[#46553D]/15 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] text-[#46553D] flex items-center justify-center mb-6 shadow-sm">
                <BookOpen className="w-6 h-6 text-[#785A42]" />
              </div>
              <span className="text-[11px] font-bold tracking-widest text-[#785A42] uppercase block mb-1">
                PILAR 01
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#2A3624] font-bold mb-3">
                Ministração da Palavra
              </h3>
              <p className="text-sm text-[#565048] leading-relaxed">
                Mensagens geradas em oração pela Missionária Raquel Lopes, trazendo confronto amoroso e cura para as áreas mais silenciosas da sua alma.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#46553D]/10 text-xs font-semibold text-[#46553D]">
              Palavra viva e relevante
            </div>
          </div>

          <div className="bg-[#F3EEE6] rounded-2xl p-7 border border-[#46553D]/15 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] text-[#46553D] flex items-center justify-center mb-6 shadow-sm">
                <HeartHandshake className="w-6 h-6 text-[#785A42]" />
              </div>
              <span className="text-[11px] font-bold tracking-widest text-[#785A42] uppercase block mb-1">
                PILAR 02
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#2A3624] font-bold mb-3">
                Comunhão & Pertencimento
              </h3>
              <p className="text-sm text-[#565048] leading-relaxed">
                Estar ao lado de outras mulheres que compartilham da mesma fé, dos mesmos anseios e que entendem que ninguém caminha com força sozinha.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#46553D]/10 text-xs font-semibold text-[#46553D]">
              Ambiente sem julgamentos
            </div>
          </div>

          <div className="bg-[#F3EEE6] rounded-2xl p-7 border border-[#46553D]/15 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] text-[#46553D] flex items-center justify-center mb-6 shadow-sm">
                <Sparkles className="w-6 h-6 text-[#785A42]" />
              </div>
              <span className="text-[11px] font-bold tracking-widest text-[#785A42] uppercase block mb-1">
                PILAR 03
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#2A3624] font-bold mb-3">
                Restauração do Chamado
              </h3>
              <p className="text-sm text-[#565048] leading-relaxed">
                Voltar para a sua casa, sua família e sua rotina com a certeza de que Deus te escolheu e de que o seu passado não anula o plano Dele para você.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#46553D]/10 text-xs font-semibold text-[#46553D]">
              Propósito e clareza
            </div>
          </div>

        </div>

        {/* Programação em destaque, sem fotografia intermediária */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#46553D]/15">
          <div>
            <div className="bg-[#2A3624] text-white p-5 sm:p-10 flex flex-col justify-center">
              <p className="font-serif italic text-lg sm:text-xl text-[#E8E0D2] mb-6">
                "Você não foi chamada para caminhar só."
              </p>
              <span className="text-xs uppercase tracking-widest text-[#BFA054] font-bold mb-2">
                PROGRAMAÇÃO OFICIAL
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-6 text-balance">
                Dois momentos preparados para o seu coração
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="p-2.5 rounded-lg bg-[#FAF8F5]/10 text-[#E8E0D2]">
                    <Calendar className="w-5 h-5 text-[#BFA054]" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-bold text-base text-white">SÁBADO, 17 DE OUTUBRO</span>
                      <span className="text-xs px-2 py-0.5 rounded bg-[#46553D] text-[#E8E0D2] font-semibold">19H30</span>
                    </div>
                    <p className="text-xs sm:text-sm text-white/80 mt-1">
                      Abertura oficial do congresso e primeira ministração da Palavra.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="p-2.5 rounded-lg bg-[#FAF8F5]/10 text-[#E8E0D2]">
                    <Clock className="w-5 h-5 text-[#BFA054]" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-bold text-base text-white">DOMINGO, 18 DE OUTUBRO</span>
                      <span className="text-xs px-2 py-0.5 rounded bg-[#46553D] text-[#E8E0D2] font-semibold">19H</span>
                    </div>
                    <p className="text-xs sm:text-sm text-white/80 mt-1">
                      Culto de encerramento, unção e renovação do propósito espiritual.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
