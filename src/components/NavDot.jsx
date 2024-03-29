import useToggleCarousel from "../Hooks/useToggleCarousel";
import { usePopupModal } from "../Hooks/usePopupModal";

export default function NavDot({ active }) {
  const { showCarousel } = useToggleCarousel();
  const { showPopupModal } = usePopupModal();

  return (
    <div
      className={`w-3 h-3 absolute custom:bottom-[90px] customsm:bottom-[82px] sm:bottom-[110px] sm:left-auto left-[11px] ${
        active ? "bg-gray-700 scale-125" : "bg-lightgray"
      } z-[130] rounded-full ${showCarousel || (showPopupModal && "bg-white")}`}
    />
  );
}
