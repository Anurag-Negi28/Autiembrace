import Navbar from "../components/Navbar";
import ToDoFrame from "../components/ToDoFrame";
import "./AutiEmbrace.css";
import React, { useState, useEffect } from "react";

const AutiEmbrace = () => {
  const [completionMessageValue, setCompletionMessageValue] = useState("");
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  const fetchRandomQuote = async () => {
    try {
      const response = await fetch('http://localhost:3002/api/quotes/random');
      if (!response.ok) {
        throw new Error('Failed to fetch quote');
      }
      const data = await response.json();
      setQuote(data.quote_text);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };
  return (
    <div className="autiembrace">
      <section className="auti-embrace-container">
        <Navbar />
        <div className="relax-frame">
          <div className="user-frame">
            <div className="hi-user-name">
              <div className="quote-frame" />
              <b className="hi-user-name-container">
                <span>
                  <p className="hi-user-name1">Hi Anurag,</p>
                  <p className="lets-spread-some">
                    Let’s spread some happiness !
                  </p>
                </span>
              </b>
            </div>
            <div className="hi-user-name2">
              <div className="quote-rectangle" />
              <div className="quote-of-the-day-wrapper">
                <b className="quote-of-the">{`Quote of the day :`}</b>
              </div>
              <b className="an-apple-a">{quote}</b>
            </div>
          </div>
          <div className="to-do-tasks">
            <div className="to-do-frame">
              <div className="rewards-frame" />
              <img
                className="desktop-icon"
                loading="eager"
                alt=""
                src="/desktopicon@2x.png"
                data-animate-on-scroll
              />
            </div>
          </div>
        </div>
      </section>
      <section className="norms-navigator-text">
        <div className="to-do-tasks1">
          <img
            className="notes-bg-img-icon"
            loading="eager"
            alt=""
            src="/notesbgimg@2x.png"
          />
          <div className="to-do-frame1">
            <div className="to-do-rectangle" />
            <div className="to-do-list-frame">
              <b className="to-do-list">To do list :</b>
            </div>
            <div className="wake-up-breakfast-container">
              <ul className="wake-up-breakfast-get-ready-fo">
                <li className="wake-up">Wake up</li>
                <li className="wake-up">Breakfast</li>
                <li className="wake-up">Get ready for school</li>
                <li className="wake-up">Time to play</li>
                <li className="wake-up">Time to study</li>
                <li className="wake-up">Dinner</li>
                <li>Sleep time</li>
              </ul>
            </div>
          </div>
          <div className="to-do-frame2">
            <div className="to-do-rectangle" />
            <div className="description-wrapper">
              <b className="description">Description</b>
            </div>
            <div className="date-07-02-2024-container">
              <span className="autiembrace-txt">
                <p className="hi-user-name1">Date : 07-02-2024</p>
                <p className="hi-user-name1">Time : 16:51</p>
              </span>
            </div>
          </div>
        </div>
      </section>
      <ToDoFrame />
      <section className="time-to-play-frame">
        <div className="footer-b-g-rectangle">
          <div className="auti-embrace-frame" />
          <div className="footer-frame">
            <div className="home-frame">
              <div className="contact-info-frame">
                <div className="autiembrace1">AutiEmbrace</div>
                <button className="home-about">
                  <p className="lets-spread-some">Home</p>
                  <p className="lets-spread-some">About</p>
                </button>
              </div>
              <div className="auti-embrace-text">
                <div className="contact">Contact</div>
                <button className="email-linkedin-instagram-container">
                  <p className="lets-spread-some">Email</p>
                  <p className="lets-spread-some">LinkedIn</p>
                  <p className="lets-spread-some">Instagram</p>
                  <p className="lets-spread-some">Twitter</p>
                </button>
              </div>
            </div>
            <div className="to-do-list-frame1">
              <div className="want-to-share">
                Want to share? Give us feedback
              </div>
              <input
                className="completion-message"
                type="text"
                value={completionMessageValue}
                onChange={(event) =>
                  setCompletionMessageValue(event.target.value)
                }
              />
            </div>
          </div>
          <div className="norms-navigator-text1">
            <button className="submit">Submit</button>
          </div>
        </div>
        <footer className="feedback-rectangle">
          <div className="copyright-rectangle" />
          <div className="autiembrace2">
            <span className="autiembrace-txt">
              <span>{`©  `}</span>
              <span className="autiembrace3">AutiEmbrace</span>
            </span>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default AutiEmbrace;
