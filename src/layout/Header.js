import { Link } from "react-router-dom";
import headerLogo from "../assets/images/headerLogo.png";
import "./header.scss";

function Header() {
  return (
    <header className="header">
      <h1>
        <Link to="/">
          <img src={headerLogo} alt="로고" />
        </Link>
      </h1>
    </header>
  );
}

export default Header;
