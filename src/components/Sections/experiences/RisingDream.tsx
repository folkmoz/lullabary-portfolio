import React from "react";
import HeadlineRow from "~components/Sections/experiences/components/HeadlineRow";

import bgBlue from "~assets/experience/bg-blue.png";
import Animation from "~components/AnimatedComponents/Animation";
import VideoPlayer from "~components/Sections/experiences/components/Videoplayer";
import clip from "~assets/experience/millmills/clip/millmills-clip.mp4";
import FullLinkButton from "~components/Sections/experiences/components/FullLinkButton";
import CustomSwiper from "~components/Sections/experiences/components/CustomSwiper";
import bh01 from "~assets/experience/millmills/pics/bh01.jpeg";
import bh02 from "~assets/experience/millmills/pics/bh02.jpeg";
import bh03 from "~assets/experience/millmills/pics/bh03.jpeg";
import bh04 from "~assets/experience/millmills/pics/bh04.jpeg";
import bh05 from "~assets/experience/millmills/pics/bh05.jpeg";
import bh06 from "~assets/experience/millmills/pics/bh06.jpeg";

function RisingDream() {
  return (
    <div className="relative z-[1] mt-14 w-full bg-secondary py-10">
      <div className="h relative mx-auto flex w-full max-w-[1200px] flex-col p-4">
        <HeadlineRow
          title="Art Director"
          subtitle="Rising to your dream [Official MV]"
          description="The music video promotes the Faculty of Communication Arts at Bangkok University. This project was a lot of fun because I set a bright tone for the MV. I wanted the viewers to feel joy and be immensely inspired. Besides designing vibrant mockup scenes, I also created visuals for the screen in the concert scene."
        />
      </div>

      <div
        style={{
          background: `url(${bgBlue}) no-repeat center / cover`,
        }}
        className="shadow-custom-y mt-20 min-h-[80dvh] w-full py-10"
      >
        <div className="w-full">
          <div className="flex flex-col gap-2 lg:flex-row">
            <div className="relative w-full lg:w-1/2">
              <Animation.ImageReveal end="top 80%">
                <VideoPlayer source={clip} />
              </Animation.ImageReveal>
            </div>

            <div className="flex w-full lg:w-1/2">
              <div className="lg:ml-24">
                <FullLinkButton
                  href={"https://www.youtube.com/watch?v=AwM9Lxup52o"}
                />
              </div>
            </div>
          </div>

          <div className="mt-2">
            <CustomSwiper images={[bh01, bh02, bh03, bh04, bh05, bh06]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RisingDream;
