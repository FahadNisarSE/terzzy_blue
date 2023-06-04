import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { fb, wa, be, close, dot, output } from "../assets/nav";
import { staggerContainer, fadeIn } from "../utils/motion";
import { HiMail } from "react-icons/hi";
import { useLocation } from "react-router-dom";
const bookmarkLinks = [
  {
    link: "#professional-products",
    title: "AMAZON PRODUCTS",
  },
  {
    link: "#furniture",
    title: "FURNITURE",
  },
  {
    link: "#interior",
    title: "INTERIORS",
  },
  {
    link: "#clothing",
    title: "CLOTHING",
  },
  {
    link: "#characters",
    title: "CHARACTERS",
  },
  {
    link: "#nft",
    title: "NFT",
  },
  {
    link: "#industrial",
    title: "INDUSTRIAL",
  },
  {
    link: "#gif-animation",
    title: "GIF ANIMATION",
  },
  {
    link: "#three-d-video",
    title: "3D VIDEO",
  },
];

import useToggleSidebar from "../Hooks/useToggleSidebar";

export default function MobileNav() {
  const { setShowSidebar } = useToggleSidebar();
  const { pathname } = useLocation();

  return (
    <motion.nav
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="fixed bottom-0 top-0 w-screen z-[200] bg-black text-white flex flex-col gap-8 px-6 py-6 transition-all"
    >
      <motion.div
        variants={fadeIn("down", "spring", 1.5, 1.75)}
        className="flex items-center justify-between"
      >
        <Link to="/" onClick={() => setShowSidebar(false)}>
          <h2 className="font-bold text-2xl">TERZZY</h2>
        </Link>
        <div className="flex items-center text-xs font-semibold gap-2">
          GUARANTEE <br /> QUALITY
          <Link onClick={() => setShowSidebar(false)} to="/contact">
            <img src={output} alt="output-button" />
          </Link>
        </div>
      </motion.div>
      <div className="flex flex-col gap-2">
        <Link onClick={() => setShowSidebar(false)} to="/about">
          <motion.h2
            variants={fadeIn("up", "spring", 0 * 0.5, 1.75)}
            className={`specialist ${
              pathname !== "/about" && "text-lightgray"
            } sm:text-[200px] text-[48px] font-bold sm:leading-[150px] leading-none`}
          >
            ABOUT US
          </motion.h2>
        </Link>
        <Link onClick={() => setShowSidebar(false)} to="/faq">
          <motion.h2
            variants={fadeIn("up", "spring", 1 * 0.5, 1.75)}
            className={`specialist ${
              pathname !== "/faq" && "text-lightgray"
            } sm:text-[200px] text-[48px] font-bold sm:leading-[150px] leading-none`}
          >
            FAQs
          </motion.h2>
        </Link>
        <Link onClick={() => setShowSidebar(false)} to="/collection">
          <motion.h2
            variants={fadeIn("up", "spring", 2 * 0.5, 1.75)}
            className={`specialist ${
              pathname !== "/collection" && "text-lightgray"
            } sm:text-[200px] text-[48px] font-bold sm:leading-[150px] leading-none`}
          >
            COLLECTION
          </motion.h2>
        </Link>
      </div>
      <motion.div
        variants={fadeIn("right", "spring", 0.5, 1.75)}
        className="flex items-center flex-wrap w-full border-l pl-4 border-white gap-4 py-4"
      >
        {bookmarkLinks.map(({ link, title }, index) => (
          <>
            <Link
              onClick={() => setShowSidebar(false)}
              to={"/" + link}
              key={title}
            >
              <div
                className={`uppercase ${pathname !== link && "text-lightgray"}`}
              >
                {title}
              </div>
            </Link>
            {index !== bookmarkLinks.length - 1 && (
              <div className="w-[4px] h-[4px] bg-white rounded-full" />
            )}
          </>
        ))}
      </motion.div>
      <motion.div
        variants={fadeIn("left", "spring", 1.5, 1.75)}
        className="flex justify-end my-auto cursor-pointer"
        onClick={() => setShowSidebar(false)}
      >
        <img src={close} alt="close" />
      </motion.div>
      <motion.div
        variants={fadeIn("down", "spring", 1.5, 1.75)}
        className="flex items-center justify-center gap-8 mt-auto"
      >
        <Link
          to="/contact"
          className="cursor-pointer"
          onClick={() => setShowSidebar(false)}
        >
          <HiMail className="w-5 h-5" />
        </Link>
        <a href="https://wa.me/393515649208?text=Hi%21%20Terzzy">
          <img src={wa} alt="whatsapp" className="sm:h-4 h-5" />
        </a>
        <a
          href="https://www.facebook.com/ArtKrystel/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={fb} alt="facebook" className="sm:h-4 h-5" />
        </a>
        <a
          href="https://www.behance.net/designartk1416"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={be} alt="be" className="sm:h-3 h-4" />
        </a>
        <a
          href="https://www.flickr.com/photos/194837716@N08/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={dot} alt="doubledot" className="sm:h-2 h-3" />
        </a>
      </motion.div>
    </motion.nav>
  );
}
