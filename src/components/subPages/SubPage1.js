import { useNavigate } from "react-router-dom";
import MainPicSwiper from "./MainPicSwiper";

import GoUp from "../GoUp";
import GoSite from "./GoSite";
import ChallengesSolution from "./ChallengesSolution";
import Functions from "./Functions";
import Convention from "./Convention";

// 디자인
import "./subpage.scss";

function SubPage1({ functions, challenges, convention }) {
  const navi = useNavigate();

  const goPrev = () => {
    navi("/");
  };
  const path = process.env.PUBLIC_URL;

  return (
    <div className="subPage">
      <div className="wrapper sub1">
        <div className="prevBtn">
          <button onClick={goPrev}>
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
              <path d="M24 40 8 24 24 8l2.1 2.1-12.4 12.4H40v3H13.7l12.4 12.4Z" />
            </svg>
          </button>
          <div className="num">NO. 1</div>
        </div>

        {/* <MainPicSwiper /> */}

        <h2>Portfolio</h2>

        <section className="section1">
          <div className="title">
            <div className="aim">
              <div className="aimTxt">
                <h4>aim</h4>
                <ol>
                  <li>
                    지금까지 배운 내용을 정리하고 앞으로 더 공부해야 할 내용을
                    정리하는 계기가 된다.
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div className="skill">
            <h4>function</h4>

            <p>
              UI: React <br />
              훅: useState, useEffect, useNavigate <br />
              디자인: SCSS
            </p>
            <p>라우터: Link, NavLink, Routes, Route, HashRouter</p>
            <p>라이브러리 : Swiper</p>
            <p>툴 : GitHub, Visual Studio Code, Figma, Illustrator</p>
            <p>데이터 요청 및 출력 : Axios, JSON</p>
          </div>
        </section>

        <section className="section2">
          <h3>convention</h3>
          <div className="conventionWrapper">
            <Convention convention={convention} />
          </div>
        </section>

        <section className="section3">
          <h3 className="subHeadline">page structure</h3>

          <div className="description">
            <figure className="structure">
              <img src={path + "/images/portfolio/portFolioStructure1.PNG"} />
              <img src={path + "/images/portfolio/portFolioStructure2.PNG"} />
              <figcaption>디렉토리 구조</figcaption>
            </figure>

            <div className="functions">
              <Functions functions={functions} />
            </div>
          </div>
        </section>

        <section className="section4">
          <h4 className="subHeadline">challenges / solution</h4>
          <ChallengesSolution challenges={challenges} path={path} />
        </section>

        {/* <GoSite /> */}
      </div>

      <GoUp />
    </div>
  );
}

export default SubPage1;
