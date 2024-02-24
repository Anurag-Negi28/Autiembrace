import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import Slide from "../components/Slide";

import Gamee3 from "../components/gamee3";
import Gamee33 from "../components/gamee33";
import Gamee333 from "../components/gamee333";

import Gamee2 from "../components/gamee2";
import Gamee22 from "../components/gamee22";

import Gamee1 from "../components/gamee1";
import Gamee11 from "../components/gamee11";
import Gamee111 from "../components/gamee111";
import Gamee1111 from "../components/game1111";


const PlayGames = () => {
  const navigate = useNavigate();

  const onAutiEmbraceClick = useCallback(() => {
    navigate("/autiembrace");
  }, [navigate]);

  const onHomeButtonClick = useCallback(() => {
    navigate("/autiembrace");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/autiembrace");
  }, [navigate]);

  return (
    <div className="w-full relative bg-lightsteelblue h-[1974px] overflow-hidden">
      <header className="absolute w-[calc(100%_-_1px)] top-[0px] right-[0px] left-[1px] h-[103px] text-center text-6xl text-dimgray font-montserrat">
        <div className="absolute w-full top-[0px] right-[0px] left-[0px] bg-mistyrose [filter:blur(46px)] h-[103px]" />
        <Link
          className="cursor-pointer [text-decoration:none] absolute w-[calc(100%_-_1199px)] top-[32px] left-[41px] leading-[27.5px] font-bold text-[inherit] flex items-center justify-center h-[31px]"
          to="/autiembrace"
          onClick={onAutiEmbraceClick}
        >
          AutiEmbrace
        </Link>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute w-[calc(100%_-_1338px)] top-[30px] right-[48px] left-[1290px] h-[33px]"
          onClick={onHomeButtonClick}
        >
          <div className="absolute w-full top-[0px] right-[0px] left-[0px] rounded-31xl bg-powderblue-100 h-[33px]" />
          <b
            className="absolute w-full top-[0px] left-[0px] text-xl leading-[27.5px] flex font-montserrat text-dimgray text-center items-center justify-center h-[33px] cursor-pointer"
            onClick={onHomeTextClick}
          >
            Home
          </b>
        </button>
      </header>
      <footer className="absolute w-[calc(100%_-_1px)] right-[1px] bottom-[0px] left-[0px] h-[59px] text-center text-3xl text-black font-montserrat">
        <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] bg-gainsboro h-[59px]" />
        <div className="absolute w-[calc(100%_-_1215px)] bottom-[0px] left-[608px] whitespace-pre-wrap flex items-center h-[59px]">
          <span className="w-full">
            <span>{`©  `}</span>
            <span className="text-lg">AutiEmbrace</span>
          </span>
        </div>
      </footer>
      <Slide
        imageDimensions="/slides-box.svg"
        slide1Width="100%"
        slide1Position="absolute"
        slide1Top="133px"
        slide1Right="0px"
        slide1Left="0px"
      />

      <Gamee1 apiUrl="http://localhost:8080/api/images/scribble-art" />
      <Gamee11
        propRight="34.72%"
        propLeft="35.21%"
        propTop="722px"
        apiUrl="http://localhost:8080/api/images/counting-app" 
      />
      <Gamee111
        propRight="66.67%"
        propLeft="3.26%"
        propTop="722px"
        apiUrl="http://localhost:8080/api/images/Memory-Game" 
      />
      <Gamee1111
        propRight="3.54%"
        propLeft="66.39%"
        propTop="1121px"
        apiUrl="http://localhost:8080/api/images/Stone-paper-scissors"
      />

      <Gamee2 />
      <Gamee22 propRight="66.67%" propLeft="3.26%" />

      <Gamee3 />
      <Gamee33 propRight="33.54%" propLeft="36.39%" />
      <Gamee333 propRight="65.49%" propLeft="4.44%" />

    </div>
  );
};

export default PlayGames;
