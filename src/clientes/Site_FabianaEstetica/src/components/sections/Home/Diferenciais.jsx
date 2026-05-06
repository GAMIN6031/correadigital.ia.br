import React, { memo } from "react";
import {
  FiStar,
  FiHeart,
  FiSmile,
  FiClock,
  FiCheckCircle,
} from "react-icons/fi";

const diferenciais = [
  {
    icon: FiStar,
    label: "Experiência",
    text: "Mais de 10 anos em estética avançada",
  },
  {
    icon: FiSmile,
    label: "Resultados Naturais",
    text: "Tratamentos personalizados para cada paciente",
  },
  {
    icon: FiHeart,
    label: "Atendimento Humanizado",
    text: "Cuidado e acolhimento em cada consulta",
  },
  {
    icon: FiClock,
    label: "Pontualidade",
    text: "Agendamentos respeitados e organizados",
  },
  {
    icon: FiCheckCircle,
    label: "Segurança",
    text: "Procedimentos realizados com responsabilidade",
  },
  {
    icon: FiStar,
    label: "Excelência",
    text: "Compromisso com qualidade e bem-estar",
  },
];

const Diferenciais = () => {
  return (
    <section className="diferenciais fade-up" id="diferenciais">
      <div className="diferenciais__container">
        <header className="diferenciais__header u-text-center">
          <span className="diferenciais__subtitle">
            Por que escolher a nossa clínica
          </span>
          <h2 className="diferenciais__title">
            Nossos <span className="highlight">Diferenciais</span>
          </h2>
        </header>

        <div className="diferenciais__grid">
          {diferenciais.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="diferenciais__pillar hover-scale">
                <div className="diferenciais__circle u-flex-center">
                  <Icon aria-label={item.label} />
                </div>
                <div className="diferenciais__text">
                  <h3>{item.label}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default memo(Diferenciais);
