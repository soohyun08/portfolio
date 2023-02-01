import { Routes, Route } from "react-router-dom";

// layout
import Footer from "./layout/Footer";
import Header from "./layout/Header";
// import Main from "./layout/Main";
import Projects from "./layout/Projects";
import About from "./layout/About";

// components
// 서브페이지
import SubPage1 from "./components/subPages/SubPage1";
import SubPage2 from "./components/subPages/SubPage2";
import SubPageJoinUs from "./components/subPages/SubPageJoinUs";
// 페이지 찾을 수 없음
import NotFoundPage from "./components/NotFoundPage";

// style
import "./assets/style/style.scss";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/sub1" element={<SubPage1 />} />
        <Route path="/sub2" element={<SubPage2 />} />
        <Route path="/sub3" element={<SubPageJoinUs />} />

        <Route path="/about" element={<About />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;