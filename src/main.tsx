// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import "./styles/index.scss"; // --> si ça dit not found, il faut créer manuellement le fichier "src/vite-env.d.ts"

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    // <StrictMode>
    <App />
    // </StrictMode>
  );
} else {
  console.error("Root element not found");
}