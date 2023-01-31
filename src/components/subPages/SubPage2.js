import { useNavigate } from "react-router-dom";

import GoUp from "../GoUp";
// 디자인
import "./subpage.scss";
// 이미지
import pinkSparkling from "../../assets/images/pink-sparkling.png";
import GoSite from "./GoSite";

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
          <div className="num">NUM 2</div>
        </div>

        {/* <div className="mainPic"></div> */}

        <section>
          <div className="title">
            <h2>title </h2>
            <p>date</p>
            <p>team</p>
          </div>

          <div className="myRole">
            <h3>// My Role</h3>
            <p></p>
            <p></p>
          </div>
        </section>

        <div className="challenges">
          <h3 className=" subHeadline">
            challenges
            <img
              src={pinkSparkling}
              alt="핑크색 빤작이"
              className="pinkSparkling"
            />
          </h3>
          <ul>
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
          </ul>
        </div>

        <div className="solution">
          <h3 className=" subHeadline">
            solution
            <img
              src={pinkSparkling}
              alt="핑크색 빤작이"
              className="pinkSparkling"
            />
          </h3>
          <ul>
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
          </ul>
        </div>

        <div className="learned">
          <h3 className="subHeadline">
            what i learned
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
        </div>

        <GoSite />
      </div>

      <GoUp />
    </div>
  );
}

export default SubPage2;
