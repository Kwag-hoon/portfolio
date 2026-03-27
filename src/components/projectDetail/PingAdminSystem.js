import React from "react";
import useScrollReveal from "../../hooks/useScrollReveal";
import adminTopCenter from "../../assets/projects/ping/admin-top-center.jpg";
import adminTopLeft from "../../assets/projects/ping/admin-top-left.jpg";
import adminTopRight from "../../assets/projects/ping/admin-top-right.jpg";
import adminBottom from "../../assets/projects/ping/admin-bottom.jpg";

function PingAdminSystem() {
  const [sectionRef, isVisible] = useScrollReveal({
      threshold: 0.2,
      rootMargin: "0px 0px -10px 0px",
    });
  return (
    <section 
    ref={sectionRef}
    className={`ping-admin-system ${isVisible ? "is-visible" : ""}`}
    >
      <div className="ping-admin-system__container">
        <div className="ping-admin-system__header reveal">
          <h3 className="ping-admin-system__title">
            Admin system<span>.</span>
          </h3>

          <p className="ping-admin-system__desc">
            서비스 운영을 위한 관리자 기능도 함께 설계했습니다.
            <br />
            관리자는 플랫폼 내 프로젝트와 피드백 활동을 모니터링하고 관리할 수 있습니다.
            사용자 활동 통계,
            <br />
            그리고 가장 중요한 문제 유형 관리를 통해 문제 유형을 추가하거나 삭제하는 기능을 제공합니다.
          </p>
        </div>

        <div className="ping-admin-system__visual">
          <div className="ping-admin-system__top-group reveal reveal--delay-1">
            <div className="ping-admin-system__top-side ping-admin-system__top-side--left">
              <img src={adminTopLeft} alt="문제 유형 추가 관리자 화면" />
            </div>

            <div className="ping-admin-system__top-center">
              <img src={adminTopCenter} alt="문제 유형 관리 관리자 화면" />
            </div>

            <div className="ping-admin-system__top-side ping-admin-system__top-side--right">
              <img src={adminTopRight} alt="문제 유형 편집 관리자 화면" />
            </div>
          </div>

          <div className="ping-admin-system__bottom reveal reveal--delay-2">
            <img src={adminBottom} alt="사용자 관리 관리자 화면" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PingAdminSystem;