import React from "react";
import HeadlineRow from "~components/Sections/experiences/components/HeadlineRow";
import Animation from "~components/AnimatedComponents/Animation";
import VideoPlayer from "~components/Sections/experiences/components/Videoplayer";
import FullLinkButton from "~components/Sections/experiences/components/FullLinkButton";
import CustomSwiper from "~components/Sections/experiences/components/CustomSwiper";
import useImagePreloader from "~hooks/useImagePreloader";
import { getCloudinaryImage, getCloudinaryVideo } from "~/lib/Cloudinary";

const clip = getCloudinaryVideo("experience/buca/clip/clip");
const bh01 = getCloudinaryImage("experience/buca/pics/01");
const bh02 = getCloudinaryImage("experience/buca/pics/02");
const bh03 = getCloudinaryImage("experience/buca/pics/03");

function Buca() {
  useImagePreloader([bh01, bh02, bh03]);

  return (
    <div className="relative z-[1] w-full bg-secondary py-4 md:mt-14 md:py-10">
      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col p-4 md:px-8 xl:px-4">
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
