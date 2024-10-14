import React, { PropsWithChildren } from "react";

function KvTitle({ children }: PropsWithChildren) {
  return (
    <div>
      <h2 className="font-monotes text-xl font-bold text-red-custom md:text-2xl lg:text-4xl">
        {children}
      </h2>
    </div>
  );
}

export default KvTitle;
