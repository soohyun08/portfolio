import "./footer.scss";
import footerLogo from "../assets/images/footerLogo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footerWrapper">
        <div className="resume">RESUME</div>
        <div className="footerImg">
          <img src={footerLogo} alt="로고" />
        </div>
        <div className="footerTxt">
          <span className="caution">caution</span>
          <div className="copyRight">
            copyright&copy; 2023 All rights <br /> reserved by SOOHYUN KIM.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
