import React, { useState } from 'react';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { getWhatsAppLink, trackWhatsAppClick } from '../config/constants';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_LIST: FAQItem[] = [
  {
    question: "Para quem é o Congresso IMPROVÁVEIS?",
    answer: "O congresso é um encontro exclusivo voltado para mulheres de todas as idades. É especialmente para quem já se sentiu desqualificada pelos próprios erros ou limitações e precisa reencontrar o propósito de Deus.",
  },
  {
    question: "Preciso ser membro da Igreja Batista Vida para ir?",
    answer: "Não! O Congresso é aberto para todas as mulheres de Goiânia e região. Você e suas amigas serão recebidas com muito acolhimento, respeito e amor cristão desde o primeiro instante.",
  },
  {
    question: "Quando acontece e quais são os horários?",
    answer: "O evento acontece nos dias 17 e 18 de outubro. No Sábado (17/10) a abertura começa às 19h30. No Domingo (18/10) o encerramento começa às 19h.",
  },
  {
    question: "Onde será realizado o congresso?",
    answer: "Na Igreja Batista Vida, situada na Av. Rio Branco, Qd. 2 Lt. 9, Panorama Parque, Goiânia/GO. Você pode clicar no link de mapa nesta página para traçar a melhor rota.",
  },
  {
    question: "Como faço para confirmar minha participação?",
    answer: "É muito simples: basta clicar em qualquer botão desta página e falar diretamente com a Pastora e a equipe organizadora no WhatsApp. Eles vão te passar todas as orientações.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  const handleCta = () => {
    trackWhatsAppClick('faq_direct_support');
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#FAF8F5] border-t border-[#46553D]/10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.25em] font-bold text-[#785A42] mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>TIRE SUAS DÚVIDAS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2A3624] font-medium tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-sm text-[#565048] mt-2">
            Tudo o que você precisa saber antes de estar conosco nesses dois dias.
          </p>
        </div>

        {/* Acordeão de Objeções */}
        <div className="divide-y divide-[#46553D]/15 border-y border-[#46553D]/15 mb-10">
          {FAQ_LIST.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="transition-colors">
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  aria-expanded={isOpen}
                  className="w-full py-5 sm:py-6 flex items-center justify-between gap-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#46553D] focus-visible:ring-offset-2 rounded-sm"
                >
                  <span className="font-serif text-lg sm:text-xl font-medium text-[#2A3624]">
                    {faq.question}
                  </span>
                  <span
                    className={`p-1.5 rounded-full border border-[#46553D]/20 text-[#46553D] transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 bg-[#F3EEE6]' : 'bg-transparent'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 pb-5' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm sm:text-base text-[#565048] leading-relaxed pr-8">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Suporte Direto ao Fim das Dúvidas */}
        <div className="p-6 bg-[#F3EEE6] rounded-xl border border-[#46553D]/15 text-center">
          <p className="text-sm text-[#2A3624] font-medium mb-3">
            Ainda tem alguma dúvida específica? Fale agora com a Pastora.
          </p>
          <a
            href={getWhatsAppLink('Olá! Tenho uma dúvida sobre o Congresso de Mulheres IMPROVÁVEIS.')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCta}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#46553D] hover:text-[#36422f] uppercase tracking-wider underline underline-offset-4"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Tirar dúvida diretamente pelo WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}

