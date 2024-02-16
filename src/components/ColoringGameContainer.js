import { useMemo } from "react";
import Statedefault from "./Statedefault";

const ColoringGameContainer = ({ propRight, propLeft, propTop }) => {
  const game9DrawStyle = useMemo(() => {
    return {
      right: propRight,
      left: propLeft,
      top: propTop,
    };
  }, [propRight, propLeft, propTop]);

  return (
    <div
      className="absolute w-[30.07%] top-[722px] right-[3.54%] left-[66.39%] h-[342px] text-center text-21xl text-dimgray font-montserrat"
      style={game9DrawStyle}
    >
      <img
        className="absolute w-[99.31%] top-[0px] right-[0%] left-[0.69%] rounded-54xl max-w-full overflow-hidden h-[342px]"
        alt=""
        src="/colorimg.svg"
      />
      <img
        className="absolute w-full top-[0px] right-[0px] left-[0px] rounded-54xl max-w-full overflow-hidden h-[342px]"
        alt=""
        src="/colorrectangle.svg"
      />
      <Statedefault
        imageDimensions="280x280x382621244"
        statedefaultIconOverflow="unset"
        statedefaultIconPosition="absolute"
        statedefaultIconTop="calc(50% - 140px)"
        statedefaultIconLeft="calc(50% - 137.5px)"
      />
      <div className="absolute w-[calc(100%_-_3px)] top-[265px] right-[2px] left-[1px] rounded-31xl bg-powderblue-100 [filter:blur(30px)] h-[77px]" />
      <div className="absolute w-full top-[265px] left-[0%] leading-[140%] font-medium flex items-center justify-center h-[77px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
        Coloring Game
      </div>
    </div>
  );
};

export default ColoringGameContainer;
