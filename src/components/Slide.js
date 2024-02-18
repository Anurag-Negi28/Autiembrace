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
      <div className="flex flex-row items-center justify-center p-2 gap-[8px]">
        <div className="flex flex-row items-start justify-start p-2">
          <img className="w-6 relative h-6" alt="" src="/arrow-left.svg" />
        </div>
        <div className="flex flex-row items-center justify-start p-2 gap-[10px]">
          <img
            className="w-4 relative h-4"
            alt=""
            src="/dot-indictaor--1.svg"
          />
          <img
            className="w-3 relative h-3 opacity-[0.5]"
            alt=""
            src="/dot-indictaor--2.svg"
          />
          <img
            className="w-3 relative h-3 opacity-[0.5]"
            alt=""
            src="/dot-indictaor--2.svg"
          />
          <img
            className="w-3 relative h-3 opacity-[0.5]"
            alt=""
            src="/dot-indictaor--2.svg"
          />
          <img
            className="w-3 relative h-3 opacity-[0.5]"
            alt=""
            src="/dot-indictaor--2.svg"
          />
        </div>
        <div className="flex flex-row items-start justify-start p-2">
          <img className="w-6 relative h-6" alt="" src="/arrow-right.svg" />
        </div>
      </div>
    </div>
  );
};

export default Slide;
