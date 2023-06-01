import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

import sect91 from "../../assets/col/sect9-1.svg";
import sect92 from "../../assets/col/sect9-2.svg";
import sect93 from "../../assets/col/sect9-3.svg";

import { staggerContainer, fadeIn, special } from "../../utils/motion";
import { TypingHeading, NavDot, BlurImage } from "../../components";

import useSmallScreen from "../../Hooks/useSmallScreen";

export default function Industrial() {
  const [active, setActive] = useState(true);
  const container = useRef(null);
  const { isSmall } = useSmallScreen();
  const isInView = useInView(container, {
    once: false,
    amount: isSmall ? 0.5 : 1,
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
      id="industrial"
      className="sm:min-w-fit flex flex-col sm:gap-16 sm:max-w-auto max-w-full sm:w-auto w-full"
    >
      <NavDot active={active} />
      <div className="relative flex sm:gap-8 gap-2 pb-16 sm:overflow-auto overflow-x-scroll sm:w-auto sm:mx-0 mx-auto">
        <motion.div
          variants={fadeIn("", "tween", 1, 0.5)}
          className="sm:w-[150px] sm:h-[150px] sm:block hidden object-cover"
        >
          <BlurImage src={sect91} alt="industrial-image" />
        </motion.div>
        <motion.div
          variants={fadeIn("", "tween", 1, 0.5)}
          className="sm:w-[150px] sm:block hidden object-cover"
        >
          <BlurImage src={sect92} alt="industrial-image" />
        </motion.div>
        <motion.div
          variants={special("top", "tween", 1.2, 0.5)}
          className="absolute sm:bottom-10 bottom-5 right-0 sm:w-full sm:max-w-none max-w-[250px] w-[80%] z-[20]"
        >
          <BlurImage src={sect93} alt="industrial-image" />
        </motion.div>
        <motion.div
          variants={fadeIn("right", "spring", 0 * 0.5, 1.75)}
          className="w-[200px] h-[200px] overflow-hidden rounded-lg sm:hidden block"
        >
          <BlurImage src={sect91} alt="industrial-images" />
        </motion.div>
        <motion.div
          variants={fadeIn("right", "spring", 1 * 0.5, 1.75)}
          className="w-[200px] h-[200px] overflow-hidden rounded-3xl sm:hidden block"
        >
          <BlurImage src={sect92} alt="industrial-images" />
        </motion.div>
      </div>
      <div className="sm:pt-0 sm:-mt-16">
        <TypingHeading title="INDUSTRIAL" />
        <motion.span
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="uppercase text-lightgray text-xs"
        >
          PRODUCT DESIGN
        </motion.span>
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="uppercase sm:max-w-full-[300px] max-w-[350px] sm:text-[12px] text-[10px] sm:mt-4"
        >
          Our company offers product design ready for manufacturing. Starting
          from concept design, 3d visualizations, 3D test prints up to CAD
          design, engineering drawings
        </motion.p>
      </div>
    </motion.section>
  );
}
