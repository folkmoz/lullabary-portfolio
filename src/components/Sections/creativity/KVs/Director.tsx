import React from "react";
import { getCloudinaryImage } from "~/lib/Cloudinary";
import KvTitle from "~components/Sections/creativity/components/KVTitle";
import TextHighlight from "~components/Sections/creativity/components/TextHighlight";
import useImagePreloader from "~hooks/useImagePreloader";
import KvParagraph from "~components/Sections/creativity/components/KVParagraph";
import ImagePortal from "~components/ImagePortal";

const pic01 = getCloudinaryImage("creativity/ kv/04/01");
const pic02 = getCloudinaryImage("creativity/ kv/04/02");
const pic03 = getCloudinaryImage("creativity/ kv/04/03");

const images = [pic01, pic02, pic03];

function Director() {
  useImagePreloader(images);
  return (
    <div>
      <KvTitle>
        <span className="font-thai">
          สัมมนา การเดินทางคนทำหนัง... สู่ผู้กำกับร้อยล้าน
        </span>
      </KvTitle>
      <KvParagraph>
        สัมมนา การเดินทางคนทำหนัง สู่ผู้กำกับร้อยล้าน
        <TextHighlight>
          A seminar event featuring P'Mike, the director of 'Pee Nak' 1-4
        </TextHighlight>
        , who was invited to share his knowledge. I had the opportunity to
        <TextHighlight>create the Key Visual (KV)</TextHighlight>
        for the event, coordinate with the speaker, design the stage, and edit
        the event clips.
      </KvParagraph>
      <div className="mt-4">
        <div className="grid grid-cols-2 grid-rows-2 gap-2">
          <div className="col-span-1 row-span-2">
            <ImagePortal src={pic01} alt="" className="h-full" />
          </div>
          <div className="col-span-1">
            <ImagePortal src={pic02} alt="" />
          </div>

          <div className="col-span-1">
            <ImagePortal src={pic03} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Director;
