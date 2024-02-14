import { useCallback } from "react";
import EmailInput from "../components/EmailInput";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSignInLabelClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  const onCreateAccountTextClick = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  return (
    <div className="w-full h-[1024px] relative [background:linear-gradient(-72.44deg,_rgba(111,_157,_172,_0.44)_2.62%,_#6f9dac_50%,_#6f9dac_50.03%,_#6f9dac)] overflow-hidden flex flex-row items-start justify-center pt-[167px] px-5 pb-[259px] box-border tracking-[normal] text-left text-5xl text-white font-montserrat">
      <div className="w-[690px] rounded-21xl bg-gray-300 [backdrop-filter:blur(25px)] box-border flex flex-col items-center justify-start pt-12 pb-[60px] pr-5 pl-[25px] gap-[41px] max-w-full border-[3px] border-solid border-gray-200 mq675:gap-[41px] mq675:pt-[31px] mq675:pb-[39px] mq675:box-border">
        <div className="w-[690px] h-[598px] relative rounded-21xl bg-gray-300 [backdrop-filter:blur(25px)] box-border hidden max-w-full border-[3px] border-solid border-gray-200" />
        <div className="w-[500px] flex flex-col items-start justify-start gap-[13px] max-w-full">
          <h2 className="m-0 h-[29px] relative text-inherit font-normal font-inherit flex items-center z-[1] mq450:text-lgi">
            AutiEmbrace
          </h2>
          <div className="flex flex-row items-start justify-start pt-0 px-0 pb-3 text-19xl">
            <h1 className="m-0 h-[46px] relative text-inherit font-normal font-inherit flex items-center z-[1] mq450:text-4xl mq750:text-11xl">
              Login
            </h1>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-4 gap-[5px] text-lg">
            <div className="relative z-[1]">Email</div>
            <input
              className="w-full [outline:none] bg-white self-stretch h-[50px] rounded-3xs box-border flex flex-row items-center justify-start pt-[17px] px-[23px] pb-4 font-montserrat text-sm text-silver min-w-[250px] z-[1] border-[1px] border-solid border-silver"
              placeholder="username@gmail.com"
              type="text"
            />
          </div>
          <EmailInput passwordPlaceholder="Password" passwordName="Password" />
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-[12px] font-montserrat text-white text-left inline-block z-[1]">
            Forgot Password?
          </button>
        </div>
        <button
          className="cursor-pointer [border:none] pt-0 px-0 pb-[13px] bg-[transparent] w-[500px] h-[63px] flex flex-row items-center justify-start box-border max-w-full sticky top-[0] z-[99]"
          onClick={onFrameButtonClick}
        >
          <div
            className="self-stretch w-[500px] relative rounded-3xs bg-palevioletred max-w-full cursor-pointer z-[1]"
            onClick={onSignInLabelClick}
          />
          <div className="relative text-xl font-montserrat text-white text-left whitespace-nowrap z-[2] ml-[-282px]">
            Sign in
          </div>
        </button>
        <div
          className="flex flex-row items-start justify-start py-0 pr-0 pl-3.5 cursor-pointer text-sm"
          onClick={onFrameContainerClick}
        >
          <div
            className="relative cursor-pointer z-[1]"
            onClick={onCreateAccountTextClick}
          >
            Create Account
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
