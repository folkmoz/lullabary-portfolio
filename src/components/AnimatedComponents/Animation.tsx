import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "~/lib/utils/splitText";
import { useScreen } from "~hooks/useScreen";
import { config } from "~/config";

const Animation = () => {};

Animation.MagneticButton = function Animation({
  children,
}: {
  children: React.ReactElement;
}) {
  const magnetic = useRef<HTMLDivElement>(null);

  const isMobile = window.innerWidth < 768;

  useGSAP(() => {
    if (!magnetic.current || isMobile) return;

    const xTo = gsap.quickTo(magnetic.current, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const yTo = gsap.quickTo(magnetic.current, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    magnetic.current.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } =
        magnetic.current!.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x);
      yTo(y);
    });

    magnetic.current.addEventListener("mousedown", () => {
      gsap.to(magnetic.current, {
        scale: 0.95,
        duration: 0.3,
        ease: "power3.out",
      });
    });

    magnetic.current.addEventListener("mouseup", () => {
      gsap.to(magnetic.current, {
        scale: 1,
        duration: 0.3,
        ease: "power3.out",
      });
    });

    magnetic.current.addEventListener("mouseleave", () => {
      xTo(0);
      yTo(0);
    });
  }, [isMobile]);

  return React.cloneElement(children, { ref: magnetic });
};

Animation.TextReveal = function Animation({
  children,
  className = "",
  start = "",
  end = "",
}: {
  children: React.ReactNode;
  className?: string;
  start?: string;
  end?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { device } = useScreen();

  useGSAP(
    () => {
      if (!device || device === "mobile") {
        return;
      }

      const splitText = new SplitText(ref.current);

      if (config.isPreview) return;

      gsap.from(splitText.lines, {
        duration: 1,
        y: 200,
        ease: "power4.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ref.current,
          start: start ? start : undefined,
          end: end ? end : undefined,
          once: true,
        },
      });
    },
    {
      scope: ref,
      dependencies: [device],
    },
  );

  return React.createElement(
    "div",
    {
      ref,
      className,
    },
    children,
  );
};
Animation.ImageReveal = function Animation({
  children,
  once = false,
  withScale = false,
  className = "",
  start = "top bottom",
  end = "bottom top",
}: {
  children: React.ReactNode;
  once?: boolean;
  withScale?: boolean;
  className?: string;
  start?: string;
  end?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { device } = useScreen();

  useGSAP(() => {
    if (!device || device === "mobile") {
      return;
    }

    const tl = gsap.timeline();

    tl.from(ref.current, {
      clipPath: "inset(100% 0 0 0)",
      scrollTrigger: {
        trigger: ref.current,
        start: start,
        end: end,
        scrub: 1,
        once: once,
        toggleActions: once ? "play none none none" : "play none none none",
      },
    });

    if (withScale) {
      const img = ref.current!.firstChild as HTMLImageElement;

      img.style.transformOrigin = "center";
      img.style.willChange = "transform";

      tl.from(
        img,
        {
          ease: "none",
          scale: 1.5,
          scrollTrigger: {
            trigger: ref.current,
            start: "top bottom",
            end: "bottom bottom",
            once: true,
            toggleActions: "play none none none",
            scrub: 1,
          },
        },
        0,
      );
    }
  }, [device]);

  return React.createElement(
    "div",
    {
      ref,
      className,
      style: {
        overflow: withScale ? "hidden" : "visible",
        clipPath: "inset(0% 0% 0% 0%)",
      },
    },
    children,
  );
};
Animation.Slide = function Animation({
  direction = "top",
  start = "top bottom",
  end = "+=100",
  once = false,
  children,
}: {
  start?: string;
  end?: string;
  direction?: "top" | "bottom" | "left" | "right";
  once?: boolean;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(ref.current, {
      opacity: 0,
      y: direction === "top" ? 50 : direction === "bottom" ? -50 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
      scrollTrigger: {
        trigger: ref.current,
        start: start,
        end: end,
        scrub: once ? 0 : 1,
        once: once,
      },
    });
  }, []);

  return React.cloneElement(children as React.ReactElement, {
    ref,
  });
};

export default Animation;
