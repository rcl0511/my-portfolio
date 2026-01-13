"use client";
import { motion } from "framer-motion";
import Link from "next/link"; // 페이지 이동을 위한 Link

export const PROJECTS_DATA = [
  {
    id: "sosai",
    title: "SOSKIN / SOSAI",
    type: "Team Project",
    period: "2023.09 - 2024.02",
    contribution: "60%",
    platform: "Web App",
    isPatent: true,
    tech: ["FastAPI", "EfficientNet", "Sentence-BERT", "TTS"],
    summary: "화상 응급 상황에서 비전문가의 초기 대응 공백을 줄이기 위한 AI 기반 실시간 음성 가이드 시스템",
    problem: "응급 상황에서 일반인이 화상 정도를 판단하기 어렵고 적절한 조치를 놓침.",
    solution: [
      "EfficientNet 기반 화상 이미지 분류로 화상 정도 판별",
      "Sentence-BERT 기반 QnA 시스템 상황별 대응 질문 매칭",
      "TTS를 통한 화면 응시 없는 즉각적인 행동 유도"
    ],
    role: "이미지 분류 파이프라인 및 FastAPI 기반 음성 응답 로직 구현",
    features: ["실시간 환부 분석", "음성 가이드", "응급 질문 매칭", "특허 출원 진행"],
    links: { github: "https://github.com/rcl0511", video: "#" }
  },
  {
    id: "smart-barricade",
    title: "Smart Barricade",
    type: "Team Project",
    period: "2023.03 - 2023.06",
    contribution: "50%",
    platform: "IoT / Android",
    tech: ["ESP32", "BLE", "Wi-Fi", "LoadCell", "Android"],
    summary: "다중 인파 사고를 예방하기 위한 실시간 하중 감지 IoT 안전 시스템",
    problem: "인파 밀집 지역의 위험 수치를 정량적으로 판단할 수 있는 수단 부족.",
    solution: [
      "로드셀 및 FSR 센서를 활용한 실시간 하중 측정",
      "ESP32 기반 BLE / Wi-Fi 데이터 전송",
      "모바일 앱 실시간 모니터링 및 경고 알림"
    ],
    role: "임베디드 통신 로직 설계 및 센서 데이터 임계치 판정 설계",
    features: ["하중 시각화", "위험 수치 알림", "BLE 통신 제어", "캡스톤 대상 수상"],
    links: { github: "https://github.com/rcl0511" }
  },
  {
    id: "business-automation",
    title: "Business Automation",
    type: "Solo Project",
    period: "2023",
    contribution: "100%",
    platform: "Desktop Script",
    tech: ["Node.js", "Python", "PDF Lib"],
    summary: "의약품 도매 실무에서 반복되는 거래명세서 및 PDF 작업을 자동화한 시스템",
    problem: "수기 데이터 입력 및 PDF 정리 반복으로 인한 업무 효율 저하.",
    solution: [
      "PDF 및 거래 데이터 자동 파싱 엔진 구축",
      "데이터 정규화 후 시스템 자동 저장 파이프라인 통합",
      "반복 작업을 스크립트 하나로 자동 수행"
    ],
    role: "기획, 설계, 개발 전 과정 단독 수행",
    features: ["PDF 파싱", "데이터 정규화", "업무 시간 70% 단축", "실제 현장 적용"],
    links: { github: "https://github.com/rcl0511" }
  },
  {
    id: "baseball-news",
    title: "Baseball News Generator",
    type: "Solo Project",
    period: "2022",
    contribution: "100%",
    platform: "Desktop Tool",
    tech: ["Python", "Rule-based NLP"],
    summary: "정형화된 경기 데이터를 자연어 기사로 변환하는 기사 자동 생성 프로그램",
    problem: "스포츠 경기 결과 정리 및 유사 구조 기사 작성의 비효율성.",
    solution: [
      "경기 데이터 입력 기반 규칙 문장 템플릿 설계",
      "데이터 필드별 자연어 변환 및 조건 분기 로직 구현",
      "기사 구조 자동 생성 파이프라인 구축"
    ],
    role: "데이터-문장 변환 알고리즘 및 템플릿 설계",
    features: ["자동 요약", "조건별 문장 생성", "데이터 기반 팩트 체크"],
    links: { github: "https://github.com/rcl0511" }
  }
];

export function ProjectCard({ project }: { project: any }) {
  return (
    <Link href={`/projects/${project.id}`}>
      <motion.div 
        whileHover={{ y: -10 }}
        className="group cursor-pointer bg-white border border-slate-100 rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500"
      >
        <div className="aspect-video bg-slate-50 relative flex items-center justify-center overflow-hidden">
          <span className="text-slate-200 font-black text-4xl uppercase tracking-tighter opacity-20 group-hover:scale-110 transition-transform duration-700">
            {project.id}
          </span>
          {project.isPatent && (
            <div className="absolute top-6 right-6 px-4 py-1.5 bg-emerald-500 text-white text-[10px] font-black rounded-full shadow-lg z-10">
              PATENT PENDING
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        
        <div className="p-10">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.2em] mb-2">{project.type}</p>
              <h3 className="text-3xl font-black text-slate-900 tracking-tighter leading-none">{project.title}</h3>
            </div>
            <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all">
              <ArrowRight size={20} />
            </div>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-2">{project.summary}</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t: string) => (
              <span key={t} className="px-3 py-1 bg-slate-50 text-slate-400 text-[10px] font-bold rounded-full uppercase tracking-tight group-hover:text-emerald-600 group-hover:bg-emerald-50 transition-colors">
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

function ArrowRight({ size, className }: any) {
  return <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>;
}