import React from "react";
import { getCloudinaryImage } from "~/lib/Cloudinary";
import useImagePreloader from "~hooks/useImagePreloader";
import KvTitle from "~components/Sections/creativity/components/KVTitle";
import BadgeImage from "~components/BadgeImage";

const logo01 = getCloudinaryImage("graphic/04/01");
const logo02 = getCloudinaryImage("graphic/04/02");
const logo03 = getCloudinaryImage("graphic/04/03");
const logo04 = getCloudinaryImage("graphic/04/04");
const logo05 = getCloudinaryImage("graphic/04/05");
const logo06 = getCloudinaryImage("graphic/04/06");
const logo07 = getCloudinaryImage("graphic/04/07");
const logo08 = getCloudinaryImage("graphic/04/08");
const logo09 = getCloudinaryImage("graphic/04/09");

const images = [
  logo01,
  logo02,
  logo03,
  logo04,
  logo05,
  logo06,
  logo07,
  logo08,
  logo09,
];

function Logos() {
  useImagePreloader(images);
  return (
    <div className="bg-white p-4 lg:py-8">
      <div className="text-center">
        <h2 className="font-monotes text-2xl font-bold md:text-4xl lg:text-7xl xl:text-[9vw]">
          Logo design
        </h2>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 lg:mt-10 lg:gap-8">
        {images.map((image, index) => (
          <BadgeImage
            src={image}
            alt={`logo ${index + 1}`}
            key={index}
            isPopup
          />
        ))}
      </div>
    </div>
  );
}

export default Logos;
