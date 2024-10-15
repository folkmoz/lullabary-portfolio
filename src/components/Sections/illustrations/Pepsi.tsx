import React from "react";
import CustomSwiper from "~components/Sections/experiences/components/CustomSwiper";
import useImagePreloader from "~hooks/useImagePreloader";
import Animation from "~components/AnimatedComponents/Animation";
import { getCloudinaryImage } from "~/lib/Cloudinary";

const pic01 = getCloudinaryImage("illustrations/02/01");
const pic02 = getCloudinaryImage("illustrations/02/02");
const pic03 = getCloudinaryImage("illustrations/02/03");
const pic04 = getCloudinaryImage("illustrations/02/04");
const pic05 = getCloudinaryImage("illustrations/02/05");
const pic06 = getCloudinaryImage("illustrations/02/06");

const images = [pic01, pic02, pic03, pic04, pic05, pic06];

function Pepsi() {
  useImagePreloader(images);

  return (
    <div className="mt-10 flex h-full w-full flex-col">
      <div className="mb-4 space-y-1">
        <h2 className="flex flex-col font-bold lg:flex-row">
          <span className="font-thai md:text-3xl">
            PEPSIPresentedTPOPconfest2
          </span>
          <span className="font-andalos text-sm md:text-xl lg:ml-4">
            Draw a standee for the band CAC (Club after class)
          </span>
        </h2>
        <div className="text-sm md:mt-4 md:text-lg lg:text-xl">
          <Animation.TextReveal className="-space-y-2 text-gray-700 lg:space-y-2">
            to be displayed at the TPOPconcertfest2. I designed some of the
            clothing for the standee to align with the CAC concept.
          </Animation.TextReveal>
        </div>
      </div>

      <div>
        <CustomSwiper
          height="h-[200px] md:h-[300px] lg:h-[400px]"
          width="max-w-[300px] md:max-w-[400px] lg:max-w-[600px]"
          images={images}
        />
      </div>
    </div>
  );
}

export default Pepsi;
