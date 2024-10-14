import React from "react";
import { getCloudinaryImage } from "~/lib/Cloudinary";
import KvTitle from "~components/Sections/creativity/components/KVTitle";
import TextHighlight from "~components/Sections/creativity/components/TextHighlight";
import CustomSwiper from "~components/Sections/experiences/components/CustomSwiper";
import useImagePreloader from "~hooks/useImagePreloader";
import KvParagraph from "~components/Sections/creativity/components/KVParagraph";

const pic01 = getCloudinaryImage("creativity/ kv/03/01");
const pic02 = getCloudinaryImage("creativity/ kv/03/02");
const pic03 = getCloudinaryImage("creativity/ kv/03/03");

const images = [pic01, pic02, pic03];

function TedxSilpakorn() {
  useImagePreloader(images);
  return (
    <div>
      <KvTitle>TEDxSilpakornU2023</KvTitle>
      <KvParagraph>
        I served as
        <TextHighlight>
          the Head Team Graphic for TEDXSilpakornU2023
        </TextHighlight>
        , a year-long talk show project, where I had the opportunity to create
        the
        <TextHighlight>Key Visual (KV)</TextHighlight>
        for the event in collaboration with my team members. I also
        <TextHighlight>
          proposed this year’s theme, “Dream Catcher”
        </TextHighlight>
        together with the team, which set the direction for TEDxSilpakornU2023
        throughout the year.
      </KvParagraph>
      <div className="mt-4">
        <CustomSwiper
          height="h-[300px] md:h-[500px] lg:h-[500px]"
          width="max-w-[400px] md:max-w-[1000px] lg:max-w-full"
          images={images}
        />
      </div>
    </div>
  );
}

export default TedxSilpakorn;
