import Animation from "~components/AnimatedComponents/Animation";
import VideoPlayer from "~components/Sections/experiences/components/Videoplayer";
import FullLinkButton from "~components/Sections/experiences/components/FullLinkButton";
import HeadlineRow from "~components/Sections/experiences/components/HeadlineRow";
import { Parallax } from "~components/AnimatedComponents/Parallax";
import Bubble from "~components/Bubble";
import CustomSwiper from "~components/Sections/experiences/components/CustomSwiper";
import { getCloudinaryImage, getCloudinaryVideo } from "~/lib/Cloudinary";

const clip = getCloudinaryVideo("experience/not-friend/clip/clip");
const bh01 = getCloudinaryImage("experience/not-friend/pics/01");
const bh02 = getCloudinaryImage("experience/not-friend/pics/02");
const bh03 = getCloudinaryImage("experience/not-friend/pics/03");
const bh04 = getCloudinaryImage("experience/not-friend/pics/04");
const showcase = getCloudinaryImage("experience/not-friend/pics/showcase");

function NotFriends() {
  return (
    <div className="relative mx-auto flex w-full max-w-[1200px] flex-col p-4 md:px-8 lg:mt-20 xl:px-4">
      <HeadlineRow
        starColor="pink"
        title="Art Director"
        subtitle="NOT FRIENDS MUSIC VIDEO CONTEST by GDH"
        description="As the art director for this MV, I aimed to create an art direction that feels warm and nostalgic, but at the same time, a bit somber too.so I used warm, dreamy tones to create a soft hazy look, separating the happy past from the present. Red was used as a symbol for the friend who passed away."
      />

      <div className="w-full">
        <div className="flex flex-col gap-2 lg:flex-row">
          <div className="relative w-full lg:w-1/2">
            <Animation.ImageReveal end="top 80%">
              <VideoPlayer source={clip} />
            </Animation.ImageReveal>
          </div>

          <div className="flex w-full lg:w-1/2">
            <div className="hidden lg:block">
              <Animation.ImageReveal end="top 70%">
                <img src={showcase} alt="bh01" className="h-[300px]" />
              </Animation.ImageReveal>
            </div>
            <div className="lg:ml-24">
              <FullLinkButton
                href={"https://www.instagram.com/p/CzL0WGrSEtd/"}
              />
            </div>
          </div>
        </div>
        <div className="mt-2">
          <CustomSwiper
            width={"max-w-[350px]"}
            images={[bh01, bh02, bh03, bh04]}
          />
        </div>
      </div>

      <Parallax
        className="absolute bottom-1/3 right-4 z-[1] hidden size-20 md:block lg:size-32 xl:-right-4"
        speed={-2}
        start="top bottom"
      >
        <Bubble type="bubble4" rotate direction="left" drag={false} />
      </Parallax>

      <Parallax
        className="absolute z-[1] hidden size-20 md:block lg:bottom-[20%] lg:right-32 lg:size-24 xl:right-20"
        speed={-3}
        start="top bottom"
      >
        <Bubble type="bubble-fill" rotate direction="left" drag={false} />
      </Parallax>
    </div>
  );
}

export default NotFriends;
