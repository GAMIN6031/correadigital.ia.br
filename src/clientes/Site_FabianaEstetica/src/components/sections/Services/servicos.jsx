import React, { memo, useMemo } from "react";
import Cartao from "../../UI/Cartao";
import { servicos } from "../../utils/servicos";

const Servicos = () => {
  const cardsServicos = useMemo(() => {
    if (!Array.isArray(servicos) || servicos.length === 0) return null;

    return servicos.map((item, index) => (
      <li
        key={item.id || `servico-${index}`}
        className="servico-card-wrapper"
        style={{ "--index": `${index}` }}
        role="listitem"
      >
        <Cartao
          icone={item.icone}
          titulo={item.titulo}
          descricao={item.descricao}  
          badgeText={item.categoria}
          className="servico-card"
        />
      </li>
    ));
  }, []); 

  return (
    <section id="servicos" className="servicos-wrapper">
      <header className="servicos-header">
        <strong className="servicos-subtitle">Nossas Especialidades</strong>
        <h2 className="servicos-title">
          Tratamentos da{" "}
          <span className="servicos-highlight">
            Clínica de Estética Catarino
          </span>
        </h2>
        <p className="servicos-description">
          Cuidados estéticos realizados pela Dra. Fabiana Catarino, com foco em
          resultados naturais e seguros.
        </p>
      </header>

      {cardsServicos ? (
        <ul className="servicos-grid" role="list">
          {cardsServicos}
        </ul>
      ) : (
        <p className="servicos-empty">
          <em>Nenhum tratamento disponível no momento.</em>
        </p>
      )}
    </section>
  );
};

export default memo(Servicos);
