import React from "react";
import bubble from "~assets/profile/bub-merge.png";
import Animation from "~components/AnimatedComponents/Animation";

function FullLinkButton({ href }: { href: string }) {
  return (
    <a href={href}>
      <Animation.MagneticButton>
        <button className="relative">
          <img
            src={bubble}
            alt="bubble"
            className="w-[120px] md:w-[200px] xl:w-[240px]"
          />
          <span className="text-red text-md absolute left-1/2 top-1/3 w-full -translate-x-1/2 font-andalos md:text-2xl lg:text-3xl xl:text-3xl">
            full version
          </span>
        </button>
      </Animation.MagneticButton>
    </a>
  );
}

export default FullLinkButton;
