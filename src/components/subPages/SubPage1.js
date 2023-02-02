import { useNavigate } from "react-router-dom";

import MainPicSwiper from "./MainPicSwiper";
import GoUp from "../GoUp";
// 디자인
import "./subpage.scss";
import "./subPage1.scss";
// 이미지
import pinkSparkling from "../../assets/images/pink-sparkling.png";
import GoSite from "./GoSite";

function SubPage1({ portfolio }) {
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

        <MainPicSwiper />

        <section className="section1">
          <div className="title">
            <h2>Portfolio</h2>
            <div className="aim">
              <p>목표 : </p>
              <ol>
                <li>배운 것보다 활용할 수 있는 기술을 위주로 전달한다.</li>
                <li>
                  지금까지 배운 내용을 정리하고 앞으로 더 공부해야 할 내용을
                  정리하는 계기가 된다.
                </li>
              </ol>
            </div>
          </div>

          <div className="skill">
            <h3>사용기술</h3>
            <p>
              React, SCSS, useEffect, useState, useNavigate, react-router-dom
              (Link, NavLink, Routes, Route, HashRouter)
            </p>
            <p className="tool">데이터 요청 및 출력 : Axios, JSON</p>
            <p className="tool">
              Tool : GitHub, Visual Studio Code, Figma, Illustrator, Swiper
            </p>
          </div>
        </section>

        <section className="section2">
          <h3 className=" subHeadline">
            페이지 구성
            <img
              src={pinkSparkling}
              alt="핑크색 빤작이"
              className="pinkSparkling"
            />
          </h3>
          <div className="description">
            <figure className="structure">
              <img src={path + "/images/portfolio/portFolioStructure1.png"} />
              <img src={path + "/images/portfolio/portFolioStructure2.png"} />
              <figcaption>디렉토리 구조</figcaption>
            </figure>
            <div className="functions">
              {portfolio.map((list) => {
                return (
                  <ul key={list.id}>
                    <li>
                      <h4>{list.name} : </h4>
                      <ul>
                        <li>{list.des1}</li>
                        <li>{list.des2}</li>
                      </ul>
                    </li>
                  </ul>
                );
              })}
            </div>
          </div>
        </section>

        <section className="learned">
          <h3 className="subHeadline">
            문제 및 해결
            <img
              src={pinkSparkling}
              alt="핑크색 빤작이"
              className="pinkSparkling"
            />
          </h3>
          <ol>
            <li>
              것은 품고 고행을 별과 풍부하게 뜨거운지라, 많이 황금시대를 듣는다.
              힘차게 우리 위하여서, 주는 구할 이상, 칼이다. 원질이 같이, 얼음에
              수 황금시대다.
            </li>
            <li>
              것은 품고 고행을 별과 풍부하게 뜨거운지라, 많이 황금시대를 듣는다.
              힘차게 우리 위하여서, 주는 구할 이상, 칼이다. 원질이 같이, 얼음에
              수 황금시대다.
            </li>
          </ol>
        </section>

        <GoSite />
      </div>

      <GoUp />
    </div>
  );
}

export default SubPage1;
