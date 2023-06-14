import { useRef, useState } from "react";
import { motion } from "framer-motion";

import { staggerContainer, fadeIn } from "../../utils/motion";
import video from "../../assets/FinalAnimation_01.mp4";
import { usePopupData, usePopupModal } from "../../Hooks/usePopupModal";

export default function EndingComponent() {
  const [isExpanded, setIsExpanded] = useState(false);
  const VideoRef = useRef(null);
  const containerRef = useRef(null);
  const { togglePopupModal } = usePopupModal();
  const { modify } = usePopupData();

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
      className={`min-w-fit flex flex-col gap-4 sm:mb-10 mb-[80px] sm:pr-5 ${
        isExpanded ? "pr-8" : ""
      }`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className={`w-fit`}
      >
        <motion.div
          onClick={() => {
            togglePopupModal(true);
            modify({
              src: video,
              image: false,
            });
          }}
          variants={fadeIn("", "spring", 0.5, 1.75)}
          className="sm:w-[580px] sm:h-[430px] min-w-[340px] sm:max-w-none max-w-[400px] sm:mx-0 mx-auto w-full overflow-hidden cursor-pointer sm:pr-0 pr-4 rounded-xl"
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
