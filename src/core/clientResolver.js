import { CLIENTS } from "./clients";

export function getCliente(pathname) {
  console.log("[getCliente] pathname recebido:", pathname);

  // Corrige o bug: não transformar "/" em vazio
  const cleanPath = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
  console.log("[getCliente] pathname normalizado:", cleanPath);

  const exact = CLIENTS.find((c) => c.rota === cleanPath);
  if (exact) {
    console.log("[getCliente] Encontrado por rota exata:", exact.id);
    return exact;
  }

  const prefix = CLIENTS.find((c) => cleanPath.startsWith(c.rota));
  if (prefix) {
    console.log("[getCliente] Encontrado por prefixo:", prefix.id);
    return prefix;
  }

  console.warn("[getCliente] Nenhum cliente encontrado para:", pathname);
  return null;
}
