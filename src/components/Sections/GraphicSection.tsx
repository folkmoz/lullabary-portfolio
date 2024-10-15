import React from "react";
import { getCloudinaryImage } from "~/lib/Cloudinary";
import useImagePreloader from "~hooks/useImagePreloader";
import TedxSilpakorn from "~components/Sections/graphics/TedxSilpakorn";
import ArtditStudio from "~components/Sections/graphics/ArtditStudio";
import GhostSeminar from "~components/Sections/graphics/GhostSeminar";
import Logos from "~components/Sections/graphics/Logos";

const headline = getCloudinaryImage("graphic/headline");
const bub01 = getCloudinaryImage("graphic/bub-01");
const bub02 = getCloudinaryImage("graphic/bub-02");
const bub03 = getCloudinaryImage("graphic/bub-03");
const bub04 = getCloudinaryImage("graphic/bub-04");

const images = [headline, bub01, bub02, bub03, bub04];

function GraphicSection() {
  useImagePreloader(images);
  return (
    <section
      id="graphic"
      className="relative flex min-h-lvh w-full flex-col overflow-hidden bg-gradient-to-b from-[#51a1b7] to-[#f0f4c8] py-20"
    >
      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col gap-4 p-4 md:px-8 xl:px-4">
        <div className="mb-12">
          <div className="md:-mb-10 xl:-mx-16">
            <img
              draggable={false}
              src={headline}
              alt="Creative section logo"
              className="w-full max-w-full object-contain"
            />
          </div>
        </div>

        <div className="space-y-8 md:space-y-10 lg:space-y-16">
          <TedxSilpakorn />
          <ArtditStudio />
          <GhostSeminar />
          <div className="mx-auto h-4 w-2/3 rounded-full bg-white"></div>
          <Logos />
        </div>
      </div>
    </section>
  );
}

export default GraphicSection;
