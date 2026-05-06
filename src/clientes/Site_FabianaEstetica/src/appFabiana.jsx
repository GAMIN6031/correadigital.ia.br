// src/clientes/fabianaestetica/AppFabiana.jsx
import {
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useEffect, useRef } from "react";

// Layout
import Navigation from "./components/layout/Navbar";
import Footer from "./components/layout/footer";
import BtnWhatsapp from "./components/layout/btnwhatsapp";

// Páginas
import HomePage from "./pages/Home";
import ServicosPage from "./pages/Servicos";
import LinkTreePage from "./pages/LinkTree";

/* =========================
   📊 Tracker
========================= */
function RouteTracker() {
  const location = useLocation();
  const startTime = useRef(Date.now());

  useEffect(() => {
    startTime.current = Date.now();

    return () => {
      const tempo = Math.round((Date.now() - startTime.current) / 1000);
      // analytics aqui
    };
  }, [location.pathname]);

  return null;
}

/* =========================
   🔁 Fallback GitHub Pages
========================= */
function RestoreRoute() {
  const location = useLocation();

  useEffect(() => {
    const redirect = sessionStorage.getItem("redirectPath");

    if (!redirect) return;

    sessionStorage.removeItem("redirectPath");

    // remove duplicação do basename se existir
    const cleanPath = redirect.replace("/FabianaEstetica", "");

    if (cleanPath !== location.pathname) {
      window.history.replaceState(null, "", `/FabianaEstetica${cleanPath}`);
    }
  }, [location.pathname]);

  return null;
}

/* =========================
   🚀 APP FABIANA
========================= */
export default function AppFabiana() {
  const phone = "5511921881464";

  return (
    <>
      <RestoreRoute />
      <RouteTracker />

      <Navigation phone={phone} />

      <main className="app-main">
        <Routes>
          <Route path="/" element={<HomePage phone={phone} />} />
          <Route path="servicos" element={<ServicosPage />} />
          <Route path="linktree" element={<LinkTreePage />} />

          {/* fallback correto no GitHub Pages */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
      <BtnWhatsapp phone={phone} />
    </>
  );
}