import { useState, useCallback, useEffect, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import VideoDisplay from "./VideoDisplay.js";

const Relax = () => {
  const navigate = useNavigate();
  const navigateToVideo = useCallback(
    (videoName) => {
      navigate(`/video/${videoName}`);
    },
    [navigate]
  );
  const [rectangleInputValue, setRectangleInputValue] = useState("");
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onCommunityGroupClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frequencies']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onHomeGroupClick = useCallback(() => {
    navigate("/autiembrace");
  }, [navigate]);

  const onBookmarkGroupClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='discover']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onVisualsGroupClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='visuals']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);
  const [videoUrls, setVideoUrls] = useState({
    christmas: "",
    room: "",
    cafe: "",
    picnic: "",
    Animated: "",
    Neon: "",
    Sci1: "",
    sci2: "",
  });

  const fetchVideoUrl = async (videoName) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/videos/${videoName}`
      );
      if (!response.ok) {
        throw new Error("Video not found");
      }
      const blob = await response.blob();
      const objectURL = URL.createObjectURL(blob);
      return objectURL;
    } catch (error) {
      console.error("Error fetching video:", error);
      return "";
    }
  };

  useEffect(() => {
    const fetchVideos = async () => {
      const urls = {
        christmas: await fetchVideoUrl("Ambinece-1"),
        room: await fetchVideoUrl("Ambinece-2"),
        cafe: await fetchVideoUrl("Ambinece-3"),
        picnic: await fetchVideoUrl("Ambinece-4"),
        ani: await fetchVideoUrl("Animated"),
        Neon: await fetchVideoUrl("Neon"),
        sci1: await fetchVideoUrl("Scenic-2"),
        sci2: await fetchVideoUrl("Scenic-1"),
      };
      setVideoUrls(urls);
    };
    fetchVideos();
  }, []);

  return (
    <div className="relative bg-lightsteelblue w-full h-[4160px] overflow-hidden text-left text-xl text-sienna font-heading-bold-6">
      <footer className="absolute w-[calc(100%_-_1px)] right-[1px] bottom-[-3px] left-[0px] h-[50px] text-center text-3xl text-black font-montserrat">
        <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] bg-gainsboro h-[50px]" />
        <h6 className="m-0 absolute w-[calc(100%_-_1215px)] bottom-[0px] left-[608px] font-normal font-inherit whitespace-pre-wrap flex items-center h-[50px] text-inherit">
          <span className="w-full">
            <span>{`©  `}</span>
            <span className="text-lg">AutiEmbrace</span>
          </span>
        </h6>
      </footer>
      <section
        className="absolute w-[calc(100%_-_377px)] top-[3364.5px] right-[116px] left-[261px] h-[631.5px] text-left text-21xl text-sienna font-heading-bold-6"
        data-scroll-to="frequencies"
      >
        <h1 className="m-0 absolute w-[calc(100%_-_17px)] top-[0px] left-[17px] text-inherit leading-[40px] font-semibold font-inherit inline-block">
          Frequencies
        </h1>
        <div className="absolute w-[calc(100%_-_49px)] top-[85.5px] right-[49px] left-[0px] h-[546px] grid grid-rows-[repeat(2,250px)] grid-cols-[1014px] [grid-row-gap:46px] [grid-column-gap:0px]">
          <div className="relative">
            <audio
              className="absolute w-[calc(100%_-_667px)] top-[0px] right-[667px] left-[0px] rounded-35xl h-[250px] bg-[url('/public/rectangle-1398@3x.png')] bg-cover bg-no-repeat bg-[top] hover:animate-[1s_ease_0s_1_normal_none_scale-up] hover:opacity-[1]"
              controls
            >
              <source src="/forest-with-small-river-birds-and-nature-field-recording-6735.mp3" />
            </audio>

            <video
              className="absolute w-[calc(72%_-_290px)] top-[0px] right-[0px] left-[397px] rounded-35xl h-[250px]"
              controls
              src="/WhatsApp Video 2024-02-26 at 03.34.54_db9159e7.mp4"
            ></video>
          </div>
          <div className="relative">
            <video
              className="absolute w-[calc(72%_-_290px)] top-[0px] right-[0px] left-[397px] rounded-35xl h-[250px]"
              controls
              src="/WhatsApp Video 2024-02-26 at 03.34.55_5d9e7e8f.mp4"
            ></video>
            <audio
              className="absolute w-[calc(100%_-_667px)] top-[0px] right-[667px] left-[0px] rounded-35xl h-[250px] bg-[url('/public/rectangle-1399@3x.png')] bg-cover bg-no-repeat bg-[top] hover:animate-[1s_ease_0s_1_normal_none_scale-up] hover:opacity-[1]"
              controls
            >
              <source src="/river-1.mp3" />
            </audio>
          </div>
        </div>
      </section>

      <img
        className="absolute top-[3301px] left-[calc(50%_-_450px)] max-h-full w-[900px]"
        alt=""
        src="/line-4.svg"
      />

      <section className="absolute w-[calc(100%_-_377px)] top-[2120px] right-[116px] left-[261px] h-[1117px] text-left text-21xl text-sienna font-heading-bold-6">
        <h1
          className="m-0 absolute w-[calc(100%_-_17px)] top-[0px] left-[17px] text-inherit leading-[40px] font-semibold font-inherit inline-block"
          data-scroll-to="discover"
        >
          Ambience
        </h1>
        <div
          className="absolute w-[calc(100%_-_49px)] top-[82px] right-[49px] left-[0px] h-[1035px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] grid grid-rows-[repeat(2,479px)_] grid-cols-[repeat(2,485px)_] [grid-row-gap:77px] [grid-column-gap:44px] text-center text-16xl-1 font-montserrat"
          data-animate-on-scroll
        >
          <div className="relative">
            <div className="absolute w-full top-[147.3px] right-[0px] left-[0px] rounded-35xl [background:linear-gradient(0deg,_#f7d2e8,_rgba(247,_210,_232,_0))] h-[331.7px]" />
            <video
              className="absolute w-[calc(100%_-_179.6px)] top-[0px] right-[90.6px] left-[89px] rounded-150xl max-w-full overflow-hidden h-[291.2px] object-cover"
              autoPlay
              loop
              muted
              src={videoUrls.christmas}
              alt="Video Preview"
            />
            <b className="absolute w-full top-[313.9px] left-[0px] uppercase flex items-center justify-center h-[37px]">
              christmas
            </b>

            <button
              onClick={() => navigateToVideo("Ambinece-1")}
              className="cursor-pointer [border:none] p-0 bg-mediumpurple absolute w-[calc(100%_-_381px)] top-[370px] right-[190px] left-[191px] rounded-81xl h-24"
            >
              <img
                className="absolute top-[calc(50%_-_27px)] left-[calc(50%_-_18px)] rounded-12xs w-[52px] h-[54px]"
                alt=""
                src="/path-2.svg"
              />
            </button>
          </div>
          <div className="relative">
            <div className="absolute w-full top-[147.3px] right-[0px] left-[0px] rounded-35xl [background:linear-gradient(0deg,_#f7d2e8,_rgba(247,_210,_232,_0))] h-[331.7px]" />
            <video
              className="absolute w-[calc(100%_-_179.6px)] top-[0px] right-[90.6px] left-[89px] rounded-150xl max-w-full overflow-hidden h-[291.2px] object-cover"
              autoPlay
              loop
              muted
              src={videoUrls.picnic}
              alt="Video Preview"
            />
            <b className="absolute w-full top-[313.9px] left-[0px] uppercase flex items-center justify-center h-[37px]">
              Sunny Picnic
            </b>

            <button
              onClick={() => navigateToVideo("Ambinece-4")}
              className="cursor-pointer [border:none] p-0 bg-mediumpurple absolute w-[calc(100%_-_381px)] top-[370px] right-[190px] left-[191px] rounded-81xl h-24"
            >
              <img
                className="absolute top-[calc(50%_-_27px)] left-[calc(50%_-_18px)] rounded-12xs w-[52px] h-[54px]"
                alt=""
                src="/path-2.svg"
              />
            </button>
          </div>

          <div className="relative">
            <div className="absolute w-full top-[147.3px] right-[0px] left-[0px] rounded-35xl [background:linear-gradient(0deg,_#f7d2e8,_rgba(247,_210,_232,_0))] h-[331.7px]" />
            <video
              className="absolute w-[calc(100%_-_179.6px)] top-[0px] right-[90.6px] left-[89px] rounded-150xl max-w-full overflow-hidden h-[291.2px] object-cover"
              autoPlay
              loop
              muted
              src={videoUrls.cafe}
              alt="Video Preview"
            />
            <b className="absolute w-full top-[313.9px] left-[0px] uppercase flex items-center justify-center h-[37px]">
              coffee cafe
            </b>

            <button
              onClick={() => navigateToVideo("Ambinece-3")}
              className="cursor-pointer [border:none] p-0 bg-mediumpurple absolute w-[calc(100%_-_381px)] top-[370px] right-[190px] left-[191px] rounded-81xl h-24"
            >
              <img
                className="absolute top-[calc(50%_-_27px)] left-[calc(50%_-_18px)] rounded-12xs w-[52px] h-[54px]"
                alt=""
                src="/path-2.svg"
              />
            </button>
          </div>
          <div className="relative">
            <div className="absolute w-full top-[147.3px] right-[0px] left-[0px] rounded-35xl [background:linear-gradient(0deg,_#f7d2e8,_rgba(247,_210,_232,_0))] h-[331.7px]" />
            <video
              className="absolute w-[calc(100%_-_179.6px)] top-[0px] right-[90.6px] left-[89px] rounded-150xl max-w-full overflow-hidden h-[291.2px] object-cover"
              autoPlay
              loop
              muted
              src={videoUrls.room}
              alt="Video Preview"
            />
            <b className="absolute w-full top-[313.9px] left-[0px] uppercase flex items-center justify-center h-[37px]">
              Cozy Study Room
            </b>

            <button
              onClick={() => navigateToVideo("Ambinece-2")}
              className="cursor-pointer [border:none] p-0 bg-mediumpurple absolute w-[calc(100%_-_381px)] top-[370px] right-[190px] left-[191px] rounded-81xl h-24"
            >
              <img
                className="absolute top-[calc(50%_-_27px)] left-[calc(50%_-_18px)] rounded-12xs w-[52px] h-[54px]"
                alt=""
                src="/path-2.svg"
              />
            </button>
          </div>
        </div>
      </section>

      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[38px] left-[32px] leading-[20px] font-semibold text-[inherit]"
        to="/autiembrace"
      >
        AutiEmbrace
      </Link>
      <img
        className="absolute top-[795px] left-[calc(50%_-_450px)] max-h-full w-[900px]"
        alt=""
      />
      <section
        className="absolute w-[calc(100%_-_377px)] top-[858px] right-[116px] left-[261px] h-[1117px] text-left text-21xl text-sienna font-heading-bold-6"
        data-scroll-to="visuals"
      >
        <h1 className="m-0 absolute w-[calc(100%_-_17px)] top-[0px] left-[17px] text-inherit leading-[40px] font-semibold font-inherit inline-block">
          Visuals
        </h1>
        <div
          className="absolute w-[calc(100%_-_49px)] top-[82px] right-[49px] left-[0px] h-[1035px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] grid grid-rows-[repeat(2,479px)_] grid-cols-[repeat(2,485px)_] [grid-row-gap:77px] [grid-column-gap:44px] text-center text-16xl-1 font-montserrat"
          data-animate-on-scroll
        >
          <div className="relative">
            <div className="absolute w-full top-[147.3px] right-[0px] left-[0px] rounded-35xl [background:linear-gradient(0deg,_#f7d2e8,_rgba(247,_210,_232,_0))] h-[331.7px]" />
            <video
              className="absolute w-[calc(100%_-_179.6px)] top-[0px] right-[90.6px] left-[89px] rounded-150xl max-w-full overflow-hidden h-[291.2px] object-cover"
              autoPlay
              loop
              muted
              src={videoUrls.ani}
              alt="Video Preview"
            />
            <b className="absolute w-full top-[313.9px] left-[0px] uppercase flex items-center justify-center h-[37px]">
              animated
            </b>

            <button
              onClick={() => navigateToVideo("Animated")}
              className="cursor-pointer [border:none] p-0 bg-mediumpurple absolute w-[calc(100%_-_381px)] top-[370px] right-[190px] left-[191px] rounded-81xl h-24"
            >
              <img
                className="absolute top-[calc(50%_-_27px)] left-[calc(50%_-_18px)] rounded-12xs w-[52px] h-[54px]"
                alt=""
                src="/path-2.svg"
              />
            </button>
          </div>
          <div className="relative">
            <div className="absolute w-full top-[147.3px] right-[0px] left-[0px] rounded-35xl [background:linear-gradient(0deg,_#f7d2e8,_rgba(247,_210,_232,_0))] h-[331.7px]" />
            <video
              className="absolute w-[calc(100%_-_179.6px)] top-[0px] right-[90.6px] left-[89px] rounded-150xl max-w-full overflow-hidden h-[291.2px] object-cover"
              autoPlay
              loop
              muted
              src={videoUrls.sci2}
              alt="Video Preview"
            />
            <b className="absolute w-full top-[313.9px] left-[0px] uppercase flex items-center justify-center h-[37px]">
              Scenic-2
            </b>

            <button
              onClick={() => navigateToVideo("Scenic-2")}
              className="cursor-pointer [border:none] p-0 bg-mediumpurple absolute w-[calc(100%_-_381px)] top-[370px] right-[190px] left-[191px] rounded-81xl h-24"
            >
              <img
                className="absolute top-[calc(50%_-_27px)] left-[calc(50%_-_18px)] rounded-12xs w-[52px] h-[54px]"
                alt=""
                src="/path-2.svg"
              />
            </button>
          </div>

          <div className="relative">
            <div className="absolute w-full top-[147.3px] right-[0px] left-[0px] rounded-35xl [background:linear-gradient(0deg,_#f7d2e8,_rgba(247,_210,_232,_0))] h-[331.7px]" />
            <video
              className="absolute w-[calc(100%_-_179.6px)] top-[0px] right-[90.6px] left-[89px] rounded-150xl max-w-full overflow-hidden h-[291.2px] object-cover"
              autoPlay
              loop
              muted
              src={videoUrls.sci1}
              alt="Video Preview"
            />
            <b className="absolute w-full top-[313.9px] left-[0px] uppercase flex items-center justify-center h-[37px]">
              Scenic-1
            </b>
            <button
              onClick={() => navigateToVideo("Scenic-1")}
              className="cursor-pointer [border:none] p-0 bg-mediumpurple absolute w-[calc(100%_-_381px)] top-[370px] right-[190px] left-[191px] rounded-81xl h-24"
            >
              <img
                className="absolute top-[calc(50%_-_27px)] left-[calc(50%_-_18px)] rounded-12xs w-[52px] h-[54px]"
                alt=""
                src="/path-2.svg"
              />
            </button>
          </div>
          <div className="relative">
            <div className="absolute w-full top-[147.3px] right-[0px] left-[0px] rounded-35xl [background:linear-gradient(0deg,_#f7d2e8,_rgba(247,_210,_232,_0))] h-[331.7px]" />
            <video
              className="absolute w-[calc(100%_-_179.6px)] top-[0px] right-[90.6px] left-[89px] rounded-150xl max-w-full overflow-hidden h-[291.2px] object-cover"
              autoPlay
              loop
              muted
              src={videoUrls.Neon}
              alt="Video Preview"
            />
            <b className="absolute w-full top-[313.9px] left-[0px] uppercase flex items-center justify-center h-[37px]">
              Neon
            </b>

            <button
              onClick={() => navigateToVideo("Neon")}
              className="cursor-pointer [border:none] p-0 bg-mediumpurple absolute w-[calc(100%_-_381px)] top-[370px] right-[190px] left-[191px] rounded-81xl h-24"
            >
              <img
                className="absolute top-[calc(50%_-_27px)] left-[calc(50%_-_18px)] rounded-12xs w-[52px] h-[54px]"
                alt=""
                src="/path-2.svg"
              />
            </button>
          </div>
        </div>
      </section>
      <img
        className="absolute top-[2056.5px] left-[calc(50%_-_450px)] max-h-full w-[900px]"
        alt=""
        src="/line-3.svg"
      />
      <div className="absolute w-full top-[108px] right-[0px] left-[0px] h-[594px] text-21xl">
        <img
          className="absolute w-full top-[90px] right-[0px] left-[0px] max-w-full overflow-hidden h-[410px] object-cover"
          alt=""
          src="/waves@2x.png"
        />
        <h1 className="m-0 absolute w-[calc(100%_-_394px)] top-[0px] left-[282px] text-inherit leading-[40px] font-semibold font-inherit inline-block">
          Discover your inner self
        </h1>
        <h1 className="m-0 absolute w-[calc(100%_-_394px)] top-[509px] left-[282px] text-base leading-[40px] font-semibold font-inherit inline-block h-[85px]">
          Dive into our neon, animated, scenic, and satisfying visuals, and lose
          yourself in the ambience of a coffee shop, cozy room, sunny picnic
          day, or reading room. Your journey starts here!
        </h1>
      </div>
      <section className="absolute top-[108px] left-[27px] w-[153px] h-[236px] text-left text-base text-sienna font-heading-bold-6">
        <div className="absolute top-[0px] left-[0px] w-[147.2px] h-[220px]">
          <div className="absolute top-[35px] left-[0px] w-[147.2px] h-[185px]">
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[153px] left-[0px] w-[145.6px] h-8"
              onClick={onCommunityGroupClick}
            >
              <div className="absolute top-[8px] left-[57px] text-sm tracking-[0.3px] leading-[15.46px] font-heading-bold-6 text-sienna text-left inline-block w-[88.6px]">
                Frequency
              </div>
              <img
                className="absolute top-[0px] left-[0px] w-[33px] h-8 object-contain"
                alt=""
                src="/group-113@2x.png"
              />
            </button>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[0px] w-[142px] h-8"
              onClick={onHomeGroupClick}
            >
              <div className="absolute top-[8px] left-[53.9px] text-sm tracking-[0.3px] leading-[15.46px] font-semibold font-heading-bold-6 text-sienna text-left inline-block w-[88.1px] h-4">
                Home
              </div>
              <div className="absolute top-[0px] left-[0px] w-[33.2px] h-8">
                <div className="absolute top-[0px] left-[0px] rounded-xl bg-coral w-[33.2px] h-8" />
                <img
                  className="absolute top-[8px] left-[8.3px] w-[16.6px] h-4"
                  alt=""
                  src="/iconlyboldhome.svg"
                />
              </div>
            </button>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[106px] left-[0px] w-[147.2px] h-8"
              onClick={onBookmarkGroupClick}
            >
              <div className="absolute top-[8px] left-[57px] text-sm tracking-[0.3px] leading-[15.46px] font-heading-bold-6 text-sienna text-left inline-block w-[90.2px] h-[15.5px]">
                Ambience
              </div>
              <img
                className="absolute top-[0px] left-[0px] w-[31.9px] h-8 object-contain"
                alt=""
                src="/group-112@2x.png"
              />
            </button>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[59px] left-[0px] w-[138px] h-8"
              onClick={onVisualsGroupClick}
            >
              <div className="absolute top-[8px] left-[56.6px] text-sm tracking-[0.3px] leading-[15.46px] font-heading-bold-6 text-sienna text-left inline-block w-[81.4px] h-4">
                Visuals
              </div>
              <img
                className="absolute top-[0px] left-[0px] w-[37.7px] h-8 object-contain"
                alt=""
                src="/group-113@2x.png"
              />
            </button>
          </div>
          <div className="absolute top-[0px] left-[0px] tracking-[1.5px] leading-[11px] font-semibold opacity-[0.5] mix-blend-normal">
            MENU
          </div>
        </div>
        <div className="absolute top-[235.5px] left-[4.5px] box-border w-[149px] h-px border-t-[1px] border-solid border-darkslategray" />
      </section>
      <header className="absolute w-[calc(100%_-_815px)] top-[28px] right-[533px] left-[282px] h-10">
        <input
          className="[border:none] [outline:none] bg-black absolute w-full top-[0px] right-[0px] left-[0px] rounded-3xs h-10 opacity-[0.1]"
          placeholder="Search"
          type="text"
          value={rectangleInputValue}
          onChange={(event) => setRectangleInputValue(event.target.value)}
        />
        <img
          className="absolute w-[calc(100%_-_613px)] top-[14px] right-[15px] left-[598px] max-w-full overflow-hidden h-3 opacity-[0.5]"
          alt=""
          src="/searchicon.svg"
        />
      </header>
    </div>
  );
};

export default Relax;
