import "./projects.scss";
import Greeting from "./Greeting";
import Navigation from "../components/Navigation";
import ProjectsInner from "./ProjectsInner";
import data from "../assets/DB/data";

function Projects() {
  return (
    <div className="wrapper projects">
      <Greeting />
      <Navigation />
      <h2 className="headline">Projects / works</h2>

      {data.map((item) => (
        <ProjectsInner key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Projects;
