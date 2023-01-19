import Navigation from "../components/Navigation";
import "./about.scss";
import img from "../assets/images/gallery2.jpg";
import React, { useEffect, useState } from "react";
import axios from "axios";

function About() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const aboutData = await axios.get("./DB/mainData.json");
      // console.log(aboutData.data.aboutData);
      setData(aboutData.data.aboutData);
    };
    getData();
  }, []);

  return (
    <div className="wrapper about">
      <Navigation />
      <div className="intoduce">
        <img src={img} alt="pic" />
        <div className="txt">
          <h2 className="headline">hello! I'm S.k</h2>
          <p>
            사람은 쓸쓸한 눈에 피가 어디 행복스럽고 크고 있다. 이상은 간에
            장식하는 노래하며 같이 용감하고 봄바람이다. 그들은 얼마나 아름답고
            무엇을 교향악이다. 그러므로 트고, 천고에 이상이 할지니, 원질이
            영락과 피고, 풀이 있으랴? 것은 열락의 인간의 있으랴? 미인을 때까지
            아름답고 간에 황금시대다.
          </p>
          <button className="connect">let's connect</button>
        </div>
      </div>

      <div className="skill">
        <h3>skill</h3>
        {data.map((item) => (
          <section key={item.id}>
            <h4>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox={item.viewBox}>
                <path d={item.path} />
              </svg>
            </h4>
            <ul>
              <li>{item.des}</li>
            </ul>
          </section>
        ))}
      </div>

      <div className="contact">
        <h4>soohyun kim</h4>
        <h5>010-6481-0829</h5>
        <h5>skim0829@outlook.com</h5>
      </div>
    </div>
  );
}

export default About;
