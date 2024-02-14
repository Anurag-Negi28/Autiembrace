import { useCallback } from "react";
import EmailInput from "../components/EmailInput";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const onRectangleShapeClick = useCallback(() => {
    navigate("/-login-page");
  }, [navigate]);

  return (
    <div className="w-full h-[1024px] relative [background:linear-gradient(-72.44deg,_rgba(111,_157,_172,_0.44)_2.62%,_#6f9dac_50%,_#6f9dac_50.03%,_#6f9dac)] overflow-hidden flex flex-row items-start justify-center pt-[167px] px-5 pb-[259px] box-border tracking-[normal] text-left text-lg text-white font-montserrat">
      <div className="w-[690px] rounded-21xl bg-gray-300 [backdrop-filter:blur(25px)] box-border flex flex-col items-center justify-start pt-12 pb-[72px] pr-[21px] pl-5 gap-[13px] max-w-full border-[3px] border-solid border-gray-200 mq675:pt-[31px] mq675:pb-[47px] mq675:box-border">
        <div className="w-[690px] h-[598px] relative rounded-21xl bg-gray-300 [backdrop-filter:blur(25px)] box-border hidden max-w-full border-[3px] border-solid border-gray-200" />
        <div className="w-[497px] flex flex-row items-start justify-start max-w-full text-5xl">
          <div className="h-[29px] relative flex items-center z-[3] mq450:text-lgi">
            AutiEmbrace
          </div>
        </div>
        <div className="w-[497px] flex flex-row items-start justify-start pt-0 pb-3 px-0 box-border max-w-full text-19xl">
          <h1 className="m-0 h-[46px] relative text-inherit font-normal font-inherit flex items-center whitespace-nowrap z-[1] mq450:text-4xl mq750:text-11xl">
            Sign up
          </h1>
        </div>
        <div className="w-[500px] flex flex-col items-start justify-start pt-0 px-0 pb-4 box-border gap-[5px] max-w-full">
          <div className="relative z-[1]">Email</div>
          <input
            className="w-full [outline:none] bg-white self-stretch h-[50px] rounded-3xs box-border flex flex-row items-center justify-start pt-[17px] px-[23px] pb-4 font-montserrat text-sm text-silver min-w-[250px] z-[1] border-[1px] border-solid border-silver"
            placeholder="username@gmail.com"
            type="text"
          />
        </div>
        <EmailInput
          passwordPlaceholder="Password"
          passwordName="Password"
          propAlignSelf="unset"
          propWidth="500px"
        />
        <div className="w-[500px] flex flex-col items-start justify-start pt-0 px-0 pb-4 box-border gap-[7px] max-w-full">
          <div className="relative z-[1]">Verify Password</div>
          <div className="self-stretch rounded-3xs bg-white box-border flex flex-row items-end justify-between pt-3.5 pb-[19px] pr-[17px] pl-[25px] gap-[20px] max-w-full z-[1] border-[1px] border-solid border-silver">
            <div className="h-[50px] w-[500px] relative rounded-3xs bg-white box-border hidden max-w-full border-[1px] border-solid border-silver" />
            <input
              className="[border:none] [outline:none] font-montserrat text-sm bg-[transparent] h-[17px] w-16 relative text-silver text-left flex items-center z-[2]"
              name="Password"
              placeholder="Password"
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
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[500px] h-[50px] flex flex-row items-center justify-start max-w-full">
          <div
            className="self-stretch w-[500px] relative rounded-3xs bg-palevioletred max-w-full cursor-pointer z-[1]"
            onClick={onRectangleShapeClick}
          />
          <div className="relative text-xl font-montserrat text-white text-left z-[2] ml-[-332px] mq450:text-base">
            Create Account
          </div>
        </button>
      </div>
    </div>
  );
};

export default SignUp;
