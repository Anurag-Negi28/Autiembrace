import { useMemo } from "react";

const EmailInput = ({
  passwordPlaceholder,
  passwordName,
  propAlignSelf,
  propWidth,
}) => {
  const emailInputStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  return (
    <div
      className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-1 box-border gap-[5px] max-w-full text-left text-lg text-white font-montserrat"
      style={emailInputStyle}
    >
      <div className="relative z-[1]">Password</div>
      <div className="self-stretch rounded-3xs bg-white box-border flex flex-row items-start justify-between pt-[17px] px-[22px] pb-4 gap-[20px] max-w-full z-[1] border-[1px] border-solid border-silver">
        <div className="h-[50px] w-[500px] relative rounded-3xs bg-white box-border hidden max-w-full border-[1px] border-solid border-silver" />
        <input
          className="[border:none] [outline:none] font-montserrat text-sm bg-[transparent] h-[17px] w-16 relative text-silver text-left flex items-center z-[2]"
          name={passwordName}
          placeholder={passwordPlaceholder}
          type="text"
        />
        <img
          className="h-4 w-4 relative rounded-21xl overflow-hidden shrink-0 z-[2]"
          loading="eager"
          alt=""
          src="/clarityeyehideline.svg"
        />
      </div>
    </div>
  );
};

export default EmailInput;
