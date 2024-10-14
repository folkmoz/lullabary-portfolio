import React from "react";
import useImagePreloader from "~hooks/useImagePreloader";
import Animation from "~components/AnimatedComponents/Animation";
import IllusImage from "~components/Sections/illustration/components/IllusImage";
import VideoPlayer from "~components/Sections/experiences/components/Videoplayer";
import FullVersionLink from "~components/Sections/illustration/components/FullVersionLink";
import CustomSwiper from "~components/Sections/experiences/components/CustomSwiper";
import { getCloudinaryImage, getCloudinaryVideo } from "~/lib/Cloudinary";

const clip = getCloudinaryVideo("illustration/01/clip");
const pic01 = getCloudinaryImage("illustration/01/01");
const pic02 = getCloudinaryImage("illustration/01/02");
const pic03 = getCloudinaryImage("illustration/01/03");

function MelodyOfFolk() {
  useImagePreloader([pic01, pic02, pic03]);

  return (
    <div className="relative flex w-full flex-col">
      <div className="mb-4 space-y-1">
        <h2 className="font-bold md:text-3xl">
          <span className="font-thai">โครงการลำนำศิลป์ พื้นถิ่นไทย </span>
          <span className="font-andalos">(The Melody of Folk Art) Contest</span>
        </h2>
        <div className="text-sm md:mt-4 md:text-lg lg:text-xl">
          <Animation.TextReveal className="max-w-[95%] -space-y-2 pr-4 text-gray-700 lg:max-w-full lg:space-y-2">
            received the second runner-up award and popular vote award in this
            project, I served as the illustration
          </Animation.TextReveal>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="relative">
          <div className="absolute right-4 top-4 z-[1]">
            <FullVersionLink
              href={"https://www.youtube.com/watch?v=dC7IKYjgqos"}
            />
          </div>

          <Animation.ImageReveal once withScale end="bottom 90%">
            <VideoPlayer source={clip} />
          </Animation.ImageReveal>
        </div>

        <div className="hidden grid-cols-3 gap-2 lg:grid">
          <Animation.ImageReveal once withScale end="top center">
            <IllusImage src={pic01} alt="pic1" />
          </Animation.ImageReveal>
          <Animation.ImageReveal once withScale end="top center-=50">
            <IllusImage src={pic02} alt="pic2" />
          </Animation.ImageReveal>

          <Animation.ImageReveal once withScale end="top center-=100">
            <img
              src={pic03}
              alt="pic3"
              className="h-full w-full object-cover"
            />
          </Animation.ImageReveal>
        </div>
      </div>

      <div className="mt-2 lg:hidden">
        <CustomSwiper images={[pic01, pic02, pic03]} />
      </div>
    </div>
  );
}

export default MelodyOfFolk;
