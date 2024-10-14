import React from "react";
import { getCloudinaryImage } from "~/lib/Cloudinary";
import KvTitle from "~components/Sections/creativity/components/KVTitle";
import KvParagraph from "~components/Sections/creativity/components/KVParagraph";
import TextHighlight from "~components/Sections/creativity/components/TextHighlight";
import CustomSwiper from "~components/Sections/experiences/components/CustomSwiper";
import useImagePreloader from "~hooks/useImagePreloader";

const pic01 = getCloudinaryImage("creativity/ kv/05/01");
const pic02 = getCloudinaryImage("creativity/ kv/05/02");
const pic03 = getCloudinaryImage("creativity/ kv/05/03");

const images = [pic01, pic02, pic03];

function ChibiZaab() {
  useImagePreloader(images);
  return (
    <div>
      <KvTitle>Chibi ZAAB (KV)</KvTitle>
      <KvParagraph>
        I had the opportunity to
        <TextHighlight>draw a chibi Key Visual (KV)</TextHighlight>
        of Zaab Vtuber for the ZAAB Birthday event (ZAAB x Black Neko)at MBK.
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

export default ChibiZaab;
