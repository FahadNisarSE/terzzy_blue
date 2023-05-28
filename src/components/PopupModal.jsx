import BlurImage from "./BlurImage";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";

import { fadeIn, staggerContainer } from "../utils/motion";
import { usePopupModal, usePopupData } from "../Hooks/usePopupModal";

export default function PopupModal() {
  const { togglePopupModal } = usePopupModal();
  const { src, alt, image } = usePopupData();

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id="modal"
      className="fixed z-[200] inset-0 flex flex-col justify-center items-center overflow-hidden bg-black/70"
    >
      <motion.div
        variants={fadeIn("up", "spring", 0, 0.75)}
        className="flex sm:flex-row flex-col sm:gap-4 gap:2"
      >
        {image ? (
          <div className="max-h-[70vh] max-w-[80vw] sm:min-w-[500px] min-w-[90vw] overflow-hidden glass-bg p-4 rounded-lg">
            <BlurImage src={src} alt={alt} />
          </div>
        ) : (
          <div className="sm:w-[700px] sm:h-[400px] sm:min-w-[340px] sm:max-w-none sm:mx-0 mx-auto w-[90vw] glass-bg p-4 rounded-lg">
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
          </div>
        )}
        <div
          className="cursor-pointer sm:order-none sm:self-baseline self-end -order-1"
          onClick={() => togglePopupModal(false)}
        >
          <AiOutlineClose className="font-bold text-3xl relative -top-5 cursor-pointer transition-all hover:shadow-sm glass-bg text-white p-1 rounded-full" />
        </div>
      </motion.div>
    </motion.div>
  );
}
