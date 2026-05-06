import React, { memo, useMemo } from "react";
import Button from "../../UI/button";

const CallToAction = ({ phone = "" }) => {
  const agendamentoUrl = useMemo(() => {
    if (!phone) return null;
    const message = "Olá! Gostaria de agendar uma consulta na Clínica de Estética Catarino.";
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  }, [phone]);

  const atendimentoUrl = useMemo(() => {
    if (!phone) return null;
    const message = "Olá! Preciso de um atendimento rápido pelo WhatsApp.";
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  }, [phone]);

  return (
    <section id="cta" className="cta fade-up">
      <div className="cta__container">
        <header className="cta__header u-text-center">
          <h2 className="cta__title">
            Realce sua <span className="highlight">beleza natural</span> com segurança e confiança.
          </h2>
          <br /><br />
          <p className="cta__description">
            Agende sua consulta com a Dra. Fabiana Catarino e descubra tratamentos personalizados para você.
          </p>
        </header>

        <div className="cta__actions btn-group u-flex-center">
          {agendamentoUrl && (
            <Button
              href={agendamentoUrl}
              variant="primary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Agende sua consulta agora mesmo pelo WhatsApp"
              className="cta__btn"
            >
              Agende sua consulta agora mesmo
            </Button>
          )}

          {atendimentoUrl && (
            <Button
              href={atendimentoUrl}
              variant="outline"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Atendimento rápido pelo WhatsApp"
              className="cta__btn"
            >
              Atendimento rápido pelo WhatsApp
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default memo(CallToAction);
