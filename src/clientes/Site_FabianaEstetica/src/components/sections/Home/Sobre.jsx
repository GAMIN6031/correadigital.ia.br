import React, { memo } from "react";
import { FiCheckCircle, FiSmile, FiHeart } from "react-icons/fi";
import Button from "../../UI/button";
import Logo from "../../../assets/Imagem3.jpeg";
import { footerTexts } from "../../utils/footerConstants";

const Sobre = () => {
  const pilares = [
    { texto: "Resultados naturais e seguros", icone: <FiCheckCircle /> },
    {
      texto: "Mais de 2.000 pacientes satisfeitos",
      icone: <FiSmile />,
    },
    { texto: "Atendimento humanizado e acolhedor", icone: <FiHeart /> },
  ];

  return (
    <section className="sobre fade-up" id="Sobre">
      <div className="sobre__container">
        {/* Lado Visual */}
        <div className="sobre__visual hover-scale">
          <div className="sobre__image-frame">
            <img
              src={Logo}
              alt="Logo da Clínica de Estética Catarino representando cuidado e beleza"
              className="sobre__img"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Lado Conteúdo */}
        <div className="sobre__content">
          <header className="sobre__header u-text-center">
            <span className="sobre__subtitle">Quem Somos</span>
            <h2 className="sobre__title">
              Clínica de Estética <span className="highlight">Catarino</span>
            </h2>
          </header>

          {/* Texto resumido */}
          <p className="sobre__description">
            A Clínica de Estética Catarino nasceu com o propósito de oferecer
            tratamentos estéticos modernos, seguros e personalizados,
            valorizando a beleza natural de cada paciente.
          </p>
          <p className="sobre__description">
            Sob a responsabilidade da Biomédica Fabiana Catarino da Silva,
            Pós-graduada em Biomedicina Estética com habilitação em Estética
            pela UNIP, a clínica atua com técnicas atualizadas e produtos de
            alta qualidade, sempre priorizando resultados naturais e a segurança
            de cada procedimento.
          </p>
          <p className="sobre__description">
            Nosso atendimento é individualizado, com avaliação detalhada para
            indicar o melhor protocolo para cada objetivo, seja rejuvenescimento
            facial, harmonização, tratamentos corporais ou protocolos de
            emagrecimento.
          </p>
          <p className="sobre__description destaque">
            Nosso compromisso é proporcionar autoestima, bem-estar e resultados
            elegantes, respeitando sempre a individualidade de cada paciente. ✨
          </p>

          {/* Lista de pilares */}
          <ul className="sobre__list">
            {pilares.map((item, index) => (
              <li key={index} className="hover-scale">
                <span className="icon u-flex-center">{item.icone}</span>
                <span>{item.texto}</span>
              </li>
            ))}
          </ul>

          {/* Botões de ação */}
          <div className="sobre__actions btn-group u-flex-center">
            <Button
              variant="primary"
              className="sobre__btn"
              href="#servicos"
              aria-label="Ver tratamentos da Clínica de Estética Catarino"
            >
              Conheça nossos tratamentos
            </Button>
            <Button
              variant="outline"
              className="sobre__btn"
              href={`https://wa.me/${footerTexts.phone}?text=Olá! Vim pelo site da Clínica de Estética Catarino e gostaria de agendar uma consulta.`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Agendar consulta pelo WhatsApp"
            >
              Agendar consulta
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Sobre);
