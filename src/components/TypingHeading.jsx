import { motion } from "framer-motion";

import { textContainer, textVariant2 } from "../utils/motion";

export default function TypingHeading({ title }) {
  return (
    <motion.h3
      variants={textContainer}
      className="sm:text-4xl text-[25px] font-semibold headings-gradient"
    >
      {Array.from(title).map((letter, index) => (
        <motion.span variants={textVariant2} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h3>
  );
}
