import React from "react";
import { getCloudinaryImage } from "~/lib/Cloudinary";
import useImagePreloader from "~hooks/useImagePreloader";
import ImagePortal from "~components/ImagePortal";
import Animation from "~components/AnimatedComponents/Animation";
import CustomSwiper from "~components/Sections/experiences/components/CustomSwiper";

const logo = getCloudinaryImage("graphic/02/logo");
const pic01 = getCloudinaryImage("graphic/02/01");
const pic02 = getCloudinaryImage("graphic/02/02");
const pic03 = getCloudinaryImage("graphic/02/03");
const pic04 = getCloudinaryImage("graphic/02/04");
const pic05 = getCloudinaryImage("graphic/02/05");
const pic06 = getCloudinaryImage("graphic/02/06");

const images = [logo, pic01, pic02, pic03, pic04, pic05, pic06];
function ArtditStudio() {
  useImagePreloader(images);
  return (
    <div>
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-20">
        <div className="flex-1">
          <div className="mb-2">
            <h2 className="text-center font-andalos text-2xl md:text-4xl">
              <Animation.TextReveal>Ar(t)dit Studio</Animation.TextReveal>
            </h2>
          </div>
          <Animation.ImageReveal once withScale end="top 40%">
            <img
              src={logo}
              alt={"Ar(t)dit Studio logo"}
              className="w-full max-w-full object-cover"
            />
          </Animation.ImageReveal>
        </div>
        <div className="flex flex-1 flex-col justify-between">
          <div className="lg:pt-10">
            <Animation.TextReveal>
              ar(t)dit studio is an art studio that creates various types of
              artwork,such as visualizers, motion graphics, illustrations, and
              art direction for different media. I co-founded this studio with
              my friends,I handle the illustrations and graphic design.
              Additionally, our studio offers custom-designed and hand-drawn
              screen-printed T-shirts.
            </Animation.TextReveal>
          </div>
          <div className="mb-4 flex justify-center">
            <div className="w-2/3">
              <a
                href="https://arditstudio.wixsite.com/ar-t-dit-studio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Animation.MagneticButton>
                  <button className="mt-4 w-full rounded-full bg-white/50 px-4 py-2 font-andalos text-xl shadow md:px-6 md:text-2xl lg:text-4xl">
                    check it out!
                  </button>
                </Animation.MagneticButton>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <CustomSwiper
          height="h-[300px] md:h-[500px] lg:h-[500px]"
          width="max-w-[400px] md:max-w-[1000px] lg:max-w-full"
          images={images.slice(1)}
          showLabel={false}
        />
      </div>
    </div>
  );
}

export default ArtditStudio;
