import React, { PropsWithChildren } from "react";

function KvParagraph({ children }: PropsWithChildren) {
  return (
    <div className="md:mt-2">
      <p className="text-sm font-light lg:text-base">{children}</p>
    </div>
  );
}

export default KvParagraph;
