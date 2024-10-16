import { PropsWithChildren } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import { isChrome } from "react-device-detect";

function Lenis({ children }: PropsWithChildren) {
  if (isChrome) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      options={{
        duration: 2,
      }}
      root
    >
      {children}
    </ReactLenis>
  );
}

export default Lenis;
