// src/App.jsx
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Suspense, useEffect } from "react";
import { ThemeSwitcherProvider, useThemeSwitcher } from "react-css-theme-switcher";
import { lazy } from "react";

import { CLIENTES } from "./core/clients";

// =========================
// 🎨 CONTROLE DE TEMA AUTOMÁTICO
// =========================
function ThemeController() {
  const location = useLocation();
  const { switcher } = useThemeSwitcher();

  useEffect(() => {
    // Ordena as rotas por tamanho decrescente para evitar que "/" capture tudo
    const cliente = CLIENTES
      .sort((a, b) => b.rota.length - a.rota.length)
      .find((c) => location.pathname.startsWith(c.rota));

    if (!cliente) {
      console.warn("[ThemeController] Nenhum tema encontrado para:", location.pathname);
      return;
    }

    console.log(`[ThemeController] Aplicando tema: ${cliente.theme}`);
    switcher({ theme: cliente.theme });
  }, [location.pathname, switcher]);

  return null;
}

// =========================
// 🚀 ROTAS DINÂMICAS
// =========================
function DynamicRoutes() {
  return (
    <Routes>
      {CLIENTES.map((c) => {
        const Component = c.component;
        return (
          <Route
            key={c.id}
            path={c.rota === "/" ? "/" : `${c.rota}/*`}
            element={
              <Suspense fallback={<div>Carregando {c.id}...</div>}>
                <Component />
              </Suspense>
            }
          />
        );
      })}
    </Routes>
  );
}

// =========================
// 🌐 APP PRINCIPAL
// =========================
export default function App() {
  // Mapeia os temas para os arquivos CSS (em public/themes)
  const themes = {
    loja: "/themes/Loja/Style.css",
    fabiana: "/themes/fabiana/Style.css",
  };

  return (
    <ThemeSwitcherProvider themeMap={themes} defaultTheme="loja">
      <BrowserRouter>
        <ThemeController />
        <DynamicRoutes />
      </BrowserRouter>
    </ThemeSwitcherProvider>
  );
}
