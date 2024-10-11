import React from "react";
import Animation from "~components/AnimatedComponents/Animation";

import pic01 from "~/assets/illustration/02/pic1.jpeg";
import pic02 from "~/assets/illustration/02/pic2.jpeg";
import pic03 from "~/assets/illustration/02/pic3.jpeg";
import CustomSwiper from "~components/Sections/experiences/components/CustomSwiper";
import useImagePreloader from "~hooks/useImagePreloader";

function Pepsi() {
  useImagePreloader([pic01, pic02, pic03]);

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
          width="max-w-[300px] md:max-w-[400px] xl:max-w-[600px]"
          images={[pic01, pic02, pic03]}
        />
      </div>
    </div>
  );
}

export default Pepsi;
