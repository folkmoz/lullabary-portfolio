import React from "react";
import { getCloudinaryImage } from "~/lib/Cloudinary";
import useImagePreloader from "~hooks/useImagePreloader";
import KvTitle from "~components/Sections/creativity/components/KVTitle";
import KvParagraph from "~components/Sections/creativity/components/KVParagraph";
import TextHighlight from "~components/Sections/creativity/components/TextHighlight";
import CustomSwiper from "~components/Sections/experiences/components/CustomSwiper";

const pic01 = getCloudinaryImage("creativity/pr/01/01");
const pic02 = getCloudinaryImage("creativity/pr/01/02");
const pic03 = getCloudinaryImage("creativity/pr/01/03");

const images = [pic01, pic02, pic03];

function GhostSeminar() {
  useImagePreloader([pic01, pic02, pic03]);
  return (
    <div>
      <KvTitle>
        <>
          [PR]{" "}
          <span className="font-thai font-normal">
            สัมมนา เรื่องผี ๆ เล่าดีไม่มีเอาท์
          </span>
        </>
      </KvTitle>
      <KvParagraph>
        For a seminar inviting P' Pong and P' Odd as speakers to discuss how to
        create popular ghost-themed radio shows that remain relevant today, I
        served as the PR,
        <TextHighlight>
          creating content for the page and promoting the seminar.
        </TextHighlight>
        I also <TextHighlight>created artwork for giveaways</TextHighlight> at
        the event, including stickers, postcards, and souvenirs for the
        speakers.
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

export default GhostSeminar;
