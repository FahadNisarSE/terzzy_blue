import { useState, Suspense } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

import { BlurImage } from "../components";
import useSmallScreen from "../Hooks/useSmallScreen";

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
} from "../assets/carousel";
import { Navigation } from "swiper";

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

import "swiper/css";
import "swiper/css/navigation";

export default function Collection() {
  const { isSmall } = useSmallScreen();

  const [myActive, setMyActive] = useState();
  return (
    <main className="flex items-center sm:h-auto h-[75vh] justify-center px-8">
      <Swiper
        spaceBetween={isSmall ? 0 : 50}
        slidesPerView={isSmall ? 1 : 3}
        navigation={true}
        modules={[Navigation]}
        className="swiper"
      >
        {images.map((image, index) => (
          <Suspense
            fallback={() => (
              <div className="sm:h-[200px] sm:w-[200px] w-full h-full bg-gray-400 animate-pulse rounded-md transition-all"></div>
            )}
          >
            <SwiperSlide key={image.image + index} className="swiper-slide">
              {({ isActive }) => {
                isActive
                  ? index !== images.length - 1 && !isSmall
                    ? setMyActive(index + 1)
                    : setMyActive(index)
                  : null;
                return (
                  <motion.div
                    className={`${
                      myActive === index
                        ? "sm:h-[400px] w-full h-full sm:w-[400px]"
                        : "sm:h-[200px] sm:w-[200px] w-full h-full"
                    } pointer-events-none rounded-lg overflow-hidden mx-auto transition-all duration-1000`}
                  >
                    <BlurImage src={image.image} alt={image.alt} />
                  </motion.div>
                );
              }}
            </SwiperSlide>
          </Suspense>
        ))}
      </Swiper>
    </main>
  );
}
