import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { DarkModeProvider } from "./context/DarkModeContext.jsx";

createRoot(document.getElementById("root")).render(
  <DarkModeProvider>
    <App />
  </DarkModeProvider>
);
