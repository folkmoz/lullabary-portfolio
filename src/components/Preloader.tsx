import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import image1 from "../assets/hero/image-hero-1.jpg";
import image2 from "../assets/hero/image-hero-2.jpg";
import image3 from "../assets/hero/image-hero-3.jpg";
import image4 from "../assets/hero/image-hero-4.jpg";
import image5 from "../assets/hero/image-hero-5.jpg";
import image6 from "../assets/hero/image-hero-6.jpg";
import image7 from "../assets/hero/image-hero-7.jpg";
import image8 from "../assets/hero/image-hero-8.jpg";
import image9 from "../assets/hero/image-hero-9.jpg";
import image10 from "../assets/hero/image-hero-10.jpg";
import { config } from "~/config";
import useImagePreloader from "~hooks/useImagePreloader";

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

  const contianer = useRef<HTMLDivElement>(null);
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
            skewY: 20,
            duration: 1,
            ease: "power4.inOut",
            onStart: finishLoading,
            onComplete: () => {
              gsap.to(contianer.current, {
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
      ref={contianer}
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
        className="absolute bottom-0 right-4 flex h-[10vw] w-[10vw] items-center justify-center font-wagon text-[10vw] italic leading-[10vw] md:right-10 lg:right-16"
      >
        0
      </h1>
    </div>
  );
}

export default PreloaderCounter;
