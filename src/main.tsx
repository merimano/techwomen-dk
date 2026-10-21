import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { WaitlistPage } from "./pages/WaitlistPage";

// Minimal path-based routing — the site has one extra page, so no router
// library. Vercel rewrites every path to index.html (vercel.json) so a
// direct visit or refresh on /waitlist still loads the app.
const path = window.location.pathname.replace(/\/+$/, "") || "/";
const Page = path === "/waitlist" ? WaitlistPage : App;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Page />
  </StrictMode>,
);
