import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
import { Link } from "react-router-dom";

import sect1 from "../../assets/col/sect2-1.svg";
import star from "../../assets/col/star.png";
import ulList from "../../assets/col/ulList.svg";
import AboutUs from "../../assets/col/aboutus.svg";
import Switch from "../../assets/col/switch.svg";
import smallAboutUs from "../../assets/col/smallaboutus.svg";
import NavButton from "../../assets/NavButton.svg";
import curved from "../../assets/col/curved.svg";
import image3 from "../../assets/col/image-3.webp";
import iphone from "../../assets/col/iphone.webp";
import gunMetal from "../../assets/col/gunMetal.webp";
import gunMetal2 from "../../assets/col/gunMetalalt.png";
import Termos from "../../assets/col/Termos.webp";
import rect11 from "../../assets/col/rect-11.webp";
import rect12 from "../../assets/col/rect-12.webp";

import { staggerContainer, fadeIn } from "../../utils/motion";
import { TypingHeading, NavDot, BlurImage } from "../../components";

import useSmallScreen from "../../Hooks/useSmallScreen";
import useToggleCarousel from "../../Hooks/useToggleCarousel";
import useToggleSidebar from "../../Hooks/useToggleSidebar";
import AnimatingBlob from "../../components/AnimatingBlob";

export default function ProfessionalProducts() {
  const CustomerComponent = () => (
    <>
      <div className="flex items-center gap-4">
        <img src={ulList} alt="dummy img" className="h-28" />
        <div className="flex flex-col justify-center sm:gap-6 gap-2 sm:text-[26px] text-xl headings-gradient">
          <span className="font-bold tracking-wide">AMAZON</span>
          <span className="font-bold tracking-wide">ETSY</span>
          <span className="font-bold tracking-wide">WALLMART</span>
        </div>
      </div>
      <span className="tracking-wide text-lightgray sm:text-xs text-[10px]">
        AND OTHERS
      </span>
    </>
  );

  const [active, setActive] = useState(true);
  const container = useRef(null);
  const [hovered, setHovered] = useState(0);
  const { isSmall } = useSmallScreen();
  const { setShowCarousel } = useToggleCarousel();
  const { setShowSidebar } = useToggleSidebar();

  const isInView = useInView(container, {
    once: false,
    amount: isSmall ? 0.25 : 1,
  });

  useEffect(() => {
    setActive(isInView);
  }, [isInView]);

  return (
    <section
      ref={container}
      id="professional-products"
      className="flex sm:flex-row flex-col sm:items-center gap-6 sm:min-w-fit sm:max-w-none max-w-full h-full"
    >
      <AnimatingBlob width={500} />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="flex flex-col items-center gap-4"
      >
        <NavDot active={active} />
        <div className="flex gap-6 sm:relative items-end sm:w-auto max-w-full sm:overflow-x-visible overflow-y-visible overflow-x-scroll">
          <div className="sm:flex hidden items-center gap-3 absolute z-20 sm:-top-5 -top-20 sm:-left-2 left-10">
            <div className="text-5xl font-thin">+</div>
            <div
              className="flex flex-col relative cursor-pointer"
              onClick={() => setShowCarousel(true)}
            >
              <span className="text-2xl">400</span>
              <span className="text-xs -mt-2">more</span>
              <img
                src={curved}
                alt="dummy"
                className="absolute h-14 -bottom-14"
              />
            </div>
          </div>
          <div className="cursor-pointer relative w-[338px] h-[250px] sm:flex hidden items-center justify-center">
            <div
              onMouseEnter={() => setHovered(2)}
              onMouseLeave={() => setHovered(0)}
              className={`duration-200 transition-all w-[80%] h-[70%] bottom-0 z-10 absolute rounded-lg overflow-hidden ${
                hovered !== 0 ? (hovered === 2 ? "" : "opacity-0") : null
              }`}
            >
              <BlurImage src={image3} alt="mobile-accesories" cover={true} />
            </div>
            <div
              onMouseEnter={() => setHovered(1)}
              onMouseLeave={() => setHovered(0)}
              className={`duration-200 transition-all w-[50%] h-full absolute rounded-lg overflow-hidden ${
                hovered !== 0 ? (hovered === 1 ? "" : "opacity-0") : null
              }`}
            >
              <BlurImage src={iphone} alt="iphone-13" cover={true} />
            </div>
            <motion.div
              variants={fadeIn("right", "spring", 0 * 0.25, 1.75)}
              src={sect1}
              alt="dummy-image"
              className={`bottom-0 w-full h-[60%] z-20 rounded-t-xl shadow-2xl cursor-pointer absolute ${
                hovered !== 0 ? "opacity-0" : "glass-bg"
              }`}
            />
          </div>
          <motion.div
            variants={fadeIn(!isSmall && "right", "spring", 1 * 0.25, 1.75)}
            className="min-w-[250px] h-[250px] overflow-hidden rounded-2xl"
          >
            <BlurImage
              src={gunMetal}
              secondaryImage={gunMetal2}
              alt="gun-Metal"
            />
          </motion.div>
          <motion.div
            variants={fadeIn(!isSmall && "right", "spring", 2 * 0.25, 1.75)}
            className="min-w-[218px] h-[230px] overflow-hidden rounded-2xl"
          >
            <BlurImage src={Termos} alt="Termos" />
          </motion.div>
          <div
            onClick={() => setShowSidebar(true)}
            className="sm:hidden block absolute z-5 cursor-pointer right-4"
          >
            <img src={NavButton} alt="open menu" />
          </div>
        </div>
        <div className="relative mx-auto w-fit sm:block hidden">
          <TypingHeading title="PRODUCTS" />
          <motion.img
            variants={fadeIn("", "tween", 0.25, 0.5)}
            src={star}
            alt="star"
            className="w-5 h-5 absolute -left-8 -bottom-4"
          />
        </div>
        <div className="sm:order-1 -order-1 sm:block sm:w-auto flex flex-col w-full">
          <div className="sm:mx-auto sm:w-fit relative">
            <img
              src={Switch}
              alt="switch"
              className="absolute sm:block hidden -top-[80%] -right-[60px] h-[150px]"
            />
            <motion.h1
              variants={fadeIn("", "tween", 0.25, 0.5)}
              className="headings-gradient font-bold sm:tracking-wider sm:text-[96px] text-[42px] sm:leading-[120px]"
            >
              PROFESSIONAL
            </motion.h1>
          </div>
          <div className="flex items-center sm:gap-8 gap-4 sm:mx-auto w-fit">
            <Link to="/about">
              <motion.img
                className="min-w-[30px]"
                variants={fadeIn("", "tween", 0.25, 0.5)}
                src={isSmall ? smallAboutUs : AboutUs}
                alt="about use"
              />
            </Link>
            <motion.p
              variants={fadeIn("up", "tween", 0.25, 1)}
              className="uppercase sm:text-[12px] text-[10px] lg:max-w-[600px] sm:max-w-[700px] max-w-[350px]"
            >
              Our firm offers product design for different purposes, starting
              from the development phase, testing up to visualization for online
              stores, presentations, websites, brochures, and advertisements.
              Product sketches, CAD design for manufacturing, product realistic
              visualizations, 3D rendering services are not the complete list of
              our competencies.
            </motion.p>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amout: 0.25 }}
        className="space-x-2 space-y-16"
      >
        <div className="hide-the-scrollbar flex sm:flex-row flex-col sm:items-center sm:grid sm:grid-cols-2 sm:max-w-[300px] gap-6">
          <div>
            <div className="sm:hidden block">
              <TypingHeading title="PRODUCTS" />
            </div>
            <motion.div
              variants={fadeIn("right", "spring", 0 * 0.25, 1.75)}
              className="sm:min-w-[150px] sm:h-[180px] h-[200px] min-w-[140px] rounded-3xl object-cover sm:block hidden overflow-hidden sm:mb-2"
            >
              <BlurImage src={rect11} alt="accessories" />
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("right", "spring", 1 * 0.25, 1.75)}
            className="sm:min-w-[150px] sm:h-[180px] h-[200px] min-w-[140px] rounded-3xl overflow-hidden object-cover sm:block hidden sm:mb-2"
          >
            <BlurImage src={rect12} alt="accessories" />
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 0.25, 1)}
            className="uppercase sm:col-span-2 sm:text-[12px] max-w-[400px] text-[10px] tracking-wider sm:mb-2"
          >
            Create a stunning images with help of 3D renderings - drive clicks
            and increase conversion. We offer not simple photo shooting but
            primarily image creation adapted for Amazon, Etsy, Walmart.
          </motion.div>
          <div className="flex gap-4 items-center">
            <motion.div
              variants={fadeIn("right", "spring", 0 * 0, 1.75)}
              className="flex-1 rounded-2xl object-cover sm:hidden block"
            >
              <BlurImage src={rect11} alt="accessories" />
            </motion.div>
            <div className="flex flex-1 flex-col mt-auto">
              <CustomerComponent />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
