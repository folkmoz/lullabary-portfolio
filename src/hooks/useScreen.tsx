import { useEffect, useState } from "react";

export function useScreen() {
  const [screen, setScreen] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [device, setDevice] = useState<"mobile" | "tablet" | "desktop">();

  useEffect(() => {
    const handleResize = () => {
      setScreen({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      if (window.innerWidth <= 768) {
        setDevice("mobile");
      } else if (window.innerWidth <= 1180) {
        setDevice("tablet");
      } else {
        setDevice("desktop");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { ...screen, device };
}
