import HeadlineRow from "~components/Sections/experiences/components/HeadlineRow";
import useImagePreloader from "~hooks/useImagePreloader";
import Animation from "~components/AnimatedComponents/Animation";
import VideoPlayer from "~components/Sections/experiences/components/Videoplayer";
import FullLinkButton from "~components/Sections/experiences/components/FullLinkButton";
import CustomSwiper from "~components/Sections/experiences/components/CustomSwiper";
import { useScreen } from "~hooks/useScreen";
import { Parallax } from "~components/AnimatedComponents/Parallax";
import Bubble from "~components/Bubble";
import { getCloudinaryImage, getCloudinaryVideo } from "~/lib/Cloudinary";

const clip = getCloudinaryVideo("experience/exbear/clip/clip");
const backgroundSec3 = getCloudinaryImage("experience/bg-blue");
const hFishTank = getCloudinaryImage("experience/exbear/pics/h-fish-tank");
const vFishTank = getCloudinaryImage("experience/exbear/pics/v-fish-tank");
const starCoral = getCloudinaryImage("experience/exbear/pics/star-coral");
const bh01 = getCloudinaryImage("experience/exbear/pics/01");
const bh02 = getCloudinaryImage("experience/exbear/pics/02");
const bh03 = getCloudinaryImage("experience/exbear/pics/03");
const bh04 = getCloudinaryImage("experience/exbear/pics/04");

function Exbear() {
  useImagePreloader([
    backgroundSec3,
    hFishTank,
    vFishTank,
    bh01,
    bh02,
    bh03,
    bh04,
    starCoral,
  ]);

  const { width } = useScreen();

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundSec3})`,
        zIndex: 2,
      }}
      className="shadow-custom-b relative bg-cover bg-no-repeat md:pb-[40lvh] lg:pb-0"
    >
      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col p-4 pb-20 md:px-8 md:pb-4 xl:px-4">
        <HeadlineRow
          starColor="pink"
          title="Art Director"
          subtitle="EXBEAR - แพรวพราว Feat. Thursdvy, Miiiii & NADIE (Official MV)"
          description="I handled the art direction, managed the mood, tone, and costumes, and was responsible for editing the mv. I also drew and animated theanimations for the MV. I designed the music video tone using pink and purple tones to convey the charm of the girl we secretly admire but I didn’t want it to be overly sweet,so I Add a green and blue to give it a cooler style."
        />

        <div className="relative z-[2] flex min-h-lvh flex-col gap-4 lg:flex-row lg:gap-8">
          <img
            src={width > 1024 ? hFishTank : vFishTank}
            alt=""
            className="absolute z-0 w-full lg:rotate-[-1deg] lg:scale-[1.05]"
          />

          <div className="h-full w-full lg:px-10 lg:pt-14 xl:pt-[4.6rem]">
            <div className="flex flex-col gap-2 px-8 pt-16 md:px-16 md:pt-36 lg:flex-row lg:px-0 lg:pt-4 xl:pt-0">
              <div className="relative w-full lg:w-[55%]">
                <Animation.ImageReveal end="top top">
                  <VideoPlayer source={clip} />
                </Animation.ImageReveal>
              </div>

              <div className="w-full items-center lg:flex lg:w-1/3">
                <div className="absolute bottom-10 left-0 right-0 flex scale-[1.8] justify-center md:bottom-10 md:scale-[1.4] lg:relative lg:bottom-0 lg:ml-24 lg:block lg:scale-100">
                  <FullLinkButton
                    href={"https://www.youtube.com/watch?v=S5QYZaLa1lQ"}
                  />
                </div>
              </div>
            </div>

            <div className="relative mt-2 w-full px-8 md:px-16 lg:w-[55%] lg:px-0">
              <CustomSwiper
                showLabel={false}
                height="h-[180px] xl:h-[200px]"
                images={[bh01, bh02, bh03, bh04]}
              />
            </div>
          </div>
        </div>
      </div>

      <Parallax
        speed={1.2}
        start="top bottom"
        end="bottom top"
        className="absolute left-10 top-[30%] z-[2] hidden size-20 md:block"
      >
        <Bubble type="bubble-fill" drag={false} />
      </Parallax>

      <Parallax
        speed={2}
        start="top bottom"
        className="absolute bottom-1/2 left-20 z-[2] hidden size-20 md:bottom-[30%] md:block md:size-40"
      >
        <Bubble type="bubble-fill" drag={false} />
      </Parallax>

      <Parallax className="absolute -left-24 bottom-32 z-[1] size-[200px] md:bottom-10 md:left-0 lg:size-[300px]">
        <Bubble type="red-bubble" drag={false} />
      </Parallax>

      <Parallax
        speed={2.3}
        start="top bottom"
        className="absolute bottom-1/2 right-20 z-[2] hidden size-20 md:bottom-[30%] md:block lg:right-[30%]"
      >
        <Bubble type="bubble-fill" drag={false} />
      </Parallax>

      <Parallax
        speed={1.3}
        className="absolute -bottom-20 -right-16 z-[1] size-[200px] md:right-0 md:size-[300px] lg:-bottom-48 lg:-right-64 lg:size-[600px] lg:scale-110"
      >
        <img src={starCoral} alt="pink star coral" />
      </Parallax>
    </div>
  );
}

export default Exbear;
