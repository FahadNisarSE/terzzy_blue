import Gif_Plasma from "../assets/col/Gif_Plasma.gif";

export default function AnimatingBlob() {
  return (
    <div className="w-[500px] h-full overflow-hidden sm:block hidden -ml-48">
      <img src={Gif_Plasma} alt="animating block" aria-hidden />
    </div>
  );
}
