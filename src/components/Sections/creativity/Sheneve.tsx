import React from "react";
import { getCloudinaryImage } from "~/lib/Cloudinary";
import useImagePreloader from "~hooks/useImagePreloader";
import CreativeTitle from "~components/Sections/creativity/components/CreativeTitle";
import Animation from "~components/AnimatedComponents/Animation";

const pic01 = getCloudinaryImage("creativity/02/01");
const pic02 = getCloudinaryImage("creativity/02/02");

function Sheneve() {
  useImagePreloader([pic01, pic02]);
  return (
    <div className="mt-10">
      <CreativeTitle>Character design Sheneve Vtuber</CreativeTitle>

      <div className="mt-4">
        <Animation.ImageReveal once withScale end="top 20%">
          <img
            src={pic01}
            alt="Emma, Vtuber manager from VIBE ENT"
            className="w-full max-w-full object-cover"
          />
        </Animation.ImageReveal>
      </div>
      <div className="mt-4">
        <Animation.ImageReveal once withScale end="top 30%">
          <img
            src={pic02}
            alt="Emma, Vtuber manager from VIBE ENT"
            className="w-full max-w-full object-cover"
          />
        </Animation.ImageReveal>
      </div>
    </div>
  );
}

export default Sheneve;
