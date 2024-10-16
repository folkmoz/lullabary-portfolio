import React from "react";
import { getCloudinaryImage } from "~/lib/Cloudinary";
import useImagePreloader from "~hooks/useImagePreloader";
import Animation from "~components/AnimatedComponents/Animation";
import PoySlan from "~components/Sections/creativity/KVs/PoySlan";
import DentaMate from "~components/Sections/creativity/KVs/DentaMate";
import TedxSilpakorn from "~components/Sections/creativity/KVs/TedxSilpakorn";
import Director from "~components/Sections/creativity/KVs/Director";
import ChibiZaab from "~components/Sections/creativity/KVs/ChibiZaab";
import UmayPlus from "~components/Sections/creativity/StoryBoard/UmayPlus";
import DentaMateStoryBoard from "~components/Sections/creativity/StoryBoard/DentaMateStoryBoard";
import GhostSeminar from "~components/Sections/creativity/pr/GhostSeminar";
import ExtremelyYes from "~components/Sections/creativity/pr/ExtremelyYes";

const redStar = getCloudinaryImage("redStar02");
const fish = getCloudinaryImage("fish03");

const images = [redStar, fish];

function KeyVisual() {
  useImagePreloader(images);
  return (
    <div className="relative mx-auto mt-4 flex min-h-lvh w-full max-w-[1200px] flex-col gap-4 p-4 md:px-8 lg:mt-[20lvh] xl:px-4">
      <div className="-ml-4 mb-12 md:-ml-0">
        <div className="relative w-[min(100%,_800px)] rounded-r-full rounded-br-full bg-gradient-to-r from-white to-white/10 px-20 py-4 text-center">
          <h1 className="font-monotes text-2xl font-bold uppercase text-red-custom lg:text-5xl xl:text-7xl">
            Key Visual (KV)
          </h1>

          <Animation.Slide direction="right">
            <div className="absolute -top-2 right-0 size-[75px] md:w-[150px] lg:-right-40 lg:-top-[25px]">
              <img className="" src={redStar} alt="red star props" />
            </div>
          </Animation.Slide>

          <Animation.Slide direction="top">
            <div className="] absolute -top-1/2 right-[55%] w-[170px] md:right-14 md:w-[300px] lg:-top-full xl:-right-[20px] xl:-top-1/2">
              <img
                className="h-full w-full rotate-[-110deg] md:rotate-[200deg]"
                src={fish}
                alt="small fish props"
              />
            </div>
          </Animation.Slide>
        </div>
      </div>

      <div className="flex flex-col gap-10 lg:mt-[10vh]">
        <PoySlan />
        <DentaMate />
        <TedxSilpakorn />
        <Director />
        <ChibiZaab />

        <UmayPlus />
        <DentaMateStoryBoard />

        <GhostSeminar />
        <ExtremelyYes />
      </div>
    </div>
  );
}

export default KeyVisual;
