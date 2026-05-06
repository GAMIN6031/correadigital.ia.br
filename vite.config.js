// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  base: "./", // garante que os caminhos funcionem no GitHub Pages
  build: {
    outDir: "dist", // pasta de saída padrão
    emptyOutDir: true, // limpa a pasta antes do build
    rollupOptions: {
      input: {
        loja: resolve(__dirname, "index.html"), // página principal
        fabiana: resolve(__dirname, "src/clientes/Site_FabianaEstetica/index.html"), // segunda página
      },
      output: {
        assetFileNames: "assets/[name].[hash].[ext]",
        chunkFileNames: "assets/[name].[hash].js",
        entryFileNames: "assets/[name].[hash].js",
      },
    },
  },
  server: {
    port: 5173, // define uma porta fixa para desenvolvimento
    open: true, // abre automaticamente no navegador
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), // facilita importações
    },
  },
});
