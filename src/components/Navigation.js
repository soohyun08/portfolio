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
}

export default Navigation;
