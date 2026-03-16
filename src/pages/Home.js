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
      <div className={`home-hero__inner ${show ? "is-visible" : ""}`}>

        <h2 className="home-hero__title">
          사용자 경험과 비즈니스 목표를 연결하는
          <br />
          Product 기획자
        </h2>

        <p className="home-hero__subtitle">
          UX 전략· 서비스 구조 설계 · 구현 이해 기반 기획
        </p>

        <div className="home-hero__buttons">
          <Link to="/projects" className="btn-outline">
            Project →
          </Link>

          <Link to="/position" className="btn-outline">
            Position →
          </Link>
        </div>

      </div>
    </main>
  );
}