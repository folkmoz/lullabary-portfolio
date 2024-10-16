import { getCloudinaryImage } from "~/lib/Cloudinary";
import CreativeTitle from "~components/Sections/creativity/components/CreativeTitle";
import Animation from "~components/AnimatedComponents/Animation";
import useImagePreloader from "~hooks/useImagePreloader";

const pic01 = getCloudinaryImage("creativity/01/01");

function Emma() {
  useImagePreloader([pic01]);
  return (
    <div>
      <CreativeTitle>
        Character design for Emma, Vtuber manager from VIBE ENT
      </CreativeTitle>

      <div className="mt-0 md:mt-4">
        <a
          href="https://x.com/emmavibeent?s=21"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Animation.ImageReveal once withScale end="top 20%">
            <img
              src={pic01}
              alt="Emma, Vtuber manager from VIBE ENT"
              className="w-full max-w-full object-cover"
            />
          </Animation.ImageReveal>
          <div>
            <p className="mt-2 text-center text-sm text-gray-500">
              (Click on the image to see more)
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Emma;
