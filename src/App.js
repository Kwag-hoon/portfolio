import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Navigate } from "react-router-dom";
// 컴포넌트
import Header from "./components/Header";
import Footer from "./components/Footer";

// 페이지
import Home from "./pages/Home";
import Position from "./pages/Position";
import Process from "./pages/Process";
import Projects from "./pages/Projects";
import PingDetail from "./pages/projects/PingDetail";
import AnsanDetail from "./pages/projects/AnsanDetail";
import DesignuriwonDetail from "./pages/projects/DesignuriwonDetail";
import KingsDetail from "./pages/projects/KingsDetail";
import PoliceDetail from "./pages/projects/PoliceDetail";
import Resume from "./pages/Resume";

// 스타일
import './styles/base.scss';
import './styles/layout.scss';



function App() {
  return (
    < >
      <BrowserRouter>
      {/* 헤더 */}
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/position" element={<Position />} />
          <Route path="/process" element={<Process />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/ping" element={<PingDetail />} />
          <Route path="/projects/ansan" element={<AnsanDetail />} />
          <Route path="/projects/designuriwon" element={<DesignuriwonDetail />} />
          <Route path="/projects/kings" element={<KingsDetail />} />
          <Route path="/projects/police" element={<PoliceDetail />} />
          <Route path="/resume" element={<Resume />} />
          
        </Routes>

        {/* 푸터 */}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
