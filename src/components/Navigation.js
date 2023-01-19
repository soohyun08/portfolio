import { Link } from "react-router-dom";
import { useState } from "react";
import "./navigation.scss";

function Navigation() {
  const [tab, setTab] = useState(0);

  return (
    <nav className="navigation">
      {/* js 이벤트 3event Ex7 참고 */}
      <div
        className={`navBtn ${tab === 0 ? "on" : null}`}
        onClick={() => setTab(0)}
      >
        {/* <svg
          width="161"
          height="57"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#a)">
            <path
              d="M14.835 6.407A8 8 0 0 1 22.527.605h115.931a8 8 0 0 1 7.692 5.802l14.343 50.198h-160L14.835 6.407z"
              fill="#232323"
            />
          </g>
          <defs>
            <clipPath id="a">
              <path
                fill="#fff"
                transform="translate(.493 .605)"
                d="M0 0h160v56H0z"
              />
            </clipPath>
          </defs>
        </svg> */}
        <Link to="/">Projects</Link>
      </div>

      <div
        className={`navBtn ${tab === 1 ? "on" : null}`}
        onClick={() => setTab(1)}
      >
        {/* <svg
          width="161"
          height="57"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#a)">
            <path
              d="M14.835 6.407A8 8 0 0 1 22.527.605h115.931a8 8 0 0 1 7.692 5.802l14.343 50.198h-160L14.835 6.407z"
              fill="#232323"
            />
          </g>
          <defs>
            <clipPath id="a">
              <path
                fill="#fff"
                transform="translate(.493 .605)"
                d="M0 0h160v56H0z"
              />
            </clipPath>
          </defs>
        </svg> */}
        <Link to="/about">About Me</Link>
      </div>
    </nav>
  );
}

export default Navigation;
