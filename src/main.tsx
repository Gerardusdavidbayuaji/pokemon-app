import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import { Toaster } from "@/components/ui/sonner";
import "./styles/index.css";
import App from "./router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Toaster />
  </StrictMode>
);
