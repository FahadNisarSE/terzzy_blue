import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

import sect4 from "../../assets/col/sect4-0.webp";
import sect41 from "../../assets/col/sect4-1.webp";
import sect42 from "../../assets/col/sect4-2.webp";
import sect43 from "../../assets/col/sect4-3.webp";
import sect44 from "../../assets/col/sect4-4.webp";
import interiorBanner from "../../assets/col/interior-banner.webp";

import { staggerContainer, fadeIn } from "../../utils/motion";
import { TypingHeading, NavDot, BlurImage } from "../../components";

import useToggleCarousel from "../../Hooks/useToggleCarousel";
import useSmallScreen from "../../Hooks/useSmallScreen";

export default function Interior() {
  const [active, setActive] = useState(true);
  const container = useRef(null);
  const { isSmall } = useSmallScreen();
  const { setShowCarousel } = useToggleCarousel();
  const isInView = useInView(container, {
    once: false,
    amount: isSmall ? 0.25 : 1,
  });
  const [currentFocused, setCurrentFocused] = useState(0);

  const interiorImages = [
    { index: 0, image: sect41 },
    { index: 1, image: sect42 },
    { index: 2, image: sect43 },
    { index: 3, image: sect44 },
  ];

  useEffect(() => {
    setActive(isInView);
  }, [isInView]);
  return (
    <motion.section
      ref={container}
      variants={staggerContainer}
      initial="hidden"
      id="interior"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="min-w-fit flex flex-col gap-4 sm:justify-end sm:mr-8"
    >
      <NavDot active={active} />
      <motion.div
        variants={fadeIn("left", "spring", 0 * 0.5, 1.75)}
        className="w-full max-w-[500px] ml-auto sm:hidden block"
      >
        <BlurImage
          src={interiorBanner}
          alt="interior"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="flex items-center sm:justify-start justify-center sm:gap-8 gap-4 sm:px-0 px-4">
        <div className="flex flex-col gap-4 sm:flex-auto">
          <TypingHeading title="INTERIORS" />
          <motion.p
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="uppercase max-w-[230px] sm:text-[12px] text-[10px] text-black font-medium"
          >
            We have modern technical tools that allow us to implement images of
            the interior of your planned premises.
          </motion.p>
        </div>
        <div className="sm:w-[300px] sm:h-[120px] grid place-items-center rounded-lg relative sm:order-1 -order-1 sm:flex-auto w-1/2">
          <motion.img
            variants={fadeIn("", "spring", 0.5, 1.75)}
            src={sect4}
            alt="interior image"
            className="w-full h-full object-cover"
          />
          <motion.div
            onClick={() => setShowCarousel(true)}
            variants={fadeIn("right", "spring", 0 * 0.5, 1.75)}
            className="absolute text-lightgray text-[18px] w-[90px] h-[50px] bg-white/30 rounded-md grid place-items-center cursor-pointer"
          >
            PUSH
          </motion.div>
        </div>
      </div>
      <motion.div
        variants={fadeIn("", "spring", 0.5, 1.75)}
        className="relative sm:block hidden"
      >
        <div className="w-full h-[345px] rounded-[25px] flex items-center relative">
          <div
            onClick={() =>
              setCurrentFocused(
                interiorImages[(currentFocused + 3) % interiorImages.length]
                  .index
              )
            }
            className={`cursor-pointer delay-150 transition-all w-full h-[70%] object-cover bg-gray-700/10 -right-12 z-0 absolute rounded-2xl overflow-hidden`}
          >
            <BlurImage
              src={
                interiorImages[(currentFocused + 3) % interiorImages.length]
                  .image
              }
              alt="dummy-image"
            />
          </div>
          <div
            onClick={() =>
              setCurrentFocused(
                interiorImages[(currentFocused + 2) % interiorImages.length]
                  .index
              )
            }
            className={`cursor-pointer delay-150 transition-all w-full h-[80%] object-cover bg-gray-700/10 -right-8 z-10 absolute rounded-2xl overflow-hidden`}
          >
            <BlurImage
              src={
                interiorImages[(currentFocused + 2) % interiorImages.length]
                  .image
              }
              alt="dummy-image"
            />
          </div>
          <div
            onClick={() =>
              setCurrentFocused(
                interiorImages[(currentFocused + 1) % interiorImages.length]
                  .index
              )
            }
            className={`cursor-pointer delay-150 transition-all w-full h-[90%] object-cover bg-gray-700/10 -right-4 z-20 absolute rounded-2xl overflow-hidden`}
          >
            <BlurImage
              src={
                interiorImages[(currentFocused + 1) % interiorImages.length]
                  .image
              }
              alt="dummy-image"
            />
          </div>
          <div
            className={`cursor-pointer ease-in-out delay-150 transition-all h-full object-cover absolute left-0 inset-y-0 z-30 rounded-[25px] overflow-hidden`}
          >
            <BlurImage
              src={interiorImages[currentFocused].image}
              alt="dummy-image"
            />
          </div>
        </div>
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="uppercase z-40 rounded-[25px] text-gray-300 shadow-lg w-full backdrop-blur-0 radial-bg-gradient bg-opacity-75 px-4 py-5 bottom-0 left-0 text-xs absolute"
        >
          <p className="w-[400px]">
            Every detail can be viewed from all sides, since with our help you
            will be able to turn 360 degrees
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
