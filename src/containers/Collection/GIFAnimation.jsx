import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLocation } from "react-router-dom";

import gifAnimation from "../../assets/gifAnimation.mp4";
import Gif_Plasma from "../../assets/col/Gif_Plasma.gif";

import { fadeIn, staggerContainer } from "../../utils/motion";
import { TypingHeading, NavDot, BlurImage } from "../../components";

const Image = ({ value }) => (
  <motion.div
    variants={fadeIn("", "tween", 1, 0.5)}
    className={`w-[${value}] h-[${value}] max-w-[200px]`}
  >
    <BlurImage src={Gif_Plasma} alt="plasma_gif" />
  </motion.div>
);

import useSmallScreen from "../../Hooks/useSmallScreen";
import { usePopupData, usePopupModal } from "../../Hooks/usePopupModal";

export default function GIFAnimation() {
  const [active, setActive] = useState(true);
  const container = useRef(null);
  const { isSmall } = useSmallScreen();
  const { pathname } = useLocation();
  const { togglePopupModal } = usePopupModal();
  const { modify } = usePopupData();

  const isInView = useInView(container, {
    once: false,
    amount: isSmall ? 0.25 : 1,
  });

  useEffect(() => {
    setActive(isInView);
  }, [isInView]);

  return (
    <motion.section
      ref={container}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id="gif-animation"
      className="min-w-fit flex flex-col gap-4 sm:my-auto sm:w-auto w-full"
    >
      <NavDot active={active} />
      {!isSmall && <TypingHeading title="GIF ANIMATION" />}
      <motion.div
        onClick={() => {
          togglePopupModal(true);
          modify({
            src: gifAnimation,
            image: false,
          });
        }}
        variants={fadeIn("", "spring", 0.5, 1.75)}
        className={`overflow-hidden sm:block ${
          pathname !== "/gif-animation" && "hidden"
        } w-full sm:w-[500px] h-[280px] rounded-2xl sm:mt-0 mt-4 cursor-pointer`}
      >
        <video autoPlay loop muted playsInline>
          <source src={gifAnimation} type="video/mp4" />
        </video>
      </motion.div>
      <div
        onClick={() => {
          togglePopupModal(true);
          modify({
            src: gifAnimation,
            image: false,
          });
        }}
        className="flex gap-6 sm:hidden overflow-hidden sm:w-auto w-full sm:mx-0 mx-auto pr-4"
      >
        <video autoPlay loop muted className="w-full h-full rounded-lg">
          <source src={gifAnimation} type="video/mp4" />
        </video>
      </div>
      <div className="sm:hidden block">
        <TypingHeading title="GIF ANIMATION" />
      </div>
      <div className="flex sm:flex-row flex-col gap-8 sm:items-center justify-between mt-auto">
        {!isSmall ? <Image value="150px" /> : null}
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="uppercase sm:max-w-[300px] max-w-[350px] sm:text-[12px] text-[10px]"
        >
          Our motion graphics and VFX solutions company uses the latest tools
          and techniques for custom motion graphics, motion capture and VFX
          services to enhance the product and brand value.
        </motion.p>
      </div>
    </motion.section>
  );
}
