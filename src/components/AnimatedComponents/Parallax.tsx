import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { useScreen } from "~hooks/useScreen";
import { cn } from "~/lib/utils/tailwindcss";

export function Parallax({
  className,
  rotate = "",
  triggerElm,
  start = "top bottom",
  end = "bottom top",
  children,
  speed = 1,
  id = "parallax",
}: {
  rotate?: string;
  className?: string;
  triggerElm?: string;
  start?: string;
  end?: string;
  speed?: number;
  id?: string;
  children: React.ReactNode;
}) {
  const trigger = useRef<HTMLDivElement>(null);
  const target = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline>();
  const { width: windowWidth } = useScreen();

  useEffect(() => {
    const y = windowWidth * speed * 0.1;

    const setY = gsap.quickSetter(target.current, "y", "px");
    const setRotate = gsap.quickSetter(target.current, "rotate", "deg");

    timeline.current = gsap.timeline({
      scrollTrigger: {
        id: id,
        trigger: triggerElm
          ? document.querySelector(triggerElm)
          : trigger.current,
        scrub: true,
        start: start,
        end: end,
        onUpdate: (e) => {
          setY(e.progress * y);

          if (rotate) {
            const rotationValue = parseInt(rotate);
            setRotate(e.progress * rotationValue);
          }
        },
      },
    });

    return () => {
      timeline?.current?.kill();
    };
  }, [id, speed, windowWidth, start, end, triggerElm]);

  return (
    <div ref={trigger} className={cn(className, "pointer-events-none")}>
      <div ref={target} className="will-change-transform">
        {children}
      </div>
    </div>
  );
}
