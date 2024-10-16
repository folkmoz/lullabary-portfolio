import React from "react";
import { getCloudinaryImage } from "~/lib/Cloudinary";
import KvTitle from "~components/Sections/creativity/components/KVTitle";
import TextHighlight from "~components/Sections/creativity/components/TextHighlight";
import CustomSwiper from "~components/Sections/experiences/components/CustomSwiper";
import useImagePreloader from "~hooks/useImagePreloader";
import KvParagraph from "~components/Sections/creativity/components/KVParagraph";

const pic01 = getCloudinaryImage("creativity/ kv/02/01");
const pic02 = getCloudinaryImage("creativity/ kv/02/02");

const images = [pic01, pic02];

function DentaMate() {
  useImagePreloader(images);
  return (
    <div>
      <KvTitle>
        <>
          <span className="font-thai font-normal">พกยิ้ม... พกทุกที่ พก </span>
          Denta Mate (Advertising Campaign)
        </>
      </KvTitle>
      <KvParagraph>
        I was responsible for creating the{" "}
        <TextHighlight>Key Visual(KV)</TextHighlight> for the advertising
        campaign of DENTA MATE toothpaste as part of the AD204 advertising
        course. And collaborated on brainstorming various ideas for this
        project.
      </KvParagraph>
      <div className="mt-4">
        <CustomSwiper
          height="h-[300px] md:h-[500px] lg:h-[500px]"
          width="md:max-w-[1000px] lg:max-w-full"
          images={images}
        />
      </div>
    </div>
  );
}

export default DentaMate;
