import { useState, useEffect } from "react";
import "./goUp.scss";

function GoUp() {
  const [upBtn, setUpBtn] = useState();

  const handleGoUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 200 ? setUpBtn(true) : setUpBtn(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={upBtn ? "goUpBtn on" : "goUpBtn"} onClick={handleGoUp}>
      <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
        <path d="M24 40 8 24 24 8l2.1 2.1-12.4 12.4H40v3H13.7l12.4 12.4Z" />
      </svg>
    </div>
  );
}

export default GoUp;
