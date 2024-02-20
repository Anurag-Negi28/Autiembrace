import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

const SensoryRoom = () => {
  const navigate = useNavigate();

  const onAutiEmbraceClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative [background:linear-gradient(0deg,_#a4c9ff,_rgba(190,_216,_255,_0))] w-full h-[1974px] overflow-hidden">
      <img
        className="absolute w-full top-[0px] right-[0%] left-[0%] h-[1924px]"
        src="/giphy.gif"
      />
      <header className="absolute w-[calc(100%_-_1px)] top-[0px] right-[1px] left-[0px] h-[103px] text-center text-6xl text-dimgray font-montserrat">
        <div className="absolute w-full top-[0px] right-[0px] left-[0px] bg-mistyrose [filter:blur(46px)] h-[103px]" />
        <Link
          className="cursor-pointer [text-decoration:none] absolute w-[calc(100%_-_1199px)] top-[32px] left-[41px] leading-[27.5px] font-bold text-[inherit] flex items-center justify-center h-[31px]"
          to="/autiembrace"
          onClick={onAutiEmbraceClick}
        >
          AutiEmbrace
        </Link>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute w-[calc(100%_-_1338px)] top-[30px] right-[48px] left-[1290px] h-[33px]">
          <div className="absolute w-full top-[0px] right-[0px] left-[0px] rounded-31xl bg-powderblue-100 h-[33px]" />
          <b
            className="absolute w-full top-[0px] left-[0px] text-xl leading-[27.5px] flex font-montserrat text-dimgray text-center items-center justify-center h-[33px] cursor-pointer"
            onClick={onHomeTextClick}
          >
            Home
          </b>
        </button>
      </header>
      <footer className="absolute w-[calc(100%_-_1px)] right-[1px] bottom-[0px] left-[0px] h-[50px] text-center text-3xl text-black font-montserrat">
        <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] bg-gainsboro h-[50px]" />
        <div className="absolute w-[calc(100%_-_1215px)] bottom-[0px] left-[608px] whitespace-pre-wrap flex items-center h-[50px]">
          <span className="w-full">
            <span>{`©  `}</span>
            <span className="text-lg">AutiEmbrace</span>
          </span>
        </div>
      </footer>
      <div className="absolute w-[93.06%] top-[140px] right-[3.4%] left-[3.54%] h-[500px] overflow-hidden">
        <img
          className="absolute top-[0px] left-[0px] rounded-54xl w-[1340px] h-[500px]"
          src="/snow-2620.gif"
        />
        <img
          className="absolute top-[0px] left-[1695px] rounded-54xl w-[1340px] h-[500px] object-cover"
          alt=""
          src="/rectangle-1389@2x.png"
        />
        <img
          className="absolute top-[0px] left-[3390px] rounded-54xl w-[1340px] h-[500px] object-cover"
          alt=""
          src="/rectangle-1388@2x.png"
        />
      </div>
      <div className="absolute w-[calc(100%_-_100px)] top-[745px] right-[50px] left-[50px] h-[300px] grid grid-rows-[300px] grid-cols-[433px_435px_433px] [grid-row-gap:0px] [grid-column-gap:19px]">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative">
          <img
            className="absolute w-full top-[0px] right-[0px] left-[0px] rounded-54xl max-w-full overflow-hidden h-[300px] object-cover"
            alt=""
            src="/rectangle-1394@2x.png"
          />
          <div className="absolute w-[90.05%] top-[211px] right-[4.85%] left-[5.1%] rounded-54xl bg-cadetblue [filter:blur(20px)] h-[89px]" />
          <div className="absolute w-[90.05%] top-[211px] left-[5.1%] text-21xl leading-[140%] font-medium font-montserrat text-dimgray text-center flex items-center justify-center h-[89px]">
            Glaciers
          </div>
          <a
            className="[text-decoration:none] absolute w-[calc(100%_-_320.7px)] top-[85px] right-[160.3px] left-[160.4px] rounded-81xl bg-mediumpurple h-28"
            href="https://giphy.com/embed/jTw3eqFiNiQfaYPDxj/video"
          >
            <img
              className="absolute top-[calc(50%_-_27px)] left-[calc(50%_-_18.15px)] rounded-12xs w-[52px] h-[54px]"
              alt=""
              src="/path-2.svg"
            />
          </a>
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative">
          <img
            className="absolute w-full top-[0px] right-[0px] left-[0px] rounded-54xl max-w-full overflow-hidden h-[300px] object-cover"
            alt=""
            src="/rectangle-13941@2x.png"
          />
          <div className="absolute w-[90.05%] top-[211px] right-[4.85%] left-[5.1%] rounded-54xl bg-cadetblue [filter:blur(20px)] h-[89px]" />
          <div className="absolute w-[90.05%] top-[211px] left-[5.1%] text-21xl leading-[140%] font-medium font-montserrat text-dimgray text-center flex items-center justify-center h-[89px]">
            Night Sky
          </div>
          <a
            className="[text-decoration:none] absolute w-[calc(100%_-_322.2px)] top-[85px] right-[161.1px] left-[161.1px] rounded-81xl bg-mediumpurple h-28"
            href="https://giphy.com/embed/n9LcsRRhN5nZccVryS/video"
          >
            <img
              className="absolute top-[calc(50%_-_27px)] left-[calc(50%_-_18.4px)] rounded-12xs w-[52px] h-[54px]"
              alt=""
              src="/path-2.svg"
            />
          </a>
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative">
          <img
            className="absolute w-full top-[0px] right-[0px] left-[0px] rounded-54xl max-w-full overflow-hidden h-[300px] object-cover"
            alt=""
            src="/rectangle-13942@2x.png"
          />
          <div className="absolute w-[90.05%] top-[211px] right-[4.85%] left-[5.1%] rounded-54xl bg-cadetblue [filter:blur(20px)] h-[89px]" />
          <div className="absolute w-[90.05%] top-[211px] left-[5.1%] text-21xl leading-[140%] font-medium font-montserrat text-dimgray text-center flex items-center justify-center h-[89px]">
            Galaxy
          </div>
          <a
            className="[text-decoration:none] absolute w-[calc(100%_-_320.5px)] top-[85px] right-[160.1px] left-[160.4px] rounded-81xl bg-mediumpurple h-28"
            href="https://giphy.com/embed/l3c614V12UA82q1vG"
          >
            <img
              className="absolute top-[calc(50%_-_27px)] left-[calc(50%_-_18.25px)] rounded-12xs w-[52px] h-[54px]"
              alt=""
              src="/path-2.svg"
            />
          </a>
        </button>
      </div>
      <div className="absolute w-[calc(100%_-_100px)] top-[1132px] right-[48px] left-[52px] h-[300px] grid grid-rows-[300px] grid-cols-[433px_435px_433px] [grid-row-gap:0px] [grid-column-gap:19px]">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative">
          <img
            className="absolute w-full top-[0px] right-[0px] left-[0px] rounded-54xl max-w-full overflow-hidden h-[300px] object-cover"
            alt=""
            src="/rectangle-13943@2x.png"
          />
          <div className="absolute w-[90.05%] top-[211px] right-[4.85%] left-[5.1%] rounded-54xl bg-cadetblue [filter:blur(20px)] h-[89px]" />
          <div className="absolute w-[90.05%] top-[211px] left-[5.1%] text-21xl leading-[140%] font-medium font-montserrat text-dimgray text-center flex items-center justify-center h-[89px]">
            Dolphins
          </div>
          <a
            className="[text-decoration:none] absolute w-[calc(100%_-_320.7px)] top-[85px] right-[160.3px] left-[160.4px] rounded-81xl bg-mediumpurple h-28"
            href="https://giphy.com/embed/orfcZ0ashldNj2rM89/video"
          >
            <img
              className="absolute top-[calc(50%_-_27px)] left-[calc(50%_-_18.15px)] rounded-12xs w-[52px] h-[54px]"
              alt=""
              src="/path-2.svg"
            />
          </a>
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative">
          <img
            className="absolute w-full top-[0px] right-[0px] left-[0px] rounded-54xl max-w-full overflow-hidden h-[300px] object-cover"
            alt=""
            src="/rectangle-13944@2x.png"
          />
          <div className="absolute w-[90.05%] top-[211px] right-[4.85%] left-[5.1%] rounded-54xl bg-cadetblue [filter:blur(20px)] h-[89px]" />
          <div className="absolute w-[90.05%] top-[211px] left-[5.1%] text-21xl leading-[140%] font-medium font-montserrat text-dimgray text-center flex items-center justify-center h-[89px]">
            Animation
          </div>
          <a
            className="[text-decoration:none] absolute w-[calc(100%_-_322.2px)] top-[85px] right-[161.1px] left-[161.1px] rounded-81xl bg-mediumpurple h-28"
            href="https://giphy.com/embed/3og0ISYgnLbRpQE55m"
          >
            <img
              className="absolute top-[calc(50%_-_27px)] left-[calc(50%_-_18.4px)] rounded-12xs w-[52px] h-[54px]"
              alt=""
              src="/path-2.svg"
            />
          </a>
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative">
          <img
            className="absolute w-full top-[0px] right-[0px] left-[0px] rounded-54xl max-w-full overflow-hidden h-[300px] object-cover"
            alt=""
            src="/rectangle-13945@2x.png"
          />
          <div className="absolute w-[90.05%] top-[211px] right-[4.85%] left-[5.1%] rounded-54xl bg-cadetblue [filter:blur(20px)] h-[89px]" />
          <div className="absolute w-[90.05%] top-[211px] left-[5.1%] text-21xl leading-[140%] font-medium font-montserrat text-dimgray text-center flex items-center justify-center h-[89px]">
            Whales
          </div>
          <a
            className="[text-decoration:none] absolute w-[calc(100%_-_320.5px)] top-[85px] right-[160.1px] left-[160.4px] rounded-81xl bg-mediumpurple h-28"
            href="https://giphy.com/embed/RsWnyZLXj7QwPKeMfA"
          >
            <img
              className="absolute top-[calc(50%_-_27px)] left-[calc(50%_-_18.25px)] rounded-12xs w-[52px] h-[54px]"
              alt=""
              src="/path-2.svg"
            />
          </a>
        </button>
      </div>
      <div className="absolute w-[calc(100%_-_100px)] top-[1519px] right-[49px] left-[51px] h-[300px] grid grid-rows-[300px] grid-cols-[433px_435px_433px] [grid-row-gap:0px] [grid-column-gap:19px]">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative">
          <img
            className="absolute w-full top-[0px] right-[0px] left-[0px] rounded-54xl max-w-full overflow-hidden h-[300px] object-cover"
            alt=""
            src="/rectangle-13946@2x.png"
          />
          <div className="absolute w-[90.05%] top-[211px] right-[4.85%] left-[5.1%] rounded-54xl bg-cadetblue [filter:blur(20px)] h-[89px]" />
          <div className="absolute w-[90.05%] top-[211px] left-[5.1%] text-21xl leading-[140%] font-medium font-montserrat text-dimgray text-center flex items-center justify-center h-[89px]">
            River
          </div>
          <a
            className="[text-decoration:none] absolute w-[calc(100%_-_320.7px)] top-[85px] right-[160.3px] left-[160.4px] rounded-81xl bg-mediumpurple h-28"
            href="https://giphy.com/embed/ynh9QfgTiQ7ArCkMqO/video"
          >
            <img
              className="absolute top-[calc(50%_-_27px)] left-[calc(50%_-_18.15px)] rounded-12xs w-[52px] h-[54px]"
              alt=""
              src="/path-2.svg"
            />
          </a>
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative">
          <img
            className="absolute w-full top-[0px] right-[0px] left-[0px] rounded-54xl max-w-full overflow-hidden h-[300px] object-cover"
            alt=""
            src="/rectangle-13947@2x.png"
          />
          <div className="absolute w-[90.05%] top-[211px] right-[4.85%] left-[5.1%] rounded-54xl bg-cadetblue [filter:blur(20px)] h-[89px]" />
          <div className="absolute w-[90.05%] top-[211px] left-[5.1%] text-21xl leading-[140%] font-medium font-montserrat text-dimgray text-center flex items-center justify-center h-[89px]">
            Forest
          </div>
          <a
            className="[text-decoration:none] absolute w-[calc(100%_-_322.2px)] top-[85px] right-[161.1px] left-[161.1px] rounded-81xl bg-mediumpurple h-28"
            href="https://giphy.com/embed/q1HgeRfRvia5qjKcRx/video"
          >
            <img
              className="absolute top-[calc(50%_-_27px)] left-[calc(50%_-_18.4px)] rounded-12xs w-[52px] h-[54px]"
              alt=""
              src="/path-2.svg"
            />
          </a>
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative">
          <img
            className="absolute w-full top-[0px] right-[0px] left-[0px] rounded-54xl max-w-full overflow-hidden h-[300px] object-cover"
            alt=""
            src="/rectangle-13948@2x.png"
          />
          <div className="absolute w-[90.05%] top-[211px] right-[4.85%] left-[5.1%] rounded-54xl bg-cadetblue [filter:blur(20px)] h-[89px]" />
          <div className="absolute w-[90.05%] top-[211px] left-[5.1%] text-21xl leading-[140%] font-medium font-montserrat text-dimgray text-center flex items-center justify-center h-[89px]">
            Snowfall
          </div>
          <a
            className="[text-decoration:none] absolute w-[calc(100%_-_320.5px)] top-[85px] right-[160.1px] left-[160.4px] rounded-81xl bg-mediumpurple h-28"
            href="https://giphy.com/embed/rWl4BrqKpI4YsgXUM0/video"
          >
            <img
              className="absolute top-[calc(50%_-_27px)] left-[calc(50%_-_18.25px)] rounded-12xs w-[52px] h-[54px]"
              alt=""
              src="/path-2.svg"
            />
          </a>
        </button>
      </div>
    </div>
  );
};

export default SensoryRoom;
