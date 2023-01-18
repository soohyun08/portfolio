import { Link } from "react-router-dom";

function ProjectsInner({ item }) {
  const path = process.env.PUBLIC_URL;

  return (
    <div className="projectsInner">
      <Link to={`/projects/sub + ${item.id}`} className="arrowDown">
        <p>more</p>
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
          <path d="m24 30.75-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z" />
        </svg>
      </Link>

      <h3 className="siteLogo">
        <img src={path + item.logoImg} alt={item.name} />
      </h3>

      <div className="sitePic">
        <div className="PCScreen">
          <img src={path + item.img} alt={item.name} />
        </div>
      </div>

      <div className="txt">
        <p>
          <strong>주요 기능: </strong>
          {item.des}
        </p>
        <p className="projectInnerURL">
          <strong>URL:</strong>
          <a href={item.url} target="_blank">
            {item.url}
          </a>
        </p>
      </div>
    </div>
  );
}

export default ProjectsInner;
