import React, { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "~/lib/utils/tailwindcss";

function CustomSwiper({
  height = "h-[200px] md:h-[250px]",
  width = "max-w-[300px] md:max-w-[350px]",
  showLabel = true,
  images,
}: {
  height?: string;
  width?: string;
  showLabel?: boolean;
  images: string[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div ref={ref} className="w-fit max-w-full overflow-hidden">
      <motion.div
        whileHover={{ cursor: "grab" }}
        whileTap={{ cursor: "grabbing" }}
        whileDrag={{ cursor: "grabbing" }}
        drag="x"
        dragConstraints={ref}
        className={cn("flex w-max gap-2", height)}
      >
        {images.map((image, index) => (
          <div key={index} className={cn("h-full w-auto", width)}>
            <img
              draggable={false}
              src={image}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </motion.div>

      {showLabel && (
        <div className="mt-2 flex justify-center pl-1">
          <span className="font-wagon text-xl italic text-black md:text-2xl">
            (Swipe to see more)
          </span>
        </div>
      )}
    </div>
  );
}

export default CustomSwiper;
