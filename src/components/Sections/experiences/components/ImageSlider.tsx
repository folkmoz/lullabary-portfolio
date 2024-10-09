import { useScreen } from "~hooks/useScreen";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { cn } from "~/lib/utils/tailwindcss";

function ImageSlider({
  images,
  overlayColor = "from-secondary",
}: {
  images: string[];
  overlayColor?: string;
}) {
  const [isEnded, setIsEnded] = useState(true);

  const { device } = useScreen();

  return (
    <motion.div
      whileHover={{ cursor: "grab" }}
      whileDrag={{ cursor: "grabbing" }}
      whileTap={{ cursor: "grabbing" }}
      className="relative w-full"
    >
      <Swiper
        spaceBetween={8}
        slidesPerView={device === "tablet" ? 2 : "auto"}
        onReachEnd={() => {
          setIsEnded(true);
        }}
        onReachBeginning={() => {
          setIsEnded(false);
        }}
        onSnapIndexChange={(s) => {
          if (!s.isEnd) {
            setIsEnded(false);
          }
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="h-[200px] w-auto">
            <img
              src={image}
              className="h-[150px] max-w-[150px] object-cover object-center lg:h-full lg:w-full lg:max-w-fit"
              alt=""
            />
          </SwiperSlide>
        ))}

        {/*<div*/}
        {/*  className={cn(*/}
        {/*    "pointer-events-none absolute -right-2 bottom-0 top-0 z-[2] w-1/3 bg-gradient-to-l from-10% to-transparent transition-opacity duration-300 ease-in-out",*/}
        {/*    overlayColor,*/}
        {/*    isEnded ? "opacity-0" : "opacity-100",*/}
        {/*  )}*/}
        {/*></div>*/}
      </Swiper>
      <style>
        {`
          .swiper-slide {
    height: 250px!important;
    width: fit-content!important;
}

@media screen and (max-width: 768px) {
    .swiper-slide {
        height: 150px !important;
    }
}

        `}
      </style>
    </motion.div>
  );
}

export default ImageSlider;
