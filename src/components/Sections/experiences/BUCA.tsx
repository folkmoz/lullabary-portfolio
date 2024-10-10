import React from "react";
import HeadlineRow from "~components/Sections/experiences/components/HeadlineRow";
import Animation from "~components/AnimatedComponents/Animation";
import VideoPlayer from "~components/Sections/experiences/components/Videoplayer";
import FullLinkButton from "~components/Sections/experiences/components/FullLinkButton";
import CustomSwiper from "~components/Sections/experiences/components/CustomSwiper";

import clip from "~assets/experience/buca/clip/clip.mp4";

import bh01 from "~assets/experience/buca/pics/bh01.webp";
import bh02 from "~assets/experience/buca/pics/bh02.webp";
import bh03 from "~assets/experience/buca/pics/bh03.webp";
import useImagePreloader from "~hooks/useImagePreloader";

function Buca() {
  useImagePreloader([bh01, bh02, bh03]);

  return (
    <div className="relative z-[1] w-full bg-secondary py-4 md:mt-14 md:py-10">
      <div className="h relative mx-auto flex w-full max-w-[1200px] flex-col p-4">
        <HeadlineRow
          title="Art Director"
          subtitle="Ads opening BUCA Talent 11"
          description="Promotional advertisement for BUCA Talent 11 scholarships at Bangkok University, aiming to inspire students interested in pursuing higher education to audition."
        />

        <div className="w-full">
          <div className="flex flex-col gap-2 lg:flex-row">
            <div className="relative w-full lg:w-1/2">
              <Animation.ImageReveal end="top 80%">
                <VideoPlayer source={clip} />
              </Animation.ImageReveal>
            </div>

            <div className="flex w-full lg:w-1/2">
              <div className="lg:ml-24 lg:mt-14">
                <FullLinkButton
                  href={"https://www.instagram.com/p/Ckf4s6Zj84r/"}
                />
              </div>
            </div>
          </div>

          <div className="mt-2">
            <CustomSwiper images={[bh01, bh02, bh03]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buca;
