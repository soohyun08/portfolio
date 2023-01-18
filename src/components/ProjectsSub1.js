import { useNavigate, useParams } from "react-router-dom";
import "./projectsSub.scss";

function ProjectsSub1() {
  const { sub1 } = useParams();
  const navi = useNavigate();

  const goPrev = () => {
    navi("/");
  };

  return (
    <div className="wrapper projectsSub">
      <div className="prevBtn">
        <button onClick={goPrev}>
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path d="M24 40 8 24 24 8l2.1 2.1-12.4 12.4H40v3H13.7l12.4 12.4Z" />
          </svg>
        </button>
      </div>

      <h2 className="headline">{sub1} </h2>
    </div>
  );
}

export default ProjectsSub1;
