import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "~/lib/utils/tailwindcss";
import { useScreen } from "~hooks/useScreen";
import ImagePortalModal from "~components/ImagePortalModal";
import useScroll from "~hooks/useScroll";
import { isChrome } from "react-device-detect";

function CustomSwiper({
  height = "h-[200px] md:h-[250px]",
  width = "max-w-[300px] md:max-w-[350px]",
  showLabel = true,
  images,
  children,
}: {
  height?: string;
  width?: string;
  showLabel?: boolean;
  images: string[];
  children?: React.ReactNode;
}) {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>("");

  const timer = useRef<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isMounted = useRef(false);

  const { device } = useScreen();
  const id = useId();

  const { enableScroll, disableScroll } = useScroll();

  useEffect(() => {
    if (device === "mobile") {
      return;
    }

    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }

    if (selectedImage) {
      disableScroll();
    } else {
      enableScroll();
    }
  }, [selectedImage]);
  return (
    <div ref={ref} className="w-fit max-w-full overflow-hidden">
      <motion.div
        data-cursor="drag"
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => {
          if (timer.current) {
            clearTimeout(timer.current);
          }

          timer.current = setTimeout(() => {
            setIsDragging(false);
          }, 200) as unknown as number;
        }}
        whileHover={{ cursor: "grab" }}
        whileTap={{ cursor: "grabbing" }}
        whileDrag={{ cursor: "grabbing" }}
        drag="x"
        dragConstraints={ref}
        className={cn("flex w-max gap-2", height)}
      >
        {children}
        {images.map((image, index) => (
          <motion.div
            onClick={() => {
              if (isDragging || isChrome) return;
              setSelectedImage(image);
            }}
            key={index}
            className={cn("h-full w-auto bg-white", width)}
          >
            <motion.img
              layoutId={id + image}
              draggable={false}
              src={image}
              alt=""
              className="h-full w-full object-cover"
            />
          </motion.div>
        ))}
      </motion.div>

      {showLabel && (
        <div className="mt-2 flex justify-center pl-1">
          <span className="font-wagon text-xl italic text-black md:text-2xl">
            (Swipe to see more)
          </span>
        </div>
      )}

      <AnimatePresence mode="wait">
        {selectedImage && (
          <ImagePortalModal
            onClose={() => {
              setSelectedImage("");
            }}
          >
            <motion.img
              layoutId={id + selectedImage}
              src={selectedImage}
              alt=""
              className="z-[1] object-cover lg:max-h-[500px] xl:max-h-[800px]"
            />
          </ImagePortalModal>
        )}
      </AnimatePresence>
    </div>
  );
}

export default CustomSwiper;
