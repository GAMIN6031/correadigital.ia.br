import React from "react";
export default function FuturisticBackground() {
  const particleCount = window.innerWidth < 600 ? 10 : 30;

  return (
    <div className="bg-futuristic">

      {/* GRID TECNOLÓGICO (removido movimento para aliviar) */}
      <div className="grid-overlay"></div>

      {/* Apenas 1 orbe de energia para reduzir peso */}

      {/* PARTICULAS */}
      <div className="particles">
        {[...Array(particleCount)].map((_, i) => {
          const randomX = Math.random() * 100;
          const randomY = Math.random() * 100;
          const randomDelay = Math.random() * 10;
          return (
            <span
              key={i}
              className="particle"
              style={{
                left: `${randomX}%`,
                top: `${randomY}%`,
                animationDelay: `${randomDelay}s`,
              }}
            ></span>
          );
        })}
      </div>

    </div>
  );
}
