import React from "react";
import PingHero from "../../components/projectDetail/PingHero";
import "../../styles/pingdetail.scss";

function PingDetail() {
  return (
    <main className="ping-detail">
      <PingHero />

      {/* 아래에 Overview, Problem, Workflow ... 이어서 추가 */}
    </main>
  );
}

export default PingDetail;