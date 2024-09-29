import { Fragment } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import TailwindcssIndicator from "./components/TailwindcssIndicator.tsx";
import ReactLenis from "@studio-freight/react-lenis";

createRoot(document.getElementById("root")!).render(
  <Fragment>
    <ReactLenis root>
      <App />
    </ReactLenis>
    <TailwindcssIndicator />
  </Fragment>,
);
