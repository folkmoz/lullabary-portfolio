import React from "react";
import { getCloudinaryImage } from "~/lib/Cloudinary";

import NotFriends from "~components/Sections/experiences/NotFriends";
import MillMills from "~components/Sections/experiences/MillMills";
import Animation from "~components/AnimatedComponents/Animation";
import ClockWork from "~components/Sections/experiences/ClockWork";
import useImagePreloader from "~hooks/useImagePreloader";
import Exbear from "~components/Sections/experiences/Exbear";
import RisingDream from "~components/Sections/experiences/RisingDream";
import BUCA from "~components/Sections/experiences/BUCA";

const backgroundSec1 = getCloudinaryImage("experience/not-friend/bg");
const headline = getCloudinaryImage("experience/headline");

function WorkExperienceSection() {
  useImagePreloader([backgroundSec1, headline]);

  return (
    <section
      id={"production-design"}
      className="relative flex w-full justify-center gap-4 bg-secondary lg:pt-[80lvh]"
    >
      <div
        style={{
          backgroundImage: `url(${backgroundSec1})`,
          zIndex: 0,
        }}
        className="absolute inset-0 min-h-svh bg-contain bg-no-repeat"
      ></div>

      <div className="relative flex w-full flex-col">
        <div className="flex w-full items-center justify-center xl:scale-125">
          <Animation.Slide start="top 90%" end="top 20%" direction="bottom">
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
