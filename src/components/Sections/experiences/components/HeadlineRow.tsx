import React from "react";
import Headline from "~components/Sections/experiences/components/Headline";
import Animation from "~components/AnimatedComponents/Animation";
import Subtitle from "~components/Sections/experiences/components/SubTitle";
import { cn } from "~/lib/utils/tailwindcss";

function HeadlineRow({
  title,
  subtitle,
  description,
  starColor,
}: {
  title: string;
  subtitle: string;
  description: string;
  starColor?: "red" | "pink";
}) {
  return (
    <div className="flex w-full flex-col py-8 lg:px-0">
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <Headline starColor={starColor}>
          <Animation.TextReveal>{title}</Animation.TextReveal>
        </Headline>
        {subtitle && (
          <Subtitle textLength={subtitle.length}>
            <Animation.TextReveal className="font-mono">
              {subtitle}
            </Animation.TextReveal>
          </Subtitle>
        )}
      </div>
      <div
        className={cn(
          "max-w-[95%] text-sm md:text-lg lg:max-w-full lg:text-xl",
          subtitle ? "md:mt-4" : "mt-6",
        )}
      >
        <Animation.TextReveal className="mt-2 -space-y-2 text-gray-800 md:mt-0 xl:space-y-0">
          {description}
        </Animation.TextReveal>
      </div>
    </div>
  );
}

export default HeadlineRow;
