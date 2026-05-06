import {
  FaInstagram,
  FaWhatsapp,
  FaPhone,
  FaHeart,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import Logo from "../../assets/Logo.jpeg";
import {
  footerTexts,
  quickLinks,
  services,
  socialLinks,
} from "../utils/footerConstants";

const iconMap = {
  FaInstagram: FaInstagram,
  FaWhatsapp: FaWhatsapp,
};

export default function Footer() {
  return (
    <footer className="footer fade-up" role="contentinfo">
      <div className="footer-container">
        <div className="footer-grid">

          {/* =========================
              SOBRE
          ========================= */}
          <section className="footer-column footer-about">
            <div className="footer-logo u-flex-center">
              <img
                src={Logo}
                alt={`Logo ${footerTexts.companyName}`}
                loading="lazy"
              />
              <h3>{footerTexts.companyName}</h3>
            </div>

            <p className="footer-description">
              {footerTexts.description}
            </p>

            <div className="footer-social">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.icon];

                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link hover-scale"
                    aria-label={`Abrir ${social.label}`}
                  >
                    <Icon aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </section>

          {/* =========================
              LINKS RÁPIDOS (FIX PRINCIPAL)
          ========================= */}
          <nav className="footer-column" aria-label="Links rápidos">
            <h4 className="footer-title">Links Rápidos</h4>

            <ul className="footer-links">
              {quickLinks.map(({ path, label }) => (
                <li key={path}>
                  <Link to={path}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* =========================
              SERVIÇOS
          ========================= */}
          <section className="footer-column">
            <h4 className="footer-title">Serviços</h4>

            <ul className="footer-links">
              {services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </section>

          {/* =========================
              CONTATO
          ========================= */}
          <section className="footer-column footer-contact">
            <h4 className="footer-title">Contato</h4>

            <ul className="footer-contact-list">
              <li>
                <FaInstagram aria-hidden="true" />
                <a
                  href={footerTexts.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>

              <li>
                <FaWhatsapp aria-hidden="true" />
                <a
                  href={footerTexts.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </li>

              <li>
                <FaPhone aria-hidden="true" />
                <a href={`tel:+55${footerTexts.phone.replace(/\D/g, "")}`}>
                  {footerTexts.phone}
                </a>
              </li>
            </ul>
          </section>
        </div>

        {/* =========================
            FOOTER BOTTOM
        ========================= */}
        <div className="footer-bottom u-text-center">
          <p>{footerTexts.copyright}</p>

          <p className="footer-love">
            {footerTexts.loveMessage}
            <FaHeart className="heart-icon highlight" aria-hidden="true" />
          </p>
        </div>
      </div>
    </footer>
  );
}