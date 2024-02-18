import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import PlayFrame from "../components/PlayFrame";
import Todo from '../components/Todo';
import React, { useState, useEffect } from "react";

const AutiEmbrace = () => {
  const navigate = useNavigate();
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
  const onSignOutClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="w-full relative bg-cadetblue h-[3520px] overflow-hidden text-left text-41xl text-black font-montserrat">
      <Navbar />
      <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-[66px] pr-0.5 pl-0 box-border max-w-full mq750:pb-7 mq750:box-border mq1050:pb-[43px] mq1050:box-border">
        <PlayFrame />
      </section>

      <Todo />
      
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
        </div>
      </main>
      <div className="absolute w-full top-[1127px] right-[0px] left-[0px] h-[960px]">
        <div className="absolute w-full top-[0px] right-[0px] left-[0px] h-[960px] flex items-center justify-center">
          <img
            className="w-full max-w-full overflow-hidden h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.031)]"
            alt=""
            src="/notesbgimg@2x.png"
          />
        </div>
        <div className="absolute w-[calc(100%_-_780px)] top-[24px] right-[730px] left-[50px] rounded-31xl bg-powderblue-200 h-[908px]" />
        <b className="absolute w-[calc(100%_-_983px)] top-[57px] left-[122px] leading-[60px] inline-block">
          To do list :
        </b>
        <div className="absolute w-[calc(100%_-_779px)] top-[24px] right-[50px] left-[729px] rounded-31xl bg-powderblue-200 h-[908px]" />
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute w-[13.82%] top-[calc(50%_+_340px)] right-[19.51%] left-[66.67%] h-[50px]"
          autoFocus={true}
        >
          <div className="absolute w-full top-[calc(50%_-_25px)] right-[0%] left-[0%] rounded-31xl bg-mediumaquamarine h-[50px]" />
          <div className="absolute w-full top-[0px] left-[0%] text-xl leading-[31px] font-montserrat text-black text-center flex items-center justify-center h-[50px]">
            Edit
          </div>
        </button>
        <b className="absolute w-[calc(100%_-_983px)] top-[57px] left-[852px] leading-[60px] inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
          Description
        </b>
        <div className="absolute w-[45.83%] top-[211px] left-[3.47%] text-31xl leading-[50px] flex items-center h-[631px]">
          <ul className="m-0 font-inherit text-inherit pl-[67px]">
            <li className="mb-[15px]">Wake up</li>
            <li className="mb-[15px]">Breakfast</li>
            <li className="mb-[15px]">Get ready for school</li>
            <li className="mb-[15px]">Time to play</li>
            <li className="mb-[15px]">Time to study</li>
            <li className="mb-[15px]">Dinner</li>
            <li>Sleep time</li>
          </ul>
        </div>
        <div className="absolute w-[37.99%] top-[189px] left-[58.54%] text-31xl leading-[50px] flex items-center h-[631px]">
          <span className="w-full">
            <p className="[margin-block-start:0] [margin-block-end:15px]">
              Date : 07-02-2024
            </p>
            <p className="[margin-block-start:0] [margin-block-end:15px]">
              Time : 16:51
            </p>
          </span>
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute w-[13.82%] top-[calc(50%_+_340px)] right-[80.76%] left-[5.42%] h-[50px]"
          autoFocus={true}
        >
          <div className="absolute w-full top-[calc(50%_-_25px)] right-[0%] left-[0%] rounded-31xl bg-mediumaquamarine h-[50px]" />
          <div className="absolute w-full top-[0px] left-[0%] text-xl leading-[31px] font-montserrat text-black text-center flex items-center justify-center h-[50px]">
            Add Task
          </div>
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute w-[13.82%] top-[calc(50%_+_340px)] right-[57.15%] left-[29.03%] h-[50px]"
          autoFocus={true}
        >
          <div className="absolute w-full top-[calc(50%_-_25px)] right-[0%] left-[0%] rounded-31xl bg-mediumaquamarine h-[50px]" />
          <div className="absolute w-full top-[0px] left-[0%] text-xl leading-[31px] font-montserrat text-black text-center flex items-center justify-center h-[50px]">
            Delete Task
          </div>
        </button>
      </div>
      <div className="absolute w-[93.06%] top-[2133px] right-[3.47%] left-[3.47%] h-[914px] text-dimgray">
        <img
          className="absolute w-[49.33%] top-[0px] right-[0%] left-[50.67%] rounded-31xl max-w-full overflow-hidden h-[470px] object-cover"
          alt=""
          src="/medalimg@2x.png"
        />
        <div className="absolute w-[calc(100%_-_680px)] top-[0px] right-[680px] left-[0px] rounded-31xl bg-powderblue-100 h-[908px]" />
        <b className="absolute w-[calc(100%_-_874px)] top-[87px] left-[76px] leading-[60px] inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
          Rewards
        </b>
        <div className="absolute w-[35.45%] top-[180px] left-[5.37%] text-31xl leading-[50px] flex items-center h-[631px]">
          <span className="w-full">
            <p className="[margin-block-start:0] [margin-block-end:15px]">
              Congratulations you have completed your day 1 tasks.
            </p>
          </span>
        </div>
        <div className="absolute w-[calc(100%_-_678px)] top-[483px] right-[0px] left-[678px] rounded-31xl bg-powderblue-100 h-[431px]" />
        <div className="absolute w-[30.3%] top-[622px] left-[69.7%] text-31xl leading-[50px] flex items-center h-[243px]">
          Wash your hands before eating food.
        </div>
        <b className="absolute w-[calc(100%_-_797px)] top-[539px] left-[764px] leading-[60px] inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
          Norms Navigator
        </b>
        <img
          className="absolute w-[14.78%] top-[636px] right-[32.76%] left-[52.46%] max-w-full overflow-hidden h-[215px] object-cover"
          alt=""
          src="/phoneicon@2x.png"
        />
      </div>
      <div className="absolute w-[99.93%] right-[0.07%] bottom-[0px] left-[0%] h-[431px] text-3xl">
        <div className="absolute w-full right-[0%] bottom-[50px] left-[0%] [background:linear-gradient(180deg,_#b8c0d5,_rgba(193,_184,_213,_0))] [filter:blur(0px)] h-[381px]" />
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute right-[121px] bottom-[76px] text-3xl font-montserrat text-black text-left inline-block w-[101px] h-[27px]"
          autoFocus={true}
        >
          Submit
        </button>
        <div className="absolute w-[32.38%] bottom-[361px] left-[59.21%] inline-block">
          Want to share? Give us feedback
        </div>
        <div className="absolute top-[92px] left-[365px] flex flex-col items-start justify-start gap-[2px] text-base">
          <a className="[text-decoration:none] w-[141px] relative leading-[31px] text-[inherit] inline-block">
            Email
          </a>
          <a className="[text-decoration:none] w-[141px] relative leading-[31px] text-[inherit] inline-block">
            LinkedIn
          </a>
          <a className="[text-decoration:none] w-[141px] relative leading-[31px] text-[inherit] inline-block">
            Instagram
          </a>
          <a className="[text-decoration:none] w-[141px] relative leading-[31px] text-[inherit] inline-block">
            Twitter
          </a>
        </div>
        <div className="absolute w-[9.8%] bottom-[361px] left-[25.36%] inline-block">
          Contact
        </div>
        <div className="absolute bottom-[361px] left-[122px] inline-block w-[223px]">
          AutiEmbrace
        </div>
        <div className="absolute top-[92px] left-[122px] flex flex-col items-start justify-start gap-[2px] text-base">
          <a className="[text-decoration:none] w-[121px] relative leading-[31px] text-[inherit] inline-block">
            Home
          </a>
          <a className="[text-decoration:none] w-[121px] relative leading-[31px] text-[inherit] inline-block">
            About
          </a>
          <Link
            className="cursor-pointer [text-decoration:none] w-[121px] relative leading-[31px] text-[inherit] inline-block"
            to="/"
            onClick={onSignOutClick}
          >
            Sign out
          </Link>
        </div>
        <textarea className="[border:none] bg-white [outline:none] absolute w-[calc(100%_-_973px)] right-[123px] bottom-[133px] left-[850px] rounded-31xl h-48" />
        <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] bg-gainsboro h-[50px]" />
        <div className="absolute top-[calc(50%_+_165.5px)] left-[calc(50%_-_111.5px)] whitespace-pre-wrap text-center flex items-center w-56 h-[50px]">
          <span className="w-full">
            <span>{`©  `}</span>
            <span className="text-lg">AutiEmbrace</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AutiEmbrace;
