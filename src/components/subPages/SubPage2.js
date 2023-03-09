import { useNavigate } from "react-router-dom";
import MainPicSwiper from "./MainPicSwiper";
import GoUp from "../GoUp";
import functions from "../../assets/DB/granhandPageStructure";
import challenges from "../../assets/DB/granhandCnS";
import Functions from "./Functions";
import ChallengesSolution from "./ChallengesSolution";

// 디자인
import "./subpage.scss";

function SubPage2() {
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
          <div className="num">NO. 2</div>
        </div>

        <MainPicSwiper />

        <h2>GRANHAND</h2>

        <section className="section1">
          <div className="title">
            <div className="aim">
              <div className="aimTxt">
                <h4 style={{ width: 500 }}>aim</h4>
                <ol>
                  <li>
                    React로 쇼핑몰의
                    <p style={{ textDecoration: "underline" }}>검색하기</p>
                    <p style={{ textDecoration: "underline" }}>
                      가격에 따른 상품 정렬
                    </p>
                    <p style={{ textDecoration: "underline" }}>
                      회원가입(join)
                    </p>
                    <p style={{ textDecoration: "underline" }}>
                      장바구니(cart)에 담기
                    </p>
                    <p style={{ textDecoration: "underline" }}>
                      즐겨찾기(wish list)에 담기
                    </p>
                    페이지 기능을 구현한다.
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div className="skill">
            <h4>function</h4>

            <p>
              UI: React <br />
              디자인: SCSS
            </p>
            <p>라우터: Link, NavLink, Routes, Route, HashRouter</p>
            <p>라이브러리: firebase, localStorage, </p>
            <p>툴: GitHub, Visual Studio Code</p>
            <p>데이터 요청 및 출력: Axios, JSON</p>
            <p>자주 사용한 메서드: .map() , Link </p>
          </div>
        </section>
        {/* 
        <section className="section2">
          <h3>convention</h3>
          <div className="conventionWrapper"></div>
        </section> */}

        <section className="section3">
          <h3 className="subHeadline">page structure</h3>

          <div className="description">
            <figure className="structure">
              <img src={path + "/images/granhand/stracture.PNG"} />
              <figcaption>디렉토리 구조</figcaption>
            </figure>

            <div className="functions">
              <Functions functions={functions} />
            </div>
          </div>
        </section>

        <section className="section4">
          <h4 className="subHeadline">challenges / solution</h4>
          <ChallengesSolution path={path} challenges={challenges} />
        </section>

        <div
          className="goSite cover"
          onClick={() => {
            window.open("https://soohyun08.github.io/granhand/");
          }}
        >
          <div className="goSite">
            GO SEE THE SITE
            <span className="material-symbols-outlined">exit_to_app</span>
          </div>
        </div>
      </div>

      <GoUp />
    </div>
  );
}

export default SubPage2;
