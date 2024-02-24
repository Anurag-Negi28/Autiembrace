import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import React, { useState, useEffect } from "react";
import Todo from "../components/Todo";
import { useLocation } from "react-router-dom";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";

const AutiEmbrace = () => {
  const [rectangleInputValue, setRectangleInputValue] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const userData = location.state?.userData || {};
  console.log(userData);

  const [quote, setQuote] = useState("");
  useEffect(() => {
    fetchRandomQuote();
  }, []);

  const fetchRandomQuote = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/quotes/random");
      if (!response.ok) {
        throw new Error("Failed to fetch quote");
      }
      const data = await response.json();
      setQuote(data.quote_text);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  const [norm, setNorm] = useState("");
  useEffect(() => {
    fetchRandomNorm();
  }, []);

  const fetchRandomNorm = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/social-norms/random"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch norm");
      }
      const data = await response.json();
      setNorm(data.norm_description);
    } catch (error) {
      console.error("Error fetching norm:", error);
    }
  };

  const onSignOutClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="w-full relative bg-cadetblue h-[3520px] overflow-hidden text-left text-41xl text-black font-montserrat">
      <Navbar />
      <main className="relative w-[calc(100%_+_2px)] top-[128px] right-[-2px] left-[0px] h-[908px] text-left text-41xl text-black font-outfit">
        <div className="absolute w-[calc(100%_-_732px)] top-[0px] right-[732px] left-[0px] rounded-31xl bg-powderblue-100 [filter:blur(250px)] h-[431px]" />
        <h1 className="m-0 absolute w-[32.94%] top-[0px] left-[9.36%] text-inherit leading-[60px] font-bold font-inherit flex items-center h-[431px]">
          <span className="w-full">
            <p className="[margin-block-start:0] [margin-block-end:15px]">
              Hi, {userData.userData}
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
          <i className="absolute w-[26.36%] top-[317px] left-[53.03%] text-base leading-[31px] inline-block font-montserrat h-[30px]"></i>
        </div>
      </main>

      <div className="relative mt-60 pl-50 pr-30 tododiv rounded-lg overflow-hidden">
        <Todo />
      </div>

      <div className="absolute top-[2143px] left-[50px] w-[1345px] h-[431px] text-11xl text-dimgray">
        <div className="absolute top-[0px] left-[0px] rounded-31xl [background:linear-gradient(98.62deg,_rgba(255,_120,_164,_0.83),_rgba(255,_206,_206,_0)_80.1%)] w-[1340px] h-[431px]" />
        <img
          className="absolute top-[0px] right-[0px] rounded-31xl w-[435px] h-[431px] object-cover"
          alt=""
          src="/movieimg@2x.png"
        />
        <div className="absolute w-[calc(100%_-_555px)] top-[29px] right-[483px] left-[72px] h-[113px]">
          <h3 className="m-0 absolute w-[calc(100%_-_4px)] top-[77px] left-[4px] text-inherit leading-[20px] font-normal font-inherit inline-block h-9">
            Try our movie recommender, Chill out and have fun
          </h3>
          <h1 className="m-0 absolute w-[calc(100%_-_13px)] top-[0px] left-[0px] text-41xl leading-[50px] font-bold font-inherit inline-block h-[61px]">
            Done with tasks!!
          </h1>
        </div>
        <div className="absolute top-[155px] right-[509px] w-[367px] h-[257px]">
          <h3 className="m-0 absolute top-[0px] right-[0px] text-inherit leading-[36px] font-normal font-inherit inline-block w-[367px] h-[46px]">
            Suggestions 😊
          </h3>
          <textarea
            className="[border:none] bg-gainsboro h-[184px] [outline:none] absolute top-[73px] right-[0px] rounded-xl w-[367px]"
            placeholder="    Your movie suggestions are here!!"
            rows={10}
          />
        </div>
        <div className="absolute top-[153px] left-[72px] w-[367px] h-[202px]">
          <h3 className="m-0 absolute top-[0px] left-[4px] text-inherit leading-[36px] font-normal font-inherit flex items-center w-[363px] h-[66px]">
            Enter your favorite movie name 🎥
          </h3>
          <input
            className="[border:none] [outline:none] bg-gainsboro absolute top-[75px] left-[0px] rounded-xl w-[367px] h-[67px]"
            placeholder="     Type movie name"
            type="text"
            value={rectangleInputValue}
            onChange={(event) => setRectangleInputValue(event.target.value)}
          />
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[167px] left-[210px] w-[157px] h-[35px]">
            <div className="absolute top-[0px] left-[0px] rounded-xl bg-powderblue-100 w-[157px] h-[35px]" />
            <b className="absolute top-[0px] left-[0px] text-xl leading-[27.5px] flex font-montserrat text-dimgray text-center items-center justify-center w-[157px] h-[35px]">{`Generate>>`}</b>
          </button>
        </div>
        <img
          className="absolute w-[calc(100%_-_435px)] top-[140px] right-[435px] left-[0px] max-w-full overflow-hidden h-[10px] object-contain"
          alt=""
          src="/Line-5.png"
        />
      </div>
      <div className="absolute w-[99.93%] right-[0.07%] bottom-[0px] left-[0%] h-[431px] text-3xl">
        <footer className="absolute w-full right-[0%] bottom-[50px] left-[0%] [background:linear-gradient(180deg,_#b8c0d5,_rgba(193,_184,_213,_0))] [filter:blur(0px)] h-[381px]" />
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute right-[105px] bottom-[192px] text-3xl font-montserrat text-black text-center inline-block w-[101px] h-[27px]">
          Submit
        </button>
        <h3 className="m-0 absolute w-[32.38%] bottom-[361px] left-[55.96%] text-inherit font-normal font-inherit inline-block">
          Want to share? Give us feedback
        </h3>
        <div className="absolute top-[92px] left-[365px] flex flex-col items-start justify-start gap-[2px] text-base">
          <a
            className="[text-decoration:none] relative leading-[31px] text-[inherit] inline-block w-[141px]"
            href="mailto:autiembrace@gmail.com"
          >
            Email
          </a>
          <a
            className="[text-decoration:none] relative leading-[31px] text-[inherit] inline-block w-[141px]"
            href="https://linkedin.com"
          >
            LinkedIn
          </a>
          <a
            className="[text-decoration:none] relative leading-[31px] text-[inherit] inline-block w-[141px]"
            href="https://instagram.com"
          >
            Instagram
          </a>
          <a
            className="[text-decoration:none] relative leading-[31px] text-[inherit] inline-block w-[141px]"
            href="https://twitter.com"
          >
            Twitter
          </a>
        </div>
        <h3 className="m-0 absolute w-[9.8%] bottom-[361px] left-[23.96%] text-inherit font-normal font-inherit inline-block">
          Contact
        </h3>
        <h3 className="m-0 absolute bottom-[361px] left-[122px] text-inherit font-normal font-inherit inline-block w-[223px]">
          AutiEmbrace
        </h3>
        <div className="absolute top-[92px] left-[122px] flex flex-col items-start justify-start gap-[2px] text-base">
          <Link
            className="cursor-pointer [text-decoration:none] relative leading-[31px] text-[inherit] inline-block w-[121px]"
            to="/autiembrace"
            onClick={onSignOutClick}
          >
            Home
          </Link>
          <Link
            className="cursor-pointer [text-decoration:none] relative leading-[31px] text-[inherit] inline-block w-[121px]"
            to="/"
            onClick={onSignOutClick}
          >
            About
          </Link>
          <Link
            className="cursor-pointer [text-decoration:none] relative leading-[31px] text-[inherit] inline-block w-[121px]"
            to="/"
            onClick={onSignOutClick}
          >
            Sign out
          </Link>
        </div>
        <TextField
          className="[border:none] bg-[transparent] absolute w-[calc(100%_-_973px)] right-[123px] bottom-[245px] left-[850px]"
          color="primary"
          placeholder="Your feedback matters!!"
          sx={{ width: 466 }}
          variant="outlined"
        />
        <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] bg-gainsboro h-[50px]" />
        <div className="absolute top-[calc(50%_+_165.5px)] left-[calc(50%_-_111.5px)] whitespace-pre-wrap text-center flex items-center w-56 h-[50px]">
          <span className="w-full">
            <span>{`©  `}</span>
            <span className="text-lg">AutiEmbrace</span>
          </span>
        </div>
      </div>
      <div className="absolute w-[calc(100%_+_260px)] top-[2590px] right-[-310px] left-[50px] h-[542px] text-21xl text-dimgray">
        <div className="absolute w-[calc(95%_-_1129px)] top-[26px] right-[1129px] left-[0px] h-[431px]">
          <div className="absolute w-full top-[0px] right-[0px] left-[0px] rounded-31xl [background:linear-gradient(30.11deg,_#b8d5cb,_rgba(244,_255,_248,_0))] h-[431px]" />
          <h3 className="m-0 absolute w-[60.77%] top-[87px] left-[37.48%] text-inherit leading-[50px] font-normal font-inherit flex items-center h-[344px]">
            {norm}
          </h3>
          <h1 className="m-0 absolute w-[calc(100%_-_33px)] top-[27px] left-[23px] text-41xl leading-[60px] font-bold font-54px inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
            Norms Navigator
          </h1>
          <img
            className="absolute w-[35.73%] top-[154px] right-[64.27%] left-[0%] max-w-full overflow-hidden h-[225px] object-cover"
            alt=""
            src="/phoneicon@2x.png"
          />
        </div>
        <div className="absolute w-[calc(95%_-_593px)] top-[0px] right-[0px] left-[593px] h-[542px]">
          <div className="absolute w-[calc(100%_-_360px)] top-[26px] right-[360px] left-[0px] rounded-31xl [background:linear-gradient(77.91deg,_#ff78a4,_rgba(184,_213,_200,_0))] h-[431px]" />
          <h3 className="m-0 absolute w-[39.75%] top-[132px] left-[3.43%] text-inherit leading-[50px] font-normal font-inherit inline-block h-[325px]">
            <p className="[margin-block-start:0] [margin-block-end:15px]">
              😊😡😉
            </p>
            <p className="[margin-block-start:0] [margin-block-end:15px]">
              Can you guess
            </p>
            <p className="[margin-block-start:0] [margin-block-end:15px]">
              what we feel?
            </p>
            <p className="[margin-block-start:0] [margin-block-end:15px]">
              Our software can,
            </p>
            <p className="[margin-block-start:0] [margin-block-end:15px]">
              it's so real
            </p>
            <p className="[margin-block-start:0] [margin-block-end:15px]"></p>
          </h3>
          <h1 className="m-0 absolute w-[calc(100%_-_751px)] top-[47px] left-[38px] text-41xl leading-[60px] font-bold font-inherit flex items-center h-[72px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
            EmoSense
          </h1>
          <div className="absolute top-[0px] right-[0px] w-[918px] h-[542px]">
            <img
              className="absolute top-[0px] right-[0px] w-[918px] h-[542px] object-cover mix-blend-soft-light"
              alt=""
              src="/blastimgae@2x.png"
            />
            <img
              className="absolute top-[75px] right-[370.6px] rounded-150xl w-[305.4px] h-[291.2px] object-cover"
              alt=""
              src="/emotionrecognition@2x.png"
            />
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[392px] right-[458px] w-[131px] h-[39px]">
            <div className="absolute top-[0px] right-[0px] rounded-xl bg-powderblue-100 w-[131px] h-[39px]" />
            <b className="absolute top-[0px] right-[0px] text-xl leading-[27.5px] flex font-montserrat text-dimgray text-center items-center justify-center w-[131px] h-[39px]">{`Try it >>`}</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AutiEmbrace;
