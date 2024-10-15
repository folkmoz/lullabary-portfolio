import React from "react";
import CustomSwiper from "~components/Sections/experiences/components/CustomSwiper";
import useImagePreloader from "~hooks/useImagePreloader";
import Animation from "~components/AnimatedComponents/Animation";
import { getCloudinaryImage } from "~/lib/Cloudinary";

const pic01 = getCloudinaryImage("illustration/06/01");
const pic02 = getCloudinaryImage("illustration/06/02");
const pic03 = getCloudinaryImage("illustration/06/03");
const pic04 = getCloudinaryImage("illustration/06/04");
const pic05 = getCloudinaryImage("illustration/06/05");
const pic06 = getCloudinaryImage("illustration/06/06");
const pic07 = getCloudinaryImage("illustration/06/07");
const pic08 = getCloudinaryImage("illustration/06/08");
const pic09 = getCloudinaryImage("illustration/06/09");
const pic10 = getCloudinaryImage("illustration/06/10");
const pic11 = getCloudinaryImage("illustration/06/11");
const pic12 = getCloudinaryImage("illustration/06/12");
const pic13 = getCloudinaryImage("illustration/06/13");

const images = [
  pic01,
  pic02,
  pic03,
  pic04,
  pic05,
  pic06,
  pic07,
  pic08,
  pic09,
  pic10,
  pic11,
  pic12,
  pic13,
];

function MagicalOfCreativity() {
  useImagePreloader(images);

  return (
    <div className="mt-10 flex h-full w-full flex-col">
      <div className="mb-4 space-y-1">
        <h2 className="flex flex-col font-bold lg:flex-row">
          <span className="font-thai md:text-3xl">
            BUCA Talent 11 The Magical Of Creativity
          </span>
        </h2>
        <div className="text-sm md:mt-4 md:text-lg lg:text-xl">
          <Animation.TextReveal className="-space-y-2 text-gray-700 lg:space-y-2">
            I am working on an illustration for a promotional clip for the BUCA
            Talent scholarship at Bangkok University.
          </Animation.TextReveal>
        </div>
      </div>

      <div>
        <CustomSwiper
          height="h-[200px] md:h-[300px] lg:h-[400px]"
          width="max-w-[300px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[700px]"
          images={images}
        />
      </div>
    </div>
  );
}

export default MagicalOfCreativity;
