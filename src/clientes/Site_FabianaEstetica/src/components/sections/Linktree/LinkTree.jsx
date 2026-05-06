// src/components/sections/Linktree/LinkTree.jsx
import React, { useState, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import Logo from "../../../assets/Logo.jpeg";
import {
  CHAVE_PIX,
  WHATSAPP_URL,
  linktreeButtons,
} from "../../utils/linktreeConstants";

function BotaoLink({ tipo, texto, rota, url, acao, icone: Icone }) {
  const handleClick = () => {
    if (tipo === "acao") acao?.();
  };

  const commonProps = {
    className: "link animate-scaleIn",
    onClick: handleClick,
    "aria-label": texto,
  };

  if (tipo === "interno") {
    return (
      <Link to={rota} {...commonProps}>
        {Icone && <Icone className="nav-icon" aria-hidden="true" />}
        <span>{texto}</span>
      </Link>
    );
  }

  if (tipo === "externo") {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" {...commonProps}>
        {Icone && <Icone className="nav-icon" aria-hidden="true" />}
        <span>{texto}</span>
      </a>
    );
  }

  return (
    <button type="button" {...commonProps}>
      {Icone && <Icone className="nav-icon" aria-hidden="true" />}
      <span>{texto}</span>
    </button>
  );
}

/* Página LinkTree */
const LinkTree = () => {
  const [copiado, setCopiado] = useState(false);

  const handleCopiarPix = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(CHAVE_PIX);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 3000);
    } catch (error) {
      console.error("Erro ao copiar PIX:", error);
    }
  }, []);

  const botoes = useMemo(
    () => linktreeButtons(handleCopiarPix),
    [handleCopiarPix]
  );

  return (
    <main className="linktree-container">
      <section
        className="card-linktree animate-fadeInUp"
        aria-label="Links principais"
      >
        {/* Header */}
        <header className="linktree-header">
          <div className="logo-wrapper">
            <img src={Logo} alt="Logo Fabiana Estética" className="logo-img" />
          </div>
          <h1 className="studio-title">
            Fabiana <span>Estética</span>
          </h1>
          <p className="subtitle">Descubra nossos serviços exclusivos e transforme sua beleza com profissionalismo e dedicação.</p>
          <div className="header-divider" />
        </header>

        {/* Navegação */}
        <nav className="linktree-nav" aria-label="Links de navegação">
          {botoes.map((botao) => (
            <BotaoLink key={botao.id} {...botao} />
          ))}
        </nav>

        {/* WhatsApp fixo */}
        <a
          href={WHATSAPP_URL}
          className="btn-whatsapp-flutuante animate-scaleIn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Entrar em contato pelo WhatsApp"
        >
          <FaWhatsapp aria-hidden="true" />
          <span>WhatsApp</span>
        </a>
      </section>

      {/* Toast Pix */}
      {copiado && (
        <div
          className="toast-pix animate-fadeInUp"
          role="status"
          aria-live="polite"
        >
          Pix copiado com sucesso!
        </div>
      )}
    </main>
  );
};

export default LinkTree;
