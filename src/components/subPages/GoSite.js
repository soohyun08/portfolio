import "./goSite.scss";

function GoSite() {
  const url = "http://localhost:3000/granhand#/";
  return (
    <div
      className="goSite cover"
      onClick={() => {
        window.open(url);
      }}
    >
      <div className="goSite">
        GO SEE THE SITE
        <span className="material-symbols-outlined">exit_to_app</span>
      </div>
    </div>
  );
}

export default GoSite;
