import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">

          <div className="footer__left">
            <a
              className="footer__email"
              href="mailto:sugardity07@gmail.com"
            >
              sugarcity07@gmail.com
            </a>
            <p>본 사이트는 상업용 목적이 아닌, 개인 포트폴리오용으로 제작되었습니다. 이미지와 내용은 개인적으로 제작되었습니다.</p>

          </div>

          <div className="footer__right">
            <a
              href="/resume_kwag_hoon.pdf"
              className="footer__resume"
              download
            >
              이력서 다운로드
            </a>
            <p className="footer__copy">
              Copyright 2026 Kwag Hoon. All rights reserved.
            </p>

          </div>

        </div>
      </div>
    </footer>
  );
}