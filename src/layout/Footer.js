import "./footer.scss";
import footerLogo from "../assets/images/footerLogo.png";

function Footer() {
  const url = "";

  return (
    <footer className="footer">
      <div className="footerWrapper">
        <div
          className="resume"
          onClick={() => {
            window.open(
              "https://github.com/soohyun08/resume2023/blob/main/resume.pdf"
            );
          }}
        >
          RESUME
        </div>
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
