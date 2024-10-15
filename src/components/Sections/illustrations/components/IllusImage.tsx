import React from "react";
import ImagePortal from "~components/ImagePortal";

function IllusImage({ src, alt }: { src: string; alt: string }) {
  return (
    <ImagePortal src={src} alt={alt} className="h-full w-full object-cover" />
  );
}

export default IllusImage;
