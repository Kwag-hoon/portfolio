import React from "react";
import heroImg from "../../assets/projects/ping/hero.jpg";

function PingHero() {
  return (
    <section className="ping-hero">
      <div className="ping-hero__media">
        <img src={heroImg} alt="PING 프로젝트 히어로 이미지" className="ping-hero__image" />
      </div>

      <div className="ping-hero__overlay">
        <div className="ping-hero__inner">
          <h2 className="ping-hero__title">
            <span>디자인 피드백을 구조화하는 플랫폼</span>
            <span>PING</span>
          </h2>
        </div>
      </div>
    </section>
  );
}

export default PingHero;