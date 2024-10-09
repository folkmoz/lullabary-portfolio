import React from "react";
import { cn } from "~/lib/utils/tailwindcss";

function Subtitle({
  textLength,
  children,
}: {
  textLength: number;
  children: React.ReactNode;
}) {
  return (
    <h3
      className={cn(
        "mt-4 w-fit text-left text-sm font-bold md:mt-0 lg:mt-3 lg:text-xl xl:mt-4",
        {
          "xl:text-3xl": textLength < 50,
        },
      )}
    >
      {children}
    </h3>
  );
}

export default Subtitle;
