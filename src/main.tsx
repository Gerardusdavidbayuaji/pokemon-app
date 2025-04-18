import { BrowserRouter as Router } from "react-router";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import App from "./pages/index.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <Router>
    <StrictMode>
      <App />
    </StrictMode>
  </Router>
);
