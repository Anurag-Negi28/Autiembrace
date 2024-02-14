import Navbar from "../components/Navbar";
import ToDoFrame from "../components/ToDoFrame";
import "./AutiEmbrace.css";
import React, { useState, useEffect } from "react";

const PlayFrame = () => {
  const [completionMessageValue, setCompletionMessageValue] = useState("");
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  const fetchRandomQuote = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/quotes/random');
      if (!response.ok) {
        throw new Error('Failed to fetch quote');
      }
      const data = await response.json();
      setQuote(data.quote_text);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };
  return (
    <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[20px] max-w-full text-left text-41xl text-black font-outfit">
      <div className="flex-1 flex flex-col items-start justify-start gap-[46px] min-w-[463px] max-w-full mq750:gap-[46px] mq750:min-w-full">
        <div className="self-stretch flex flex-row items-center justify-end py-0 pr-[100px] pl-[135px] box-border relative max-w-full mq750:pl-[67px] mq750:pr-[50px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-31xl bg-powderblue-100 [filter:blur(250px)]" />
          <h1 className="m-0 h-[431px] flex-1 relative text-inherit leading-[60px] font-bold font-inherit flex items-center max-w-full z-[1] mq450:text-17xl mq450:leading-[36px] mq1050:text-29xl mq1050:leading-[48px]">
            <span>
              <p className="[margin-block-start:0] [margin-block-end:15px]">
                Hi [user name],
              </p>
              <p className="m-0">Let’s spread some happiness !</p>
            </span>
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-center justify-end relative max-w-full text-center text-21xl">
          <div className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-31xl bg-powderblue-100 [filter:blur(250px)]" />
          <div className="h-[431px] w-[680px] flex flex-col items-start justify-end py-0 pr-0 pl-5 box-border max-w-full">
            <div className="self-stretch flex flex-col items-end justify-start pt-0 px-[72px] pb-[62px] box-border relative min-h-[477px] shrink-0 max-w-full mq750:pl-9 mq750:pr-9 mq750:box-border mq450:pb-10 mq450:box-border">
              <img
                className="w-full h-[431px] absolute my-0 mx-[!important] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover mix-blend-hard-light z-[1]"
                loading="eager"
                alt=""
                src="/quotebox@2x.png"
              />
              <h1 className="m-0 w-[475px] h-[415px] relative text-inherit leading-[40px] font-bold font-inherit flex items-center justify-center shrink-0 max-w-full z-[2] mq450:text-5xl mq450:leading-[24px] mq1050:text-13xl mq1050:leading-[32px]">
                {quote}
              </h1>
              <div className="w-[302px] flex flex-row items-start justify-start py-0 px-16 box-border mt-[-98px] text-base font-montserrat mq450:pl-5 mq450:pr-5 mq450:box-border">
                <i className="flex-1 relative leading-[31px] z-[2]">
                  -Benjamin Franklin
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[908px] flex-1 relative min-w-[463px] max-w-full mq750:min-w-full">
        <div className="absolute top-[0px] left-[2px] rounded-31xl bg-powderblue-100 [filter:blur(250px)] w-full h-full" />
        <img
          className="absolute top-[99px] left-[0px] w-[710px] h-[664px] object-cover z-[1]"
          loading="eager"
          alt=""
          src="/desktopicon@2x.png"
        />
      </div>
    </div>
  );
};

export default PlayFrame;
