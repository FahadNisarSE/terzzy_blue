import { motion } from "framer-motion";

import brand1 from "../assets/col/brand1.svg";
import brand2 from "../assets/col/brand2.svg";
import brand3 from "../assets/col/brand3.svg";
import brand4 from "../assets/col/brand4.svg";
import brand5 from "../assets/col/brand5.svg";
import brand6 from "../assets/col/brand6.svg";
import brand7 from "../assets/col/brand7.svg";

import aboutBanner from "../assets/abouts/about-banner.svg";
import NavButton from "../assets/NavButton.svg";
import {
  fadeIn,
  staggerContainer,
  textContainer,
  textVariant2,
} from "../utils/motion";
import { two } from "../assets";
import { BlurImage } from "../components";

import useToggleSidebar from "../Hooks/useToggleSidebar";

export default function About() {
  const { setShowSidebar } = useToggleSidebar();

  return (
    <motion.main
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.25 }}
      className="about-layout max-h-full sm:overflow-visible overflow-hidden sm:min-w-fit pl-4"
    >
      <motion.div
        variants={textContainer}
        className="about headings-gradient sm:text-[200px] text-[48px] font-semibold leading-none tracking-wide sm:my-auto"
      >
        {Array.from("ABOUT").map((letter, index) => (
          <motion.span variants={textVariant2} key={index}>
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.div>
      <motion.div
        variants={textContainer}
        className="us headings-gradient sm:text-[200px] text-[48px] font-semibold sm:leading-[220px] leading-none tracking-wide"
      >
        {Array.from("US").map((letter, index) => (
          <motion.span variants={textVariant2} key={index}>
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.div>
      <div className="min-w-screen h-[300px] my-4 bg-gray-200 -ml-4 sm:hidden">
        <BlurImage src={two} alt="brand image" />
      </div>
      <div className="sm:mb-auto flex border-x sm:mx-0 mx-auto my-auto sm:mr-0 mr-2 sm:h-[120px] h-[80px] border-gray-500 sm:pr-0 customer overflow-hidden">
        <div className="infinite-brand-scroll flex sm:gap-28 gap-12 items-center sm:justify-normal justify-between">
          <div className="sm:h-[40px] sm:min-w-fit h-[20px]">
            <BlurImage src={brand1} alt="brands-image" />
          </div>
          <div className="sm:h-[40px] min-w-fit h-[20px]">
            <BlurImage src={brand2} alt="brands-image" />
          </div>
          <div className="sm:h-[40px] min-w-fit h-[20px]">
            <BlurImage src={brand3} alt="brands-image" />
          </div>
          <div className="sm:h-[40px] min-w-fit h-[20px]">
            <BlurImage src={brand4} alt="brands-image" />
          </div>
          <div className="sm:h-[40px] min-w-fit h-[20px]">
            <BlurImage src={brand5} alt="brands-image" />
          </div>
          <div className="sm:h-[40px] min-w-fit h-[20px]">
            <BlurImage src={brand6} alt="brands-image" />
          </div>
          <div className="sm:h-[40px] min-w-fit h-[20px]">
            <BlurImage src={brand7} alt="brands-image" />
          </div>
          <div className="sm:h-[40px] sm:min-w-fit h-[20px]">
            <BlurImage src={brand1} alt="brands-image" />
          </div>
          <div className="sm:h-[40px] min-w-fit h-[20px]">
            <BlurImage src={brand2} alt="brands-image" />
          </div>
          <div className="sm:h-[40px] min-w-fit h-[20px]">
            <BlurImage src={brand3} alt="brands-image" />
          </div>
          <div className="sm:h-[40px] min-w-fit h-[20px]">
            <BlurImage src={brand4} alt="brands-image" />
          </div>
          <div className="sm:h-[40px] min-w-fit h-[20px]">
            <BlurImage src={brand5} alt="brands-image" />
          </div>
          <div className="sm:h-[40px] min-w-fit h-[20px]">
            <BlurImage src={brand6} alt="brands-image" />
          </div>
          <div className="sm:h-[40px] min-w-fit h-[20px]">
            <BlurImage src={brand7} alt="brands-image" />
          </div>
        </div>
      </div>
      <motion.div
        variants={fadeIn("up", "spring", 0.5, 1.75)}
        className="statistics sm:pr-0 pr-4 flex flex-col justify-between"
      >
        <p className="uppercase sm:w-[500px] sm:text-[13px] text-[10px] sm:text-left text-center">
          Our firm offers product design for different purposes, starting from
          the development phase, testing up to visualization for online stores,
          presentations, websites, brochures, and advertisements. Product
          sketches, CAD design for manufacturing, product realistic
          visualizations, 3D rendering services are not the complete list of our
          competencies.
        </p>
        <div
          onClick={() => setShowSidebar(true)}
          className="sm:hidden flex justify-end cursor-pointer"
        >
          <img src={NavButton} alt="open menu" />
        </div>
        <div className="flex items-center justify-between">
          <motion.div
            variants={fadeIn("top", "spring", 0.5, 1.75)}
            className="flex flex-col items-center gap-2 text-center"
          >
            <h4 className="headings-gradient sm:text-3xl text-4xl font-extrabold">
              7
            </h4>
            <p className="sm:text-xs text-[10px] max-w-[60px]">
              YEARS OF EXPERIENCE
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("top", "spring", 0.5, 1.75)}
            className="flex flex-col items-center gap-2 text-center"
          >
            <h4 className="headings-gradient sm:text-3xl text-4xl font-extrabold">
              400+
            </h4>
            <p className="sm:text-xs text-[10px] max-w-[70px]">
              SUCCESSFULL PROJECTS
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("top", "spring", 0.5, 1.75)}
            className="flex flex-col items-center gap-2 text-center"
          >
            <h4 className="headings-gradient sm:text-3xl text-4xl font-extrabold">
              21
            </h4>
            <p className="sm:text-xs text-[10px] max-w-[40px]">TEAM MEMBERS</p>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("", "spring", 1.25, 1.75)}
        className="about-banner relative sm:w-[800px] w-screen sm:bg-transparent bg-gray-200 sm:pb-[100px] overflow-hidden"
      >
        <div className="sm:block hidden">
          <BlurImage src={aboutBanner} alt="About Banner" />
        </div>
        <div className="bg-black text-[100px] font-semibold text-white absolute sm:bottom-10 bottom-0 w-full tracking-wide sm:flex items-center justify-between hidden">
          <div className="mobile-strip-scroll-a whitespace-nowrap">
            <span className="relative mr-4">AGENCY</span>{" "}
            <span className="relative mr-4">TREZZY</span>
            <span className="relative mr-4">AGENCY</span>{" "}
            <span className="relative mr-4">TREZZY</span>
            <span className="relative mr-4">AGENCY</span>{" "}
            <span className="relative mr-4">TREZZY</span>
          </div>
        </div>
      </motion.div>
    </motion.main>
  );
}
