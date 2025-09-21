import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./globals.css";
import { TranslationProvider } from "@/contexts/TranslationContext"; // Import TranslationProvider

createRoot(document.getElementById("root")!).render(
  <TranslationProvider>
    <App />
  </TranslationProvider>
);