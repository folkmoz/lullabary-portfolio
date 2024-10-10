import React from "react";
import Animation from "~components/AnimatedComponents/Animation";

function Pepsi() {
  return (
    <div className="mt-10 flex min-h-dvh w-full flex-col">
      <div className="mb-4 space-y-1">
        <h2 className="font-bold">
          <span className="font-thai md:text-3xl">
            PEPSIPresentedTPOPconfest2
          </span>
          <span className="ml-4 font-andalos text-xl">
            Draw a standee for the band CAC (Club after class)
          </span>
        </h2>
        <div className="text-sm md:mt-4 md:text-lg lg:text-xl">
          <Animation.TextReveal className="-space-y-2 text-gray-700 lg:space-y-2">
            to be displayed at the TPOPconcertfest2. I designed some of the
            clothing for the standee to align with the CAC concept.
          </Animation.TextReveal>
        </div>
      </div>
    </div>
  );
}

export default Pepsi;
