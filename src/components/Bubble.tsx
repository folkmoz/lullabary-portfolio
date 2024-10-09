import bubble1 from "~assets/bubble-1.webp";
import bubble2 from "~assets/bubble-2.webp";
import bubble3 from "~assets/bubble-3.webp";
import bubble4 from "~assets/bubble-4.webp";
import redBubble from "~assets/red-bubble.webp";
import bubbleFill from "~assets/profile/bub.png";
import bubbleBlur from "~assets/profile/bub-blur.png";
import bubbleMerge from "~assets/profile/bub-merge.png";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import useImagePreloader from "~/hooks/useImagePreloader";

export type BubbleType =
  | "bubble1"
  | "bubble2"
  | "bubble3"
  | "bubble4"
  | "red-bubble"
  | "bubble-fill"
  | "bubble-blur"
  | "bubble-merge";

export default function Bubble({
  type,
  drag = true,
  rotate = false,
  direction = "left",
}: {
  type: BubbleType;
  drag?: boolean;
  rotate?: boolean;
  direction?: "left" | "right";
}) {
  useImagePreloader([
    bubble1,
    bubble2,
    bubble3,
    bubble4,
    redBubble,
    bubbleFill,
    bubbleBlur,
    bubbleMerge,
  ]);

  const ref = useRef<HTMLImageElement>(null);
  const src = () => {
    switch (type) {
      case "bubble1":
        return bubble1;
      case "bubble2":
        return bubble2;
      case "bubble3":
        return bubble3;
      case "bubble4":
        return bubble4;
      case "red-bubble":
        return redBubble;
      case "bubble-fill":
        return bubbleFill;
      case "bubble-blur":
        return bubbleBlur;
      case "bubble-merge":
        return bubbleMerge;
    }
  };

  useEffect(() => {
    if (rotate) {
      gsap.to(ref.current, {
        rotate: direction === "left" ? -360 : 360,
        duration: 10,
        repeat: -1,
        ease: "none",
      });
    }
  }, [rotate, direction]);

  return (
    <>
      <motion.img
        drag={drag}
        draggable={false}
        ref={ref}
        src={src()}
        alt="bubble"
        className="absolute left-0 top-0 size-fit"
      />
    </>
  );
}
