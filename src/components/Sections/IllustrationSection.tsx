import React from "react";
import { getCloudinaryImage } from "~/lib/Cloudinary";
import useImagePreloader from "~hooks/useImagePreloader";
import MelodyOfFolk from "~components/Sections/illustration/MelodyOfFolk";
import Pepsi from "~components/Sections/illustration/Pepsi";
import MVs from "~components/Sections/illustration/MVs";

const headline = getCloudinaryImage("illustration/headline");

function IllustrationSection() {
  useImagePreloader([headline]);

  return (
    <section
      id="illustration"
      className="relative flex w-full flex-col overflow-hidden bg-gradient-to-b from-[#51a1b7] to-[#f0f4c8]"
    >
      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col gap-4 p-4">
        <div className="md:-mb-28 xl:-mx-8">
          <img
            src={headline}
            alt="Illustration section logo"
            className="w-full max-w-full object-contain"
          />
        </div>

        <MelodyOfFolk />
        <Pepsi />
        <MVs />
      </div>

      <div className="min-h-lvh"></div>
    </section>
  );
}

export default IllustrationSection;
