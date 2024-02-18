import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
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
      <main className="absolute w-[calc(100%_+_2px)] top-[128px] right-[-2px] left-[0px] h-[908px] text-left text-41xl text-black font-outfit">
        <div className="absolute w-[calc(100%_-_732px)] top-[0px] right-[732px] left-[0px] rounded-31xl bg-powderblue-100 [filter:blur(250px)] h-[431px]" />
        <h1 className="m-0 absolute w-[32.94%] top-[0px] left-[9.36%] text-inherit leading-[60px] font-bold font-inherit flex items-center h-[431px]">
          <span className="w-full">
            <p className="[margin-block-start:0] [margin-block-end:15px]">
              Hi [user name],
            </p>
            <p className="m-0">Let’s spread some happiness !</p>
          </span>
        </h1>
        <div className="absolute w-[calc(100%_-_732px)] top-[0px] right-[0px] left-[732px] rounded-31xl bg-powderblue-100 [filter:blur(250px)] h-[908px]" />
        <img
          className="absolute w-[49.24%] top-[99px] right-[0.14%] left-[50.62%] max-w-full overflow-hidden h-[664px] object-cover"
          alt=""
          src="/desktopicon@2x.png"
        />
        <div className="absolute w-[calc(100%_-_732px)] top-[477px] right-[732px] left-[0px] rounded-31xl bg-powderblue-100 [filter:blur(250px)] h-[431px]" />
        <div className="absolute w-[45.77%] top-[431px] right-[50.76%] left-[3.47%] h-[477px] text-center text-21xl">
          <img
            className="absolute w-full top-[46px] right-[0%] left-[0%] max-w-full overflow-hidden h-[431px] object-cover mix-blend-hard-light"
            alt=""
            src="/quotebox@2x.png"
          />
          <b className="absolute w-[71.97%] top-[0px] left-[17.12%] leading-[40px] flex items-center justify-center h-[415px]">
           {quote}
          </b>
          <i className="absolute w-[26.36%] top-[317px] left-[53.03%] text-base leading-[31px] inline-block font-montserrat h-[30px]">
            -Benjamin Franklin
          </i>
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
