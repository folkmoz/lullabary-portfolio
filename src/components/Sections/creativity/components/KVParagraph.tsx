import React, { PropsWithChildren } from "react";

function KvParagraph({ children }: PropsWithChildren) {
  return (
    <div className="md:mt-2">
      <p className="text-md font-light md:text-base">{children}</p>
    </div>
  );
}

export default KvParagraph;
