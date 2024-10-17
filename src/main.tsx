import { Fragment } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import TailwindcssIndicator from "./components/TailwindcssIndicator";

import "./index.css";
import "swiper/css";
import Lenis from "~/Lenis";

createRoot(document.getElementById("root")!).render(
  <Fragment>
    <Lenis>
      <App />
    </Lenis>
    <TailwindcssIndicator />
  </Fragment>,
);
