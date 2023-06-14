import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

import character1 from "../../assets/col/character1.webp";
import character2 from "../../assets/col/character2.webp";
import character3 from "../../assets/col/character3.webp";

import { staggerContainer, fadeIn } from "../../utils/motion";
import { BlurImage, NavDot } from "../../components";

export default function Characters({ small }) {
  const [active, setActive] = useState(true);
  const container = useRef(null);
  const isInView = useInView(container, {
    once: false,
    amount: small ? 0.25 : 1,
  });

  useEffect(() => {
    setActive(isInView);
  }, [isInView]);

  return (
    <motion.div
      ref={container}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id="characters"
      className="characters flex sm:flex-row flex-col sm:items-center max-w-full overflow-hidden"
    >
      <NavDot active={active} />
      <h4
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          transform: "rotate(180deg)",
        }}
        className="headings-gradient font-semibold sm:mr-2 text-4xl sm:block hidden"
      >
        CHARACTERS
      </h4>
      <div className="flex sm:flex-col flex-row sm:gap-12 gap-2 sm:overflow-visible max-w-full overflow-x-scroll">
        <h4
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            transform: "rotate(180deg)",
          }}
          className="headings-gradient my-auto font-bold text-[30px] sm:hidden block"
        >
          CHARACTERS
        </h4>
        <div className="flex items-center sm:gap-6 gap-2">
          <motion.div
            variants={fadeIn("right", "spring", 0 * 0.5, 1.75)}
            className="sm:h-[210px] sm:w-auto w-[210px] h-[300px] object-cover overflow-hidden rounded-2xl"
          >
            <BlurImage src={character1} alt="3d-models" />
          </motion.div>
          <motion.div
            variants={fadeIn("right", "spring", 1 * 0.5, 1.75)}
            className="sm:h-[210px] sm:w-auto w-[210px] h-[300px] object-cover overflow-hidden rounded-2xl"
          >
            <BlurImage src={character2} alt="3d-models" />
          </motion.div>
          <motion.div
            variants={fadeIn("right", "spring", 2 * 0.5, 1.75)}
            className="sm:h-[210px] sm:w-auto w-[210px] h-[300px] object-cover overflow-hidden rounded-2xl"
          >
            <BlurImage src={character3} alt="3d-models" />
          </motion.div>
        </div>
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="uppercase max-w-[500px] w-full text-[12px] sm:block hidden text-black font-medium"
        >
          When you have an idea for a new animated character, conveying all the
          needed details in a 2D drawing may be challenging. 3D character
          modeling can help make your life a lot easier and allow you to create
          your dream character.
        </motion.p>
      </div>
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="uppercase max-w-[450px] w-full mt-8 text-[10px] sm:hidden block px-2 text-black font-medium"
      >
        When you have an idea for a new animated character, conveying all the
        needed details in a 2D drawing may be challenging. 3D character modeling
        can help make your life a lot easier and allow you to create your dream
        character.
      </motion.p>
    </motion.div>
  );
}
