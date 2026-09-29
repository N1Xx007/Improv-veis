/**
 * =========================================================================
 * CONGRESSO DE MULHERES IMPROVÁVEIS — CONFIGURAÇÃO PRINCIPAL
 * =========================================================================
 * 
 * Para alterar o número de WhatsApp que receberá as mensagens:
 * Substitua o valor da constante WHATSAPP_NUMBER abaixo pelo número
 * oficial no formato com código do país (55) + DDD (ex: 62) + número.
 * Exemplo: "5562999999999"
 */

export const WHATSAPP_NUMBER = "556299203014";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá! Vi o Congresso de Mulheres IMPROVÁVEIS e gostaria de saber como participar.";

/**
 * Gera o link direto para o WhatsApp já com a mensagem codificada.
 */
export function getWhatsAppLink(customMessage?: string): string {
  const message = customMessage || WHATSAPP_DEFAULT_MESSAGE;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Dispara eventos de rastreamento para Meta Pixel (Lead) e Google Analytics.
 * Não quebra a página se o pixel ou tag manager ainda não estiverem instalados.
 */
export function trackWhatsAppClick(buttonLocation: string = "unspecified"): void {
  try {
    // Dispara evento no Meta Pixel caso esteja instalado
    if (typeof window !== "undefined" && typeof (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq === "function") {
      (window as unknown as { fbq: (...args: unknown[]) => void }).fbq("track", "Lead", {
        content_name: "Congresso Improváveis",
        content_category: "Inscrição WhatsApp",
        button_location: buttonLocation,
      });
    }

    // Dispara evento no Google Analytics (gtag) caso esteja instalado
    if (typeof window !== "undefined" && typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === "function") {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", "generate_lead", {
        event_category: "Engagement",
        event_label: buttonLocation,
        value: 1,
      });
    }

    // Dispara evento CustomEvent para scripts externos ou GTM listeners
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("improvisseis_whatsapp_click", {
          detail: { location: buttonLocation, timestamp: Date.now() },
        })
      );
    }
  } catch (err) {
    // Fail silently para não prejudicar a navegação da usuária
    console.debug("Tracking notification:", err);
  }
}

/**
 * Informações oficiais do evento (imutáveis, conforme instrução da liderança)
 */
export const EVENT_DETAILS = {
  title: "IMPROVÁVEIS",
  subtitle: "Congresso de Mulheres",
  church: "Igreja Batista Vida",
  datesText: "17 e 18 de outubro",
  targetAudience: "Exclusivo para mulheres",
  schedule: [
    {
      day: "17",
      month: "OUT",
      weekday: "SÁBADO",
      time: "19h30",
      description: "Abertura oficial e ministração da Palavra",
    },
    {
      day: "18",
      month: "OUT",
      weekday: "DOMINGO",
      time: "19h",
      description: "Encerramento e momento de consagração e propósito",
    },
  ],
  speaker: {
    title: "MISSIONÁRIA",
    name: "Raquel Lopes",
    role: "Ministrante Convidada",
  },
  location: {
    venue: "Igreja Batista Vida",
    street: "Av. Rio Branco",
    lot: "Qd. 2 Lt. 9",
    neighborhood: "Panorama Parque",
    cityRegion: "Goiânia e região",
    fullAddress: "Av. Rio Branco, Qd. 2 Lt. 9, Panorama Parque - Goiânia/GO",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Av.+Rio+Branco,+Qd.+2+Lt.+9,+Panorama+Parque,+Goiania",
  },
  faqs: [
    {
      question: "Para quem é o congresso?",
      answer: "O Congresso IMPROVÁVEIS é um encontro voltado para mulheres.",
    },
    {
      question: "Quando acontece?",
      answer: "Nos dias 17 e 18 de outubro.",
    },
    {
      question: "Quais são os horários?",
      answer: "Sábado às 19h30 e domingo às 19h.",
    },
    {
      question: "Onde será?",
      answer: "Na Igreja Batista Vida, Av. Rio Branco, Qd. 2 Lt. 9, Panorama Parque.",
    },
    {
      question: "Como faço para participar?",
      answer: "Clique em um dos botões desta página e fale diretamente com a organização pelo WhatsApp.",
    },
  ],
};
