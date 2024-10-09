import React from "react";

import backgroundSec1 from "~assets/experience/not-friend/bg.png";
import headline from "~assets/experience/headline.png";
import NotFriends from "~components/Sections/experiences/NotFriends";
import MillMills from "~components/Sections/experiences/MillMills";
import Animation from "~components/AnimatedComponents/Animation";
import ClockWork from "~components/Sections/experiences/ClockWork";
import useImagePreloader from "~hooks/useImagePreloader";
import Exbear from "~components/Sections/experiences/Exbear";
import RisingDream from "~components/Sections/experiences/RisingDream";
import BUCA from "~components/Sections/experiences/BUCA";

function WorkExperienceSection() {
  useImagePreloader([backgroundSec1, headline]);

  return (
    <section className="relative flex min-h-svh w-full justify-center gap-4 overflow-x-hidden bg-secondary lg:pt-[80dvh]">
      <div
        style={{
          backgroundImage: `url(${backgroundSec1})`,
          zIndex: 0,
        }}
        className="absolute inset-0 min-h-svh bg-contain bg-no-repeat"
      ></div>

      <div className="relative flex w-full flex-col">
        <div className="flex w-full items-center justify-center">
          <Animation.Slide start="top 90%" end="top 20%">
            <img src={headline} alt="heading" />
          </Animation.Slide>
        </div>

        <NotFriends />

        <MillMills />

        <ClockWork />

        <Exbear />

        <RisingDream />

        <BUCA />
      </div>
    </section>
  );
}

export default WorkExperienceSection;
