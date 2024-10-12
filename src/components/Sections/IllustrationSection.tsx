import React from "react";
import { getCloudinaryImage } from "~/lib/Cloudinary";
import useImagePreloader from "~hooks/useImagePreloader";
import MelodyOfFolk from "~components/Sections/illustration/MelodyOfFolk";
import Pepsi from "~components/Sections/illustration/Pepsi";
import MVs from "~components/Sections/illustration/MVs";
import BadgesSoiju from "~components/Sections/illustration/BadgesSoiju";

const headline = getCloudinaryImage("illustration/headline");

function IllustrationSection() {
  useImagePreloader([headline]);

  return (
    <section
      id="illustration"
      className="relative flex w-full flex-col overflow-hidden bg-gradient-to-b from-[#51a1b7] to-[#f0f4c8] pt-20"
    >
      <div className="absolute left-0 top-0 w-full -translate-y-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ECEDD0"
            d="M0,64L48,96C96,128,192,192,288,186.7C384,181,480,107,576,106.7C672,107,768,181,864,192C960,203,1056,149,1152,144C1248,139,1344,181,1392,202.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col gap-4 p-4 md:px-8 xl:px-4">
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
        <BadgesSoiju />
      </div>

      <div className="min-h-lvh">
        <div>
          <h1 className="font-bella text-[13vw]">Artworks</h1>
          <h1 className="font-bella text-[13vw]">Productions</h1>
        </div>
      </div>
    </section>
  );
}

export default IllustrationSection;
