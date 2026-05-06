import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PrevArrow = ({ style, onClick }) => (
  <button
    type="button"
    className="custom-prev"
    style={{ ...style }}
    onClick={onClick}
    aria-label="Slide anterior"
  >
    <FaChevronLeft />
  </button>
);

const NextArrow = ({ style, onClick }) => (
  <button
    type="button"
    className="custom-next"
    style={{ ...style }}
    onClick={onClick}
    aria-label="Próximo slide"
  >
    <FaChevronRight />
  </button>
);

export default function ProjectGallery({ items = [] }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="project-gallery">
      <header className="gallery-header">
        <strong className="gallery-subtitle">Nosso Portfólio</strong>

        <h2 className="gallery-title">
          Resultados da{" "}
          <span className="gallery-highlight">
            Clínica de Estética Catarino
          </span>
        </h2>

        <p className="gallery-description">
          Conheça alguns dos resultados obtidos com nossos tratamentos
          estéticos, realizados pela Dra. Fabiana Catarino com técnicas modernas
          e foco em beleza natural.
        </p>
      </header>

      <div className="project-slider">
        <Slider {...settings}>
          {items.map((item, i) => (
            <div key={i} className="project-slide">
              <img
                src={item.src}
                alt={item.alt || `Projeto ${i + 1}`}
                className="project-image"
              />
              
            </div>
            
          ))}
        </Slider>
      </div>
    </div>
  );
}
