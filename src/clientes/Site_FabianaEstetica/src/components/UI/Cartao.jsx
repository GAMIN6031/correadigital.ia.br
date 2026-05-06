import React from "react";

/**
 * Componente Cartão Premium - Compatível com React Icons
 */
const Cartao = ({
  icone: Icone,
  titulo = "Sem título",
  descricao,
  badgeText,
  onClick,
  className = "",
}) => {
  const Tag = onClick ? "button" : "article";

  return (
    <Tag
      className={`cartao fade-up ${onClick ? "cartao--clickable hover-scale" : ""} ${className}`.trim()}
      onClick={onClick}
      type={onClick ? "button" : undefined}
      aria-label={onClick ? `Abrir detalhes do serviço: ${titulo}` : undefined}
      role={!onClick ? "listitem" : undefined}
    >
      {/* Header */}
      <header className="cartao__header">
        {Icone && (
          <div className="cartao__icon-wrapper" aria-hidden="true">
            <Icone size={32} strokeWidth={1.5} />
          </div>
        )}
        <h3 className="cartao__title">{titulo}</h3>
      </header>

      {/* Body */}
      {descricao && (
        <div className="cartao__body">
          <p className="cartao__description">{descricao}</p>
        </div>
      )}

      {/* Footer */}
      {badgeText && (
        <footer className="cartao__footer">
          <span className="cartao__badge">{badgeText}</span>
          {onClick && (
            <span className="cartao__arrow" aria-hidden="true">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          )}
        </footer>
      )}
    </Tag>
  );
};

export default Cartao;
