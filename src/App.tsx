import React, { useEffect, useRef, useState } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { CustomEase } from "gsap/CustomEase";
import { useGSAP } from "@gsap/react";
import HeroSection from "~components/Sections/HeroSection";
import PreloaderCounter from "~components/Preloader";
import IntroduceSection from "~components/Sections/IntroduceSection";
import ProfileSection from "~components/Sections/ProfileSection";
import WorkExperienceSection from "~components/Sections/WorkExperienceSection";
import { config } from "~/config";

gsap.registerPlugin(CustomEase);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

function App() {
  const [isPreloading, setIsPreloading] = useState(true);

  const rootElRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(useGSAP);

  CustomEase.create(
    "hop",
    "M0,0 C0.071,0.505 0.192,0.726 0.318,0.852 0.45,0.984 0.504,1 1,1",
  );

  useEffect(() => {
    if (config.isPreview) return;

    ScrollTrigger.clearScrollMemory("manual");
  }, []);

  return (
    <>
      <main
        ref={rootElRef}
        className="relative flex min-h-dvh w-full flex-col justify-center overflow-hidden"
      >
        <HeroSection isPreloading={isPreloading} rootElm={rootElRef} />
        <IntroduceSection />
        <ProfileSection />
        <WorkExperienceSection />

        <PreloaderCounter finishLoading={() => setIsPreloading(false)} />
      </main>
    </>
  );
}

export default App;
