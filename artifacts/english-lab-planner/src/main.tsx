import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const routeRedirect = new URLSearchParams(window.location.search).get("p");

if (routeRedirect) {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
  const nextPath = `${basePath}${routeRedirect.startsWith("/") ? routeRedirect : `/${routeRedirect}`}`;
  window.history.replaceState(null, "", nextPath);
}

createRoot(document.getElementById("root")!).render(<App />);
