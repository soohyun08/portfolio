import { NavLink } from "react-router-dom";
import "./navigation.scss";

function onDeco({ isActive }) {
  return {
    backgroundPosition: isActive && "0 -195px",
  };
}

function Navigation() {
  return (
    <nav className="navigation">
      <div className="btnContainer">
        <div>
          <NavLink to="/" style={onDeco} className="bg">
            <span>Projects</span>
          </NavLink>
        </div>

        <div>
          <NavLink to="/about" style={onDeco} className="bg">
            <span>About Me</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
  /* const [tab, setTab] = useState(0);

  return (
    <nav className="navigation">
      <div className="btnContainer">
        <div
          className={`navBtn ${tab === 0 ? "on" : null}`}
          onClick={() => setTab(0)}
        >
          <Link to="/">Projects</Link>
        </div>

        <div
          className={`navBtn ${tab === 1 ? "on" : null}`}
          onClick={() => setTab(1)}
        >
          <Link to="/about">About Me</Link>
        </div>
      </div>
    </nav>
  ); */
}

export default Navigation;
