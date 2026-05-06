import { BrowserRouter } from "react-router-dom";
import AppFabiana from "./clientes/fabianaestetica/AppFabiana";

export default function App() {
  return (
    <BrowserRouter basename="/FabianaEstetica">
      <AppFabiana />
    </BrowserRouter>
  );
}