import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

import nftImage2 from "../../assets/col/nftImage2.svg";
import nftBanner from "../../assets/col/nftBanner.png";
import nft1 from "../../assets/col/nft1.png";
import nft2 from "../../assets/col/nft2.png";
import nft3 from "../../assets/col/nft3.png";
import nft4 from "../../assets/col/nft4.png";
import nft5 from "../../assets/col/nft5.png";

import { staggerContainer, fadeIn } from "../../utils/motion";
import { TypingHeading, NavDot, BlurImage } from "../../components";
import { useLocation } from "react-router-dom";

import useSmallScreen from "../../Hooks/useSmallScreen";
import useToggleCarousel from "../../Hooks/useToggleCarousel";

export default function NFT() {
  const [active, setActive] = useState(true);
  const container = useRef(null);
  const { isSmall } = useSmallScreen();
  const { setShowCarousel } = useToggleCarousel();
  const isInView = useInView(container, {
    once: false,
    amount: isSmall ? 0.25 : 1,
  });

  const { pathname } = useLocation();

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
      id="nft"
      className="sm:min-w-fit flex flex-col gap-4 sm:max-w-auto max-w-full sm:w-auto w-full"
    >
      <NavDot active={active} />
      <div
        className={`overflow-hidden sm:w-[600px] sm:mr-0 mr-2 h-[230px] sm:order-none -order-1 rounded-2xl sm:block ${
          pathname !== "/nft" && "hidden"
        }`}
      >
        <motion.div
          variants={fadeIn("", "spring", 0.5, 1.75)}
          className="w-full h-full object-cover"
        >
          <BlurImage src={nftBanner} alt="dummy-image" />
        </motion.div>
      </div>
      <div className="flex sm:flex-row flex-col sm:gap-8 gap-2">
        <TypingHeading title="NFT" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="sm:max-w-[480px] max-w-[300px] uppercase sm:text-[12px] text-[10px] leading-snug text-black font-medium"
        >
          NFT literally means "non-fungible tokens". This is a kind of tokens
          where each instance is unique. We will help you realize your idea,
          image, character, art form into a virtual object using the latest
          computer technologies.
        </motion.p>
      </div>
      <div className="flex items-center gap-6 sm:order-1 -order-1 sm:overflow-auto sm:min-w-0 max-w-[100%] overflow-x-scroll">
        <motion.div
          variants={fadeIn("right", "spring", 0 * 0.5, 1.75)}
          className="min-w-[150px] h-[150px] rounded-2xl overflow-hidden"
        >
          <BlurImage src={nft1} alt="nft-image" />
        </motion.div>
        <motion.div
          variants={fadeIn("right", "spring", 1 * 0.5, 1.75)}
          className="min-w-[150px] h-[150px] rounded-2xl overflow-hidden"
        >
          <BlurImage src={nft2} alt="nft-image" />
        </motion.div>
        <motion.div
          variants={fadeIn("right", "spring", 2 * 0.5, 1.75)}
          className="flex items-center w-[170px] h-[150px] relative"
        >
          <div className="w-[150px] h-[150px] rounded-2xl overflow-hidden absolute">
            <BlurImage src={nft3} alt="nft-image" />
          </div>
          <div className="w-[150px] h-[130px] rounded-2xl overflow-hidden absolute -z-10 left-[10px]">
            <BlurImage src={nft4} alt="nft-image" />
          </div>
          <div className="w-[150px] h-[110px] rounded-2xl overflow-hidden absolute -z-20 left-[20px]">
            <BlurImage src={nft5} alt="nft-image" />
          </div>
        </motion.div>
        <motion.img
          variants={fadeIn("", "tween", 1, 0.5)}
          src={nftImage2}
          alt="dummy-image"
          className="sm:p-0 pr-4 cursor-pointer w-[60px]"
          onClick={() => setShowCarousel(true)}
        />
      </div>
    </motion.section>
  );
}
