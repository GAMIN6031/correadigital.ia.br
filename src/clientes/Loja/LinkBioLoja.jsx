// src/components/Linktree/LinkTree/LinkTree.jsx
import { useState, useCallback, useEffect, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { config } from "./data/linktreeConfig";
import { iconMap } from "./data/iconMap";
import BotaoLink from "./UI/BotaoLink";
import FuturisticBackground from "./UI/FuturisticBackground";
export default function LinkTree() {
  const [copiado, setCopiado] = useState(false);
  const startTime = useRef(Date.now());

  // Copiar chave Pix
  const handleCopiarPix = useCallback(() => {
    if (!config?.EMPRESA?.chavePix) return;
    navigator.clipboard.writeText(config.EMPRESA.chavePix).then(() => {
      setCopiado(true);
      setTimeout(() => setCopiado(false), 3000);
    });
  }, []);

  return (
    <main className="linktree-main" style={{ marginTop: "40px", marginBottom: "40px" }}>
      <FuturisticBackground />
      <section className="card-linktree">
        <header>
          <img src={config.EMPRESA.logo2} alt={config.EMPRESA.nome} />
          <h1 className="titulo-principal">{config.EMPRESA.nome}</h1>
          <h2 className="subtitulo">
            Conectando você ao mundo digital com confiança.
          </h2>
        </header>

        <nav>
          {(config.LINKBIO || []).map((botao, i) => {
            const Icon = iconMap[botao.icone];
            return (
              <BotaoLink
                key={i}
                {...botao}
                icon={Icon}
                acao={botao.acao === "copiarPix" ? handleCopiarPix : botao.acao}
                onTrack={() =>
                  trackClick(botao.tipo, botao.texto, botao.rota || botao.url)
                }
              />
            );
          })}
        </nav>

        <a
          href={config.EMPRESA.whatsappUrl}
          className="btn-whatsapp-flutuante"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir WhatsApp"
        >
          <FaWhatsapp className="icone-link" /> WhatsApp
        </a>
      </section>

      {copiado && (
        <div className="toast-pix" aria-live="polite">
          Pix copiado
        </div>
      )}
    </main>
  );
}
