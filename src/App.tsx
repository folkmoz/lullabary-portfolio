import React, { useEffect, useRef, useState } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { CustomEase } from "gsap/CustomEase";
import { useGSAP } from "@gsap/react";
import { config } from "~/config";

import HeroSection from "~components/Sections/HeroSection";
import PreloaderCounter from "~components/Preloader";
import ProfileSectionV2 from "~components/Sections/ProfileSectionV2";

const IntroduceSection = React.lazy(
  () => import("~components/Sections/IntroduceSection"),
);
const ProfileSection = React.lazy(
  () => import("~components/Sections/ProfileSection"),
);
const WorkExperienceSection = React.lazy(
  () => import("~components/Sections/WorkExperienceSection"),
);
const IllustrationSection = React.lazy(
  () => import("~components/Sections/IllustrationSection"),
);

const CreativeSection = React.lazy(
  () => import("~components/Sections/CreativeSection"),
);

const GraphicSection = React.lazy(
  () => import("~components/Sections/GraphicSection"),
);

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
    // ScrollTrigger.getAll().forEach((trigger) => {
    //   trigger.kill(true);
    // });
    ScrollTrigger.clearScrollMemory("manual");
  }, []);

  return (
    <>
      <main
        ref={rootElRef}
        className="relative flex w-full flex-col justify-center overflow-hidden"
      >
        <HeroSection isPreloading={isPreloading} rootElm={rootElRef} />

        <IntroduceSection />
        <ProfileSectionV2 />

        {/*<ProfileSection />*/}
        <WorkExperienceSection />
        <IllustrationSection />
        <CreativeSection />
        <GraphicSection />

        <PreloaderCounter finishLoading={() => setIsPreloading(false)} />
      </main>
    </>
  );
}

export default App;
