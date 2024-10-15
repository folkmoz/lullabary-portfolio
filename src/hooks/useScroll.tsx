import { useLenis } from "@studio-freight/react-lenis";
import { useMemo } from "react";
import { isMobile } from "react-device-detect";

export default function useScroll() {
  const lenis = useLenis();

  const disableScroll = useMemo(() => {
    return () => {
      document.body.style.overflow = "hidden";
      document.body.style.marginRight = `${isMobile ? 0 : 17}px`;

      lenis?.stop();
    };
  }, []);

  const enableScroll = useMemo(() => {
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.marginRight = "";

      lenis?.start();
    };
  }, []);

  return { disableScroll, enableScroll };
}
