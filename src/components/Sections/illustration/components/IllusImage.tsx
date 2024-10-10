import React from "react";

function IllusImage({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} className="h-full w-full object-cover" />;
}

export default IllusImage;
