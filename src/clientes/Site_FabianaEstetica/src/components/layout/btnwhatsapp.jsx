import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Importando o ícone oficial

/**
 * Componente de Botão Flutuante Premium
 * @param {string} phone
 * @param {string} message - Mensagem personalizada
 */
const BtnWhatsapp = ({ phone, message = "*Olá! Gostaria de saber mais sobre a mentoria.*" }) => {
  
  if (!phone) {
    console.warn("BtnWhatsapp: A prop 'phone' é obrigatória.");
    return null;
  }

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;

  return (
    <a 
      href={whatsappUrl}
      className="whatsapp-link"
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Iniciar conversa no WhatsApp"
      title="Fale conosco agora"
    >
      <div className="whatsapp-btn">
        {/* Usando o React Icons aqui */}
        <FaWhatsapp size={32} className="whatsapp-icon-svg" />
        
        {/* Mantendo a camada de animação de pulso que você já tem no CSS */}
        <span className="whatsapp-btn__ping"></span>
      </div>
    </a>
  );
};

export default BtnWhatsapp;