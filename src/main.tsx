import { createRoot } from "react-dom/client";
import "./main.scss";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import DataContext from "./context/DataContext.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <DataContext>
      <App />
    </DataContext>
  </BrowserRouter>
);
