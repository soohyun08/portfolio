import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

// layout
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Projects from "./layout/Projects";
import About from "./layout/About";

// components
// 서브페이지
import SubPage1 from "./components/subPages/SubPage1";
import SubPage2 from "./components/subPages/SubPage2";

// 페이지 찾을 수 없음
import NotFoundPage from "./components/NotFoundPage";

// style
import "./assets/style/style.scss";

function App() {
  const [functions, setFunctions] = useState([]);
  const [challenges, setChallenges] = useState([]);
  const [convention, setConvention] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const DataList = await axios.get("./subPageData/portfolio.json");
      setFunctions(DataList.data.functionsDataList);
      setChallenges(DataList.data.challengesDataList);
      setConvention(DataList.data.conventionDataList);
    };
    getData();
  }, []);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Projects />} />

        <Route
          path="/sub1"
          element={
            <SubPage1
              functions={functions}
              challenges={challenges}
              convention={convention}
            />
          }
        />
        <Route path="/sub2" element={<SubPage2 />} />

        <Route path="/about" element={<About />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
