import React from "react";

function PingIA() {
  return (
    <section className="ping-ia">
      <div className="ping-ia__container">

        {/* 타이틀 */}
        <div className="ping-ia__header">
          <h3 className="ping-ia__title">
            IA<span>.</span>
          </h3>
          <p className="ping-ia__desc">
            사용자의 피드백 흐름을 기준으로 구조를 설계
          </p>
        </div>

        {/* 트리 */}
        <div className="ping-ia__tree">

          {/* MAIN */}
          <div className="ping-ia__main">MAIN</div>

          {/* 로그인 */}
          <div className="ping-ia__auth">
            <span className="ping-ia__auth-item">로그인</span>
            <span className="ping-ia__auth-item">회원가입</span>
          </div>

          {/* 하위 메뉴 */}
          <div className="ping-ia__branches">

            {/* Archive */}
            <div className="ping-ia__branch">
              <div className="ping-ia__node">Archive</div>
              <div className="ping-ia__children">
                <span className="ping-ia__child">디테일  </span>
                <span className="ping-ia__child">(피드백 페이지)</span>
              </div>
            </div>

            {/* Upload */}
            <div className="ping-ia__branch">
              <div className="ping-ia__node">Upload</div>
              <div className="ping-ia__children">
                <span className="ping-ia__child">핀 설정 페이지</span>
              </div>
            </div>

            {/* My Page */}
            <div className="ping-ia__branch">
              <div className="ping-ia__node">MY page</div>
              <div className="ping-ia__children">
                <span className="ping-ia__child">My Design</span>
                <span className="ping-ia__child">My Feedback</span>
                <span className="ping-ia__child">My Profile</span>
              </div>
            </div>

            {/* Q&A */}
            <div className="ping-ia__branch">
              <div className="ping-ia__node">Q &amp; A</div>
              <div className="ping-ia__children">
                <span className="ping-ia__child">질문과 답변</span>
                <span className="ping-ia__child">질문하기</span>
              </div>
            </div>

            {/* Admin */}
            <div className="ping-ia__branch ping-ia__branch--admin">
              <div className="ping-ia__node">Admin</div>
              <div className="ping-ia__children">
                <span className="ping-ia__child">디자인 관리</span>
                <span className="ping-ia__child">사용자 관리</span>
                <span className="ping-ia__child">문제유형 관리</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default PingIA;