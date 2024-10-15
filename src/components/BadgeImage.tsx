import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { cn } from "~/lib/utils/tailwindcss";

const animations = [
  "animate-bounce",
  "animate-spin",
  "animate-scaleUp",
  "animate-rotateFrontBack",
  "animate-pulse",
  "animate-shake",
  "animate-heartbeat",
  "animate-flip",
];
const getRandomAnimation = () => {
  const randomIndex = Math.floor(Math.random() * animations.length);
  return animations[randomIndex];
};

function BadgeImage({
  src,
  alt,
  isPopup = false,
  isScale = false,
  onClick = () => {},
}: {
  src: string;
  alt: string;
  isPopup?: boolean;
  isScale?: boolean;
  onClick?: () => void;
}) {
  const divRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseOver = () => {
    const animationClass = getRandomAnimation();
    if (imgRef.current) {
      imgRef.current.classList.remove(...animations);

      imgRef.current.classList.add(animationClass);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(
        () => {
          if (imgRef.current) {
            imgRef.current.classList.remove(animationClass);
          }
        },
        Math.random() * 1000 + 2000,
      );
    }
  };

  const handleMouseOut = () => {
    if (imgRef.current) {
      imgRef.current.classList.remove(...animations);
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    if (!isPopup) return;

    if (divRef.current) {
      gsap.fromTo(
        divRef.current,
        { scale: 0 },
        {
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: imgRef.current,
            start: "top bottom",
            once: true,
          },
        },
      );
    }
  }, [isPopup]);

  return (
    <div
      ref={divRef}
      className={cn("grid place-items-center", {
        "cursor-pointer overflow-hidden": isScale,
      })}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={onClick}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={cn("transition-transform duration-300", {
          "scale-[1.3] rounded-full hover:scale-[1.3]": isScale,
        })}
      />
    </div>
  );
}

export default BadgeImage;
