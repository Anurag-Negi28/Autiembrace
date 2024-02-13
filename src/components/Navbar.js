const Navbar = () => {
  return (
    <div className="self-stretch flex flex-row items-center justify-between pt-[30px] pb-[38px] pr-12 pl-[41px] box-border sticky gap-[20px] max-w-full top-[0] z-[99] mq750:pr-6 mq750:box-border">
      <div className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0.5px] bottom-[0px] left-[-0.5px] bg-mistyrose [filter:blur(46px)]" />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[31px] w-60 relative text-6xl leading-[27.5px] font-bold font-montserrat text-dimgray text-center flex items-center justify-center shrink-0 whitespace-nowrap z-[1]">
        AutiEmbrace
      </button>
      <div className="flex flex-row items-start justify-start gap-[41px] max-w-full mq750:gap-[41px] mq1050:hidden">
        <button className="cursor-pointer [border:none] p-0 bg-powderblue-100 w-[101px] rounded-31xl flex flex-row items-center justify-center z-[1] hover:bg-cadetblue-100">
          <div className="h-[35px] w-[101px] relative rounded-31xl bg-powderblue-100 hidden" />
          <b className="h-[35px] flex-1 relative text-xl leading-[27.5px] flex font-montserrat text-dimgray text-center items-center justify-center z-[2]">
            Learn
          </b>
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-powderblue-100 w-[121px] rounded-31xl flex flex-row items-center justify-center z-[1] hover:bg-cadetblue-100">
          <div className="h-[35px] w-[121px] relative rounded-31xl bg-powderblue-100 hidden" />
          <b className="h-[35px] flex-1 relative text-xl leading-[27.5px] flex font-montserrat text-dimgray text-center items-center justify-center z-[2]">
            Connect
          </b>
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-powderblue-100 w-[102px] rounded-31xl flex flex-row items-center justify-center z-[1] hover:bg-cadetblue-100">
          <div className="h-[35px] w-[102px] relative rounded-31xl bg-powderblue-100 hidden" />
          <b className="h-[35px] flex-1 relative text-xl leading-[27.5px] flex font-montserrat text-dimgray text-center items-center justify-center z-[2]">
            Play
          </b>
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-powderblue-100 w-[101px] rounded-31xl flex flex-row items-center justify-center z-[1] hover:bg-cadetblue-100">
          <div className="h-[33px] w-[101px] relative rounded-31xl bg-powderblue-100 hidden" />
          <b className="h-[33px] flex-1 relative text-xl leading-[27.5px] flex font-montserrat text-dimgray text-center items-center justify-center z-[2]">
            Relax
          </b>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
