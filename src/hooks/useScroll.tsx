import { useLenis } from "@studio-freight/react-lenis";

function useScroll() {
  const lenis = useLenis();

  const disableScroll = () => {
    document.body.style.overflow = "hidden";
    document.body.style.marginRight = "17px";

    lenis?.stop();
  };

  const enableScroll = () => {
    document.body.style.overflow = "auto";
    document.body.style.marginRight = "0px";

    lenis?.start();
  };

  return { disableScroll, enableScroll };
}

export default useScroll;
