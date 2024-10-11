import fish2 from "~assets/fish2.png";
import fish1 from "~assets/fish1.png";
import primaryBg from "~assets/bg/bg-primary.webp";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { useLenis } from "@studio-freight/react-lenis";
import { useScreen } from "~/hooks/useScreen";
import { Parallax } from "~components/AnimatedComponents/Parallax";
import Bubble from "~components/Bubble";
import { cn } from "~/lib/utils/tailwindcss";
import { config } from "~/config";
import useImagePreloader from "~hooks/useImagePreloader";
function HeroSection({
  isPreloading,
  rootElm,
}: {
  isPreloading: boolean;
  rootElm: React.RefObject<HTMLDivElement>;
}) {
  useImagePreloader([fish1, fish2, primaryBg]);
  const textHeadingRef = useRef<HTMLHeadingElement>(null);
  const textSubHeadingRef = useRef<HTMLDivElement>(null);
  const fish1Ref = useRef<HTMLDivElement>(null);
  const fish2Ref = useRef<HTMLDivElement>(null);

  const heroSectionRef = useRef<HTMLDivElement>(null);

  const { width, height, device } = useScreen();
  const lenis = useLenis();

  useEffect(() => {
    if (config.isPreview) return;

    if (isPreloading && device) {
      lenis?.stop();

      const isMobile = device === "mobile";
      const isDesktop = device === "desktop";

      const size = isMobile ? 150 : 300;

      const aside = Math.ceil(width / 2 - size);
      const top = Math.ceil(height / 2 - size);
      const bottom = Math.ceil(height - size);

      heroSectionRef!.current!.style.clipPath = isDesktop
        ? `inset(${top}px ${aside}px ${bottom}px ${aside}px)`
        : `inset(${top}px ${aside}px ${top}px ${aside}px)`;
    }
  }, [isPreloading, device]);

  useGSAP(() => {
    const fish1Props = {
      mobile: {
        rotate: -30,
        x: 0,
        y: 250,
      },

      tablet: {
        rotate: -30,
        x: -100,
        y: 300,
      },

      desktop: {
        rotate: -30,
        x: -100,
        y: 500,
      },
    };

    if (!device) return;

    gsap.to(fish1Ref.current, {
      ...fish1Props[device],
      ease: "hop",
      scrollTrigger: {
        trigger: rootElm.current,
        start: "top top",
        end: "+=400%",
        scrub: 1,
      },
    });

    gsap.to(fish2Ref.current, {
      rotate: 0,
      x: 100,
      y: -200,
      ease: "hop",
      scrollTrigger: {
        trigger: rootElm.current,
        start: "top top",
        end: "+=350%",
        scrub: 1,
      },
    });
  }, [device, rootElm, config.isPreview]);

  useGSAP(() => {
    if (config.isPreview) return;

    const subHeading =
      textSubHeadingRef.current!.querySelectorAll(":scope > div p");

    gsap.set(subHeading, {
      yPercent: 100,
    });

    if (isPreloading || !device) return;

    const isDesktop = device === "desktop";

    gsap.to(heroSectionRef.current, {
      clipPath: isDesktop ? "inset(0px 0px 0px)" : "inset(0px 0px)",
      duration: 1,
      ease: "expo.inOut",
      onComplete: () => {
        const tl = gsap.timeline({
          defaults: {
            ease: "power4.inOut",
          },
          onComplete: () => {
            lenis?.start();
            heroSectionRef.current!.style.clipPath = "unset";
            document.body.style.overflow = "auto";
          },
        });

        tl.to(textHeadingRef.current, {
          opacity: 1,
          duration: 1,
          ease: "expo.inOut",
        }).to(subHeading, { yPercent: 0, stagger: 0.1, duration: 1.5 }, "<");

        tl.fromTo(
          fish1Ref.current,
          {
            rotate: -60,
            x: 150,
            y: -150,
          },
          {
            rotate: -45,
            x: 0,
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power4.inOut",
          },
          "-=1.5",
        ).fromTo(
          fish2Ref.current,
          {
            rotate: -80,
            x: 100,
            y: 150,
          },
          {
            rotate: -45,
            x: 0,
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power4.inOut",
          },
          "<",
        );
      },
    });
  }, [isPreloading, lenis, device]);

  return (
    <section
      id={"hero"}
      ref={heroSectionRef}
      style={{
        clipPath: config.isPreview ? "unset" : "inset(0px 0px 0px)",
      }}
      className="pointer-events-none relative flex min-h-lvh w-full flex-col justify-center lg:min-h-[150svh]"
    >
      <div className="mx-auto max-w-screen-md space-y-4 lg:-mt-[50vh] lg:space-y-0">
        <div>
          <h1
            ref={textHeadingRef}
            className={cn(
              "overflow-hidden text-center font-le-murmure text-8xl font-bold uppercase leading-none will-change-auto md:text-[16vw]",
              !config.isPreview && "opacity-0",
            )}
          >
            <TextGradient>Dollaphat</TextGradient>
            <TextGradient>Portfolio</TextGradient>
          </h1>
        </div>

        <div className="mx-auto w-full max-w-screen-md">
          <div
            ref={textSubHeadingRef}
            className="space-y-2 text-center font-wagon text-white md:text-2xl lg:pl-10 lg:text-left"
          >
            <div className="overflow-hidden">
              <p>welcome, everyone!</p>
            </div>
            <div className="overflow-hidden">
              <p>this is my fish tank.</p>
            </div>
            <div className="overflow-hidden">
              <p>would you like to see</p>
            </div>
            <div className="overflow-hidden">
              <p>what kind of fish I caught?</p>
            </div>
          </div>
        </div>
      </div>

      <Parallax
        speed={2}
        className="absolute right-10 top-20 size-24 md:left-40 md:size-40"
        triggerElm="#hero"
        start={"top top"}
        end={"bottom top"}
      >
        <Bubble type={"bubble1"} />
      </Parallax>

      <Parallax
        speed={2}
        className="absolute bottom-20 left-10 size-20 md:left-72 md:size-40"
      >
        <Bubble type={"bubble2"} direction="right" />
      </Parallax>

      <Parallax
        speed={3}
        className="absolute right-[90%] top-1/3 size-24 md:right-40 md:size-40"
        triggerElm="#hero"
        start={"top top"}
        end={"bottom top"}
      >
        <Bubble type={"bubble3"} />
      </Parallax>

      <div
        style={{
          zIndex: -1,
          background: `url(${primaryBg}) no-repeat center bottom/cover`,
        }}
        className="fixed inset-0 bg-white"
      ></div>

      <div
        ref={fish2Ref}
        className={cn(
          "pointer-events-none absolute -left-[5rem] top-[10%] z-0 size-[400px] -rotate-45 select-none will-change-transform",
          "sm:size-[500px]",
          "md:-left-[2.5rem] md:size-[600px]",
          "lg:left-[-2rem]",
          "xl:top-[20%] xl:size-[1000px] 2xl:size-[1200px]",
          !config.isPreview && "opacity-0",
        )}
      >
        <img src={fish2} alt="fish2" />
      </div>

      <div
        ref={fish1Ref}
        className={cn(
          "pointer-events-none absolute -right-[100%] top-[40%] size-[600px] -rotate-45 select-none will-change-transform",
          "md:-right-[70%] md:top-[30%] md:size-[1000px]",
          "lg:-right-[25%] lg:top-[40%]",
          "xl:size-[1000px] 2xl:size-[1200px]",
          !config.isPreview && "opacity-0",
        )}
      >
        <img src={fish1} alt="fish1" />
      </div>
    </section>
  );
}

const TextGradient = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gradient-to-r from-red-200 to-red-500 bg-clip-text text-transparent">
      {children}
    </div>
  );
};

export default HeroSection;
