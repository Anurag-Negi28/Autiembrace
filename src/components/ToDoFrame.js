import { useEffect } from "react";
import "./ToDoFrame.css";

const ToDoFrame = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]",
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
      },
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
  return (
    <section className="rewards-frame1">
      <div className="medalimg">
        <div className="rewards-rectangle" />
        <div className="norms-navigator-frame">
          <b className="rewards">Rewards</b>
        </div>
        <div className="congratulations-you-have-container">
          <span>
            <p className="congratulations-you-have">
              Congratulations you have completed your day 1 tasks.
            </p>
          </span>
        </div>
      </div>
      <div className="quote-rectangle1">
        <img
          className="medal-img-icon"
          loading="eager"
          alt=""
          src="/medalimg@2x.png"
          data-animate-on-scroll
        />
        <div className="desktopicon">
          <div className="norms-rectangle" />
          <div className="to-do-tasks2">
            <b className="norms-navigator">Norms Navigator</b>
          </div>
          <div className="wakeup-frame">
            <img
              className="phone-icon"
              loading="eager"
              alt=""
              src="/phoneicon@2x.png"
              data-animate-on-scroll
            />
            <div className="wash-your-hands">
              Wash your hands before eating food.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToDoFrame;
