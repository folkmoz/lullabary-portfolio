import React, { useRef } from "react";
import { getCloudinaryImage } from "~/lib/Cloudinary";
import TextHighlight from "~components/Sections/creativity/components/TextHighlight";
import KvParagraph from "~components/Sections/creativity/components/KVParagraph";
import { Parallax } from "~components/AnimatedComponents/Parallax";
import Bubble, { BubbleType } from "~components/Bubble";
import { useScreen } from "~hooks/useScreen";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const profile = getCloudinaryImage("profile/profile");
const hardSkillSet = getCloudinaryImage("profile/hard-skill-set");
const sponge01 = getCloudinaryImage("profile/sponge-01");
const sponge02 = getCloudinaryImage("profile/sponge-02");
const smallFish01 = getCloudinaryImage("profile/small-fish-01");
const smallFish02 = getCloudinaryImage("profile/small-fish-02");

function ProfileSectionV2() {
  const profileContainer = useRef<HTMLDivElement>(null);
  const whitespace = useRef<HTMLDivElement>(null);

  const { width } = useScreen();

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
      "lg:size-24",
      "lg:size-48",
      "lg:size-36",
      "xl:size-60",
      "xl:size-72",
      "xl:size-96",
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
              drag={false}
              type={
                `bubble-${["merge", "blur", "fill"][index % 3]}` as BubbleType
              }
            />
          </Parallax>
        ))}
      </>
    );
  };

  useGSAP(() => {
    if (window.innerWidth < 1024) {
      return;
    }

    ScrollTrigger.create({
      id: "profile-pinned",
      trigger: profileContainer.current!,
      start: "top top",
      end: "bottom bottom",
      endTrigger: whitespace.current!,
      scrub: true,
      pin: true,
    });
  }, []);

  return (
    <section
      id="profile"
      className="relative -mb-1 flex w-full flex-col justify-center gap-4 overflow-hidden bg-secondary pt-40 xl:pt-52"
    >
      <div
        ref={profileContainer}
        id="prfile-pinned"
        className="relative h-full w-full bg-secondary pb-[20vh] lg:h-screen"
      >
        <div className="h-full w-full bg-black py-16">
          <div className="relative flex h-full w-full flex-col gap-4 bg-secondary py-10 lg:flex-row">
            <div className="flex h-full w-full flex-col pt-20 font-bella lg:w-2/5 lg:pt-4">
              <div className="h-max w-full text-center text-2xl uppercase leading-[5vw] text-red-custom md:text-[5vw]">
                Profile
              </div>
              <div className="lg:h-[min(100%,_600px)]">
                <img
                  src={profile}
                  alt="Dollaphat's avatar"
                  className="mx-auto h-full object-contain"
                />
              </div>
              <div className="flexjustify-center">
                <div className="relative text-center text-[5vw] leading-[5vw]">
                  <div className="uppercase">Creative</div>
                  <div className="uppercase">ART DIRECTOR</div>
                </div>
              </div>
            </div>

            <div className="flex h-full w-full flex-col gap-8 px-4 md:px-8 lg:w-3/5">
              <div className="rounded-3xl bg-white/60 px-6 py-4 lg:rounded-full lg:px-8">
                <KvParagraph>
                  <TextHighlight>
                    I have gained valuable experiences over the years
                  </TextHighlight>
                  while pursuing my dream of sharing my art. I enjoy working in
                  design and exploring artistic compositions, focusing on my
                  passions to enhance my creative skills. I look forward to
                  learning and growing through this internship and am
                  <TextHighlight>
                    excited to bring my passion for art and design for your
                    team.
                  </TextHighlight>
                  Thank you for considering my application!
                </KvParagraph>
              </div>

              <div className="flex flex-col gap-4 lg:flex-row">
                <div className="flex-1">
                  <Info title="Name" value="Dollaphat Kumondee" />
                  <Info title="Age" value="22" />
                  <Info title="Birth" value="9 Steptember 2002" />
                  <Info title="National" value="Thai" />
                  <Info title="Email" value="dollaphat.kmd@gmail.com" />
                  <Info title="Call" value="095-9826379" />
                  <Info title="Ig" value="_elledianss" />
                </div>

                <div className="flex-1 space-y-2">
                  <div className="text-2xl md:text-3xl">
                    <div className="font-monotes text-red-custom">
                      Education Background
                    </div>
                  </div>
                  <Education
                    primary="2018 – 2020 Yupparaj Wittayalai"
                    major="English – Japanese Program"
                  />

                  <Education
                    primary="2021 – Present"
                    major="Communication Arts<br> Broadcasting and Streaming Media"
                  />

                  <div className="w-2/3 rounded-full bg-white/60 px-1 text-xl md:w-max lg:text-2xl xl:w-1/2">
                    <span>Cum GPA :</span>
                    <span className="font-bold text-red-custom">3.89</span>
                  </div>
                </div>
              </div>

              <div className="relative mt-4 rounded-[2rem] bg-white/60 px-4 pb-6 pt-10 lg:mt-2">
                <div className="absolute -top-[20px] left-0 w-full lg:-left-4">
                  <div className="bg-pink-custom w-max rounded-full p-2">
                    <h3 className="text-3xl lg:text-4xl">
                      <span className="font-monotes uppercase">Hard Skill</span>
                    </h3>
                  </div>
                </div>

                <div>
                  <img
                    src={hardSkillSet}
                    alt="Hard Skill Set"
                    className="mx-auto object-cover"
                  />
                </div>

                <div className="mt-4">
                  <p className="md:text-xl2 text-center text-xl">
                    painting, design, digital art, traditional art,
                    storyboarding
                  </p>
                </div>
              </div>

              <div className="relative mt-4 rounded-[2rem] bg-white/60 px-4 pb-6 pt-10 lg:mt-2">
                <div className="absolute -top-[20px] left-0 w-full lg:-left-4">
                  <div className="bg-pink-custom w-max rounded-full p-2">
                    <h3 className="text-3xl lg:text-4xl">
                      <span className="font-monotes uppercase opacity-0">
                        Hard Skill
                      </span>
                    </h3>
                  </div>
                </div>

                <div className="mt-2">
                  <p className="text-center text-xl md:text-2xl">
                    Creativity, collaboration, adaptability,
                    <br /> critical thinking, communication
                  </p>
                </div>
              </div>
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
          <Bubble type={"bubble-merge"} drag={false} />
        </Parallax>

        <Parallax
          triggerElm={"#whitespace-profile"}
          start={"top bottom"}
          end={"bottom top"}
          speed={-1}
          rotate={"100"}
          className="absolute -left-12 top-1/2 size-24 lg:size-72"
        >
          <Bubble type={"bubble-blur"} drag={false} />
        </Parallax>

        <Parallax
          triggerElm={"#whitespace-profile"}
          start={"top bottom"}
          end={"bottom top"}
          speed={-1}
          rotate={"140"}
          className="absolute bottom-0 right-1/2 size-24 lg:size-72"
        >
          <Bubble type={"bubble-blur"} drag={false} />
        </Parallax>

        <Parallax
          triggerElm={"#whitespace-profile"}
          start={"top bottom"}
          end={"bottom top"}
          speed={-1.5}
          rotate={"90"}
          className="absolute right-12 top-1/2 size-24 lg:size-48"
        >
          <Bubble type={"bubble-fill"} drag={false} />
        </Parallax>

        <Parallax
          triggerElm={"#whitespace-profile"}
          start={"top bottom"}
          end={"bottom top"}
          speed={1.5}
          rotate={"60"}
          className="absolute -top-20 left-20 size-24 lg:size-48"
        >
          <Bubble type={"bubble-merge"} drag={false} />
        </Parallax>

        <Parallax
          triggerElm={"#whitespace-profile"}
          start={"top bottom"}
          end={"bottom top"}
          speed={-2}
          rotate={"320"}
          className="absolute -right-40 -top-40 size-24 lg:size-96"
        >
          <Bubble type={"bubble-blur"} drag={false} />
        </Parallax>
      </div>
    </section>
  );
}

const Education = ({ primary, major }: { primary: string; major: string }) => {
  return (
    <div className="text-md font-light md:text-xl">
      <div className="font-semibold">
        <p>{primary}</p>
      </div>
      <div>
        <p>
          <span
            dangerouslySetInnerHTML={{
              __html: major.replace(/\n/g, "<br />"),
            }}
          />
        </p>
      </div>
    </div>
  );
};

const Info = ({ title, value }: { title: string; value: string }) => {
  return (
    <div className="text-md flex font-light md:text-xl">
      <p className="space-x-4">
        <span>{title}</span>
        {":"}
        <span>{value}</span>
      </p>
    </div>
  );
};

export default ProfileSectionV2;
