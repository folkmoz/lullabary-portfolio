import { PropsWithChildren } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import { browserName } from "react-device-detect";

function Lenis({ children }: PropsWithChildren) {
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
