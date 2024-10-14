import React, { PropsWithChildren } from "react";

function CreativeTitle({ children }: PropsWithChildren) {
  return (
    <div>
      <h2 className="font-thai text-lg font-bold text-red-custom md:text-2xl lg:text-4xl">
        {children}
      </h2>
    </div>
  );
}

export default CreativeTitle;
