import React from "react";
import { getCloudinaryImage } from "~/lib/Cloudinary";
import useImagePreloader from "~hooks/useImagePreloader";
import KvTitle from "~components/Sections/creativity/components/KVTitle";
import KvParagraph from "~components/Sections/creativity/components/KVParagraph";
import TextHighlight from "~components/Sections/creativity/components/TextHighlight";
import CustomSwiper from "~components/Sections/experiences/components/CustomSwiper";

const pic01 = getCloudinaryImage("creativity/pr/02/01");
const pic02 = getCloudinaryImage("creativity/pr/02/02");
const pic03 = getCloudinaryImage("creativity/pr/02/03");

const images = [pic01, pic02, pic03];

function ExtremelyYes() {
  useImagePreloader([pic01, pic02, pic03]);
  return (
    <div>
      <KvTitle>[PR] Extremely Yes!</KvTitle>
      <KvParagraph>
        I worked on a project for a cute women's jewelry shop as part of the
        BRS302 course. The shop primarily promotes and sells through social
        media channels. I served as part of the creative content team,
        developing the communication plan and handling video editing and some
        graphic design.
      </KvParagraph>
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

export default ExtremelyYes;
