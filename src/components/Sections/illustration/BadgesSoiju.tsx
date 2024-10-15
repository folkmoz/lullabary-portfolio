import React from "react";
import { getCloudinaryImage } from "~/lib/Cloudinary";
import Animation from "~components/AnimatedComponents/Animation";
import useImagePreloader from "~hooks/useImagePreloader";
import ImagePortal from "~components/ImagePortal";

const pic01 = getCloudinaryImage("illustration/04/01");
const pic02 = getCloudinaryImage("illustration/04/02");

function BadgesSoiju() {
  useImagePreloader([pic01, pic02]);

  return (
    <div className="mt-10 flex w-full flex-col">
      <div className="mb-4 space-y-1">
        <h2 className="font-bold">
          <span className="font-thai md:text-3xl">
            Badges Soiju (Membership tier)
          </span>
        </h2>
      </div>

      <div>
        <ImagePortal
          src={pic01}
          alt="Badges Soiju membership tier"
          className="max-h-[300px] w-full max-w-full object-cover"
        />
      </div>
      <div>
        <Animation.ImageReveal once end="bottom center" start="top bottom">
          <ImagePortal
            src={pic02}
            alt="Badges Soiju membership tier"
            className="w-full max-w-full object-contain lg:w-1/2"
          />
        </Animation.ImageReveal>
      </div>
    </div>
  );
}

export default BadgesSoiju;
