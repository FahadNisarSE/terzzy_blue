import { Link } from "react-router-dom";

import borderImage from "../assets/foot/border.svg";
import whiteOrder from "../assets/foot/white_order_now.png";
import useToggleCarousel from "../Hooks/useToggleCarousel";

export default function Header() {
  const { showCarousel } = useToggleCarousel();

  return (
    <section
      className={`flex items-center justify-between p-4 w-full py-2 pt-0 max-w-full sm:absolute sm:top-0 z-[110]`}
    >
      <Link to="/">
        <h2
          className={`uppercase font-bold text-3xl leading-8 tracking-wider ${
            !showCarousel ? "headings-gradient" : "text-white"
          }`}
        >
          TERZZY
        </h2>
      </Link>
      <div className="flex items-center sm:gap-4 gap-1mx-auto">
        <div
          className={`max-w-[70px] uppercase font-bold sm:mx-0 mr-[10%] sm:text-[11px] text-[10px] sm:leading-4 sm:tracking-wider ${
            showCarousel && "text-white font-normal"
          }`}
        >
          guarantee quality
        </div>
        <div className="w-[120px] min-w-[90px] sm:h-[100px] h-[60px]">
          <Link className="uppercase" to="/contact">
            <img
              src={showCarousel ? whiteOrder : borderImage}
              alt="order-now"
              className="w-full h-full object-contain"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
