import HeadlineRow from "~components/Sections/experiences/components/HeadlineRow";
import Animation from "~components/AnimatedComponents/Animation";
import VideoPlayer from "~components/Sections/experiences/components/Videoplayer";
import FullLinkButton from "~components/Sections/experiences/components/FullLinkButton";
import CustomSwiper from "~components/Sections/experiences/components/CustomSwiper";

import backgroundSec3 from "~assets/experience/bg-blue.png";
import clip from "~assets/experience/clockwork/clip/clip.mp4";

import bh01 from "~assets/experience/clockwork/pics/bh01.jpeg";
import bh02 from "~assets/experience/clockwork/pics/bh02.jpeg";
import bh03 from "~assets/experience/clockwork/pics/bh03.jpeg";
import bh04 from "~assets/experience/clockwork/pics/bh04.jpeg";
import coral1 from "~assets/experience/clockwork/coral1.png";
import coral2 from "~assets/experience/clockwork/coral2.png";

import showcase from "~assets/experience/clockwork/pics/showcase.jpeg";
import useImagePreloader from "~hooks/useImagePreloader";
import { Parallax } from "~components/AnimatedComponents/Parallax";
import Bubble from "~components/Bubble";

function ClockWork() {
  useImagePreloader([
    showcase,
    bh01,
    bh02,
    bh03,
    bh04,
    backgroundSec3,
    coral1,
    coral2,
  ]);

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundSec3})`,
        zIndex: 0,
      }}
      className="relative -mt-24 min-h-[120dvh] overflow-hidden bg-cover bg-no-repeat pb-[30dvh] pt-40 lg:pb-20"
    >
      <div className="relative mx-auto flex min-h-dvh w-full max-w-[1200px] flex-col p-4">
        <HeadlineRow
          starColor="pink"
          title="Art Director"
          subtitle=""
          description="I want to convey the story of a woman suffering from the loss of her lover. This song will use colors as symbols for different times. The moments spent with her lover will be warm tones. While the times she's alone will be blue. There will also be motifs like white roses, blue roses, and a stopped clock"
        />

        <div className="relative z-[1] w-full">
          <div className="flex flex-col gap-2 lg:flex-row">
            <div className="relative w-full lg:w-1/2">
              <Animation.ImageReveal end="top 80%">
                <VideoPlayer source={clip} />
              </Animation.ImageReveal>
            </div>

            <div className="flex w-full lg:w-1/2">
              <div className="hidden lg:block">
                <Animation.ImageReveal end="top 70%">
                  <img src={showcase} alt="" className="h-[300px]" />
                </Animation.ImageReveal>
              </div>
              <div className="lg:ml-24">
                <FullLinkButton
                  href={"https://www.youtube.com/watch?v=AwM9Lxup52o"}
                />
              </div>
            </div>
          </div>

          <div className="mt-2">
            <CustomSwiper images={[bh01, bh02, bh03, bh04]} />
          </div>
        </div>

        <Parallax
          className="absolute bottom-1/3 right-4 z-[1] hidden size-20 md:block lg:bottom-[28%] lg:size-32 xl:-right-20"
          speed={-2}
          start="top bottom"
        >
          <Bubble type="bubble4" rotate direction="left" drag={false} />
        </Parallax>

        <Parallax
          className="absolute z-[1] hidden size-20 md:block lg:bottom-[10%] lg:right-14 lg:size-24 xl:right-0"
          speed={-3}
          start="top bottom"
        >
          <Bubble type="bubble4" rotate direction="right" drag={false} />
        </Parallax>
      </div>

      <Parallax
        className="absolute bottom-1/3 left-24 z-[1] hidden size-16 md:block"
        speed={-4}
        start="top bottom"
      >
        <Bubble type="bubble-fill" rotate direction="left" drag={false} />
      </Parallax>

      <div className="absolute -left-[100px] bottom-1/2 z-[0] w-[200px] lg:-left-[130px] lg:w-full lg:translate-y-[80%]">
        <img src={coral1} alt="coral1" draggable={false} />
      </div>

      <div className="absolute -bottom-28 -right-16">
        <img
          src={coral2}
          alt="coral1"
          draggable={false}
          className="scale-150"
        />
      </div>
    </div>
  );
}

export default ClockWork;
