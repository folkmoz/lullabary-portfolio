import React from "react";
import { getCloudinaryImage } from "~/lib/Cloudinary";
import useImagePreloader from "~hooks/useImagePreloader";
import KvTitle from "~components/Sections/creativity/components/KVTitle";
import CustomSwiper from "~components/Sections/experiences/components/CustomSwiper";

const pic01 = getCloudinaryImage("creativity/storyboard/02/01");
const pic02 = getCloudinaryImage("creativity/storyboard/02/02");

const images = [pic01, pic02];

function DentaMateStoryBoard() {
  useImagePreloader(images);
  return (
    <div>
      <KvTitle className="text-black">
        <>
          พกยิ้ม... พกทุกที่ พก Denta Mate Storyboard (Advertising course AD204)
        </>
      </KvTitle>

      <div className="mt-4">
        <CustomSwiper
          height="h-[300px] md:h-[500px] lg:h-[500px]"
          width="max-w-[1000px] lg:max-w-full"
          images={images}
        />
      </div>
    </div>
  );
}

export default DentaMateStoryBoard;
