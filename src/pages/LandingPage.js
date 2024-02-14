import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const onFrametwoColumnLayoutClick = useCallback(() => {
    navigate("/-login-page");
  }, [navigate]);

  const onRectangleSigninClick = useCallback(() => {
    navigate("/-login-page");
  }, [navigate]);

  const onFrametwoColumnLayout1Click = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  return (
    <div className="w-full relative bg-lightsteelblue overflow-hidden flex flex-col items-start justify-start py-0 pr-px pl-0 box-border gap-[221px] tracking-[normal] mq750:gap-[221px] mq450:gap-[221px]">
      <main className="self-stretch flex flex-col items-center justify-start gap-[44px] shrink-0 max-w-full mq750:gap-[44px]">
        <header className="self-stretch h-[103px] relative bg-mistyrose [filter:blur(46px)]" />
        <section className="w-[1380px] flex flex-row flex-wrap items-end justify-start py-0 px-5 box-border gap-[20px] max-w-full text-left text-lg text-gray-100 font-heading-bold-6">
          <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[21px] box-border min-w-[429px] max-w-full mq675:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[57px] mq750:gap-[57px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[25px]">
                <div className="w-[209px] h-[37px] relative tracking-[-0.02em] leading-[150%] font-semibold flex items-center shrink-0">
                  AutiEmbrace
                </div>
                <h3 className="m-0 self-stretch relative text-11xl tracking-[2px] leading-[120%] font-normal font-montserrat text-dimgray mq750:text-5xl mq750:leading-[29px] mq450:text-lg mq450:leading-[22px]">
                  Everyone deserves a chance to connect, learn, and grow. So we
                  present AutiEmbrace, a platform designed with care and
                  understanding for individuals on the autism spectrum. Our
                  mission is to provide a safe, engaging, and personalized space
                  where you can explore interests, connect with others, and
                  thrive.
                </h3>
              </div>
              <div className="self-stretch h-[72px] flex flex-row items-start justify-start gap-[20px] mq675:hidden">
                <button
                  className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex-1 flex flex-row items-start justify-start"
                  onClick={onFrametwoColumnLayoutClick}
                >
                  <div
                    className="self-stretch flex-1 relative rounded-3xs bg-palevioletred cursor-pointer"
                    onClick={onRectangleSigninClick}
                  />
                  <div className="h-[70px] flex-1 relative text-xl font-montserrat text-white text-center flex items-center justify-center whitespace-nowrap z-[1] ml-[-320px]">
                    Sign in
                  </div>
                </button>
                <button
                  className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex-1 flex flex-row items-start justify-start"
                  onClick={onFrametwoColumnLayout1Click}
                >
                  <div
                    className="self-stretch flex-1 relative rounded-3xs bg-palevioletred cursor-pointer"
                    onClick={onRectangleClick}
                  />
                  <div className="h-[71px] flex-1 relative text-xl font-montserrat text-white text-center flex items-center justify-center whitespace-nowrap z-[1] ml-[-320px]">
                    Create Account
                  </div>
                </button>
              </div>
            </div>
          </div>
          <img
            className="h-[606.7px] flex-1 relative max-w-full overflow-hidden object-contain min-w-[429px] mq675:min-w-full"
            loading="eager"
            alt=""
            src="/layer-1@2x.png"
          />
        </section>
      </main>
      <footer className="self-stretch bg-gainsboro flex flex-row items-center justify-center py-0 pr-5 pl-[21px] box-border max-w-full text-center text-3xl text-black font-montserrat">
        <div className="self-stretch w-[1439px] relative bg-gainsboro hidden max-w-full" />
        <div className="h-[50px] w-56 relative whitespace-pre-wrap flex items-center shrink-0 z-[1]">
          <span className="w-full">
            <span>{`©  `}</span>
            <span className="text-lg">AutiEmbrace</span>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
