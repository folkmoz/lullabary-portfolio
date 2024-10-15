import React, { useEffect, useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ImagePortalModal from "~components/ImagePortalModal";
import useScroll from "~hooks/useScroll";

type ImagePortalProps = React.HTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
};

function ImagePortal(props: ImagePortalProps) {
  const [isOpened, setIsOpened] = useState(false);

  const id = useId();
  const { disableScroll, enableScroll } = useScroll();

  useEffect(() => {
    if (isOpened) {
      disableScroll();
    } else {
      enableScroll();
    }
  }, [isOpened]);

  return (
    <>
      <motion.img
        layoutId={id}
        src={props.src}
        onClick={() => setIsOpened(true)}
        alt={props.alt}
        className={props.className}
      />

      <AnimatePresence mode="wait">
        {isOpened && (
          <ImagePortalModal onClose={() => setIsOpened(false)}>
            <motion.img
              layoutId={id}
              src={props.src}
              alt=""
              className="z-[1] object-cover lg:max-h-[500px] xl:max-h-[800px]"
            />
          </ImagePortalModal>
        )}
      </AnimatePresence>
    </>
  );
}

export default ImagePortal;
