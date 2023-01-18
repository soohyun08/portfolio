import { Routes, Route } from "react-router-dom";

// layout
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";

// components
// 위로 가기
import GoUp from "./components/GoUp";
// 페이지 찾을 수 없음
import NotFoundPage from "./components/NotFoundPage";
// 주요 메뉴
import About from "./components/About";
import Projects from "./components/Projects";
import ProjectsSub1 from "./components/ProjectsSub1";
import ProjectsSub2 from "./components/ProjectsSub2";

// style
import "./assets/style/style.scss";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/projects">
          <Route index element={<Projects />} />
          <Route path=":sub1" element={<ProjectsSub1 />} />
          <Route path=":sub2" element={<ProjectsSub2 />} />
        </Route>

        <Route path="/about" element={<About />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
      <GoUp />
    </>
  );
}

export default App;
