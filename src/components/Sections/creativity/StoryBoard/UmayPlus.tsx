import React from "react";
import { getCloudinaryImage } from "~/lib/Cloudinary";
import KvTitle from "~components/Sections/creativity/components/KVTitle";
import useImagePreloader from "~hooks/useImagePreloader";
import ImagePortal from "~components/ImagePortal";

const pic01 = getCloudinaryImage("creativity/storyboard/01/01");

function UmayPlus() {
  useImagePreloader([pic01]);
  return (
    <div>
      <KvTitle className="text-black">
        <>
          Umay+ “MONEY FITNESS” Season 3 Storyboard for MV contest <br />{" "}
          <span className="mb-2 block" />
          “ชีวิตติดหนี้…Gen Z จัดการได้”
        </>
      </KvTitle>

      <div className="mt-4">
        <ImagePortal src={pic01} alt="Umay+ storyboard 1" />
      </div>
    </div>
  );
}

export default UmayPlus;
