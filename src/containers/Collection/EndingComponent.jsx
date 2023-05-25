import { useRef, useState } from "react";
import { motion } from "framer-motion";

import leftarrow from "../../assets/col/leftarrow.svg";
import rightarrow from "../../assets/col/rightarrow.svg";
import { BsDot } from "react-icons/bs";

import { staggerContainer, fadeIn } from "../../utils/motion";
import video from "../../assets/FinalAnimation_01.mp4";

export default function EndingComponent() {
  const [isExpanded, setIsExpanded] = useState(false);
  const VideoRef = useRef(null);
  const containerRef = useRef(null);

  function scrollWindow() {
    window.scrollTo({
      top: 0,
      left: window.pageXOffset + 600,
      behavior: "smooth",
    });
  }

  const handleArrowkeyClick = (value) => {
    setIsExpanded(value);
    if (value) {
      setTimeout(scrollWindow, 100);
    }
  };

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      ref={containerRef}
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`min-w-fit flex flex-col gap-4 mb-[80px] ${
        isExpanded ? "pr-8" : ""
      }`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex items-center gap-4 pl-4"
      >
        <img
          src={leftarrow}
          alt="left-arrow"
          className="w-3 h-3 cursor-pointer"
          onClick={() => handleArrowkeyClick(false)}
        />
        <BsDot className="text-black" />
        <img
          src={rightarrow}
          alt="right-arrow"
          className="w-3 h-3 cursor-pointer"
          onClick={() => handleArrowkeyClick(true)}
        />
      </motion.div>
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className={`max-w-[150px] ${
          !isExpanded ? "overflow-hidden" : "overflow-visible max-w-none"
        }`}
      >
        <motion.div
          variants={fadeIn("", "spring", 0.5, 1.75)}
          className="sm:w-[580px] sm:h-[300px] min-w-[340px] sm:max-w-none max-w-[400px] sm:mx-0 mx-auto w-full overflow-hidden cursor-pointer sm:pr-0 pr-4 rounded-xl"
        >
          <video
            ref={VideoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={video} type="video/mp4" />
          </video>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
