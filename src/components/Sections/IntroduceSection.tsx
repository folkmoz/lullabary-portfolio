import React, { useRef } from "react";
import ColTextReveal from "~components/ColTextReveal";
import { gsap } from "gsap";
import { Parallax } from "~components/AnimatedComponents/Parallax";
import Bubble from "~components/Bubble";
import { useGSAP } from "@gsap/react";
import { getCloudinaryImage } from "~/lib/Cloudinary";
import BadgeImage from "~components/BadgeImage";
import { useLenis } from "@studio-freight/react-lenis";

const fish1 = getCloudinaryImage("fish01");
const blueStar = getCloudinaryImage("blueStar");
const profileBadge = getCloudinaryImage("status/profile");
const creativeBadge = getCloudinaryImage("status/creative");
const illustrationBadge = getCloudinaryImage("status/illust");
const graphicBadge = getCloudinaryImage("status/graphic");
const productionDesignBadge = getCloudinaryImage("status/production-design");

const badgeList = [
  { src: profileBadge, alt: "profile icon", target: "#profile-pinned" },
  {
    src: productionDesignBadge,
    alt: "production design icon",
    target: "#production-design",
    offset: 300,
  },
  { src: illustrationBadge, alt: "ilustration icon", target: "#illustrations" },
  { src: creativeBadge, alt: "creativity icon", target: "#creativity" },
  { src: graphicBadge, alt: "graphic icon", target: "#graphic" },
];

function IntroduceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const fish1Ref = useRef<HTMLImageElement>(null);

  const lenis = useLenis();

  const handleBadgeClick = ({
    target,
    offset = 0,
  }: {
    target: string;
    offset?: number;
  }) => {
    lenis?.scrollTo(target, {
      duration: 1.5,
      offset,
    });
  };

  useGSAP(
    () => {
      gsap.fromTo(
        fish1Ref.current,
        {
          x: 150,
          rotate: 0,
          y: 300,
        },
        {
          rotate: 40,
          x: -250,
          y: -150,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 1,
          },
        },
      );
    },
    {
      scope: containerRef,
      dependencies: [fish1Ref],
    },
  );

  // useEffect(() => {
  //   MotionPathPlugin.convertToPath("#flightPath");
  //   gsap.set("#flightPath", { rotation: 15 });
  //   gsap.to(["#circle_1", "#circle_2"], {
  //     duration: 20,
  //     motionPath: {
  //       path: "#flightPath",
  //       align: "#flightPath",
  //       alignOrigin: [0.5, 0.5],
  //     },
  //     ease: "none",
  //     repeat: -1,
  //     stagger: 0.5,
  //   });
  // }, []);

  return (
    <section
      ref={containerRef}
      id={"introduce"}
      className="relative flex w-full flex-col justify-start gap-4 pt-20 lg:pb-[40vh] xl:pt-60"
    >
      <div className="relative mx-auto flex w-full max-w-screen-lg flex-col items-start gap-4 px-4 md:px-16 lg:px-4">
        <div className="text-md w-full md:text-xl xl:text-3xl">
          <ColTextReveal
            threshold={1}
            height={"h-6 md:h-7 xl:h-8 lg:leading-9"}
          >
            <ColTextReveal.TextLine>
              The fish I've caught are all
            </ColTextReveal.TextLine>
            <ColTextReveal.TextLine>
              the experiences I've gathered
            </ColTextReveal.TextLine>
            <ColTextReveal.TextLine>
              throughout my journey at the University.
            </ColTextReveal.TextLine>
          </ColTextReveal>
        </div>

        <div className="mt-32 flex flex-col lg:mt-[40lvh] lg:flex-row">
          <div
            style={{
              transform: "scaleX(-1) translateX(50%) rotate(-20deg)",
            }}
            className="relative basis-[40%]"
          >
            <div ref={fish1Ref} className="absolute z-[1] size-[1000px]">
              <img src={fish1} alt="fish" className="hidden lg:block" />
            </div>
          </div>
          <div className="flex-1">
            <Parallax speed={-1}>
              <div className="pointer-events-auto relative flex h-full flex-col rounded-3xl bg-secondary px-6 py-8">
                <div className="mx-auto max-w-[80%] rounded-3xl bg-gradient-to-r from-[#DCE0B8] to-transparent p-4 font-andalos text-xl text-red-900 lg:text-2xl">
                  <p>Go check out what I've got!</p>
                </div>

                <div className="absolute left-4 top-4">
                  <img
                    className="size-16 opacity-80 lg:size-24"
                    src={blueStar}
                    alt="blue star icon"
                  />
                </div>

                <div className="absolute bottom-4 right-4">
                  <img
                    className="size-16 opacity-80 lg:size-24"
                    src={blueStar}
                    alt="blue star icon"
                  />
                </div>

                <div className="mt-4 grid grid-cols-3">
                  {badgeList.map((badge, index) => (
                    <BadgeImage
                      key={index}
                      {...badge}
                      isPopup
                      isScale
                      onClick={() =>
                        handleBadgeClick({
                          target: badge.target,
                          offset: badge.offset,
                        })
                      }
                    />
                  ))}
                </div>
              </div>
            </Parallax>
          </div>
        </div>

        {/*<svg*/}
        {/*  xmlns="http://www.w3.org/2000/svg"*/}
        {/*  width="400"*/}
        {/*  height="400"*/}
        {/*  viewBox="0 0 855.6 578.4"*/}
        {/*>*/}
        {/*  <path*/}
        {/*    fill={"none"}*/}
        {/*    strokeWidth={2}*/}
        {/*    stroke={"#fff"}*/}
        {/*    d="*/}
        {/*M 100, 100*/}
        {/*m 75, 0*/}
        {/*a 75,75 0 1,0 -150,0*/}
        {/*a 75,75 0 1,0  150,0*/}
        {/*"*/}
        {/*  />*/}
        {/*</svg>*/}

        <Parallax
          speed={-3}
          className="absolute right-0 top-20 size-24 md:size-40"
        >
          <Bubble type={"bubble2"} />
        </Parallax>

        <Parallax
          speed={-3}
          className="absolute -left-[5rem] bottom-0 size-24 md:size-40"
        >
          <Bubble type={"bubble2"} />
        </Parallax>

        <Parallax
          end="+=1200"
          speed={3}
          className="absolute -bottom-8 right-1/3 size-24 md:size-40"
        >
          <Bubble type={"bubble1"} />
        </Parallax>
      </div>

      <div className="absolute -bottom-1 w-full">
        <svg
          id="wave"
          viewBox="0 0 1440 160"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor="rgba(236, 237, 208, 1)" offset="0%"></stop>
              <stop stopColor="rgba(236, 237, 208, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#sw-gradient-0)"
            d="M0,96L26.7,90.7C53.3,85,107,75,160,66.7C213.3,59,267,53,320,66.7C373.3,80,427,112,480,109.3C533.3,107,587,69,640,50.7C693.3,32,747,32,800,45.3C853.3,59,907,85,960,82.7C1013.3,80,1067,48,1120,45.3C1173.3,43,1227,69,1280,77.3C1333.3,85,1387,75,1440,58.7C1493.3,43,1547,21,1600,10.7C1653.3,0,1707,0,1760,5.3C1813.3,11,1867,21,1920,32C1973.3,43,2027,53,2080,64C2133.3,75,2187,85,2240,82.7C2293.3,80,2347,64,2400,53.3C2453.3,43,2507,37,2560,34.7C2613.3,32,2667,32,2720,26.7C2773.3,21,2827,11,2880,26.7C2933.3,43,2987,85,3040,98.7C3093.3,112,3147,96,3200,96C3253.3,96,3307,112,3360,101.3C3413.3,91,3467,53,3520,50.7C3573.3,48,3627,80,3680,98.7C3733.3,117,3787,123,3813,125.3L3840,128L3840,160L3813.3,160C3786.7,160,3733,160,3680,160C3626.7,160,3573,160,3520,160C3466.7,160,3413,160,3360,160C3306.7,160,3253,160,3200,160C3146.7,160,3093,160,3040,160C2986.7,160,2933,160,2880,160C2826.7,160,2773,160,2720,160C2666.7,160,2613,160,2560,160C2506.7,160,2453,160,2400,160C2346.7,160,2293,160,2240,160C2186.7,160,2133,160,2080,160C2026.7,160,1973,160,1920,160C1866.7,160,1813,160,1760,160C1706.7,160,1653,160,1600,160C1546.7,160,1493,160,1440,160C1386.7,160,1333,160,1280,160C1226.7,160,1173,160,1120,160C1066.7,160,1013,160,960,160C906.7,160,853,160,800,160C746.7,160,693,160,640,160C586.7,160,533,160,480,160C426.7,160,373,160,320,160C266.7,160,213,160,160,160C106.7,160,53,160,27,160L0,160Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}

export default IntroduceSection;
