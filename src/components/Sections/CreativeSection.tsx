import React from "react";
import { getCloudinaryImage } from "~/lib/Cloudinary";
import Emma from "~components/Sections/creativity/Emma";
import Sheneve from "~components/Sections/creativity/Sheneve";
import useImagePreloader from "~hooks/useImagePreloader";
import KeyVisual from "~components/Sections/creativity/KeyVisual";

const headline = getCloudinaryImage("creativity/headline");

function CreativeSection() {
  useImagePreloader([headline]);
  return (
    <section
      id="creativity"
      className="relative flex min-h-lvh w-full flex-col overflow-hidden bg-gradient-to-t from-[#51a1b7] to-[#f0f4c8] py-20"
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

          <div>
            <div className="flex justify-between">
              <div className="w-max rounded-2xl bg-white px-4 py-2 shadow-2xl lg:px-8">
                <h2 className="font-bold">
                  <span className="font-varent text-red-custom md:text-3xl">
                    creative art
                  </span>
                </h2>
              </div>

              <div className="w-max rounded-2xl bg-white px-4 py-2 shadow-2xl lg:px-8">
                <h2 className="font-bold">
                  <span className="font-varent text-red-custom md:text-3xl">
                    creative content
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8 md:space-y-10">
          <Emma />
          <Sheneve />
        </div>
      </div>

      <KeyVisual />
    </section>
  );
}

export default CreativeSection;
