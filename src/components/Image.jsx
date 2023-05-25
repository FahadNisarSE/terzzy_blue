export default function Image({ width, height, src, alt, radius }) {
  return (
    <div
      className={`w-[${width}] h-[${height}] overflow-hidden ${
        radius ? "rounded-" + radius : null
      }`}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
}
