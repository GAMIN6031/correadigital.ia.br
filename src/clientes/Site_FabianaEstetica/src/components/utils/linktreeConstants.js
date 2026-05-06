// src/utils/linktreeConstants.js

import {
  FaInstagram,
  FaMapMarkerAlt,
  FaSpa,        // ícone para serviços de estética
  FaComments,
  FaMoneyBill,
  FaGlobe,  // ícone para orçamento
} from "react-icons/fa";


/* =========================
   Constantes Gerais
========================= */

export const CHAVE_PIX = "sua-chave-pix-aqui";

export const WHATSAPP_NUMERO = "5511995118595"; // número da Dra. Fabiana
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMERO}`;

export const SITE_EMPRESA_URL =
  "https://correadigital.ia.br/FabianaEstetica"; // site oficial

export const INSTAGRAM_URL =
  "https://www.instagram.com/drafabianacatarino/";

export const LOCALIZACAO_URL =
  "https://maps.google.com/?q=Clínica+de+Estética+Fabiana+Catarino";

/* =========================
   Lista de Botões
   (COM METADADOS PARA GA4)
========================= */

export const linktreeButtons = (handleCopiarPix) => [
  {
    id: "sobre",
    texto: "Sobre a Clínica",
    url: SITE_EMPRESA_URL,
    icone: FaComments,
    tipo: "externo",
    categoria: "navegacao",
    grupo: "institucional",
    posicao: 1,
    conversao: false,
  },
  {
    id: "servicos",
    texto: "Tratamentos Estéticos",
    rota: "/Servicos",
    icone: FaSpa,
    tipo: "interno",
    categoria: "navegacao",
    grupo: "servicos",
    posicao: 2,
    conversao: false,
  },
  {
    id: "orcamento",
    texto: "Agendar Consulta",
    url: `${WHATSAPP_URL}?text=Olá, gostaria de agendar uma consulta na Clínica de Estética Fabiana Catarino.`,
    icone: FaMoneyBill,
    tipo: "externo",
    categoria: "contato",
    grupo: "orcamento",
    posicao: 6,
    conversao: true,
  },
  {
    id: "pix",
    texto: "Copiar Chave Pix",
    acao: handleCopiarPix,
    icone: FaPix,
    tipo: "acao",
    categoria: "pagamento",
    grupo: "pix",
    posicao: 3,
    conversao: true,
  },
  {
    id: "instagram",
    texto: "Instagram",
    url: INSTAGRAM_URL,
    icone: FaInstagram,
    tipo: "externo",
    categoria: "social",
    grupo: "redes",
    posicao: 4,
    conversao: false,
  },
  {
    id: "localizacao",
    texto: "Localização",
    url: LOCALIZACAO_URL,
    icone: FaMapMarkerAlt,
    tipo: "externo",
    categoria: "local",
    grupo: "contato",
    posicao: 5,
    conversao: true,
  },
];
