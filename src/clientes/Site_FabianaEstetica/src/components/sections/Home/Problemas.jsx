import React, { memo } from "react";
import { FiAlertTriangle, FiXCircle, FiHelpCircle, FiHeart } from "react-icons/fi";

const problemas = [
  { icon: FiAlertTriangle, text: "Insatisfação com resultados artificiais?" },
  { icon: FiXCircle, text: "Tratamentos sem acompanhamento adequado?" },
  { icon: FiHelpCircle, text: "Dúvidas sobre segurança dos procedimentos?" },
  { icon: FiHeart, text: "Falta de atendimento humanizado e acolhedor?" },
];

const Problemas = () => (
  <section id="problemas" className="problemas fade-up">
    <div className="problemas__container">
      <header className="problemas__header u-text-center">
        <span className="problemas__subtitle">Dores dos Pacientes</span><br />
        <h2 className="problemas__title">
          Você Já Se Sentiu <span className="highlight">Assim?</span>
        </h2>
      </header>

      <ul className="problemas__list">
        {problemas.map((item, index) => {
          const Icon = item.icon;
          return (
            <li key={index} className="problemas__item hover-scale">
              <span className="problemas__icon u-flex-center">
                <Icon aria-hidden="true" />
              </span>
              <span className="problemas__text">{item.text}</span>
            </li>
          );
        })}
      </ul>

      <p className="problemas__solution">
        ✅ A Clínica de Estética Catarino, com a Dra. Fabiana Catarino, resolve isso para você.
      </p>
    </div>
  </section>
);

export default memo(Problemas);
