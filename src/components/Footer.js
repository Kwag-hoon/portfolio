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

            <p className="footer__copy">
              Copyright 2026 Kwag Hoon. All rights reserved.
            </p>
          </div>

          <div className="footer__right">
            <a
              href="/resume_kwag_hoon.pdf"
              className="footer__resume"
              download
            >
              이력서 다운로드
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}