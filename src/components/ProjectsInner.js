import React from "react";

function ProjectsInner({ item }) {
  const path = process.env.PUBLIC_URL;

  return (
    <div className="projectsInner">
      <h3 className="siteLogo">
        <img src={path + item.logoImg} alt={item.name} />
      </h3>
      <div className="sitePic">
        <img src={path + item.img} alt={item.name} />
      </div>

      <div className="txt">
        <p>
          <strong>주요 기능: </strong>
          {item.des}
        </p>
        <p>
          <strong>URL: </strong>
          {item.url}
        </p>
      </div>
    </div>
  );
}

export default ProjectsInner;
