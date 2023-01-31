import "./goSite.scss";

function GoSite() {
  const tag = document.querySelector("parallel");
  const textArr = "Go see the site".split(" ");
  let count = 0;

  initTexts(tag, textArr);

  function initTexts(element, textArray) {
    textArray.push(...textArray);
    for (let i = 0; i < textArray.length; i++) {
      element += `${textArray[i]}\u00A0\u00A0\u00A0\u00A0`;
    }
  }

  function animate() {
    count++;

    window.requestAnimationFrame(animate);
  }
  animate();

  return (
    <div>
      <div className="goSite cover">
        <a href="" target="_blank" className="parallel"></a>
      </div>
    </div>
  );
}

export default GoSite;
