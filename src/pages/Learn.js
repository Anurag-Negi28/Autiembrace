import { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

const Learn = () => {
  const [rectangleInputValue, setRectangleInputValue] = useState("");
  const navigate = useNavigate();

  const onHomeGroupClick = useCallback(() => {
    navigate("/autiembrace");
  }, [navigate]);

  return (
    <div className="relative bg-lightsteelblue w-full h-[1040px] overflow-hidden text-left text-3xs text-white font-heading-bold-6">
      <h1 className="m-0 absolute top-[calc(50%_-_412px)] left-[19.58%] text-21xl leading-[40px] font-semibold font-inherit text-sienna">
        Discover
      </h1>
      <Link
        className="[text-decoration:none] absolute w-[50.35%] top-[176px] right-[30.07%] left-[19.58%] h-[366px] text-[15px] text-[inherit]"
        to="http://localhost:8080/api/videos/basic-human-nature"
      >
        <div className="absolute w-full top-[0px] right-[0%] left-[0%] rounded-xl bg-darkcyan h-[366px]" />
        <img
          className="absolute w-full top-[0px] right-[0%] left-[0%] max-w-full overflow-hidden h-[366px] object-cover"
          alt=""
          src="/rectangleimagegroup@2x.png"
        />
        <div className="absolute w-[22.76%] top-[calc(50%_+_31px)] right-[72.41%] left-[4.83%] h-[60px]">
          <div className="absolute w-[60.61%] top-[calc(50%_-_8px)] right-[0%] left-[39.39%] h-[15px]">
            <div className="absolute w-full top-[calc(50%_-_7.5px)] right-[0%] left-[0%] h-[15px]">
              <div className="absolute top-[calc(50%_-_7.5px)] left-[0%] tracking-[0.5px] leading-[15px] font-medium mix-blend-normal">
                Anurag Negi
              </div>
            </div>
          </div>
          <div className="absolute top-[0px] left-[0px] w-[60px] h-[60px]">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] box-border w-[60px] h-[60px] opacity-[0.5] border-[1px] border-solid border-white" />
            <div className="absolute top-[5px] left-[5px] w-[50px] h-[50px]">
              <img
                className="absolute top-[0px] left-[0px] w-[50px] h-[50px]"
                alt=""
                src="/imageicon.svg"
              />
            </div>
          </div>
        </div>
        <h1 className="m-0 absolute top-[40px] left-[5.52%] text-11xl tracking-[0.3px] leading-[36px] font-semibold font-inherit">
          Basic Human Nature
        </h1>
        <div className="absolute top-[326px] left-[659px] w-[46px] h-5 text-3xs">
          <img
            className="absolute top-[0px] left-[0px] rounded-6xs w-[46px] h-5 opacity-[0.5]"
            alt=""
            src="/rectangle-10.svg"
          />
          <div className="absolute top-[5px] left-[8px] tracking-[0.5px] leading-[10px] font-medium">
            2 min
          </div>
        </div>
      </Link>
      <Link
        className="[text-decoration:none] absolute w-[24.44%] top-[176px] right-[4.17%] left-[71.39%] h-[366px] text-11xl text-[inherit]"
        to="http://localhost:8080/api/videos/embrace-yourself"
      >
        <div className="absolute w-full top-[0px] right-[0%] left-[0%] rounded-xl bg-gray-500 h-[366px]" />
        <img
          className="absolute w-full top-[0px] right-[0%] left-[0%] max-w-full overflow-hidden h-[366px] object-cover"
          alt=""
          src="/skateboarding@2x.png"
        />
        <div className="absolute w-[65.34%] top-[calc(50%_-_143px)] left-[11.36%] tracking-[0.3px] leading-[36px] font-semibold inline-block">
          Embrace Yourself
        </div>
        <div className="absolute w-[14.49%] top-[326px] right-[5.68%] left-[79.83%] h-5 text-3xs">
          <img
            className="absolute w-full top-[0px] right-[0%] left-[0%] rounded-6xs max-w-full overflow-hidden h-5 opacity-[0.5]"
            alt=""
            src="/rectangle-101.svg"
          />
          <div className="absolute top-[5px] left-[15.69%] tracking-[0.5px] leading-[10px] font-medium">
            2 min
          </div>
        </div>
      </Link>
      <Link
        className="[text-decoration:none] absolute w-[17.99%] top-[659px] right-[62.43%] left-[19.58%] h-[313px] text-[inherit]"
        to="http://localhost:8080/api/videos/basic-human-nature"
       >
        <div className="absolute w-full top-[0px] right-[0%] left-[0%] rounded-xl bg-gray-400 h-[313px]" />
        <img
          className="absolute w-full top-[0px] right-[0%] left-[0%] max-w-full overflow-hidden h-40 object-cover"
          alt=""
          src="/group-369@2x.png"
        />
        <div className="absolute w-[17.76%] top-[10px] right-[3.86%] left-[78.38%] h-5">
          <img
            className="absolute w-full top-[0px] right-[0%] left-[0%] rounded-6xs max-w-full overflow-hidden h-5 opacity-[0.5]"
            alt=""
            src="/rectangle-10.svg"
          />
          <div className="absolute top-[5px] left-[17.39%] tracking-[0.5px] leading-[10px] font-medium">
            2 min
          </div>
        </div>
        <div className="absolute w-[81.47%] top-[calc(50%_+_27.5px)] right-[10.81%] left-[7.72%] h-[51px] text-smi text-lightsteelblue-200">
          <div className="absolute w-full top-[calc(50%_-_25.5px)] right-[0%] left-[0%] h-[51px]">
            <div className="absolute w-[49.76%] top-[calc(50%_-_25.5px)] right-[50.24%] left-[0%] h-[13px]">
              <div className="absolute top-[calc(50%_-_6.5px)] left-[0%] tracking-[0.5px] leading-[13px] mix-blend-normal">
                Anurag Negi
              </div>
              <div className="absolute w-[6.67%] top-[3px] right-[0%] left-[93.33%] rounded-[50%] bg-mediumseagreen h-[7px]" />
            </div>
            <div className="absolute w-full top-[calc(50%_-_0.5px)] left-[0%] text-base tracking-[0.3px] leading-[26px] font-medium text-white inline-block">
              Basic Human Nature
            </div>
          </div>
        </div>
        <img
          className="absolute w-[23.17%] top-[137px] right-[7.72%] left-[69.11%] max-w-full overflow-hidden h-[60px] object-cover"
          alt=""
          src="/group-368@2x.png"
        />
      </Link>
      <Link
        className="[text-decoration:none] absolute w-[17.99%] top-[659px] right-[23.54%] left-[58.47%] h-[313px] text-[inherit]"
        to="http://localhost:8080/api/videos/embrace-yourself"
      >
        <div className="absolute w-full top-[0px] right-[0%] left-[0%] rounded-xl bg-gray-400 h-[313px]" />
        <img
          className="absolute w-full top-[0px] right-[0%] left-[0%] max-w-full overflow-hidden h-40 object-cover"
          alt=""
          src="/group-370@2x.png"
        />
        <div className="absolute w-[17.76%] top-[10px] right-[3.86%] left-[78.38%] h-5">
          <img
            className="absolute w-full top-[0px] right-[0%] left-[0%] rounded-6xs max-w-full overflow-hidden h-5 opacity-[0.5]"
            alt=""
            src="/rectangle-10.svg"
          />
          <div className="absolute top-[5px] left-[17.39%] tracking-[0.5px] leading-[10px] font-medium">
            2 min
          </div>
        </div>
        <div className="absolute w-[81.47%] top-[calc(50%_+_27.5px)] right-[10.81%] left-[7.72%] h-[77px] text-smi text-lightsteelblue-200">
          <div className="absolute w-full top-[calc(50%_-_38.5px)] right-[0%] left-[0%] h-[77px]">
            <div className="absolute w-[49.29%] top-[calc(50%_-_38.5px)] right-[50.71%] left-[0%] h-[13px]">
              <div className="absolute top-[calc(50%_-_6.5px)] left-[0%] tracking-[0.5px] leading-[13px] mix-blend-normal">
                Kartik Gupta
              </div>
              <div className="absolute w-[6.73%] top-[3px] right-[0%] left-[93.27%] rounded-[50%] bg-coral h-[7px]" />
            </div>
            <div className="absolute w-full top-[calc(50%_-_13.5px)] left-[0%] text-base tracking-[0.3px] leading-[26px] font-medium text-white inline-block">
              Learn basics of Artificial Intelligence
            </div>
          </div>
        </div>
        <img
          className="absolute w-[23.17%] top-[137px] right-[7.72%] left-[69.11%] max-w-full overflow-hidden h-[60px] object-cover"
          alt=""
          src="/group-3681@2x.png"
        />
      </Link>
      <Link
        className="[text-decoration:none] absolute h-[calc(100%_-_727px)] w-[17.99%] top-[659px] right-[4.17%] bottom-[68px] left-[77.85%] text-[inherit]"
        to="http://localhost:8080/api/videos/embrace-yourself"
      >
        <div className="absolute h-full w-full top-[0px] right-[0%] bottom-[0px] left-[0%] rounded-xl bg-gray-400" />
        <img
          className="absolute h-[calc(100%_-_153px)] w-full top-[0px] right-[0%] bottom-[153px] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/group-37011@2x.png"
        />
        <div className="absolute h-[calc(100%_-_293px)] w-[17.76%] top-[10px] right-[3.86%] bottom-[283px] left-[78.38%]">
          <img
            className="absolute h-full w-full top-[0px] right-[0%] bottom-[0px] left-[0%] rounded-6xs max-w-full overflow-hidden max-h-full opacity-[0.5]"
            alt=""
            src="/rectangle-10.svg"
          />
          <div className="absolute top-[5px] left-[17.39%] tracking-[0.5px] leading-[10px] font-medium">
            2 min
          </div>
        </div>
        <div className="absolute h-[calc(100%_-_236px)] w-[81.47%] top-[184px] right-[10.81%] bottom-[52px] left-[7.72%] text-smi text-lightsteelblue-200">
          <div className="absolute h-full w-full top-[0px] right-[0%] bottom-[0px] left-[0%]">
            <div className="absolute h-[calc(100%_-_64px)] w-[50.71%] top-[0px] right-[49.29%] bottom-[64px] left-[0%]">
              <div className="absolute top-[0px] left-[0%] tracking-[0.5px] leading-[13px] mix-blend-normal">
                Priyanshi Rai
              </div>
              <div className="absolute h-[calc(100%_-_6px)] w-[6.54%] top-[3px] right-[0%] bottom-[3px] left-[93.46%] rounded-[50%] bg-mediumseagreen" />
            </div>
            <div className="absolute w-full top-[25px] left-[0%] text-base tracking-[0.3px] leading-[26px] font-medium text-white inline-block">
              Planning, Organization, and Time Management
            </div>
          </div>
        </div>
        <img
          className="absolute h-[calc(100%_-_253px)] w-[23.17%] top-[137px] right-[7.72%] bottom-[116px] left-[69.11%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/group-3682@2x.png"
        />
      </Link>
      <Link
        className="[text-decoration:none] absolute w-[17.99%] top-[659px] right-[42.99%] left-[39.03%] h-[313px] text-[inherit]"
        to="http://localhost:8080/api/videos/embrace-yourself"
      >
        <div className="absolute w-full top-[0px] right-[0%] left-[0%] rounded-xl bg-gray-400 h-[313px]" />
        <img
          className="absolute w-full top-[0px] right-[0%] left-[0%] max-w-full overflow-hidden h-40 object-cover"
          alt=""
          src="/group-371@2x.png"
        />
        <div className="absolute w-[17.76%] top-[10px] right-[3.86%] left-[78.38%] h-5">
          <img
            className="absolute w-full top-[0px] right-[0%] left-[0%] rounded-6xs max-w-full overflow-hidden h-5 opacity-[0.5]"
            alt=""
            src="/rectangle-10.svg"
          />
          <div className="absolute top-[5px] left-[17.39%] tracking-[0.5px] leading-[10px] font-medium">
            2 min
          </div>
        </div>
        <div className="absolute w-[81.47%] top-[calc(50%_+_27.5px)] right-[10.81%] left-[7.72%] h-[51px] text-smi text-lightsteelblue-200">
          <div className="absolute w-full top-[calc(50%_-_25.5px)] right-[0%] left-[0%] h-[51px]">
            <div className="absolute w-[44.08%] top-[calc(50%_-_25.5px)] right-[55.92%] left-[0%] h-[13px]">
              <div className="absolute top-[calc(50%_-_6.5px)] left-[0%] tracking-[0.5px] leading-[13px] mix-blend-normal">
                Md Arslan
              </div>
              <div className="absolute w-[7.53%] top-[3px] right-[0%] left-[92.47%] rounded-[50%] bg-coral h-[7px]" />
            </div>
            <div className="absolute w-full top-[calc(50%_-_0.5px)] left-[0%] text-base tracking-[0.3px] leading-[26px] font-medium text-white inline-block">
              Embrace Yourself
            </div>
          </div>
        </div>
        <img
          className="absolute w-[23.17%] top-[137px] right-[7.72%] left-[69.11%] max-w-full overflow-hidden h-[60px] object-cover"
          alt=""
          src="/group-36811@2x.png"
        />
      </Link>
      <h2 className="m-0 absolute top-[calc(50%_+_83px)] left-[19.58%] text-[28px] leading-[28px] font-medium font-inherit text-sienna">
        Watch More
      </h2>
      <header className="absolute w-[43.4%] top-[28px] right-[37.01%] left-[19.58%] h-10">
        <input
          className="[border:none] [outline:none] bg-black absolute w-full top-[0px] right-[0%] left-[0%] rounded-3xs h-10 opacity-[0.1]"
          placeholder="Search"
          type="text"
          value={rectangleInputValue}
          onChange={(event) => setRectangleInputValue(event.target.value)}
        />
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute w-[1.92%] top-[14px] right-[2.4%] left-[95.68%] h-3 opacity-[0.5]">
          <img
            className="absolute w-[81.67%] top-[0px] right-[18.33%] left-[0%] max-w-full overflow-hidden h-[9.8px]"
            alt=""
            src="/oval.svg"
          />
          <img
            className="absolute w-[29.17%] top-[8.5px] right-[0%] left-[70.83%] max-w-full overflow-hidden h-[3.5px] object-contain"
            alt=""
            src="/path-14.svg"
          />
        </button>
      </header>
      <section className="absolute w-[10.63%] top-[calc(50%_-_412px)] right-[87.5%] left-[1.88%] h-[236px] text-left text-base text-sienna font-heading-bold-6">
        <div className="absolute w-[96.21%] top-[calc(50%_-_118px)] right-[3.79%] left-[0%] h-[220px]">
          <div className="absolute w-full top-[calc(50%_-_75px)] right-[0%] left-[0%] h-[185px]">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute w-[98.91%] top-[calc(50%_+_60.5px)] right-[1.09%] left-[0%] h-8">
              <div className="absolute w-[60.85%] top-[calc(50%_-_8px)] left-[39.15%] text-sm tracking-[0.3px] leading-[15.46px] font-heading-bold-6 text-sienna text-left inline-block">
                Community
              </div>
              <img
                className="absolute top-[0px] left-[0px] w-[33px] h-8 object-contain"
                alt=""
                src="/group-113@2x.png"
              />
            </button>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] absolute w-[96.47%] top-[calc(50%_-_92.5px)] right-[3.53%] left-[0%] h-8"
              onClick={onHomeGroupClick}
            >
              <div className="absolute w-[62.04%] top-[calc(50%_-_8px)] left-[37.96%] text-sm tracking-[0.3px] leading-[15.46px] font-semibold font-heading-bold-6 text-sienna text-left inline-block h-4">
                Home
              </div>
              <div className="absolute top-[0px] left-[0px] w-[33.2px] h-8">
                <div className="absolute top-[0px] left-[0px] rounded-xl bg-coral w-[33.2px] h-8" />
                <img
                  className="absolute h-3/6 w-6/12 top-[25%] right-[25%] bottom-[25%] left-[25%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/iconlyboldhome.svg"
                />
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute w-full top-[calc(50%_+_13.5px)] right-[0%] left-[0%] h-8">
              <div className="absolute w-[61.28%] top-[calc(50%_-_8px)] left-[38.72%] text-sm tracking-[0.3px] leading-[15.46px] font-heading-bold-6 text-sienna text-left inline-block h-[15.5px]">
                Bookmark
              </div>
              <img
                className="absolute top-[0px] left-[0px] w-[31.9px] h-8 object-contain"
                alt=""
                src="/group-112@2x.png"
              />
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute w-[93.75%] top-[calc(50%_-_33.5px)] right-[6.25%] left-[0%] h-8">
              <div className="absolute w-[58.99%] top-[calc(50%_-_8px)] left-[41.01%] text-sm tracking-[0.3px] leading-[15.46px] font-heading-bold-6 text-sienna text-left inline-block h-4">
                Playlist
              </div>
              <img
                className="absolute top-[0px] left-[0px] w-[37.7px] h-8 object-contain"
                alt=""
                src="/group-1131@2x.png"
              />
            </button>
          </div>
          <div className="absolute top-[calc(50%_-_110px)] left-[0%] tracking-[1.5px] leading-[11px] font-semibold opacity-[0.5] mix-blend-normal">
            MENU
          </div>
        </div>
        <div className="absolute top-[235.5px] left-[4.5px] box-border w-[149px] h-px border-t-[1px] border-solid border-darkslategray" />
      </section>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[calc(50%_-_482px)] left-[2.22%] text-xl leading-[20px] font-semibold text-sienna"
        to="/"
      >
        AutiEmbrace
      </Link>
      <footer className="absolute w-[calc(100%_-_1px)] right-[1px] bottom-[0px] left-[0px] h-[50px] text-center text-3xl text-black font-montserrat">
        <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] bg-gainsboro h-[50px]" />
        <div className="absolute top-[calc(50%_-_25px)] left-[calc(50%_-_111.5px)] whitespace-pre-wrap flex items-center w-56 h-[50px]">
          <span className="w-full">
            <span>{`©  `}</span>
            <span className="text-lg">AutiEmbrace</span>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Learn;
