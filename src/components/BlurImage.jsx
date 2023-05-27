import { useState } from "react";
import { usePopupData, usePopupModal } from "../Hooks/usePopupModal";

const BlurImage = ({ src, alt, cover, secondaryImage }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { togglePopupModal } = usePopupModal();
  const { modify } = usePopupData();

  const handleImageLoad = () => setIsLoading(false);

  return (
    <img
      onClick={() => {
        togglePopupModal(true);
        modify({
          src: secondaryImage || src,
          alt: alt,
          image: true,
        });
      }}
      src={src}
      alt={alt}
      className={`selection-none w-full h-full overflow-hidden ${
        !cover && "object-cover"
      } ${isLoading ? "bg-[#ccc] backdrop-blur animate-pulse" : null}`}
      onLoad={handleImageLoad}
    />
  );

  return component;
};

export default BlurImage;
