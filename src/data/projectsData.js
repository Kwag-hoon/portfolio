// src/data/projectsData.js

import pingThumb from '../assets/projects/ping/ping_Thumbnail.jpg';
import plantThumb from '../assets/projects/plant/plant_Thumbnail.jpg';
import ansanThumb from '../assets/projects/ansan/ansan_Thumbnail.jpg';
import designThumb from '../assets/projects/designuriwon/uriwon_Thumbnail.jpg';
import kingsThumb from '../assets/projects/kings/kings_Thumbnail.jpg';
import policeThumb from '../assets/projects/police/police_Thumbnail.jpg';

export const projectTabs = [
  'All',
  'Public',
  'UX/IA',
  'Strategy',
  'Build',
];

export const projectsData = [
  {
    id: 'ping',
    categories: ['UX/IA', 'Strategy', 'Build'],
    type: 'private',
    title: 'PING',
    subtitle: '문제 유형 기반 디자인 피드백 커뮤니티',
    eyebrow: 'SERVICE PLANNING · WEB PLATFORM',
    overlayTitle: '디자인 피드백을\n구조화한 플랫폼',
    overlayDescription:
      '디자인 피드백이\n 결과물 중심으로 소비되는 문제를\nPin 기반 위치 지정과\n문제 유형 분류 구조로 정리한\n서비스 기획 프로젝트',
    meta: 'Service Planning · IA · UX Flow · UI Design · React',
    thumbnail: pingThumb,
    href: '/projects/ping',
  },
{
    id: 'plant',
    categories: ['UX/IA', 'Strategy'],
    type: 'private',
    title: 'PLANT',
    subtitle: '위치 기반 식물 거래·관리 플랫폼',
    eyebrow: 'SERVICE PLANNING · APP PLATFORM',
    overlayTitle: '위치 기반\n식물 거래·관리 플랫폼',
    overlayDescription:
      '식물 구매자와 판매자의\n 문제를 나누어 정의하고,\n 위치 기반 탐색·스마트 오더·식물 관리 \n흐름으로 설계한\n2023 R&D 첫걸음 기업연구소 지원사업 프로젝트',
    meta: 'Service Planning · UX Strategy · Business Model',
    thumbnail: plantThumb,
    pdfUrl: "/pdf/dongnaeplant_portfol.pdf",
  },

  {
    id: 'ansan',
    categories: ['Public', 'UX/IA', 'Strategy', 'Build'],
    type: 'public',
    title: '안산미래연구원',
    subtitle: '웹사이트 구축',
    eyebrow: 'INSTITUTIONAL',
    overlayTitle: '안산미래연구원\n웹사이트 구축',
    overlayDescription:
      '기관 정체성과 정보 전달 구조를\n반영한 공공형 웹사이트를\n기획하고 설계한 프로젝트',
    meta: 'UX/UI Planning · FigmaDesign',
    thumbnail: ansanThumb,
    href: '/projects/ansan',
  },
  {
    id: 'designuriwon',
    categories: ['UX/IA', 'Strategy', 'Build'],
    type: 'private',
    title: '디자인 유리원',
    subtitle: '웹사이트 구축',
    eyebrow: 'WEB/MOBILE',
    overlayTitle: '디자인 유리원\n웹사이트 구축',
    overlayDescription:
      '브랜드 무드와 시각 경험을\n강조한 구조 설계와\nUI 중심 웹사이트 프로젝트',
    meta: 'UX/UI Planning · FigmaDesign · HTML · CSS · JS',
    thumbnail: designThumb,
    href: '/projects/designuriwon',
  },

  {
    id: 'kings',
    categories: ['Public', 'UX/IA', 'Strategy'],
    type: 'public',
    title: 'KINGS 웹사이트 구축',
    subtitle: '한국전력 국제원자력대학원대학교',
    eyebrow: 'WEB/MOBILE',
    overlayTitle: 'KINGS 웹사이트 구축',
    overlayDescription:
      '학교 정보와 입학 콘텐츠를\n구조적으로 재정리한\n고등교육기관 웹사이트 프로젝트',
    meta: 'PM · UI/UX Planning',
    thumbnail: kingsThumb,
    href: '/projects/kings',
  },
  {
    id: 'police',
    categories: ['Public', 'UX/IA', 'Strategy'],
    type: 'public',
    title: '경찰대학 치안대학원',
    subtitle: '웹사이트 구축',
    eyebrow: 'WEB/MOBILE',
    overlayTitle: '경찰대학 치안대학원\n웹사이트 구축',
    overlayDescription:
      '공공 교육기관 성격에 맞는\n정보 구조와 사용자 흐름을\n정리한 웹사이트 프로젝트',
    meta: 'PM · UI/UX Planning',
    thumbnail: policeThumb,
    href: '/projects/police',
  },
];