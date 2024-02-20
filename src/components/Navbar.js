import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const onPlayRectangleClick = useCallback(() => {
    navigate("/playgames");
  }, [navigate]);

  const forSensoryRoom = useCallback(() => {
    navigate("/sensoryroom");
  }, [navigate]);

  const forLearn = useCallback(() => {
    navigate("/learn");
  }, [navigate]);

  return (
    <header className="absolute w-[calc(100%_-_1px)] top-[0px] right-[1px] left-[0px] h-[103px] text-center text-6xl text-dimgray font-montserrat">
      <div className="absolute w-full top-[0px] right-[0px] left-[0px] bg-mistyrose [filter:blur(46px)] h-[103px]" />
      <h1 className="m-0 absolute top-[32px] left-[41px] text-inherit leading-[27.5px] font-bold font-inherit flex items-center justify-center w-60 h-[31px]">
        AutiEmbrace
      </h1>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[30px] right-[333px] w-[121px] h-[35px]"
        autoFocus={true}
      >
        <div className="absolute top-[0px] right-[0px] rounded-31xl bg-powderblue-100 w-[121px] h-[35px]" />
        <b className="absolute top-[0px] right-[0px] text-xl leading-[27.5px] flex font-montserrat text-dimgray text-center items-center justify-center w-[121px] h-[35px]">
          Connect
        </b>
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[30px] right-[190px] w-[102px] h-[35px]"
        autoFocus={true}
        onClick={onPlayRectangleClick}
      >
        <div
          className="absolute top-[0px] right-[0px] rounded-31xl bg-powderblue-100 w-[102px] h-[35px] cursor-pointer"
        />
        <b className="absolute top-[0px] right-[0px] text-xl leading-[27.5px] flex font-montserrat text-dimgray text-center items-center justify-center w-[102px] h-[35px]">
          Play
        </b>
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[30px] right-[48px] w-[101px] h-[33px]"
        autoFocus={true}
        onClick={forSensoryRoom}
      >
        <div className="absolute top-[0px] right-[0px] rounded-31xl bg-powderblue-100 w-[101px] h-[33px]" />
        <b className="absolute top-[0px] right-[0px] text-xl leading-[27.5px] flex font-montserrat text-dimgray text-center items-center justify-center w-[101px] h-[33px]">
          Relax
        </b>
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[30px] right-[495px] w-[101px] h-[35px]"
        autoFocus={true}
        onClick={forLearn}
      >
        <button
          className="cursor-pointer [border:none] p-0 bg-powderblue-100 absolute top-[0px] right-[0px] rounded-31xl w-[101px] h-[35px]"
          autoFocus={true}
        />
        <b className="absolute top-[0px] right-[0px] text-xl leading-[27.5px] flex font-montserrat text-dimgray text-center items-center justify-center w-[101px] h-[35px]">
          Learn
        </b>
      </button>
    </header>
  );
};

export default Navbar;
