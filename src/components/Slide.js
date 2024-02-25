import { useMemo } from "react";

const Slide = ({
  imageDimensions,
  slide1Width,
  slide1Position,
  slide1Top,
  slide1Right,
  slide1Left,
}) => {
  const slide1Style = useMemo(() => {
    return {
      width: slide1Width,
      position: slide1Position,
      top: slide1Top,
      right: slide1Right,
      left: slide1Left,
    };
  }, [slide1Width, slide1Position, slide1Top, slide1Right, slide1Left]);

  return (
    <div
      className="w-[1428px] h-[560px] flex flex-col items-center justify-start py-10 px-16 box-border gap-[24px]"
      style={slide1Style}
    >
      <img
        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-contain"
        alt=""
        src={imageDimensions}
      />
    </div>
  );
};

export default Slide;
