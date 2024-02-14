import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const onRectangle1Click = useCallback(() => {
    navigate("/-login-page");
  }, [navigate]);

  return (
    <div className="w-[1440px] [background:linear-gradient(-72.44deg,_rgba(111,_157,_172,_0.44)_2.62%,_#6f9dac_50%,_#6f9dac_50.03%,_#6f9dac)] h-[1024px] overflow-hidden text-left text-19xl text-white font-montserrat">
      <div className="absolute top-[calc(50%_-_345px)] left-[calc(50%_-_345px)] w-[690px] h-[598px]">
        <div className="absolute top-[calc(50%_-_299px)] left-[calc(50%_-_345px)] rounded-21xl bg-gray-300 [backdrop-filter:blur(25px)] box-border w-[690px] h-[598px] border-[3px] border-solid border-gray-200" />
        <div className="absolute top-[calc(50%_-_209px)] left-[calc(50%_-_249px)]">
          Sign up
        </div>
        <div
          className="absolute top-[calc(50%_+_177px)] left-[calc(50%_-_250px)] rounded-3xs bg-palevioletred w-[500px] h-[50px] cursor-pointer"
          onClick={onRectangle1Click}
        />
        <div className="absolute top-[calc(50%_+_190px)] left-[calc(50%_-_82px)] text-xl">
          Create Account
        </div>
        <div className="absolute top-[calc(50%_-_138px)] left-[calc(50%_-_252px)] w-[503px] h-[286px] text-lg">
          <div className="absolute top-[calc(50%_-_116px)] left-[calc(50%_-_248.5px)] rounded-3xs bg-white box-border w-[500px] h-[50px] border-[1px] border-solid border-silver" />
          <div className="absolute top-[calc(50%_+_64px)] left-[calc(50%_-_249.5px)]">
            Verify Password
          </div>
          <div className="absolute top-[calc(50%_+_93px)] left-[calc(50%_-_251.5px)] rounded-3xs bg-white box-border w-[500px] h-[50px] border-[1px] border-solid border-silver" />
          <img
            className="absolute top-[calc(50%_+_108px)] left-[calc(50%_+_216.5px)] rounded-21xl w-4 h-4 overflow-hidden"
            alt=""
            src="/clarityeyehideline.svg"
          />
          <div className="absolute top-[calc(50%_-_143px)] left-[calc(50%_-_248.5px)]">
            Email
          </div>
          <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_248.5px)] rounded-3xs bg-white box-border w-[500px] h-[50px] border-[1px] border-solid border-silver" />
          <div className="absolute top-[calc(50%_-_37px)] left-[calc(50%_-_248.5px)]">
            Password
          </div>
          <div className="absolute top-[calc(50%_-_99px)] left-[calc(50%_-_225.5px)] text-sm text-silver">
            username@gmail.com
          </div>
          <div className="absolute top-[calc(50%_+_7px)] left-[calc(50%_-_225.5px)] text-sm text-silver">
            Password
          </div>
          <div className="absolute top-[calc(50%_+_107px)] left-[calc(50%_-_225.5px)] text-sm text-silver">
            Password
          </div>
          <img
            className="absolute top-[calc(50%_+_7px)] left-[calc(50%_+_214.5px)] rounded-21xl w-4 h-4 overflow-hidden"
            alt=""
            src="/clarityeyehideline.svg"
          />
        </div>
      </div>
      <div className="absolute top-[calc(50%_-_297px)] left-[calc(50%_-_249px)] text-5xl">
        AutiEmbrace
      </div>
    </div>
  );
};

export default SignUp;
