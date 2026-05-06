// src/components/UI/BotaoLink.jsx
import { Link } from "react-router-dom";

export default function BotaoLink({
  tipo,
  texto,
  icon: Icon,   // já recebe o componente pronto
  rota,
  url,
  acao,
  onTrack,
}) {
  if (tipo === "interno" && rota) {
    return (
      <Link to={rota} className="link interno" onClick={onTrack}>
        {Icon && <Icon className="icone-link" aria-hidden="true" />}
        {texto}
      </Link>
    );
  }

  if (tipo === "externo" && url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="link externo"
        onClick={onTrack}
      >
        {Icon && <Icon className="icone-link" aria-hidden="true" />}
        {texto}
      </a>
    );
  }

  return (
    <button className="link acao" onClick={acao}>
      {Icon && <Icon className="icone-link" aria-hidden="true" />}
      {texto}
    </button>
  );
}
