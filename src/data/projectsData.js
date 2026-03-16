// src/data/projectsData.js

import pingThumb from '../assets/projects/ping/ping_Thumbnail.jpg';
import ansanThumb from '../assets/projects/ansan/ansan_Thumbnail.jpg';
import designThumb from '../assets/projects/designuriwon/uriwon_Thumbnail.jpg';
import kingsThumb from '../assets/projects/kings/kings_Thumbnail.jpg';
import policeThumb from '../assets/projects/police/police_Thumbnail.jpg';

export const projectTabs = [
  'All',
  'Public',
  'Architecture',
  'Strategy',
  'Build',
];

export const projectsData = [
  {
    id: 'ping',
    categories: ['Architecture', 'Strategy', 'Build'],
    type: 'private',
    title: 'PING',
    subtitle: '문제 유형 기반 디자인 피드백 커뮤니티',
    eyebrow: 'WEB Platform',
    overlayTitle: '문제 유형 기반 디자인\n피드백 커뮤니티',
    overlayDescription:
      '디자인 피드백을\n핀(Pin) 기반으로 기록하고\n문제 유형별로 구조화하는\nUX 피드백 플랫폼',
    meta: 'UX/UI Planning · FigmaDesign · React · Node.js · MySQL',
    thumbnail: pingThumb,
    href: '/projects/ping',
  },
  {
    id: 'ansan',
    categories: ['Public', 'Architecture', 'Strategy', 'Build'],
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
    categories: ['Architecture', 'Strategy', 'Build'],
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
    categories: ['Public', 'Architecture', 'Strategy'],
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
    categories: ['Public', 'Architecture', 'Strategy'],
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