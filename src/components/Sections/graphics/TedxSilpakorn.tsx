import React from "react";
import { getCloudinaryImage } from "~/lib/Cloudinary";
import KvParagraph from "~components/Sections/creativity/components/KVParagraph";
import TextHighlight from "~components/Sections/creativity/components/TextHighlight";
import CustomSwiper from "~components/Sections/experiences/components/CustomSwiper";
import KvTitle from "~components/Sections/creativity/components/KVTitle";
import useImagePreloader from "~hooks/useImagePreloader";
import Animation from "~components/AnimatedComponents/Animation";

const pic01 = getCloudinaryImage("graphic/01/01");
const pic02 = getCloudinaryImage("graphic/01/02");

const main01 = getCloudinaryImage("graphic/01/works/01");
const main02 = getCloudinaryImage("graphic/01/works/02");
const main03 = getCloudinaryImage("graphic/01/works/03");
const main04 = getCloudinaryImage("graphic/01/works/04");
const main05 = getCloudinaryImage("graphic/01/works/05");
const main06 = getCloudinaryImage("graphic/01/works/06");
const main07 = getCloudinaryImage("graphic/01/works/07");
const main08 = getCloudinaryImage("graphic/01/works/08");

const sub01 = getCloudinaryImage("graphic/01/works/sub01");
const sub02 = getCloudinaryImage("graphic/01/works/sub02");
const sub03 = getCloudinaryImage("graphic/01/works/sub03");
const sub04 = getCloudinaryImage("graphic/01/works/sub04");

const images = [pic01, pic02];
const mainImages = [
  main01,
  main02,
  main03,
  main04,
  main05,
  main06,
  main07,
  main08,
];
const subImages = [sub01, sub02, sub03, sub04];

function TedxSilpakorn() {
  useImagePreloader([...images, ...mainImages, ...subImages]);
  return (
    <div>
      <div>
        <KvTitle className="text-black md:text-center">
          Head team graphic TEDxSilpakornU2023
        </KvTitle>
        <KvParagraph>
          <TextHighlight>
            Head Team Graphic for TEDxSilpakornU2023, overseeing the overall
            artwork both on the tedxsilpakornu2023
          </TextHighlight>
          Fb, Ig page and at the event. Responsible for
          <TextHighlight>coordinating with other departments</TextHighlight>
          and{" "}
          <TextHighlight>managing communication within the team</TextHighlight>.
        </KvParagraph>
        <div className="mt-4">
          <CustomSwiper
            height="h-[300px] md:h-[500px] lg:h-[500px]"
            width="max-w-[400px] md:max-w-[1000px] lg:max-w-full"
            images={images}
          />
        </div>
      </div>

      <div className="mt-8">
        <KvTitle className="font-andalos text-black">
          My works as the head team graphic
        </KvTitle>
        <div className="mt-4">
          <CustomSwiper
            height="h-[300px] md:h-[500px] lg:h-[500px]"
            width="max-w-[400px] md:max-w-[1000px] lg:max-w-full"
            images={mainImages}
            showLabel={false}
          />
        </div>
        <div className="mt-2">
          <CustomSwiper
            height="h-[150px] lg:h-[300px]"
            width="max-w-full"
            images={subImages}
            showLabel={false}
          />
        </div>
        <div className="flex justify-center">
          <div>
            <a
              href="https://www.instagram.com/tedxsilpakornu2023/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Animation.MagneticButton>
                <button className="mt-4 rounded-full bg-white/50 px-4 py-2 font-andalos text-xl shadow md:px-6 md:text-2xl lg:text-4xl">
                  see tedxsilpakornu2023
                </button>
              </Animation.MagneticButton>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TedxSilpakorn;
