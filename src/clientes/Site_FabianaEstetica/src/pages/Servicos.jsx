// src/pages/Servicos.jsx
import React from "react";

// Componentes de seção
import Servicos from "../components/sections/Services/Servicos";
import ProjectGallery from "../components/sections/Services/ProjectGallery";


// Dados centralizados
import { servicos, projetos } from "../components/utils/servicos";

const ServicosPage = () => {
  return (
    <main>
      
      {/* Lista de serviços */}
      <Servicos items={servicos} />

      {/* Galeria de projetos */}
      <ProjectGallery items={projetos} />
    </main>
  );
};

export default ServicosPage;
