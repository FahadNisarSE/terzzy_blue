import { Link, useLocation } from "react-router-dom";

import {
  facebook,
  whatsApp,
  be,
  doubledot,
  whitefacebook,
  whitewhatsApp,
  whitebe,
  whitedoubledot,
} from "../assets/foot";
import { BsDash, BsDot } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import useToggleCarousel from "../Hooks/useToggleCarousel";
import { usePopupModal } from "../Hooks/usePopupModal";

const pageLinks = [
  {
    link: "/about",
    title: "ABOUT US",
  },
  {
    link: "/faq",
    title: "FAQs",
  },
  {
    link: "/collection",
    title: "COLLECTION",
  },
];

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
    link: "#clothing",
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

const NormalLinks = () => (
  <>
    <Link to="/contact" className="cursor-pointer">
      <HiMail className="w-5 h-5 text-black" />
    </Link>
    <a href="https://wa.me/393515649208?text=Hi%21%20Terzzy">
      <img src={whatsApp} alt="whatsapp" className="sm:h-4 h-5" />
    </a>
    <a
      href="https://www.facebook.com/ArtKrystel/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={facebook} alt="facebook" className="sm:h-4 h-5" />
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
      <img src={doubledot} alt="doubledot" className="sm:h-2 h-3" />
    </a>
  </>
);

const scrollToContainer = (e, targetId) => {
  e.preventDefault();

  console.log("Tagetid: ", targetId);
  
  const targetSection = document.querySelector(targetId);
  console.log("Target Section : ", targetSection);

  const container = document.querySelector("html");
  console.log("Container : ", container);
  
  console.log("Taget Section offset : ", targetSection.offsetLeft);
  container.scrollLeft = targetSection.offsetLeft-20;
};

export default function Navbar() {
  const { pathname } = useLocation();
  const { showCarousel } = useToggleCarousel();
  const { showPopupModal } = usePopupModal();

  const activeLink = (link) => (pathname === link ? "text-black" : null);

  return (
    <nav
      className={`w-full flex items-center justify-between gap-2 lg:flex-nowrap flex-wrap sm:px-6 custom:py-6 custom:pt-11 custom:pb-5 sm:pt-10 sm:pb-0 py-6 text-[11px] text-lightgray sm:border-t ${
        showCarousel || showPopupModal ? "border-white" : "border-gray-500"
      }`}
    >
      <div className="sm:flex hidden gap-4 items-start">
        <div className="flex items-center flex-nowrap lg:gap-8 gap-2 font-semibold">
          {pageLinks.map((page) => (
            <div
              key={page.title}
              className={`hover:text-black min-w-fit transition leading-[1] ${activeLink(
                page.link
              )} ${
                showCarousel || (showPopupModal && "text-white font-normal")
              }`}
            >
              <Link to={page.link}>{page.title}</Link>
            </div>
          ))}
        </div>

        {pathname !== "/faq" &&
          pathname !== "/about" &&
          pathname !== "/collection" && (
            <>
              <BsDash
                className={`text-black ${
                  showCarousel || (showPopupModal && "text-white")
                }`}
              />
              <div className="sm:flex hidden items-center customsm:gap-2 gap-3 max-w-[820px] flex-wrap">
                {bookmarkLinks.map((section, index) => (
                  <>
                    <div
                      className={`flex items-center text-[11px] leading-[1] font-semibold hover:text-black transition ${activeLink(
                        section.link
                      )} ${
                        showCarousel ||
                        (showPopupModal && "text-white font-normal")
                      }`}
                    >
                      <a
                        href={section.link}
                        onClick={(e) => scrollToContainer(e, section.link)}
                      >
                        {section.title}
                      </a>
                    </div>
                    {++index !== bookmarkLinks.length && (
                      <BsDot
                        className={`text-black ${
                          showCarousel || (showPopupModal && "text-white")
                        }`}
                      />
                    )}
                  </>
                ))}
              </div>
            </>
          )}
      </div>
      <div
        className={`flex justify-center sm:min-w-fit items-center sm:gap-8 gap-10 sm:hidden lg:flex sm:mx-0 mx-auto`}
      >
        {pathname === "/" ? (
          <>
            <a
              className=" sm:block hidden"
              href="https://wa.me/393515649208?text=Hi%21%20Terzzy"
            >
              <img src={whatsApp} alt="whatsapp" className="sm:h-4 h-5" />
            </a>
            <a
              className=" sm:block hidden"
              href="https://www.facebook.com/ArtKrystel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="facebook" className="sm:h-4 h-5" />
            </a>
            <a
              className=" sm:block hidden"
              href="https://www.behance.net/designartk1416"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={be} alt="behance" className="sm:h-3 h-4" />
            </a>
            <a
              className=" sm:block hidden"
              href="https://www.flickr.com/photos/194837716@N08/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={doubledot} alt="flicks" className="sm:h-2 h-3" />
            </a>
            <a
              className=" sm:hidden block"
              href="https://wa.me/393515649208?text=Hi%21%20Terzzy"
            >
              <img src={whitewhatsApp} alt="whatsapp" className="sm:h-4 h-5" />
            </a>
            <a
              className=" sm:hidden block"
              href="https://www.facebook.com/ArtKrystel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={whitefacebook} alt="facebook" className="sm:h-4 h-5" />
            </a>
            <a
              className=" sm:hidden block"
              href="https://www.behance.net/designartk1416"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={whitebe} alt="behance" className="sm:h-3 h-4" />
            </a>
            <a
              className=" sm:hidden block"
              href="https://www.flickr.com/photos/194837716@N08/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={whitedoubledot} alt="flickr" className="sm:h-2 h-3" />
            </a>
          </>
        ) : (
          <NormalLinks />
        )}
      </div>
    </nav>
  );
}
