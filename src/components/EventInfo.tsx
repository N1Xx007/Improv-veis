import React, { useState } from 'react';
import { Calendar, MapPin, Clock, ExternalLink, Check, Copy, MessageCircle } from 'lucide-react';
import { EVENT_DETAILS, getWhatsAppLink, trackWhatsAppClick } from '../config/constants';

export function EventInfo() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(EVENT_DETAILS.location.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleCtaClick = () => {
    trackWhatsAppClick();
  };

  return (
    <section id="evento" className="relative py-20 sm:py-28 bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Título da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#785A42]">
            PROGRAMAÇÃO & LOCAL
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2A3624] font-medium leading-tight mt-2 text-balance">
            Dois dias para viver essa mensagem juntas.
          </h2>
          <p className="text-sm sm:text-base text-[#6E685F] mt-3">
            Reserve essas duas datas em sua agenda e venha estar conosco neste mover.
          </p>
        </div>

        {/* Grid Editorial das Datas (Design Tipográfico Autêntico, sem cards genéricos de SaaS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-14">
          
          {/* Sábado */}
          <div className="relative bg-[#F3EEE6] rounded-xl p-8 sm:p-10 border border-[#46553D]/15 shadow-sm transition-all hover:border-[#46553D]/30">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#785A42] block mb-2">
                  PRIMEIRO DIA
                </span>
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-6xl sm:text-7xl font-bold text-[#2A3624] tracking-tight">
                    17
                  </span>
                  <div className="flex flex-col">
                    <span className="font-serif text-2xl font-semibold text-[#46553D] leading-none">
                      OUT
                    </span>
                    <span className="text-xs font-semibold tracking-wider text-[#6E685F] uppercase mt-1">
                      OUTUBRO
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <span className="inline-block px-3 py-1 bg-[#FAF8F5] border border-[#46553D]/10 rounded text-xs font-semibold tracking-wider text-[#2A3624] uppercase">
                  SÁBADO
                </span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#46553D]/15 flex items-center justify-between">
              <div className="flex items-center gap-2 text-[#2A3624]">
                <Clock className="w-4 h-4 text-[#785A42]" />
                <span className="text-lg font-serif font-bold">19h30</span>
              </div>
              <span className="text-xs text-[#6E685F]">
                Abertura oficial do congresso
              </span>
            </div>
          </div>

          {/* Domingo */}
          <div className="relative bg-[#F3EEE6] rounded-xl p-8 sm:p-10 border border-[#46553D]/15 shadow-sm transition-all hover:border-[#46553D]/30">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#785A42] block mb-2">
                  SEGUNDO DIA
                </span>
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-6xl sm:text-7xl font-bold text-[#2A3624] tracking-tight">
                    18
                  </span>
                  <div className="flex flex-col">
                    <span className="font-serif text-2xl font-semibold text-[#46553D] leading-none">
                      OUT
                    </span>
                    <span className="text-xs font-semibold tracking-wider text-[#6E685F] uppercase mt-1">
                      OUTUBRO
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <span className="inline-block px-3 py-1 bg-[#FAF8F5] border border-[#46553D]/10 rounded text-xs font-semibold tracking-wider text-[#2A3624] uppercase">
                  DOMINGO
                </span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#46553D]/15 flex items-center justify-between">
              <div className="flex items-center gap-2 text-[#2A3624]">
                <Clock className="w-4 h-4 text-[#785A42]" />
                <span className="text-lg font-serif font-bold">19h</span>
              </div>
              <span className="text-xs text-[#6E685F]">
                Culto de encerramento e unção
              </span>
            </div>
          </div>

        </div>

        {/* Bloco de Localização com Endereço Completo e Mapa */}
        <div className="bg-[#FAF8F5] border border-[#46553D]/15 rounded-2xl p-6 sm:p-10 shadow-sm mb-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            <div className="md:col-span-7">
              <div className="flex items-center gap-2 text-[#785A42] mb-2">
                <MapPin className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-[0.25em]">
                  LOCAL DO EVENTO
                </span>
              </div>
              
              <h3 className="font-serif text-2xl sm:text-3xl text-[#2A3624] font-semibold mb-2">
                {EVENT_DETAILS.location.venue}
              </h3>
              
              <address className="not-italic text-[#4A453E] text-sm sm:text-base leading-relaxed space-y-0.5">
                <p>{EVENT_DETAILS.location.street}, {EVENT_DETAILS.location.lot}</p>
                <p className="font-medium text-[#2A3624]">{EVENT_DETAILS.location.neighborhood}</p>
                <p className="text-xs text-[#6E685F]">Goiânia e região</p>
              </address>
            </div>

            <div className="md:col-span-5 flex flex-col sm:flex-row md:flex-col gap-3 justify-end">
              <a
                href={EVENT_DETAILS.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#FAF8F5] hover:bg-[#F3EEE6] text-[#2A3624] border border-[#46553D]/20 rounded-lg text-xs font-semibold tracking-wider uppercase transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-[#785A42]" />
                <span>Como Chegar (Google Maps)</span>
              </a>

              <button
                type="button"
                onClick={handleCopyAddress}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-[#6E685F] hover:text-[#2A3624] text-xs font-medium transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Endereço copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar endereço completo</span>
                  </>
                )}
              </button>
            </div>

          </div>
        </div>

        {/* Botão de Chamada para Ação */}
        <div className="text-center">
          <a
            href={getWhatsAppLink('Olá! Gostaria de saber como participar do Congresso de Mulheres IMPROVÁVEIS.')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCtaClick}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#46553D] hover:bg-[#384530] text-white rounded-lg transition-all shadow-md hover:shadow-lg active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#46553D]"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="font-semibold tracking-wider text-sm uppercase">
              QUERO PARTICIPAR
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}
