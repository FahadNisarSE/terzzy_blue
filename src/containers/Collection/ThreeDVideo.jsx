import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

import { staggerContainer, fadeIn } from "../../utils/motion";
import { TypingHeading, NavDot } from "../../components";
import { borderImage } from "../../assets/foot";
import star from "../../assets/col/star.png";
import video from "../../assets/video.mp4";
import { usePopupData, usePopupModal } from "../../Hooks/usePopupModal";

import useSmallScreen from "../../Hooks/useSmallScreen";

const Container = () => {
  const { togglePopupModal } = usePopupModal();
  const { modify } = usePopupData();
  return (
    <motion.div
      onClick={() => {
        togglePopupModal(true);
        modify({
          src: video,
          image: false,
        });
      }}
      variants={fadeIn("", "spring", 0.5, 1.75)}
      className="sm:w-[580px] sm:h-[360px] min-w-[340px] sm:max-w-none sm:mx-0 mx-auto overflow-hidden cursor-pointer sm:pr-0 pr-4"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover rounded-xl"
      >
        <source
          src={video}
          type="video/mp4"
        />
      </video>
    </motion.div>
  );
};

export default function ThreeDVideo() {
  const [active, setActive] = useState(true);
  const container = useRef(null);
  const { isSmall } = useSmallScreen();
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
      id="three-d-video"
      className="sm:min-w-fit sm:h-auto sm:mb-0 mb-10 flex flex-col sm:gap-8 gap-4 sm:max-w-auto max-w-full sm:overflow-visible sm:w-auto w-full"
    >
      <NavDot active={active} />
      <Container />
      <div className="sm:block flex gap-2 items-center">
        <div className="flex sm:flex-row flex-col sm:items-center items-start sm:gap-16">
          <TypingHeading title="3D VIDEO" />
          <motion.p
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="max-w-[360px] uppercase sm:text-[12px] text-[10px] text-black font-medium"
          >
            Get amazing attractive videos, 3D animations, demo videos for your
            product without sending it to us!
          </motion.p>
        </div>
        <Link to="/contact">
          <img src={borderImage} alt="ordernow" className="sm:hidden pr-2" />
        </Link>
      </div>
      <div className="relative sm:block hidden">
        <motion.img
          variants={fadeIn("", "tween", 1, 0.5)}
          src={star}
          alt="star"
          className="w-5 h-5 absolute -bottom-4 -left-8"
        />
      </div>
    </motion.section>
  );
}
