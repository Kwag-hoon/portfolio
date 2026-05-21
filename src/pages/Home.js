import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../styles/home.scss';

export default function Home() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 120);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="home-hero">
      <div className="container">
        <div className={`home-hero__inner ${show ? "is-visible" : ""}`}>
  
          <h2 className="home-hero__title">
            사용자 흐름과 운영구조를 설계하는
            <br />
            서비스 기획자
          </h2>
  
          <p className="home-hero__subtitle">
            UX 전략 · 문제 정의 · IA · 화면 설계 · 구현 협업까지 연결합니다.
          </p>
  
          <div className="home-hero__buttons">
            <Link to="/projects" className="btn-outline">
              Projects →
            </Link>
  
            <Link to="/position" className="btn-outline">
              Position →
            </Link>
          </div>
  
        </div>
      </div>
    </main>
  );
}