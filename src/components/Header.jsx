import { Link } from "react-router-dom";

import borderImage from "../assets/foot/border.svg";
import whiteOrder from "../assets/foot/white_order_now.png";
import useToggleCarousel from "../Hooks/useToggleCarousel";
import { usePopupModal } from "../Hooks/usePopupModal";
import NavButton from "../assets/NavButton.svg";
import useToggleSidebar from "../Hooks/useToggleSidebar";

export default function Header() {
  const { showCarousel } = useToggleCarousel();
  const { showPopupModal } = usePopupModal();
  const { setShowSidebar } = useToggleSidebar();

  return (
    <header
      className={`flex items-center justify-between p-4 w-full py-2 pt-0 max-w-full sm:fixed sm:left-0 sm:right-0 sm:top-0 z-[110]`}
    >
      <Link to="/">
        <h2
          className={`uppercase font-bold text-3xl leading-8 tracking-wider ${
            showCarousel || showPopupModal ? "text-white" : "headings-gradient"
          }`}
        >
          TERZZY
        </h2>
      </Link>
      <div className="flex items-center sm:gap-4 gap-1">
        <div
          className={`max-w-[70px] uppercase font-bold mr-[10%] text-[11px] leading-4 tracking-wider sm:block hidden ${
            showCarousel || (showPopupModal && "text-white font-normal")
          }`}
        >
          guarantee quality
        </div>
        <div
          onClick={() => setShowSidebar(true)}
          className="sm:hidden w-[60px] block cursor-pointer"
        >
          <img src={NavButton} alt="open menu" />
        </div>
        <div className="w-[120px] min-w-[90px] sm:h-[100px] h-[60px]">
          <Link className="uppercase" to="/contact">
            <img
              src={showCarousel || showPopupModal ? whiteOrder : borderImage}
              alt="order-now"
              className="w-full h-full object-contain"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
