import anime from "animejs/lib/anime.es.js";
import { useEffect } from "react";
import "./hello.scss";

function Hello() {
  const path = document.querySelectorAll(".path");

  const svgText = () => {
    anime({
      targets: path,
      loop: true,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 1500,
      delay: (el, i) => {
        return i * 2500;
      },
      direction: "alternate",
    });
  };
  svgText();
  useEffect(() => {}, []);

  return (
    <>
      <h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="310.667"
          height="98.667"
          version="1.0"
          viewBox="0 0 233 74"
        >
          <path
            fill="none"
            stroke="#fff"
            className="path"
            d="M21 1.5C6.9 4.4-2.3 9.1.7 12.1c.8.8 2.4.4 6-1.4C12.2 7.8 22.3 5 26.6 5h2.9l.3 18.6c.2 11.6-.1 19-.7 19.8-.7.8-.6 2 .3 3.8.8 1.5 1.5 7.1 1.8 13.7.4 11.7 1.4 14.5 4.3 12.1 1.1-.9 1.4-2.4 1.1-5.4-.3-2.3-.8-6.9-1.1-10.3l-.6-6.2 9.3 2.5c11.3 3 17.9 5.4 25.9 9.5 3.7 1.8 6.5 2.7 7.1 2.1.5-.5 2.7 0 5.5 1.5 5.6 2.8 10.4 2.9 15.9.4 6.7-3 15.3-15.5 15.4-22.1 0-2.1-.4-1.8-2.6 2-7.2 12.8-11.1 16-19.2 16-8.8 0-12.4-5.5-10.8-16.2.6-4.2.8-4.4 5.7-5.5 6.7-1.6 14.6-5.3 18.6-8.7 6.4-5.4 3.5-12.6-5-12.6-5.7 0-9.7 2.1-15.3 8.3-6.2 6.8-9.6 15-9.7 23.7 0 3.3-.2 6-.4 6s-6.1-1.7-13.1-3.9c-7-2.1-16-4.6-20-5.6-4.1-1-7-2.1-6.5-2.5.4-.5 3.7-2 7.3-3.5 10.2-4.3 19.4-9.1 23-12.1 3.7-3.2 6.9-9.5 7-13.7C73 10.3 67.2 4 58.8 1.5 52.4-.4 30.3-.4 21 1.5zm38.6 5.6c6.5 3.3 8.8 6.5 7.8 11.4-1.3 7.2-10.3 14.2-25.6 19.9l-6.6 2.5-.6-3.7c-.3-2-.6-10.4-.6-18.6V3.7l10.4.5c8.3.4 11.3.9 15.2 2.9zm43.8 18.2c3 2.2.5 5.1-7.5 9.1C88.5 38.1 84 39 84 36.7c0-1.9 5.9-8.7 9.4-10.8 3.6-2.2 7.5-2.4 10-.6zM205.3 7.2c-.4.7-1 6.2-1.3 12.3l-.5 11-8 1.3c-12.4 2.1-12.5 2.1-12.5 3.8 0 2.5 2.9 2.8 11.8 1 4.7-.9 8.6-1.5 8.7-1.4.1.2.6 7.1 1.2 15.4s1.6 16.1 2.2 17.3c1.8 3.3 4.7 2.3 4.4-1.4-.2-1.7-.8-9.4-1.5-17.2-.6-7.9-.9-14.5-.6-14.8.2-.3 3.1-1 6.4-1.5 13.7-2.4 16.2-3.2 16.8-4.7.4-.9-.1-2.4-1-3.5-1.5-1.6-1.9-1.6-3.3-.4-1.6 1.4-13.4 4.6-17.2 4.6-2 0-2-.6-1.8-11.2.2-9.7 0-11.3-1.3-11.6-.9-.2-2 .3-2.5 1z"
          />
          <path
            fill="none"
            stroke="#fff"
            className="path"
            d="M171.7 21.2c-1.8 1.8-4.6 5.5-6.2 8.1-3.4 5.9-8.4 20.1-8.6 24.2-.2 6.7-1.7-2-1.8-10.8-.1-6.9-.4-8.7-1.5-8.7-1.2 0-1.3-.6-.5-2.9 1.3-3.8-.5-7.9-4.3-10.1-2.6-1.4-3.1-1.3-7.3.9-8.8 4.7-22.4 21.3-27.3 33.4-2.4 5.9-2.4 9.6 0 12.4 1.4 1.7 8 1.6 12.1-.1 5.3-2.2 12.9-9.9 18.2-18.5 2.8-4.4 5.3-8 5.8-8.1.4 0 .7 5.8.7 12.9 0 10.2.3 13.1 1.5 14.1 2.5 2.1 4.8-.6 4.1-4.9l-.6-3.6 1.4 3.2c2.1 4.6 5.7 6.7 10.3 5.8 2.9-.5 5.4-2.3 10.5-7.4 6.1-6.3 10.8-12.5 10.8-14.4 0-1.8-1.9-.2-6.5 5.5-7.5 9.3-16 13.9-19.3 10.6-4.8-4.8 4.5-33 12.7-38.6 4.3-2.8 5.5-2.5 6.1 1.7.7 4.2 2.4 4.4 2.8.3.8-8.2-6.7-11-13.1-5zm-23.1 6.3c2.3 3.5 1.1 7.6-5.2 17.2-6.4 9.9-13.5 16.9-18.5 18.5-4.9 1.4-6.9.6-6.9-3 0-9 20.2-35.2 27.2-35.2.9 0 2.5 1.1 3.4 2.5z"
          />
        </svg>
      </h2>
    </>
  );
}

export default Hello;
