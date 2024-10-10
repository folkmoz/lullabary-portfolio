import React from "react";

import headline from "~/assets/illustration/headline.png";
import useImagePreloader from "~hooks/useImagePreloader";
import MelodyOfFolk from "~components/Sections/illustration/MelodyOfFolk";
import Pepsi from "~components/Sections/illustration/Pepsi";

function IllustrationSection() {
  useImagePreloader([headline]);

  return (
    <section
      id="illustration"
      className="relative flex min-h-svh w-full flex-col overflow-hidden bg-gradient-to-b from-[#51a1b7] to-[#f0f4c8]"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-center gap-4 p-4">
        <div className="-mx-4 md:-mb-4 lg:-mx-8 lg:-mb-28">
          <img src={headline} alt="" />
        </div>

        <MelodyOfFolk />

        <Pepsi />
      </div>

      <div className="min-h-dvh"></div>
    </section>
  );
}

export default IllustrationSection;
