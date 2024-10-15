import React, { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import Portal from "~components/Portal";

type ImagePortalModalProps = PropsWithChildren<{
  onClose: () => void;
}>;

function ImagePortalModal({ children, onClose }: ImagePortalModalProps) {
  return (
    <Portal>
      <motion.div
        onClick={onClose}
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
        {children}
      </motion.div>
    </Portal>
  );
}

export default ImagePortalModal;
