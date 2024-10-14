import React, { PropsWithChildren } from "react";

function CreativeTitle({ children }: PropsWithChildren) {
  return (
    <div>
      <h2 className="font-thai text-2xl font-bold text-red-custom lg:text-4xl">
        {children}
      </h2>
    </div>
  );
}

export default CreativeTitle;
