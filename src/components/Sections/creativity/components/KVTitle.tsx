import React, { PropsWithChildren } from "react";
import { cn } from "~/lib/utils/tailwindcss";

function KvTitle({
  className = "",
  children,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div>
      <h2
        className={cn(
          "font-monotes text-xl font-bold text-red-custom md:text-2xl lg:text-4xl",
          className,
        )}
      >
        {children}
      </h2>
    </div>
  );
}

export default KvTitle;
