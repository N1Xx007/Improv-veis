import React, { useState } from 'react';
import { Calendar, MapPin, Clock, MessageCircle, ShieldCheck, CheckCircle2, Copy, Check, ExternalLink } from 'lucide-react';
import { EVENT_DETAILS, getWhatsAppLink, trackWhatsAppClick } from '../config/constants';

export function EventPassBox() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EVENT_DETAILS.location.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleCta = () => {
    trackWhatsAppClick('event_pass_box_checkout');
  };

  return (
    <section id="evento" className="py-20 sm:py-28 bg-[#FAF8F5] border-t border-[#46553D]/10 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Cabeçalho da Oferta / Passe do Evento */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#785A42]">
            GARANTA A SUA PRESENÇA
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2A3624] font-medium leading-tight mt-2 mb-3">
            Como participar do <span className="italic text-[#785A42]">Congresso IMPROVÁVEIS</span>
          </h2>
          <p className="text-sm sm:text-base text-[#565048]">
            O atendimento e as orientações de inscrição são realizados diretamente com a equipe organizadora pelo WhatsApp.
          </p>
        </div>

        {/* Card do "Passe do Evento" Estilo Página de Vendas */}
        <div className="relative rounded-3xl bg-[#FAF8F5] border-2 border-[#46553D] shadow-2xl overflow-hidden">
          
          {/* Faixa Superior de Destaque */}
          <div className="bg-[#46553D] text-white px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#E8E0D2] block">
                CONGRESSO DE MULHERES 2026
              </span>
              <h3 className="font-serif text-2xl font-bold tracking-wide">
                IMPROVÁVEIS
              </h3>
            </div>
            
            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#FAF8F5]/10 rounded-full border border-white/20 text-xs font-semibold">
              <Calendar className="w-3.5 h-3.5 text-[#BFA054]" />
              <span>17 E 18 DE OUTUBRO</span>
            </div>
          </div>

          {/* Corpo do Cartão */}
          <div className="p-6 sm:p-10 space-y-8">
            
            {/* O Que Está Incluído no Seu Encontro */}
            <div>
              <h4 className="text-xs uppercase font-bold tracking-widest text-[#785A42] mb-4">
                O QUE ESTÁ CONFIRMADO NESTES 2 DIAS:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-sm text-[#2A3624]">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#46553D] shrink-0 mt-0.5" />
                  <span>Acesso aos 2 dias de congresso (Sábado e Domingo)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#46553D] shrink-0 mt-0.5" />
                  <span>Ministrações com a Missionária Raquel Lopes</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#46553D] shrink-0 mt-0.5" />
                  <span>Ambiente acolhedor e seguro na Igreja Batista Vida</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#46553D] shrink-0 mt-0.5" />
                  <span>Atendimento individual e acolhedor via WhatsApp</span>
                </div>
              </div>
            </div>

            {/* Linha Divisória de Cartão / Ticket */}
            <div className="border-t border-dashed border-[#46553D]/25" />

            {/* Cronograma Resumido e Local */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#F3EEE6] p-6 rounded-2xl border border-[#46553D]/10">
              
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#785A42] block mb-2">
                  HORÁRIOS DO EVENTO
                </span>
                <div className="space-y-2 text-sm text-[#2A3624]">
                  <p className="flex items-center gap-2 font-medium">
                    <Clock className="w-4 h-4 text-[#46553D]" />
                    <span>Sábado (17/10): <strong>19h30</strong></span>
                  </p>
                  <p className="flex items-center gap-2 font-medium">
                    <Clock className="w-4 h-4 text-[#46553D]" />
                    <span>Domingo (18/10): <strong>19h</strong></span>
                  </p>
                </div>
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#785A42] block mb-2">
                  LOCALIZAÇÃO
                </span>
                <p className="font-serif font-bold text-base text-[#2A3624]">
                  {EVENT_DETAILS.location.venue}
                </p>
                <p className="text-xs text-[#565048] mt-0.5">
                  {EVENT_DETAILS.location.street}, {EVENT_DETAILS.location.lot} • {EVENT_DETAILS.location.neighborhood}
                </p>
                <div className="flex items-center gap-4 mt-3">
                  <a
                    href={EVENT_DETAILS.location.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#46553D] hover:underline"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Ver no Mapa</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#785A42] hover:underline"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copiar Endereço</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

            </div>

            {/* Chamada para Ação Principal do Passe */}
            <div className="text-center pt-2">
              <a
                href={getWhatsAppLink('Olá! Gostaria de saber como participar do Congresso de Mulheres IMPROVÁVEIS.')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCta}
                className="group inline-flex items-center justify-center gap-3 w-full py-5 px-8 bg-[#46553D] hover:bg-[#36422f] text-white rounded-xl text-base sm:text-lg font-bold tracking-wider uppercase transition-all shadow-xl hover:shadow-2xl active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#46553D]"
              >
                <MessageCircle className="w-6 h-6 fill-current text-white transition-transform group-hover:scale-110" />
                <span>QUERO GARANTIR MINHA PARTICIPAÇÃO NO WHATSAPP</span>
              </a>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-[#6E685F]">
                <ShieldCheck className="w-4 h-4 text-[#46553D]" />
                <span>Toque para iniciar a conversa segura com a equipe da igreja</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
