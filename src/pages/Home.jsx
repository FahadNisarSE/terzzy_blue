import { useState, useEffect } from "react";

import {
  ProfessionalProducts,
  Clothing,
  Furniture,
  GIFAnimation,
  Industrial,
  NFT,
  ThreeDVideo,
  Interior,
  EndingComponent,
} from "../containers/Collection";
import useSmallScreen from "../Hooks/useSmallScreen";

export default function Collection() {
  const [screenSize, setScreenSize] = useState();
  const { isSmall, setIsSmall } = useSmallScreen();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 640) {
      setIsSmall(true);
    } else {
      setIsSmall(false);
    }
  }, [screenSize]);

  return (
    <main className="sm:h-screen sm:flex sm:items-center">
      <div className="flex sm:flex-row flex-col items-center gap-20 sm:min-w-fit sm:max-h-[507px] sm:overflow-visible sm:pl-0 pl-4 sm:border-none border-l border-black sm:ml-0 ml-4">
        <ProfessionalProducts />
        <Furniture />
        <Interior />
        <Clothing />
        <div className="h-[120vh] min-w-[78px] relative -top-10 bg-[#242627] bottom-0 z-50 sm:flex justify-center hidden">
          <p
            style={{ writingMode: "vertical-rl" }}
            className="text-5xl headings-gradient-2 overflow-show font-semibold whitespace-nowrap infinite-strip-scroll tracking-widest heading-gradient"
          >
            <span className="mb-20">3DVIDEO</span>{" "}
            <span className="mb-20">BRANDS</span>{" "}
            <span className="mb-20">TREZZY</span>{" "}
            <span className="mb-20">3DVIDEO</span>{" "}
            <span className="mb-20">BRANDS</span>{" "}
            <span className="mb-20">TREZZY</span>
          </p>
        </div>
        <div className="w-[100vh + 40px] bg-[#242627] h-[60px] flex items-center relative -left-10 right-0 z-40 sm:hidden">
          <p className="text-3xl headings-gradient-2 overflow-show font-semibold whitespace-nowrap mobile-strip-scroll-a tracking-widest heading-gradient">
            <span className="mr-4">3DVIDEO</span>{" "}
            <span className="mr-4">BRANDS</span>{" "}
            <span className="mr-4">TREZZY</span>{" "}
            <span className="mr-4">3DVIDEO</span>{" "}
            <span className="mr-4">BRANDS</span>{" "}
            <span className="mr-4">3DVIDEO</span>{" "}
            <span className="mr-4">BRANDS</span>{" "}
            <span className="mr-4">TREZZY</span>
          </p>
        </div>
        <NFT />
        <Industrial />
        <GIFAnimation />
        <ThreeDVideo />
        {!isSmall && <EndingComponent />}
      </div>
    </main>
  );
}
