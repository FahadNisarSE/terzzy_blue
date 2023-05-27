import BlurImage from "./BlurImage";
import { motion } from "framer-motion";

import { fadeIn } from "../utils/motion";

import { usePopupModal, usePopupData } from "../Hooks/usePopupModal";
import { cancel } from "../assets/carousel";

export default function PopupModal() {
  const { togglePopupModal } = usePopupModal();
  const { src, alt, image } = usePopupData();

  return (
    <div className="fixed z-[200] inset-0 flex flex-col justify-center items-center overflow-hidden bg-black/70">
      <div className="flex relative">
        {image ? (
          <div className="max-h-[70vh] max-w-[80vw] rounded-2xl overflow-hidden">
            <BlurImage src={src} alt={alt} />
          </div>
        ) : (
          <motion.div
            variants={fadeIn("", "spring", 0.5, 1.75)}
            className="sm:w-[700px] sm:h-[400px] sm:min-w-[340px] sm:max-w-none sm:mx-0 mx-auto w-[90vw] overflow-hidden cursor-pointer sm:pr-0 pr-4"
          >
            <video
              autoPlay
              disablePictureInPicture
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-xl"
            >
              <source src={src} type="video/mp4" />
            </video>
          </motion.div>
        )}
        <div
          className="absolute sm:-top-20 -top-10 sm:-right-20 right-0 cursor-pointer"
          onClick={() => togglePopupModal(false)}
        >
          <img src={cancel} alt="cancel" />
        </div>
      </div>
    </div>
  );
}
