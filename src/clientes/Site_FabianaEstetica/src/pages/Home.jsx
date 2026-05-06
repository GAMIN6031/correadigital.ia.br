// src/pages/Home.jsx
import React from "react";

// Seções da Home
import Hero from "../components/sections/Home/Hero";
import Sobre from "../components/sections/Home/Sobre";
import Diferenciais from "../components/sections/Home/Diferenciais";
import Problemas from "../components/sections/Home/Problemas";
import CallToAction from "../components/sections/Home/CallToAction";

const HomePage = ({ phone }) => {
  return (
    <main>
      <Hero phone={phone} />
      <Sobre />
      <Diferenciais />
      <Problemas />
      <CallToAction phone={phone} />
    </main>
  );
};

export default HomePage;
