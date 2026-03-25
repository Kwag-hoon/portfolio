import React from "react";
import PingHero from "../../components/projectDetail/PingHero";
import PingOverview from "../../components/projectDetail/PingOverview";
import PingProblemSolution from "../../components/projectDetail/PingProblemSolution";
import DetailTripleSection from "../../components/projectDetail/DetailTripleSection";
import PingIA from "../../components/projectDetail/PingIA";

import "../../styles/pingdetail.scss";

function PingDetail() {
  /* =========================
      Core Value 데이터
   ========================= */
  const coreValueData = [
    {
      title: "Framing (문제 정의)",
      desc: "단순히 예쁜 디자인이 아니라, 해결해야 할 문제를 먼저 정의하고 그에 맞는 피드백을 유도  합니다.",
    },
    {
      title: "Structure (구조화)",
      desc: "모든 데이터와 인터랙션은 '운영 가능한 구조' 위에서 설계되어 정보의 선순환을 만듭니다.",
    },
    {
      title: "Growth (성장)",
      desc: "피드백을 주고받는 과정 자체가 데이터로 축적되어 디자이너 개인의 자산이 되는 선순환 구조를 지향합니다.",
    },
  ];

  /* =========================
     Strategy & Concept 데이터
  ========================= */
  const strategyConceptData = [
    {
      title: "As-Is vs To-Be 전략",
      desc: "사용자가 현재 겪고 있는 문제와 개선되어야 할 방향을 명확히 구분하여 구조를 설계했습니다.",
    },
    {
      title: "입력 구조 최적화",
      desc: "모바일에서도 손쉽게 핀을 찍고 의견을 남길 수 있도록 입력 폼과 흐름을 단순화하고 직관적으로 설계했습니다.",
    },
    {
      title: "순환형 워크플로우 (Core Concept)",
      desc: "문제 발견 → 업로드 → PIN 지정 → 피드백 수렴 → 기록 및 개선으로 이어지는 6단계 선순환 구조를 서비스의 핵심 엔진으로 삼습니다.",
    },
  ];




  return (
    <main className="ping-detail">
      <PingHero />
      <PingOverview />
      <PingProblemSolution />
       {/* Core Value */}
      <DetailTripleSection
        eyebrow="Core Value"
        items={coreValueData}
        showNumber={true}
      />

      {/* Strategy & Concept */}
      <DetailTripleSection
        eyebrow="Strategy & Concept"
        items={strategyConceptData}
        showNumber={false}
      />
      {/* IA */}
      <PingIA />
     

    </main>
  );
}

export default PingDetail;