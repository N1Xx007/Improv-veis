import React from 'react';
import { XCircle, CheckCircle2, MessageCircle } from 'lucide-react';
import { getWhatsAppLink, trackWhatsAppClick } from '../config/constants';
import { BotanicalDivider } from './BotanicalDecor';

export function PainAndIdentification() {
  const handleCta = () => {
    trackWhatsAppClick();
  };

  return (
    <section id="identificacao" className="py-20 sm:py-28 bg-[#F3EEE6] border-b border-[#46553D]/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Kicker da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#785A42]">
            SERÁ QUE ESTE ENCONTRO É PARA VOCÊ?
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2A3624] font-medium leading-tight mt-3 mb-4 text-balance">
            Quem disse que a sua história <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#785A42]">te desqualifica?</span>
          </h2>
          <p className="text-sm sm:text-base text-[#565048] max-w-2xl mx-auto">
            Muitas mulheres passam a vida inteira acreditando em mentiras sobre seu valor e sua capacidade. Este congresso existe para confrontar essa dor com a verdade da Palavra.
          </p>
        </div>

        {/* Quadro Comparativo Típico de Páginas de Vendas de Alta Conversão */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          
          {/* Coluna 1: A Dor e a Mentira */}
          <div className="bg-[#FAF8F5] rounded-2xl p-7 sm:p-9 border border-[#785A42]/20 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#785A42]/15">
                <span className="w-8 h-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold text-sm">
                  ✕
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#2A3624] font-bold">
                  Talvez hoje você se sinta assim:
                </h3>
              </div>

              <ul className="space-y-4 text-sm sm:text-base text-[#4A453E]">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>
                    Olhando para os seus erros passados e acreditando que Deus não pode mais usar a sua vida.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>
                    Carregando feridas e palavras duras que alguém disse no passado afirmando que você não era capaz.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>
                    Sentindo-se invisível ou pequena demais quando comparada com outras pessoas ao redor.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>
                    Cansada da rotina e sem forças para reacender a chama do chamado que já ardeu no seu peito.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-[#46553D]/10 text-xs text-[#785A42] font-semibold italic">
              "A culpa e o medo paralisam mulheres com grande chamado."
            </div>
          </div>

          {/* Coluna 2: A Verdade e a Transformação no Improváveis */}
          <div className="bg-[#FAF8F5] rounded-2xl p-7 sm:p-9 border-2 border-[#46553D] shadow-md flex flex-col justify-between relative">
            <div className="absolute -top-3.5 right-6 px-3 py-1 bg-[#46553D] text-white rounded-full text-[11px] font-bold tracking-wider uppercase">
              O PROPÓSITO DO CONGRESSO
            </div>

            <div>
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#46553D]/20">
                <span className="w-8 h-8 rounded-full bg-[#46553D] text-white flex items-center justify-center font-bold text-sm">
                  ✓
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#2A3624] font-bold">
                  A verdade que você vai viver nesses 2 dias:
                </h3>
              </div>

              <ul className="space-y-4 text-sm sm:text-base text-[#2A3624]">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#46553D] shrink-0 mt-0.5" />
                  <span>
                    <strong>Sua história não anula o seu chamado:</strong> Deus não está limitado ao que ficou para trás.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#46553D] shrink-0 mt-0.5" />
                  <span>
                    <strong>Deus escolhe, capacita e usa:</strong> o Senhor se alegra em manifestar a Sua glória justamente nos improváveis.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#46553D] shrink-0 mt-0.5" />
                  <span>
                    <strong>Ambiente de acolhimento genuíno:</strong> sem julgamentos, sem exigências de perfeição humana, apenas graça.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#46553D] shrink-0 mt-0.5" />
                  <span>
                    <strong>Uma palavra viva ao seu coração:</strong> ministrada com clareza e autoridade pela Missionária Raquel Lopes.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-[#46553D]/10 text-xs text-[#46553D] font-bold uppercase tracking-wider">
              "Deus ainda chama. Deus ainda capacita. Deus ainda usa você."
            </div>
          </div>

        </div>

        {/* Box de Impacto & Resumo */}
        <div className="p-6 sm:p-8 bg-[#FAF8F5] rounded-xl border border-[#46553D]/15 text-center shadow-sm max-w-3xl mx-auto mb-10">
          <p className="font-serif text-xl sm:text-2xl md:text-3xl text-[#2A3624] font-bold leading-snug">
            "Você pode se sentir improvável. <br className="hidden sm:inline" />
            <span className="text-[#785A42] font-semibold italic">
              Mas isso não significa que esteja sem propósito.
            </span>"
          </p>
        </div>

        {/* CTA da Seção */}
        <div className="text-center">
          <a
            href={getWhatsAppLink('Olá! Me identifiquei com a mensagem do Congresso IMPROVÁVEIS e gostaria de participar.')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCta}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#46553D] hover:bg-[#36422f] text-white rounded-lg text-sm sm:text-base font-bold tracking-wider uppercase transition-all shadow-md hover:shadow-lg active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#46553D]"
          >
            <MessageCircle className="w-5 h-5" />
            <span>QUERO ESTAR NO IMPROVÁVEIS</span>
          </a>
        </div>

      </div>
    </section>
  );
}
