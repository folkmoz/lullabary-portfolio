import React from "react";
import { getCloudinaryImage } from "~/lib/Cloudinary";
import KvTitle from "~components/Sections/creativity/components/KVTitle";
import TextHighlight from "~components/Sections/creativity/components/TextHighlight";
import CustomSwiper from "~components/Sections/experiences/components/CustomSwiper";
import useImagePreloader from "~hooks/useImagePreloader";
import KvParagraph from "~components/Sections/creativity/components/KVParagraph";

const pic01 = getCloudinaryImage("creativity/ kv/01/01");
const pic02 = getCloudinaryImage("creativity/ kv/01/02");
const pic03 = getCloudinaryImage("creativity/ kv/01/03");
const pic04 = getCloudinaryImage("creativity/ kv/01/04");
const pic05 = getCloudinaryImage("creativity/ kv/01/05");

const images = [pic01, pic02, pic03, pic04, pic05];

function PoySlan() {
  useImagePreloader(images);
  return (
    <div>
      <KvTitle>Poy-Slan Campaign Contest 2023</KvTitle>
      <KvParagraph>
        <TextHighlight>
          Selected for the Poy-Sian Campaign Contest 2023.
        </TextHighlight>{" "}
        Creative Communication Arts (CCA) at Bangkok university, in
        collaboration with goldmint Products Co., Ltd. (Poy-sian) inhaler),
        participated in the contest. I was responsible for creating the{" "}
        <TextHighlight>KEY Visual (KV)</TextHighlight>
        with my team, under the concept of ‘Passing on happiness from generation
        to generation’. And created the storyboard.
      </KvParagraph>
      <div className="mt-4">
        <CustomSwiper
          height="h-[200px] md:h-[300px] lg:h-[400px]"
          width="max-w-[300px] md:max-w-[400px] lg:max-w-[600px]"
          images={images}
        />
      </div>
    </div>
  );
}

export default PoySlan;
