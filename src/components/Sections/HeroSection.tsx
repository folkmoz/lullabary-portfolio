import primaryBg from "~assets/bg/bg-primary.png";
import fish2 from "~assets/fish2.png";
import fish1 from "~assets/fish1.png";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { useLenis } from "@studio-freight/react-lenis";
import { useScreen } from "~/hooks/useScreen";
function HeroSection({
  isPreloading,
  rootElm,
}: {
  isPreloading: boolean;
  rootElm: React.RefObject<HTMLDivElement>;
}) {
  const textHeadingRef = useRef<HTMLHeadingElement>(null);
  const fish1Ref = useRef<HTMLDivElement>(null);
  const fish2Ref = useRef<HTMLDivElement>(null);

  const heroSectionRef = useRef<HTMLDivElement>(null);

  const { width, height } = useScreen();
  const lenis = useLenis();

  // useEffect(() => {
  //   if (isPreloading) {
  //     lenis?.stop();
  //     const aside = Math.ceil(width / 2 - 300);
  //     const top = Math.ceil(height / 2 - 300);
  //
  //     heroSectionRef!.current!.style.clipPath = `inset(${top}px ${aside}px ${top}px ${aside}px)`;
  //   }
  // }, [heroSectionRef, width, height, isPreloading, lenis]);

  useGSAP(() => {
    gsap.to(fish1Ref.current, {
      rotate: 0,
      x: -700,
      y: 300,
      ease: "hop",
      scrollTrigger: {
        trigger: rootElm.current,
        start: "top top",
        end: "+=350%",
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
  }, []);

  // useGSAP(() => {
  //   if (!isPreloading) {
  //     gsap.to(heroSectionRef.current, {
  //       clipPath: "inset(0px 0px)",
  //       duration: 1,
  //       ease: "expo.inOut",
  //       onComplete: () => {
  //         heroSectionRef.current!.style.clipPath = "unset";
  //         lenis?.start();
  //         document.body.style.overflow = "auto";
  //
  //         gsap.to(textHeadingRef.current, {
  //           opacity: 1,
  //           duration: 1,
  //           ease: "expo.inOut",
  //         });
  //
  //         gsap.fromTo(
  //           fish1Ref.current,
  //           {
  //             rotate: -60,
  //             x: 150,
  //             y: -150,
  //           },
  //           {
  //             rotate: -45,
  //             x: 0,
  //             y: 0,
  //             opacity: 1,
  //             duration: 1.5,
  //             ease: "power4.inOut",
  //           },
  //         );
  //
  //         gsap.fromTo(
  //           fish2Ref.current,
  //           {
  //             rotate: -80,
  //             x: 100,
  //             y: 150,
  //           },
  //           {
  //             rotate: -45,
  //             x: 0,
  //             y: 0,
  //             opacity: 1,
  //             duration: 1.5,
  //             ease: "power4.inOut",
  //           },
  //         );
  //       },
  //     });
  //   }
  // }, [isPreloading]);

  return (
    <section
      ref={heroSectionRef}
      className="pointer-events-none relative flex min-h-svh w-full flex-col justify-center"
    >
      <div className="">
        <h1
          ref={textHeadingRef}
          className="overflow-hidden text-center font-le-murmure text-[15vw] font-bold uppercase leading-none"
        >
          <TextGradient>Dollaphat</TextGradient>
          <TextGradient>Portfolio</TextGradient>
        </h1>
      </div>

      <div className="mx-auto w-full max-w-screen-md pl-20 text-left xl:pl-10">
        <div className="space-y-2 text-black">
          <p>welcome, everyone!</p>
          <p>this is my fish tank.</p>
          <p>would you like to see</p>
          <p>what kind of fish caught?</p>
        </div>
      </div>

      <div
        style={{
          zIndex: -1,
          background: `url(${primaryBg}) no-repeat center bottom/cover`,
        }}
        className="fixed inset-0 bg-primary"
      ></div>

      <div
        ref={fish2Ref}
        className="pointer-events-none absolute left-0 z-0 -rotate-45 select-none lg:size-[600px] xl:top-[20%] xl:size-[1000px] 2xl:size-[1200px]"
      >
        <img src={fish2} alt="fish2" />
      </div>

      <div
        ref={fish1Ref}
        className="absolute -right-[10%] top-[40%] -rotate-45 xl:size-[1000px] 2xl:size-[1200px]"
      >
        <img src={fish1} alt="fish1" />
      </div>
    </section>
  );
}

const TextGradient = ({ children }) => {
  return (
    <div className="bg-gradient-to-r from-[#d8232f] to-[#ffa600] bg-clip-text text-transparent">
      {children}
    </div>
  );
};

export default HeroSection;
