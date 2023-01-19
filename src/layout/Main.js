import Navigation from "../components/Navigation";
import Projects from "../components/Projects";

import "./main.scss";

function Main() {
  return (
    <main>
      <div className="tabContainer">
        <Navigation />
        <Projects />
      </div>
    </main>
  );
}

export default Main;
