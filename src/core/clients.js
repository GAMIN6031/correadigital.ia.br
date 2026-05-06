import { lazy } from "react";
export const CLIENTES = [
  {
    id: "loja",
    rota: "/",
    component: lazy(() => import("../clientes/Loja/LinkBioLoja")),
    theme: "loja", // chave, não caminho
  },
  {
    id: "fabiana",
    rota: "/FabianaEstetica",
    component: lazy(() => import("../clientes/Site_FabianaEstetica/src/appFabiana")),
    theme: "fabiana", // chave, não caminho
  },
];
