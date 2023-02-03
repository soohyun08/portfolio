import { NavLink } from "react-router-dom";
import "./projectsInner.scss";

function ProjectsInner({ item }) {
  const path = process.env.PUBLIC_URL;

  return (
    <NavLink to={`/sub${item.id}`} className="projectsInner">
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
          [ {item.device} ] {item.tool}
        </p>
        <p>// {item.team}</p>
        {item.role}
      </div>
    </NavLink>
  );
}

export default ProjectsInner;
