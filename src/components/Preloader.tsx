import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { config } from "~/config";
import useImagePreloader from "~hooks/useImagePreloader";
import { getCloudinaryImage } from "~/lib/Cloudinary";

const image1 = getCloudinaryImage("hero/01");
const image2 = getCloudinaryImage("hero/02");
const image3 = getCloudinaryImage("hero/03");
const image4 = getCloudinaryImage("hero/04");
const image5 = getCloudinaryImage("hero/05");
const image6 = getCloudinaryImage("hero/06");
const image7 = getCloudinaryImage("hero/07");
const image8 = getCloudinaryImage("hero/08");
const image9 = getCloudinaryImage("hero/09");
const image10 = getCloudinaryImage("hero/10");

const heroImages = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
];

function PreloaderCounter({ finishLoading }: { finishLoading: () => void }) {
  useImagePreloader(heroImages);

  const container = useRef<HTMLDivElement>(null);
  const imageWrapper = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLHeadingElement>(null);

  let counter = 22;

  const startCounter = () => {
    const updateCounter = () => {
      if (counter >= 100) {
        return;
      }

      const reached90 = counter >= 90;

      const random = Math.floor(Math.random() * 10) + 1;
      const delay = Math.floor(Math.random() * 100) + 150;

      counter += reached90 ? Math.floor(Math.random() * 3) : random;

      if (counter > 97) {
        counter = 99;
      }

      counterRef.current!.textContent = `${counter}`;
      setTimeout(updateCounter, delay);
    };

    setTimeout(updateCounter, 500);
  };

  useGSAP(() => {
    if (config.isPreview) return;

    const images = imageWrapper.current!.querySelectorAll("img");

    gsap.fromTo(
      images,
      {
        clipPath: "inset(0 0 0 0)",
        scale: 1.2,
      },
      {
        delay: 0.5,
        clipPath: "inset(0 0 100% 0)",
        scale: 1,
        stagger: 0.3,
        duration: 1,
        ease: "expo.in",
        onStart: startCounter,
        onComplete: () => {
          counter = 100;

          counterRef.current!.textContent = `${counter}`;

          gsap.to(counterRef.current, {
            delay: 0.5,
            right: "-20%",
            opacity: 0,
            skewY: -20,
            duration: 1,
            ease: "power4.inOut",
            onStart: finishLoading,
            onComplete: () => {
              gsap.to(container.current, {
                delay: 1,
                display: "none",
                ease: "power4.inOut",
              });
            },
          });
        },
      },
    );
  }, []);

  if (config.isPreview) {
    return null;
  }

  return (
    <div
      ref={container}
      className="fixed inset-0 z-[9999] grid place-items-center font-varent text-[20vw] text-primary"
    >
      <div
        ref={imageWrapper}
        className="relative size-[300px] overflow-hidden md:size-[600px]"
      >
        {heroImages.map((image, index) => (
          <img
            style={{ clipPath: "inset(0 0 0 0)", zIndex: 10 - index }}
            key={index}
            src={image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        ))}
      </div>
      <h1
        ref={counterRef}
        className="absolute bottom-0 right-6 flex h-[10vw] w-[10vw] items-center justify-center px-4 font-wagon text-[10vw] italic leading-[10vw] md:right-10 lg:right-16"
      >
        0
      </h1>
    </div>
  );
}

export default PreloaderCounter;
