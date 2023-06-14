import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

import sect33 from "../../assets/col/sect3-3.webp";
import sect34 from "../../assets/col/sect3-4.webp";
import sect32 from "../../assets/col/sect3-2.webp";
import furnitureStar from "../../assets/col/furnitureStar.svg";
import sect31 from "../../assets/col/sect3-1.webp";
import qrcode from "../../assets/col/sect3-1.svg";
import borderImage from "../../assets/foot/border.svg";

import { staggerContainer, fadeIn } from "../../utils/motion";
import { TypingHeading, NavDot, BlurImage } from "../../components";

import useSmallScreen from "../../Hooks/useSmallScreen";

export default function Furniture() {
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
      id="furniture"
      className="min-w-fit flex flex-col gap-4 sm:max-w-none max-w-full"
    >
      <NavDot active={active} />
      <div className="flex sm:flex-row flex-col items-end gap-8 sm:min-w-fit w-full">
        <div className="sm:hidden flex w-full justify-center sm:gap-4 gap-1">
          <div
            style={{ writingMode: "vertical-rl" }}
            className="bg-black min-w-[50px] w-[70px] text-white font-bold rounded-2xl max-h-full grid place-items-center overflow-hidden sm:text-4xl text-3xl tracking-wider"
          >
            <p className="whitespace-nowrap text-center max-h-[400px] mobile-strip-scroll overflow-visible">
              <span className="mb-2">TREZZY</span>{" "}
              <span className="mb-2">3D</span>{" "}
              <span className="mb-2">AGENCY</span>
              <span className="mb-2">TREZZY</span>{" "}
              <span className="mb-2">3D</span>{" "}
              <span className="mb-2">AGENCY</span>
            </p>
          </div>
          <img
            src={furnitureStar}
            alt="dummy Image"
            className="self-end w-10 h-10 xxs:block hidden"
          />
          <div className="self-stretch object-left-top rounded-2xl overflow-hidden">
            <BlurImage src={sect32} alt="Furniture" />
          </div>
        </div>
        <div className="sm:flex hidden flex-col items-center gap-4">
          <motion.img
            variants={fadeIn("", "tween", 0.25, 0.5)}
            src={sect31}
            alt="dummy image"
            className="w-[120px]"
          />
          <a
            href="https://www.behance.net/designartk1416"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.img
              variants={fadeIn("", "tween", 0.25, 0.5)}
              src={qrcode}
              alt="dummy image"
              className="w-[120px] h-[120px]"
            />
          </a>
        </div>
        <div
          variants={fadeIn("right", "spring", 0.5, 1.75)}
          className="sm:w-[650px] sm:h-[240px] sm:block items-center rounded-3xl overflow-hidden relative"
        >
          <div className="absolute flex items-center justify-center z-20 bottom-0 -left-20 h-[78px] w-full bg-[#693F24] rotate-25">
            <p className="text-6xl text-white overflow-show font-black tracking-widest infinite-scroll whitespace-nowrap">
              TERZZY TERZZY TERZZY TERZZY
            </p>
          </div>
          <BlurImage src={sect33} alt="Chairs Image" />
        </div>
      </div>
      <div
        variants={fadeIn("right", "spring", 0.5, 1.75)}
        className="sm:w-[800px] sm:h-[150px] rounded-3xl sm:min-w-fit overflow-hidden"
      >
        <BlurImage src={sect34} alt="Chairs Image" cover={true} />
      </div>
      <div className="flex items-center sm:justify-normal justify-between w-full sm:px-0 px-4 sm:gap-10 gap-2 sm:w-fit">
        <div className="flex sm:flex-row flex-col sm:items-center justify-between gap-4">
          <TypingHeading title="FURNITURE" />
          <motion.p
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="uppercase sm:max-w-[400px] max-w-[250px] sm:text-[12px] text-[10px] text-black font-medium"
          >
            The capabilities of 3D furniture modeling programs allow you to
            compose and view objects in a three-dimensional form.
          </motion.p>
        </div>
        <Link to="/contact">
          <motion.img
            src={borderImage}
            variants={fadeIn("", "tween", 1, 0.5)}
            alt="order image"
            className="sm:block hidden"
          />
        </Link>
        <motion.img
          variants={fadeIn("", "tween", 1, 0.5)}
          src={qrcode}
          alt="dummy image"
          className="w-[80px] h-[80px] sm:hidden block"
        />
      </div>
    </motion.section>
  );
}
