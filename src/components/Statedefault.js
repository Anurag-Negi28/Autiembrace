import { useMemo } from "react";

const Statedefault = ({
  imageDimensions,
  statedefaultIconOverflow,
  statedefaultIconPosition,
  statedefaultIconTop,
  statedefaultIconLeft,
}) => {
  const statedefaultIconStyle = useMemo(() => {
    return {
      overflow: statedefaultIconOverflow,
      position: statedefaultIconPosition,
      top: statedefaultIconTop,
      left: statedefaultIconLeft,
    };
  }, [
    statedefaultIconOverflow,
    statedefaultIconPosition,
    statedefaultIconTop,
    statedefaultIconLeft,
  ]);

  return (
    <img
      className="w-[280px] max-w-full overflow-hidden h-[280px]"
      alt=""
      src={imageDimensions}
      style={statedefaultIconStyle}
    />
  );
};

export default Statedefault;
