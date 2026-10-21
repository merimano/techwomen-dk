import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { WaitlistPage } from "./pages/WaitlistPage";
import { GetInvolvedPage } from "./pages/GetInvolvedPage";
import { PartnerPage } from "./pages/PartnerPage";

// Minimal path-based routing — the site has only a couple of extra pages, so no router
// library. Vercel rewrites every path to index.html (vercel.json) so a
// direct visit or refresh on /waitlist still loads the app.
const path = window.location.pathname.replace(/\/+$/, "") || "/";
const routes: Record<string, () => JSX.Element> = {
  "/waitlist": WaitlistPage,
  "/get-involved": GetInvolvedPage,
  "/partner": PartnerPage,
};
const Page = routes[path] ?? App;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Page />
  </StrictMode>,
);
