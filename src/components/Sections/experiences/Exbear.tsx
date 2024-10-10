import backgroundSec3 from "~assets/experience/bg-blue.png";
import HeadlineRow from "~components/Sections/experiences/components/HeadlineRow";

import useImagePreloader from "~hooks/useImagePreloader";
import Animation from "~components/AnimatedComponents/Animation";
import VideoPlayer from "~components/Sections/experiences/components/Videoplayer";
import FullLinkButton from "~components/Sections/experiences/components/FullLinkButton";
import CustomSwiper from "~components/Sections/experiences/components/CustomSwiper";
import { useScreen } from "~hooks/useScreen";
import { Parallax } from "~components/AnimatedComponents/Parallax";
import Bubble from "~components/Bubble";

import clip from "~assets/experience/exbear/clip/clip.mp4";

import hFishTank from "~assets/experience/exbear/pics/h-fish-tank.png";
import vFishTank from "~assets/experience/exbear/pics/v-fish-tank.png";
import bh01 from "~assets/experience/exbear/pics/bh01.jpeg";
import bh02 from "~assets/experience/exbear/pics/bh02.jpeg";
import bh03 from "~assets/experience/exbear/pics/bh03.jpeg";
import bh04 from "~assets/experience/exbear/pics/bh04.jpeg";
import starCoral from "~assets/experience/exbear/pics/star-coral.webp";

function Exbear() {
  useImagePreloader([
    backgroundSec3,
    hFishTank,
    vFishTank,
    bh01,
    bh02,
    bh03,
    bh04,
    starCoral,
  ]);

  const { device } = useScreen();

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundSec3})`,
        zIndex: 2,
      }}
      className="shadow-custom-b relative min-h-dvh bg-cover bg-no-repeat pb-[50dvh] lg:pb-0"
    >
      <div className="relative mx-auto flex min-h-dvh w-full max-w-[1200px] flex-col p-4">
        <HeadlineRow
          starColor="pink"
          title="Art Director"
          subtitle="EXBEAR - แพรวพราว Feat. Thursdvy, Miiiii & NADIE (Official MV)"
          description="I handled the art direction, managed the mood, tone, and costumes, and was responsible for editing the mv. I also drew and animated theanimations for the MV. I designed the music video tone using pink and purple tones to convey the charm of the girl we secretly admire but I didn’t want it to be overly sweet,so I Add green and blue to give it a cooler style."
        />

        <div className="relative z-[2] flex min-h-dvh flex-col gap-4 lg:flex-row lg:gap-8">
          <img
            src={device === "desktop" ? hFishTank : vFishTank}
            alt=""
            className="absolute z-0 w-full lg:rotate-[-1deg] lg:scale-[1.05]"
          />

          <div className="h-full w-full lg:px-10 lg:pt-14 xl:pt-[4.6rem]">
            <div className="flex flex-col gap-2 px-16 pt-36 lg:flex-row lg:px-0 lg:pt-4 xl:pt-0">
              <div className="relative w-full lg:w-[55%]">
                <Animation.ImageReveal end="top 80%">
                  <VideoPlayer source={clip} />
                </Animation.ImageReveal>
              </div>

              <div className="w-full items-center lg:flex lg:w-1/3">
                <div className="absolute -bottom-20 left-0 right-0 flex scale-150 justify-center lg:relative lg:ml-24 lg:block lg:scale-100">
                  <FullLinkButton
                    href={"https://www.youtube.com/watch?v=S5QYZaLa1lQ"}
                  />
                </div>
              </div>
            </div>

            <div className="relative mt-2 w-full px-16 lg:w-[55%] lg:px-0">
              <CustomSwiper
                showLabel={false}
                height="h-[180px] xl:h-[200px]"
                images={[bh01, bh02, bh03, bh04]}
              />
            </div>
          </div>
        </div>
      </div>

      <Parallax
        speed={1.2}
        start="top bottom"
        end="bottom top"
        className="absolute left-10 top-[30%] z-[2] size-20"
      >
        <Bubble type="bubble-fill" drag={false} />
      </Parallax>

      <Parallax
        speed={2}
        start="top bottom"
        className="absolute bottom-1/2 left-20 z-[2] size-20 md:bottom-[30%] md:size-40"
      >
        <Bubble type="bubble-fill" drag={false} />
      </Parallax>

      <Parallax className="absolute bottom-10 left-0 z-[1] size-[300px]">
        <Bubble type="red-bubble" drag={false} />
      </Parallax>

      <Parallax
        speed={2.3}
        start="top bottom"
        className="absolute bottom-1/2 right-20 z-[2] size-20 md:bottom-[30%] lg:right-[30%]"
      >
        <Bubble type="bubble-fill" drag={false} />
      </Parallax>

      <Parallax
        speed={1.3}
        className="absolute -bottom-48 right-0 z-[1] size-[300px] lg:-right-64 lg:size-[600px] lg:scale-110"
      >
        <img src={starCoral} alt="pink star coral" />
      </Parallax>
    </div>
  );
}

export default Exbear;
