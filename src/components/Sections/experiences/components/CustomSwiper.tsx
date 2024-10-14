import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "~/lib/utils/tailwindcss";
import { useLenis } from "@studio-freight/react-lenis";
import Portal from "~components/Portal";

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
  const [isMounted, setIsMounted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>("");

  const timer = useRef<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const id = useId();
  const lenis = useLenis();

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
      return;
    }

    if (selectedImage) {
      lenis?.stop();
      document.body.style.marginRight = "17px";
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "auto";
      document.body.style.marginRight = "0px";
    }
  }, [selectedImage]);
  return (
    <div ref={ref} className="w-fit max-w-full overflow-hidden">
      <motion.div
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
        {images.map((image, index) => (
          <motion.div
            onClick={() => {
              if (isDragging) return;
              setSelectedImage(image);
            }}
            key={index}
            className={cn("h-full w-auto", width)}
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
          <Portal>
            <motion.div
              onClick={() => setSelectedImage("")}
              className="fixed inset-0 z-[999] grid place-items-center"
            >
              <motion.div
                animate={{
                  backdropFilter: "blur(8px)",
                  backgroundColor: "rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.3, ease: "easeInOut", delay: 0.1 },
                }}
                exit={{
                  backdropFilter: "blur(0px)",
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  transition: { duration: 0.3, ease: "easeInOut" },
                }}
                className="absolute left-0 top-0 z-[0] h-full w-full"
              />
              <motion.img
                layoutId={id + selectedImage}
                src={selectedImage}
                alt=""
                className="z-[1] object-cover lg:max-h-[500px] xl:max-h-[800px]"
              />
            </motion.div>
          </Portal>
        )}
      </AnimatePresence>
    </div>
  );
}

export default CustomSwiper;
