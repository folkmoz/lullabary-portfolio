import React from "react";

import { gsap } from "gsap";
import { useInView } from "react-intersection-observer";
import { useGSAP } from "@gsap/react";
import { cn } from "~/lib/utils/tailwindcss";

function ColTextReveal({
  threshold = 0.5,
  height = "h-20",
  children,
}: {
  threshold?: number;
  height?: string;
  children: React.ReactNode;
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold,
  });

  const childrenArray = React.Children.toArray(
    children,
  ) as React.ReactElement[];

  const refsArray = childrenArray.map(() => React.createRef<HTMLDivElement>());

  useGSAP(() => {
    if (inView) {
      if (childrenArray.length > 0) {
        refsArray.forEach((ref, index) => {
          const paragraph = ref.current?.querySelector("p");

          if (paragraph) {
            gsap.to(paragraph, {
              y: 0,
              delay: index * 0.1,
              duration: 1,
              ease: "power3.out",
            });
          }
        });
      }
    }
  }, [inView]);
  return (
    <div ref={ref} className="font-wagon md:space-y-2">
      {React.Children.map(children, (child, index) => (
        <div
          key={index}
          ref={refsArray[index]}
          style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
          className={cn("relative h-full w-full leading-[1.5]", height)}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

ColTextReveal.TextLine = function ColTextRevealText({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="absolute translate-y-10 text-white will-change-transform">
      {children}
    </p>
  );
};

export default ColTextReveal;
