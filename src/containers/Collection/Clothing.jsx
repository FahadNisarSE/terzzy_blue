import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

import sect54 from "../../assets/col/sect5-4.webp";

// Logos of the brands
import brand1 from "../../assets/col/brand1.svg";
import brand2 from "../../assets/col/brand2.svg";
import brand3 from "../../assets/col/brand3.svg";
import brand4 from "../../assets/col/brand4.svg";
import brand5 from "../../assets/col/brand5.svg";
import brand6 from "../../assets/col/brand6.svg";
import brand7 from "../../assets/col/brand7.svg";

// hoddies
import hoodie1 from "../../assets/col/hoodie1.webp";
import hoodie2 from "../../assets/col/hoodie2.webp";
import hoodie3 from "../../assets/col/hoodie3.webp";

import sect64 from "../../assets/col/sect6-4.webp";
import sect65 from "../../assets/col/sect6-5.webp";
import star from "../../assets/col/star.png";

import { Characters } from ".";
import { TypingHeading, NavDot } from "../../components";
import { fadeIn, staggerContainer } from "../../utils/motion";
import { BlurImage } from "../../components";

import useSmallScreen from "../../Hooks/useSmallScreen";

export default function Clothing() {
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
    <section
      id="clothing"
      className="clothing-layout sm:min-w-fit sm:max-w-none max-w-full"
    >
      <motion.div
        ref={container}
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="clothing-top flex flex-col gap-4 sm:max-w-none max-w-full sm:overflow-auto overflow-hidden"
      >
        <NavDot active={active} />
        <div className="flex flex-col gap-4 max-w-full">
          <div className="sm:block hidden heading-gradient">
            <TypingHeading title="BRANDS" />
          </div>
          <div className="flex items-center border-x min-h-[80px] border-black sm:pr-0 mr-2 max-w-lg overflow-x-hidden">
            <div className="infinite-brand-scroll flex gap-12 items-center sm:justify-normal justify-between">
              <div className="sm:h-[30px] min-w-fit h-[20px]">
                <img
                  src={brand1}
                  alt="brands-image"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="sm:h-[30px] min-w-fit h-[20px]">
                <img
                  src={brand2}
                  alt="brands-image"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="sm:h-[30px] min-w-fit h-[20px]">
                <img
                  src={brand3}
                  alt="brands-image"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="sm:h-[30px] min-w-fit h-[20px]">
                <img
                  src={brand4}
                  alt="brands-image"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="sm:h-[30px] min-w-fit h-[20px]">
                <img
                  src={brand5}
                  alt="brands-image"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="sm:h-[30px] min-w-fit h-[20px]">
                <img
                  src={brand6}
                  alt="brands-image"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="sm:h-[30px] min-w-fit h-[20px]">
                <img
                  src={brand7}
                  alt="brands-image"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="sm:h-[30px] min-w-fit h-[20px]">
                <img
                  src={brand1}
                  alt="brands-image"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="sm:h-[30px] min-w-fit h-[20px]">
                <img
                  src={brand2}
                  alt="brands-image"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="sm:h-[30px] min-w-fit h-[20px]">
                <img
                  src={brand3}
                  alt="brands-image"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="sm:h-[30px] min-w-fit h-[20px]">
                <img
                  src={brand4}
                  alt="brands-image"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="sm:h-[30px] min-w-fit h-[20px]">
                <img
                  src={brand5}
                  alt="brands-image"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="sm:h-[30px] min-w-fit h-[20px]">
                <img
                  src={brand6}
                  alt="brands-image"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="sm:h-[30px] min-w-fit h-[20px]">
                <img
                  src={brand7}
                  alt="brands-image"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center sm:gap-6 gap-2 sm:overflow-auto max-w-[100%] overflow-scroll">
          <motion.div
            variants={fadeIn("right", "spring", 0 * 0.5, 1.75)}
            className="rounded-[25px] sm:w-[145px] sm:min-w-max min-w-[170px] sm:h-[140px] h-[170px] object-cover overflow-hidden"
          >
            <BlurImage src={hoodie1} alt="cloth-image" />
          </motion.div>
          <motion.div
            variants={fadeIn("right", "spring", 1 * 0.5, 1.75)}
            className="rounded-[25px] sm:w-[145px] sm:min-w-max min-w-[170px] sm:h-[140px] h-[170px] object-cover overflow-hidden"
          >
            <BlurImage src={hoodie2} alt="cloth-image" />
          </motion.div>
          <motion.div
            variants={fadeIn("right", "spring", 2 * 0.5, 1.75)}
            className="rounded-[25px] sm:w-[145px] sm:min-w-max min-w-[170px] sm:h-[140px] h-[170px] object-cover overflow-hidden"
          >
            <BlurImage src={hoodie3} alt="cloth-image" />
          </motion.div>
        </div>
      </motion.div>
      <Characters />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="clothing-bottom flex items-center gap-8"
      >
        <div className="flex flex-col gap-4">
          <TypingHeading title="CLOTHING" />
          <motion.p
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="uppercase max-w-[405px] w-full sm:text-[12px] text-[10px] text-black font-medium"
          >
            With the help of 3D technology, clothes can be sold simply by
            showing them on the monitor of your computer, tablet or smartphone,
            even without prior tailoring and all this reduces the cost of fabric
            for sewing experimental samples by up to 60%.{" "}
          </motion.p>
        </div>
        <div className="sm:flex gap-6 hidden">
          <motion.div
            variants={fadeIn("right", "spring", 0 * 0.5, 1.75)}
            className="rounded-[25px] w-[130px] h-[120px] object-cover"
          >
            <BlurImage src={sect54} alt="cloth-image" />
          </motion.div>
          <motion.div
            variants={fadeIn("right", "spring", 1 * 0.5, 1.75)}
            className="rounded-[25px] w-[130px] h-[120px] object-cover"
          >
            <BlurImage src={sect64} alt="cloth-image" />
          </motion.div>
          <motion.div
            variants={fadeIn("right", "spring", 2 * 0.5, 1.75)}
            className="rounded-[25px] h-[120px] object-cover"
          >
            <BlurImage src={sect65} alt="cloth-image" />
          </motion.div>
          <motion.div
            variants={fadeIn("right", "spring", 2 * 0.5, 1.75)}
            className="rounded-[25px] h-[20px] object-cover"
          >
            <BlurImage src={star} alt="star-image" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
