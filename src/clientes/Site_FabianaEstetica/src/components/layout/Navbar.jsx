// src/components/layout/Navigation.jsx
import React, { useState, useEffect, useCallback, useRef, memo } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaHome, FaInfoCircle, FaStar, FaLeaf } from "react-icons/fa";

import { Link } from "react-router-dom";

const Navigation = ({ phone }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  /* =========================
     SCROLL
  ========================= */
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  /* =========================
     BLOQUEIO SCROLL MOBILE
  ========================= */
  useEffect(() => {
    document.body.classList.toggle("no-scroll", isMobileMenuOpen);
    return () => document.body.classList.remove("no-scroll");
  }, [isMobileMenuOpen]);

  /* =========================
     LINKS
  ========================= */
  const navLinks = [
    { name: "Início", to: "/FabianaEstetica/", icon: <FaHome /> },
    { name: "Sobre", to: "/FabianaEstetica/sobre", icon: <FaInfoCircle /> },
    { name: "Tratamentos", to: "/FabianaEstetica/servicos", icon: <FaLeaf /> },
    { name: "Link Bio", to: "/FabianaEstetica/linktree", icon: <FaStar /> },
  ];

  const whatsappUrl = `https://wa.me/${phone}?text=Olá! Vim pelo site e gostaria de mais informações.`;

  const renderLink = (link, mobile = false) => {
    const className = mobile
      ? "mobile-menu__link"
      : "navbar__link hover-scale";

    return (
      <Link
        key={link.name}
        to={link.to}
        className={className}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <span className="nav-icon">{link.icon}</span>
        <span>{link.name}</span>
      </Link>
    );
  };

  return (
    <nav
      ref={navRef}
      className={`navbar fade-up ${isScrolled ? "navbar--scrolled" : ""}`}
    >
      <div className="navbar__container">
        {/* LOGO */}
        <Link to="/" className="navbar__logo">
          Clínica de Estética <span>Catarino</span>
        </Link>

        {/* DESKTOP */}
        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.name}>{renderLink(link)}</li>
          ))}
        </ul>

        {/* CTA */}
        <div className="navbar__cta">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline navbar__btn-cta"
          >
            Falar no WhatsApp
          </a>
        </div>

        {/* MOBILE BTN */}
        <button
          className="navbar__mobile-toggle"
          onClick={() => setIsMobileMenuOpen((p) => !p)}
        >
          {isMobileMenuOpen ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div className={`navbar__mobile-menu ${isMobileMenuOpen ? "is-open" : ""}`}>
        {navLinks.map((link) => renderLink(link, true))}

        <a href={whatsappUrl} className="btn btn--primary w-full">
          Chamar no WhatsApp
        </a>
      </div>
    </nav>
  );
};

export default memo(Navigation);