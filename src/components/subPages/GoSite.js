import Marquee from "react-fast-marquee";
import "./goSite.scss";

function GoSite() {
  const url = "https://teamproject-no-2.github.io/dragonz/";
  return (
    <div
      className="goSite cover"
      onClick={() => {
        window.open(url);
      }}
    >
      <Marquee loop={0} gradient={false}>
        o see the site Go see the site G
      </Marquee>
    </div>
  );
}

export default GoSite;
