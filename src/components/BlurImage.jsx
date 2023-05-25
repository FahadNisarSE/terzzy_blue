import { useState } from "react";

const BlurImage = ({ src, alt, cover, events }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => setIsLoading(false);

  return (
    <img
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
