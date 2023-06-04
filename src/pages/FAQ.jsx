import { useState } from "react";
import { motion } from "framer-motion";
import { BiArrowBack } from "react-icons/bi";

import {
  staggerContainer,
  textContainer,
  textVariant2,
  fadeIn,
} from "../utils/motion";
import { BlurImage } from "../components";
import faq1 from "../assets/FAQs/faq-1.svg";
import faq2 from "../assets/FAQs/faq-2.svg";
import NavButton from "../assets/NavButton.svg";
import { fifteen } from "../assets";

const bookmarkLinks = [
  {
    link: "/professional-products",
    title: "AMAZON PRODUCTS",
  },
  {
    link: "/furniture",
    title: "FURNITURE",
  },
  {
    link: "/interior",
    title: "INTERIORS",
  },
  {
    link: "/clothing",
    title: "CLOTHING",
  },
  {
    link: "/characters",
    title: "CHARACTERS",
  },
  {
    link: "/nft",
    title: "NFT",
  },
  {
    link: "/industrial",
    title: "INDUSTRIAL",
  },
  {
    link: "/gif-animation",
    title: "GIF ANIMATION",
  },
  {
    link: "/3d-video",
    title: "3D VIDEO",
  },
];

import { faqQuestion } from "../constants";

import useToggleCarousel from "../Hooks/useToggleCarousel";
import useToggleSidebar from "../Hooks/useToggleSidebar";
import useQuestionSection from "../Hooks/useQuestionSeciton";

const ComponentFaq = ({ active, setActive, setQuestionSection }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <>
      {faqQuestion.map(({ title, qa, endingRemarks }) => {
        if (title === active)
          return (
            <>
              <div className="flex items-center gap-4 py-4">
                <BiArrowBack
                  className="text-black hover:bg-black hover:text-white cursor-pointer p-[4px] rounded-full text-4xl mb-auto mt-7 transition-colors"
                  onClick={() => {
                    setActive("");
                    setQuestionSection(false);
                  }}
                />
                <div className="flex flex-col">
                  <h2 className="headings-gradient font-bold sm:tracking-wider sm:text-[76px] text-[32px] leading-tight">
                    {title} <br />
                  </h2>
                  <p className="headings-gradient font-bold sm:tracking-wider sm:text-[46px] text-[22px] leading-tight">
                    FREQUENTLY ASKED QUESTIONS.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 text-sm mt-5 sm:px-8">
                {qa.map(({ question }, index) => (
                  <div key={question} onClick={() => setSelectedIndex(index)}>
                    <p
                      className={`rounded-full px-4 max-w-[300px] w-fit h-[78px] flex justify-center items-center hover:shadow-sm border border-black cursor-pointer text-center ${
                        selectedIndex === index
                          ? "bg-red-600 text-white font-semibold"
                          : null
                      } hover:text-white hover:bg-red-600 transition-colors hover:font-medium`}
                    >
                      {question}
                    </p>
                  </div>
                ))}
              </div>
              {endingRemarks && (
                <p className="w-full px-4 mt-8 hidden bg-gray-200 py-4 rounded-xl text-sm text-gray-700 pb-8">
                  {endingRemarks}
                </p>
              )}
              {qa.map(({ answer }, index) => {
                return index === selectedIndex ? (
                  <div
                    className={`${
                      index === selectedIndex ? "faqanswerin" : "faqanswerout"
                    } bg-black text-white ml-auto sm:ml-0 mt-5 sm:mt-0 sm:absolute sm:bottom-[120px] right-5 w-[400px] max-h-[100px] text-xs p-4 rounded-xl rounded-br-none`}
                  >
                    <p>{answer}</p>
                  </div>
                ) : null;
              })}
            </>
          );
      })}
    </>
  );
};

export default function FAQ() {
  const { setShowCarousel } = useToggleCarousel();
  const { setShowSidebar } = useToggleSidebar();
  const [active, setActive] = useState("");
  const { setQuestionSection } = useQuestionSection();

  console.log("Active", active);

  return (
    <>
      {active === "" ? (
        <motion.main
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.25 }}
          className="faq-layout sm:min-h-fit min-w-fit"
        >
          <motion.div
            onClick={() => setShowCarousel(true)}
            variants={fadeIn("right", "spring", 0.5, 1.75)}
            className="gray-container overflow-hidden h-[425px] w-[421px] bg-gray-200 rounded-e-2xl mr-2 sm:block hidden cursor-pointer"
          >
            <BlurImage src={fifteen} alt="faq" noModal={true} />
          </motion.div>
          <motion.div
            variants={textContainer}
            className="specialist headings-gradient sm:text-[180px] text-[48px] font-semibold sm:leading-[150px] leading-none sm:p-0 px-4"
          >
            {Array.from("SPECIALIST").map((letter, index) => (
              <motion.span variants={textVariant2} key={index}>
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.div>
          <motion.div
            variants={textContainer}
            className="mode headings-gradient sm:text-[180px] text-[48px] font-semibold sm:leading-[150px] leading-none sm:p-0 px-4"
          >
            {Array.from("MODE").map((letter, index) => (
              <motion.span variants={textVariant2} key={index}>
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.div>
          <div className="bookmarks flex sm:flex-row flex-col items-start justify relative gap-8 sm:ml-4 sm:mt-0 mt-8">
            <div className="flex items-center flex-wrap sm:gap-3 gap-4 sm:mr-[100px] justify-start sm:min-w-[500px] sm:p-0 px-4">
              {bookmarkLinks.map(({ title }, index) => (
                <motion.div
                  key={title}
                  variants={fadeIn("right", "spring", index * 0.5, 1.75)}
                  onClick={() => {
                    setActive(title);
                    setQuestionSection(true);
                  }}
                  className={`w-fit h-12 sm:px-4 px-6 rounded-full border cursor-pointer transition-colors hover:bg-red-600 hover:text-white text-xs border-black flex items-center justify-center ${
                    active === title ? "bg-red-600" : null
                  }`}
                >
                  0{index + 1}/ {title}
                </motion.div>
              ))}
            </div>
            {active === "" ? (
              <motion.div
                variants={fadeIn("left", "spring", 8 * 0.5, 1.75)}
                className="faq-image sm:absolute right-0 -bottom-20 w-[300px] overflow-visible"
              >
                <img src={faq1} alt="" className="sm:block hidden" />
                <img src={faq2} alt="" className="sm:hidden block" />
              </motion.div>
            ) : null}
            <div
              onClick={() => setShowSidebar(true)}
              className="sm:hidden flex justify-end cursor-pointer w-full sm:p-0 px-4"
            >
              <img src={NavButton} alt="open menu" />
            </div>
            <div className="w-screen overflow-hidden bg-black h-[60px] flex items-center relative left-0 right-0 z-40 sm:hidden">
              <p className="text-3xl headings-gradient-2 overflow-show font-semibold whitespace-nowrap mobile-strip-scroll-a tracking-widest heading-gradient">
                <span className="mr-4">3DVIDEO</span>{" "}
                <span className="mr-4">BRANDS</span>{" "}
                <span className="mr-4">TREZZY</span>{" "}
                <span className="mr-4">3DVIDEO</span>{" "}
                <span className="mr-4">BRANDS</span>{" "}
                <span className="mr-4">3DVIDEO</span>{" "}
                <span className="mr-4">BRANDS</span>{" "}
                <span className="mr-4">TREZZY</span>
              </p>
            </div>
          </div>
        </motion.main>
      ) : (
        <div className="flex mb-auto sm:h-[83vh] my-auto sm:ml-8 sm:mr-0 mx-4">
          <div className="w-full flex flex-col h-full">
            <ComponentFaq
              active={active}
              setActive={setActive}
              setQuestionSection={setQuestionSection}
            />
          </div>
        </div>
      )}
    </>
  );
}
