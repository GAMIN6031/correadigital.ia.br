// src/utils/footerConstants.js

const currentYear = new Date().getFullYear();

export const footerTexts = {
  companyName: "Clínica de Estética Catarino",
  description: `Realçando sua beleza natural com tratamentos seguros e personalizados.
    Harmonização facial, estética avançada e cuidados corporais com a Dra. Fabiana Catarino.`,
  phone: "5511921881464", // número atualizado
  whatsapp: "https://wa.me/5511921881464",
  instagram: "https://www.instagram.com/drafabianacatarino/",
  copyright: `© ${currentYear} Clínica de Estética Catarino. Todos os direitos reservados.`,
  loveMessage: "Feito com dedicação para cuidar de você",
};

export const quickLinks = [
  { path: "/", label: "Início" },
  { path: "/Servicos", label: "Tratamentos" },
  { path: "/Contato", label: "Contato" },
];

export const services = [
  "Harmonização Facial",
  "Botox e Preenchimento",
  "Limpeza de Pele",
  "Tratamentos Corporais",
];

export const socialLinks = [
  {
    icon: "FaInstagram",
    url: footerTexts.instagram,
    label: "Instagram",
    color: "#e4405f",
  },
  {
    icon: "FaWhatsapp",
    url: footerTexts.whatsapp,
    label: "WhatsApp",
    color: "#25d366",
  },
];
