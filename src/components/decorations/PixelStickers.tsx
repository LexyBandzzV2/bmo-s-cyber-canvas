import pixelScott from "@/assets/pixel-scott.png";
import pixelRamona from "@/assets/pixel-ramona.png";
import pixelKim from "@/assets/pixel-kim.png";
import pixelKnives from "@/assets/pixel-knives.png";

const stickers = [
  { src: pixelScott, className: "bottom-4 right-4 w-16 animate-float", alt: "Scott" },
  { src: pixelRamona, className: "bottom-20 right-24 w-14 animate-float-reverse", alt: "Ramona" },
  { src: pixelKim, className: "bottom-4 left-4 w-16 animate-bounce-gentle", alt: "Kim" },
  { src: pixelKnives, className: "top-4 right-4 w-12 animate-float", alt: "Knives" },
];

const PixelStickers = () => (
  <>
    {stickers.map((s) => (
      <img
        key={s.alt}
        src={s.src}
        alt={s.alt}
        loading="lazy"
        className={`pixel-sticker ${s.className} opacity-40 hover:opacity-80 transition-opacity duration-500`}
        style={{ imageRendering: "pixelated" }}
      />
    ))}
  </>
);

export default PixelStickers;
