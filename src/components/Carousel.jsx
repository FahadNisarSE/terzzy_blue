import { useState } from "react";
import { motion } from "framer-motion";

import {
  NFT1,
  NFT2,
  NFT3,
  two,
  four,
  six,
  eleven,
  twelve,
  fifteen,
  sixteen,
  twenty,
  twentyOne,
  twentyTwo,
  hoodie1,
  hoodie2,
  hoodie3,
  mannequin,
  suit1,
  suit2,
  suit3,
  fourteen,
  eighteen,
  prev,
  next,
  cancel,
} from "../assets/carousel";
import { BlurImage } from "../components";

const images = [
  { image: NFT1, alt: "NFT1" },
  { image: NFT2, alt: "NFT2" },
  { image: NFT3, alt: "NFT3" },
  { image: two, alt: "NFT4" },
  { image: four, alt: "NFT5" },
  { image: six, alt: "NFT6" },
  { image: eleven, alt: "NFT7" },
  { image: twelve, alt: "NFT8" },
  { image: fifteen, alt: "NFT9" },
  { image: sixteen, alt: "NFT10" },
  { image: twenty, alt: "NFT11" },
  { image: twentyOne, alt: "NFT12" },
  { image: twentyTwo, alt: "NFT13" },
  { image: hoodie1, alt: "NFT14" },
  { image: hoodie2, alt: "NFT15" },
  { image: hoodie3, alt: "NFT16" },
  { image: mannequin, alt: "NFT17" },
  { image: suit1, alt: "NFT18" },
  { image: suit2, alt: "NFT19" },
  { image: suit3, alt: "NFT20" },
  { image: fourteen, alt: "NFT21" },
  { image: eighteen, alt: "NFT22" },
];

import useToggleCarousel from "../Hooks/useToggleCarousel";

export default function Contact() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animatedRight, setAnimatedRight] = useState(true);
  const { setShowCarousel } = useToggleCarousel();

  const getPrevSlideIndex = () => {
    if (currentSlide === 0) {
      return images.length - 1;
    } else {
      return currentSlide - 1;
    }
  };

  const getNextSlideIndex = () => {
    if (currentSlide === images.length - 1) {
      return 0;
    } else {
      return currentSlide + 1;
    }
  };

  const renderImage = (index, onClick, current = false) => (
    <motion.div
      key={images[index].alt}
      initial={{ x: animatedRight ? -100 : 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", duration: 1, ease: "easeIn" }}
      onClick={onClick}
      className={`${
        current
          ? "sm:w-[390px] sm:h-[487px] w-[290px] h-[387px] md:-mx-28 -mx-24 relative z-10"
          : "md:w-[330px] md:h-[416px] w-[230px] h-[316px]"
      } rounded-2xl overflow-hidden cursor-pointer`}
    >
      <BlurImage
        src={images[index].image}
        alt={images[index].alt}
        noModal={true}
      />
    </motion.div>
  );

  return (
    <section className="fixed z-[100] inset-0 flex flex-col justify-center items-center overflow-hidden bg-black/50">
      <div className="flex flex-col lg:p-0 px-4">
        <div
          className="ml-auto cursor-pointer sm:pr-4"
          onClick={() => setShowCarousel(false)}
        >
          <img src={cancel} alt="cancel" />
        </div>
        <div className="flex items-center transition relative md:w-auto w-screen md:px-0 px-4 lg:gap-4">
          <button
            onClick={() => {
              setCurrentSlide(getNextSlideIndex());
              setAnimatedRight(false);
            }}
            className="lg:static absolute top-0 bottom-0 left-5 z-[120]"
          >
            <img src={prev} alt="prev" />
          </button>
          {renderImage(getPrevSlideIndex(), () =>
            setCurrentSlide(getPrevSlideIndex())
          )}
          {renderImage(currentSlide, () => {}, true)}
          {renderImage(getNextSlideIndex(), () =>
            setCurrentSlide(getNextSlideIndex())
          )}
          <button
            onClick={() => {
              setCurrentSlide(getPrevSlideIndex());
              setAnimatedRight(true);
            }}
            className="lg:static absolute top-0 bottom-0 right-5 z-[120]"
          >
            <img src={next} alt="Next" />
          </button>
        </div>
      </div>
    </section>
  );
}
