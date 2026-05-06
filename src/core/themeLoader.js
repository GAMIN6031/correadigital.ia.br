export function loadTheme(href) {
  console.group("%c[ThemeLoader]", "color: #00bfff; font-weight: bold;");

  let link = document.getElementById("theme-style");

  if (!link) {
    link = document.createElement("link");
    link.id = "theme-style";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    console.log("%cNovo <link> criado para tema", "color: #32cd32;");
  }

  const newHref = href + "?v=" + Date.now();
  console.log("%cTentando carregar:", "color: #ffa500;", newHref);

  link.onload = () => {
    console.log("%c✅ CSS carregado com sucesso:", "color: #00ff00;", newHref);
    console.groupEnd();
  };

  link.onerror = () => {
    console.error("%c❌ ERRO ao carregar CSS:", "color: #ff0000;", newHref);
    console.groupEnd();
  };

  link.href = newHref;
}
