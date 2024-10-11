import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Parallax } from "~components/AnimatedComponents/Parallax";
import Bubble, { BubbleType } from "~components/Bubble";
import { useScreen } from "~hooks/useScreen";
import { cn } from "~/lib/utils/tailwindcss";

import profileImage from "~assets/profile/profile.png";
import sponge01 from "~assets/profile/sponge01.png";
import sponge02 from "~assets/profile/sponge02.png";
import smallFish01 from "~assets/profile/smallFish01.png";
import smallFish02 from "~assets/profile/smallFish02.png";
import Animation from "~components/AnimatedComponents/Animation";

function ProfileSection() {
  const profileContainer = useRef<HTMLDivElement>(null);
  const whitespace = useRef<HTMLDivElement>(null);
  const sponge01Ref = useRef<HTMLImageElement>(null);
  const sponge02Ref = useRef<HTMLImageElement>(null);

  const { width, device } = useScreen();

  useGSAP(() => {
    gsap.from(sponge01Ref.current, {
      xPercent: 50,
      scrollTrigger: {
        trigger: whitespace.current,
        start: "top bottom",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    gsap.from(sponge02Ref.current, {
      xPercent: -50,
      scrollTrigger: {
        trigger: whitespace.current,
        start: "top bottom",
        end: "bottom bottom",
        scrub: 1,
      },
    });
  }, []);

  useGSAP(() => {
    if (device === "desktop") {
      ScrollTrigger.create({
        id: "profile-pinned",
        trigger: profileContainer.current!,
        start: "top top",
        end: "bottom bottom",
        endTrigger: whitespace.current!,
        scrub: true,
        pin: true,
      });
    } else {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.id === "profile-pinned") {
          trigger.kill();
        }
      });
    }
  }, [device]);

  const createBubble = () => {
    if (width < 768) {
      return null;
    }

    const bubblePositions = [
      "top-[10%] left-[5%]",
      "top-s[20%] left-[5%]",
      "top-[30%] left-[5%]",
      "top-[40%] left-[5%]",

      "top-[10%] right-[5%]",
      "top-[20%] right-[5%]",
      "top-[30%] right-[5%]",
      "top-[40%] right-[5%]",
      "top-[50%] right-[5%]",
      "top-[60%] right-[5%]",
      "top-[70%] right-[5%]",
      "top-[80%] right-[5%]",
      "top-[90%] right-[5%]",
    ];

    const bubbleSizes = [
      "size-12",
      "size-20",
      "md:size-24",
      "md:size-48",
      "md:size-36",
      "lg:size-60",
      "lg:size-72",
      "lg:size-96",
    ];

    const randomOpacity = () =>
      "opacity-[" + (Math.random() * 0.4 + 0.4).toFixed(2) + "]";

    const bubbleClasses = bubblePositions.map(
      (pos, index) =>
        `absolute ${pos} ${bubbleSizes[index % bubbleSizes.length]} ${randomOpacity()}`,
    );

    return (
      <>
        {Array.from({ length: 7 }).map((_, index) => (
          <Parallax
            key={index}
            triggerElm={"#whitespace-profile"}
            start={"top bottom"}
            end={"bottom top"}
            speed={Math.random() * 3 - 1.5}
            rotate={`${Math.floor(Math.random() * 360)}`}
            className={bubbleClasses[index % bubbleClasses.length]}
          >
            <Bubble
              type={
                `bubble-${["merge", "blur", "fill"][index % 3]}` as BubbleType
              }
            />
          </Parallax>
        ))}
      </>
    );
  };

  return (
    <section
      id="profile"
      className="relative -mb-1 flex w-full flex-col justify-center gap-4 overflow-hidden bg-secondary pt-40 xl:pt-52"
    >
      <div
        id="profile-pinned"
        ref={profileContainer}
        className="relative mx-auto h-full w-full max-w-[1200px] px-4 pb-[20svh] pt-8 md:p-10 lg:h-svh"
      >
        <div
          style={{
            boxShadow: "0 15px 0px 0px #80959F",
          }}
          className="h-full w-full overflow-hidden rounded-[150px] border border-primary bg-[#333] py-20 md:rounded-[250px] lg:py-10 xl:py-20"
        >
          <div className="flex h-full w-full flex-col bg-secondary px-2 pb-6 pt-6 md:px-8 md:pt-10 lg:flex-row lg:gap-0 lg:py-0 xl:pt-10">
            <div className="relative flex h-full flex-1 items-center">
              <img
                ref={sponge01Ref}
                src={sponge01}
                alt="sponge"
                className={cn("absolute top-0", {
                  "right-20": device === "tablet",
                  "right-0": device === "mobile",
                })}
              />

              <div className="relative z-[1] mx-auto h-[500px] overflow-hidden xl:h-[80%]">
                <img
                  src={smallFish02}
                  alt="small fish"
                  className="2xl:rotate-4 absolute bottom-0 right-0 max-w-[150px] translate-y-4 md:translate-y-0 2xl:max-w-[200px] 2xl:translate-y-2"
                />

                <img
                  src={smallFish01}
                  alt="small fish"
                  className="2xl:-rotate-8 absolute left-6 top-0 max-w-[150px] -translate-y-4 md:-translate-y-4 2xl:max-w-[200px]"
                />

                <img
                  src={profileImage}
                  alt="profile"
                  className="md:max-w-ful h-full object-cover"
                />
              </div>

              <img
                ref={sponge02Ref}
                src={sponge02}
                alt="sponge"
                className="absolute bottom-0"
              />
            </div>
            <div className="flex h-full flex-1 flex-col pt-4 lg:pb-10 lg:pr-8">
              <Animation.Slide direction="right">
                <div className="text-center font-andalos text-4xl leading-[6vw] md:text-3xl lg:-mb-4 lg:mt-4 lg:text-[6vw] xl:my-0">
                  <p>
                    <span className="uppercase text-[#AB100B]">Profile</span>
                  </p>
                </div>
              </Animation.Slide>
              <div className="mt-4 space-y-1 pl-4 md:mt-10 md:space-y-2 md:pl-10">
                <Describe title={"Name"} description={"Dollaphat Kumondee"} />
                <Describe title={"Nickname"} description={"Bam"} />
                <Describe title={"Age"} description={"22"} />
                <Describe title={"Nationality"} description={"Thai"} />
                <Describe
                  title={"Email"}
                  description={"Dollaphat.kmd@gmail.com"}
                />
                <Describe title={"Call"} description={"095-9826379"} />
              </div>

              <Animation.Slide start="top 90%" end="+=500">
                <div className="mt-4 h-max flex-1 rounded-[75px] rounded-tl-[0] border border-black p-4 xl:mt-10 2xl:flex-none">
                  <div className="h-full rounded-[75px] rounded-tl-[0] bg-[#dc919a] px-4 pb-8 2xl:pb-16">
                    <p className="pl-2 pr-4 pt-2 text-[12px] text-white sm:text-sm 2xl:text-base">
                      <span className="font-bold">
                        I’ve gathered many experiences
                      </span>{" "}
                      over the years while chasing my dream of sharing my art
                      with others. I love working in design and enjoy exploring
                      artistic compositions. I typically focus on doing what I
                      love, which helps me accumulate experiences to enhance my
                      creative art skills. I truly hope to have even more
                      opportunities to learn and grow. I’m excited to bring my
                      passion for art and design to your team. This internship
                      is a great opportunity for me to learn and grow. Thank you
                      for considering my application!
                    </p>
                  </div>
                </div>
              </Animation.Slide>
            </div>
          </div>
        </div>
      </div>

      <div
        id="whitespace-profile"
        ref={whitespace}
        className="relative hidden h-[120lvh] lg:block"
      >
        {createBubble()}

        <Parallax
          triggerElm={"#whitespace-profile"}
          start={"top bottom"}
          end={"bottom top"}
          speed={-1}
          rotate={"90"}
          className="absolute -right-20 top-[80%] size-24 lg:size-60"
        >
          <Bubble type={"bubble-merge"} />
        </Parallax>

        <Parallax
          triggerElm={"#whitespace-profile"}
          start={"top bottom"}
          end={"bottom top"}
          speed={-1}
          rotate={"100"}
          className="absolute -left-12 top-1/2 size-24 lg:size-72"
        >
          <Bubble type={"bubble-blur"} />
        </Parallax>

        <Parallax
          triggerElm={"#whitespace-profile"}
          start={"top bottom"}
          end={"bottom top"}
          speed={-1}
          rotate={"140"}
          className="absolute bottom-0 right-1/2 size-24 lg:size-72"
        >
          <Bubble type={"bubble-blur"} />
        </Parallax>

        <Parallax
          triggerElm={"#whitespace-profile"}
          start={"top bottom"}
          end={"bottom top"}
          speed={-1.5}
          rotate={"90"}
          className="absolute right-12 top-1/2 size-24 lg:size-48"
        >
          <Bubble type={"bubble-fill"} />
        </Parallax>

        <Parallax
          triggerElm={"#whitespace-profile"}
          start={"top bottom"}
          end={"bottom top"}
          speed={1.5}
          rotate={"60"}
          className="absolute -top-20 left-20 size-24 lg:size-48"
        >
          <Bubble type={"bubble-merge"} />
        </Parallax>

        <Parallax
          triggerElm={"#whitespace-profile"}
          start={"top bottom"}
          end={"bottom top"}
          speed={-2}
          rotate={"320"}
          className="absolute -right-40 -top-40 size-24 lg:size-96"
        >
          <Bubble type={"bubble-blur"} />
        </Parallax>
      </div>
    </section>
  );
}

const Describe = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Animation.Slide end="+=150">
      <div className="text-md flex gap-4 font-andalos md:text-xl">
        <p>{title}</p>
        <span>:</span>
        <p>{description}</p>
      </div>
    </Animation.Slide>
  );
};

export default ProfileSection;
