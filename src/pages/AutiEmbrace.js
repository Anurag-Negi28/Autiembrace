import { useCallback } from "react";
import Navbar from "../components/Navbar";
import PlayFrame from "../components/PlayFrame";
import { useNavigate } from "react-router-dom";

const AutiEmbrace = () => {
  const navigate = useNavigate();

  const onAddrectangleaddtaskClick = useCallback(() => {
    navigate("/-login-page");
  }, [navigate]);

  const onDeleteRectangleClick = useCallback(() => {
    navigate("/-login-page");
  }, [navigate]);

  const onNormsnavigatortextClick = useCallback(() => {
    navigate("/-login-page");
  }, [navigate]);

  return (
    <div className="w-full relative bg-cadetblue-200 overflow-hidden flex flex-col items-center justify-start gap-[25px] tracking-[normal]">
      <Navbar />
      <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-[66px] pr-0.5 pl-0 box-border max-w-full mq750:pb-7 mq750:box-border mq1050:pb-[43px] mq1050:box-border">
        <PlayFrame />
      </section>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[21px] box-border max-w-full text-left text-41xl text-black font-montserrat">
        <div className="flex-1 flex flex-row items-start justify-start pt-6 px-[50px] pb-7 box-border relative gap-[19px] max-w-full mq1125:flex-wrap mq750:pl-[25px] mq750:pr-[25px] mq750:box-border mq1050:pt-5 mq1050:pb-5 mq1050:box-border">
          <div className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] flex items-center justify-center z-[0]">
            <img
              className="h-full w-full max-w-full overflow-hidden max-h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.031)]"
              loading="eager"
              alt=""
              src="/notesbgimg@2x.png"
            />
          </div>
          <div className="flex-1 rounded-31xl bg-powderblue-200 flex flex-col items-center justify-start pt-[33px] px-0 pb-[62px] box-border gap-[94px] max-w-full z-[1] mq750:gap-[94px] mq450:gap-[94px] mq450:pt-5 mq450:pb-[26px] mq450:box-border mq1050:pt-[21px] mq1050:pb-10 mq1050:box-border">
            <div className="self-stretch h-[908px] relative rounded-31xl bg-powderblue-200 hidden" />
            <div className="w-[516px] flex flex-row items-start justify-start max-w-full">
              <h1 className="m-0 w-[457px] relative text-inherit leading-[60px] font-bold font-inherit inline-block shrink-0 max-w-full z-[2] mq450:text-17xl mq450:leading-[36px] mq1050:text-29xl mq1050:leading-[48px]">
                To do list :
              </h1>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start max-w-full text-31xl">
              <h1 className="m-0 self-stretch h-[631px] relative text-inherit leading-[50px] font-normal font-inherit flex items-center shrink-0 z-[2] mq450:text-11xl mq450:leading-[30px] mq1050:text-21xl mq1050:leading-[40px]">
                <ul className="m-0 font-inherit text-inherit pl-[67px]">
                  <li className="mb-[15px]">Wake up</li>
                  <li className="mb-[15px]">Breakfast</li>
                  <li className="mb-[15px]">Get ready for school</li>
                  <li className="mb-[15px]">Time to play</li>
                  <li className="mb-[15px]">Time to study</li>
                  <li className="mb-[15px]">Dinner</li>
                  <li>Sleep time</li>
                </ul>
              </h1>
              <div className="w-[595px] flex flex-row items-start justify-start py-0 px-7 box-border max-w-full mt-[-22px]">
                <div className="flex-1 flex flex-row items-start justify-between gap-[20px] max-w-full mq750:flex-wrap">
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[50px] w-[199px] flex flex-row items-start justify-start z-[2]">
                    <div
                      className="self-stretch flex-1 relative rounded-31xl bg-mediumaquamarine cursor-pointer"
                      onClick={onAddrectangleaddtaskClick}
                    />
                    <div className="h-[50px] flex-1 relative text-xl leading-[31px] font-montserrat text-black text-center flex items-center justify-center z-[1] ml-[-199px] mq450:text-base mq450:leading-[25px]">
                      Add Task
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[50px] w-[199px] flex flex-row items-start justify-start z-[2]">
                    <div
                      className="self-stretch flex-1 relative rounded-31xl bg-mediumaquamarine cursor-pointer"
                      onClick={onDeleteRectangleClick}
                    />
                    <div className="h-[50px] flex-1 relative text-xl leading-[31px] font-montserrat text-black text-center flex items-center justify-center z-[1] ml-[-199px] mq450:text-base mq450:leading-[25px]">
                      Delete Task
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-[0.8275] rounded-31xl bg-powderblue-200 flex flex-col items-center justify-start pt-[33px] pb-[62px] pr-0 pl-[114px] box-border max-w-full z-[1] mq750:pl-[57px] mq750:box-border mq750:flex-1 mq450:pl-5 mq450:pt-5 mq450:pb-[26px] mq450:box-border mq1050:pt-[21px] mq1050:pb-10 mq1050:box-border">
            <div className="w-[661px] h-[908px] relative rounded-31xl bg-powderblue-200 hidden max-w-full" />
            <div className="self-stretch flex flex-col items-start justify-start gap-[72px] max-w-full mq750:gap-[72px] mq450:gap-[72px]">
              <div className="w-[475px] flex flex-row items-start justify-start py-0 px-[9px] box-border max-w-full">
                <h1 className="m-0 flex-1 relative text-inherit leading-[60px] font-bold font-inherit inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] max-w-full z-[2] mq450:text-17xl mq450:leading-[36px] mq1050:text-29xl mq1050:leading-[48px]">
                  Description
                </h1>
              </div>
              <div className="self-stretch h-[631px] relative text-31xl leading-[50px] flex items-center shrink-0 z-[2] mq450:text-11xl mq450:leading-[30px] mq1050:text-21xl mq1050:leading-[40px]">
                <span>
                  <p className="[margin-block-start:0] [margin-block-end:15px]">
                    Date : 07-02-2024
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:15px]">
                    Time : 16:51
                  </p>
                </span>
              </div>
            </div>
            <div className="w-[313px] h-[50px] flex flex-row items-start justify-start">
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch w-[199px] flex flex-row items-start justify-start z-[2]">
                <div
                  className="self-stretch flex-1 relative rounded-31xl bg-mediumaquamarine cursor-pointer"
                  onClick={onNormsnavigatortextClick}
                />
                <div className="h-[50px] flex-1 relative text-xl leading-[31px] font-montserrat text-black text-center flex items-center justify-center z-[1] ml-[-199px] mq450:text-base mq450:leading-[25px]">
                  Edit
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[1380px] flex flex-row items-start justify-start pt-0 px-5 pb-[17px] box-border gap-[18px] max-w-full text-left text-41xl text-dimgray font-montserrat mq1125:flex-wrap">
        <div className="flex-[0.7197] rounded-31xl bg-powderblue-100 flex flex-col items-center justify-start pt-[87px] pb-[97px] pr-[113px] pl-[72px] box-border gap-[33px] min-w-[429px] max-w-full mq1125:flex-1 mq750:gap-[33px] mq750:pl-9 mq750:pr-14 mq750:box-border mq750:min-w-full mq450:pt-[37px] mq450:pr-5 mq450:pb-[41px] mq450:box-border mq1050:pt-[57px] mq1050:pb-[63px] mq1050:box-border">
          <div className="w-[660px] h-[908px] relative rounded-31xl bg-powderblue-100 hidden max-w-full" />
          <h1 className="m-0 self-stretch relative text-inherit leading-[60px] font-bold font-inherit [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[1] mq450:text-17xl mq450:leading-[36px] mq1050:text-29xl mq1050:leading-[48px]">
            Rewards
          </h1>
          <h1 className="m-0 self-stretch h-[631px] relative text-31xl leading-[50px] font-normal font-inherit flex items-center shrink-0 z-[1] mq450:text-11xl mq450:leading-[30px] mq1050:text-21xl mq1050:leading-[40px]">
            <span>
              <p className="[margin-block-start:0] [margin-block-end:15px]">
                Congratulations you have completed your day 1 tasks.
              </p>
            </span>
          </h1>
        </div>
        <div className="flex-1 flex flex-col items-end justify-start gap-[13px] min-w-[430px] max-w-full mq1125:flex-1 mq750:min-w-full">
          <img
            className="self-stretch h-[470px] relative rounded-31xl max-w-full overflow-hidden shrink-0 object-cover"
            loading="eager"
            alt=""
            src="/medalimg@2x.png"
          />
          <div className="self-stretch rounded-31xl bg-powderblue-100 flex flex-col items-end justify-start pt-14 pb-[49px] pr-0 pl-[25px] box-border gap-[23px] max-w-full mq450:pt-9 mq450:pb-8 mq450:box-border">
            <div className="w-[662px] h-[431px] relative rounded-31xl bg-powderblue-100 hidden max-w-full" />
            <div className="w-[609px] flex flex-row items-start justify-start py-0 px-[33px] box-border max-w-full">
              <h1 className="m-0 flex-1 relative text-inherit leading-[60px] font-bold font-inherit inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] max-w-full z-[1] mq450:text-17xl mq450:leading-[36px] mq1050:text-29xl mq1050:leading-[48px]">
                Norms Navigator
              </h1>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[33px] max-w-full text-31xl mq750:flex-wrap mq750:gap-[33px]">
              <img
                className="h-[215px] w-[198px] relative object-cover z-[1] mq750:flex-1"
                loading="eager"
                alt=""
                src="/phoneicon@2x.png"
              />
              <h1 className="m-0 h-[243px] flex-1 relative text-inherit leading-[50px] font-normal font-inherit flex items-center min-w-[261px] max-w-full z-[1] mq450:text-11xl mq450:leading-[30px] mq1050:text-21xl mq1050:leading-[40px]">
                Wash your hands before eating food.
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-col items-start justify-start py-0 pr-px pl-0 box-border max-w-full text-left text-3xl text-black font-montserrat">
        <div className="self-stretch flex flex-col items-center justify-start pt-[43px] pb-[26px] pr-5 pl-[21px] box-border relative gap-[30px] max-w-full mq450:pt-7 mq450:pb-5 mq450:box-border">
          <div className="w-full h-full absolute my-0 mx-[!important] top-[0px] right-[0.5px] bottom-[0px] left-[-0.5px] [background:linear-gradient(180deg,_#b8c0d5,_rgba(193,_184,_213,_0))] [filter:blur(0px)]" />
          <div className="w-[1196px] flex flex-row items-start justify-between gap-[20px] max-w-full mq1050:flex-wrap">
            <div className="w-[328px] flex flex-row items-start justify-start gap-[100px] max-w-full mq450:gap-[100px]">
              <div className="flex flex-col items-start justify-start gap-[22px]">
                <h3 className="m-0 h-[27px] relative text-inherit font-normal font-inherit inline-block z-[1] mq450:text-lg">
                  AutiEmbrace
                </h3>
                <div className="flex flex-col items-start justify-start gap-[2px]">
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base leading-[31px] font-montserrat text-black text-left inline-block z-[1]">
                    Home
                  </button>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base leading-[31px] font-montserrat text-black text-left inline-block z-[1]">
                    About
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[22px]">
                <h3 className="m-0 h-[27px] relative text-inherit font-normal font-inherit inline-block z-[1] mq450:text-lg">
                  Contact
                </h3>
                <div className="flex flex-col items-start justify-start gap-[2px]">
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base leading-[31px] font-montserrat text-black text-left inline-block z-[1]">
                    Email
                  </button>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base leading-[31px] font-montserrat text-black text-left inline-block z-[1]">
                    LinkedIn
                  </button>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base leading-[31px] font-montserrat text-black text-left inline-block z-[1]">
                    Instagram
                  </button>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base leading-[31px] font-montserrat text-black text-left inline-block z-[1]">
                    Twitter
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[468px] flex flex-col items-start justify-start gap-[36px] max-w-full mq750:gap-[36px]">
              <h3 className="m-0 self-stretch h-[27px] relative text-inherit font-normal font-inherit inline-block z-[1] mq450:text-lg">
                Want to share? Give us feedback
              </h3>
              <input
                className="[border:none] [outline:none] bg-white self-stretch h-48 relative rounded-31xl min-w-[250px] z-[1]"
                type="text"
              />
            </div>
          </div>
          <div className="w-[1152px] flex flex-row items-start justify-end max-w-full">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[27px] relative text-3xl font-montserrat text-black text-left inline-block z-[1] mq450:text-lg">
              Submit
            </button>
          </div>
        </div>
        <footer className="self-stretch bg-gainsboro flex flex-row items-center justify-center py-0 pr-5 pl-[21px] box-border max-w-full z-[1] text-center text-3xl text-black font-montserrat">
          <div className="self-stretch w-[1439px] relative bg-gainsboro hidden max-w-full" />
          <div className="h-[50px] w-56 relative whitespace-pre-wrap flex items-center shrink-0 z-[2]">
            <span className="w-full">
              <span>{`©  `}</span>
              <span className="text-lg">AutiEmbrace</span>
            </span>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default AutiEmbrace;
