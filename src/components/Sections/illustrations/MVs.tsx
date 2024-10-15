import React from "react";
import VideoPlayer from "~components/Sections/experiences/components/Videoplayer";
import FullVersionLink from "~components/Sections/illustrations/components/FullVersionLink";
import Animation from "~components/AnimatedComponents/Animation";
import { getCloudinaryVideo } from "~/lib/Cloudinary";

const clip1 = getCloudinaryVideo("illustration/03/01");
const clip2 = getCloudinaryVideo("illustration/03/02");
const clip3 = getCloudinaryVideo("illustration/03/03");
const clip4 = getCloudinaryVideo("illustration/03/04");

const clips = [
  {
    src: clip1,
    href: "https://www.youtube.com/watch?v=VQfiD8kHH-8",
  },
  {
    src: clip2,
    href: "https://www.youtube.com/watch?v=xZxShhDN-So",
  },
  {
    src: clip3,
    href: "https://www.youtube.com/watch?v=9bZkp7q19f0",
  },
  {
    src: clip4,
    href: "https://www.youtube.com/watch?v=9bZkp7q19f0",
  },
];

function MVs() {
  return (
    <div className="mt-10 flex w-full flex-col">
      <div className="mb-4 space-y-1">
        <h2 className="font-bold">
          <span className="font-thai md:text-3xl">
            Illustrated for music videos (MV).
          </span>
        </h2>
      </div>

      <div className="flex flex-wrap gap-x-2 gap-y-8">
        {clips.map((clip, index) => (
          <MVPreviewItem
            key={index}
            src={clip.src}
            href={clip.href}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

function MVPreviewItem({
  src,
  href,
  index,
}: {
  src: string;
  href: string;
  index: number;
}) {
  return (
    <div className="flex w-full flex-col gap-4 lg:w-[calc(50%-8px)]">
      <Animation.ImageReveal
        once
        start="top bottom"
        end={`bottom center+=${index * 100}`}
      >
        <VideoPlayer source={src} />
      </Animation.ImageReveal>

      <div className="flex justify-center">
        <FullVersionLink href={href} />
      </div>
    </div>
  );
}

export default MVs;
