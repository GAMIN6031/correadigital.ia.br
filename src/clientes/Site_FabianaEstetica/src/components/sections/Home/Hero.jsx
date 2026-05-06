import React, { memo, useMemo } from "react";
import Button from "../../UI/button";
import esteticaImg from "../../../assets/HeroImg.jpg";

const Hero = ({ phone = "5511921881464" }) => {
  const whatsappUrl = useMemo(() => {
    const message =
      "Olá! Vim pelo site da Clínica de Estética Catarino e gostaria de agendar uma consulta.";
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  }, [phone]);

  return (
    <section
      className="hero fade-up"
      id="home"
      role="banner"
      aria-label="Seção principal Clínica de Estética Catarino"
    >
      <div className="hero__container" id="Hero">
        {/* Texto */}
        <div className="hero__content">
          <h1 className="hero__title">
            Realce sua <span className="highlight">beleza natural</span>.{" "}
            Cuidados estéticos seguros e personalizados.
          </h1>
          <p className="hero__description">
            A Clínica de Estética Catarino, liderada pela Dra. Fabiana Catarino,
            oferece harmonização facial, tratamentos corporais e programas de
            emagrecimento com resultados naturais e duradouros.
          </p>

          <div className="hero__actions btn-group u-flex-center">
            <Button
              href={whatsappUrl}
              variant="primary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Agendar consulta pelo WhatsApp"
              className="hero__btn"
            >
              Agendar Consulta
            </Button>

            <Button
              href="#servicos"
              variant="outline"
              aria-label="Ver serviços da Clínica de Estética Catarino"
              className="hero__btn"
            >
              Ver Serviços
            </Button>
          </div>
        </div>

        {/* Imagem */}
        <div className="hero__visual">
          <div className="hero__image-frame hover-scale">
            <img
              src={esteticaImg}
              alt="Tratamento estético realizado na Clínica de Estética Catarino"
              className="hero__main-img"
              loading="lazy"
              decoding="async"
            />
            <div className="hero__badge">
              <strong>+6 anos</strong>
              <span>de experiência</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);
