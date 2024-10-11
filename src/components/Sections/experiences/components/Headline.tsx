import React from "react";
import Animation from "~components/AnimatedComponents/Animation";
import { cn } from "~/lib/utils/tailwindcss";
import { getCloudinaryImage } from "~/lib/Cloudinary";

const redStar = getCloudinaryImage("redStar");
const pinkStar = getCloudinaryImage("pinkStar");

function Headline({
  children,
  starColor = "red",
}: {
  children: React.ReactNode;
  starColor?: "red" | "pink";
}) {
  const isRedStar = starColor === "red";

  return (
    <h2
      className={cn(
        "relative ml-16 w-fit font-andalos text-3xl font-bold md:text-4xl xl:text-6xl",
        isRedStar ? "text-red-custom" : "text-[#EF8995]",
      )}
    >
      {children}
      <Animation.Slide direction="right" start="top 90%" once>
        <img
          className="absolute -bottom-4 -left-20 size-[75px] lg:-bottom-[20%] xl:-left-32 xl:size-[120px]"
          style={{
            filter: isRedStar
              ? "none"
              : "drop-shadow(-1px -1px 0px rgb(0, 0, 0))",
          }}
          src={starColor === "red" ? redStar : pinkStar}
          alt="star prop"
        />
      </Animation.Slide>
    </h2>
  );
}

export default Headline;
