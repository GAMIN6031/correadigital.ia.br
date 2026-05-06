// src/core/initTheme.js
import { getCliente } from "./clientResolver";
import { loadTheme } from "./themeLoader";

/**
 * Inicializa o tema correto com base na rota atual
 */
export function initTheme(pathname = window.location.pathname) {
  const cliente = getCliente(pathname);

  if (cliente && cliente.theme) {
    console.log("[initTheme] Carregando tema:", cliente.theme);
    loadTheme(cliente.theme);
  } else {
    console.warn("[initTheme] Nenhum tema encontrado para:", pathname);
  }
}
