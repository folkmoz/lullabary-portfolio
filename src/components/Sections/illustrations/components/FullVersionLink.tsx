import React from "react";
import Animation from "~components/AnimatedComponents/Animation";

function FullVersionLink({ href }: { href: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <Animation.MagneticButton>
        <div className="flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 shadow md:gap-2 md:px-8">
          <span className="text-md font-andalos md:text-2xl xl:text-3xl">
            full version
          </span>

          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-move-up-right size-4 md:size-6 xl:size-8"
            >
              <path d="M13 5H19V11" />
              <path d="M19 5L5 19" />
            </svg>
          </span>
        </div>
      </Animation.MagneticButton>
    </a>
  );
}

export default FullVersionLink;
