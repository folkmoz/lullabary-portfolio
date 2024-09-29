import { useEffect, useRef, useState } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import { useGSAP } from "@gsap/react";
import HeroSection from "~components/Sections/HeroSection";
// import PreloaderCounter from "./components/Preloader.tsx";

gsap.registerPlugin(CustomEase);
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isPreloading, setIsPreloading] = useState(true);

  const rootElRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(useGSAP);

  CustomEase.create(
    "hop",
    "M0,0 C0.071,0.505 0.192,0.726 0.318,0.852 0.45,0.984 0.504,1 1,1",
  );

  useEffect(() => {
    ScrollTrigger.clearScrollMemory("manual");
  }, []);

  return (
    <main
      ref={rootElRef}
      className="relative flex min-h-svh w-full flex-col justify-center overflow-hidden"
    >
      <HeroSection isPreloading={isPreloading} rootElm={rootElRef} />
      <section className="relative flex min-h-svh w-full justify-center gap-4 lg:pt-40 xl:pt-52"></section>
      <section className="relative flex min-h-svh w-full justify-center gap-4 lg:pt-40 xl:pt-52"></section>

      {/*<PreloaderCounter finishLoading={() => setIsPreloading(false)} />*/}
    </main>
  );
}

export default App;
