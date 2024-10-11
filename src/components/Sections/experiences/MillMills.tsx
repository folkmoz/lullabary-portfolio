import React from "react";
import Animation from "~components/AnimatedComponents/Animation";
import VideoPlayer from "~components/Sections/experiences/components/Videoplayer";
import FullLinkButton from "~components/Sections/experiences/components/FullLinkButton";
import HeadlineRow from "~components/Sections/experiences/components/HeadlineRow";
import CustomSwiper from "~components/Sections/experiences/components/CustomSwiper";
import useImagePreloader from "~hooks/useImagePreloader";
import { getCloudinaryImage, getCloudinaryVideo } from "~/lib/Cloudinary";

const clip = getCloudinaryVideo("experience/millmills/clip/clip");
const bh01 = getCloudinaryImage("experience/millmills/pics/01");
const bh02 = getCloudinaryImage("experience/millmills/pics/02");
const bh03 = getCloudinaryImage("experience/millmills/pics/03");
const bh04 = getCloudinaryImage("experience/millmills/pics/04");
const bh05 = getCloudinaryImage("experience/millmills/pics/05");
const bh06 = getCloudinaryImage("experience/millmills/pics/06");
const fish01 = getCloudinaryImage("fish01");

function MillMills() {
  useImagePreloader([bh01, bh02, bh03, bh04, bh05, bh06, fish01]);

  return (
    <div className="relative z-[1] mt-14 w-full rounded-[60px] bg-secondary py-10 shadow-[0px_-4px_10px_4px_rgba(0,0,0,.45)]">
      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col p-4">
        <HeadlineRow
          title="Art Director"
          subtitle="MillMills — คนเคยรักกัน (Official Music Video)"
          description="This project was fun to work on in terms of mood and tone because I chose to use blue and red to represent the relationship between the lovers. It was challenging because the art team had to transform the football field into a red carpet event. This required heavy planning, creating large props ourselves, all within a tight timeline, making it incredibly tough but exciting."
        />

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

        <div className="absolute -right-1/2 hidden w-[120px] rotate-[-20deg] lg:block lg:w-[1000px] lg:-translate-y-20 lg:translate-x-40 xl:translate-x-20 xl:translate-y-0">
          <img src={fish01} alt="fish" draggable={false} />
        </div>
      </div>
    </div>
  );
}

export default MillMills;
