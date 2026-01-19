"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Globe,
  Github,
  Cpu,
  Database,
  Server,
  Layout,
} from "lucide-react";

export type Project = {
  id: string;
  title: string;
  type: string;
  period: string;
  contribution: string;
  platform: string;
  isPatent?: boolean;

  tech: string[];
  summary: string;

  problem?: string;
  solution?: string[];
  role?: string;
  features?: string[];

  links?: {
    github?: string;
    demo?: string;
    video?: string;
  };
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "sosai",
    title: "SOSAI",
    type: "Team Project",
    period: "2025.03 - 2025.06",
    contribution: "85%",
    platform: "Web Service (React SPA · FastAPI · AWS EC2)",
    isPatent: true,
    tech: [
      "React",
      "FastAPI",
      "AWS EC2",
      "MongoDB Atlas",
      "SBERT",
      "OpenAI",
      "gTTS",
      "Netlify",
      "systemd",
      "Nginx",
    ],
    summary:
      "음성 중심 UX 기반 AI 응급대응 서비스. 실사용 배포 환경에서 사용자 정보 기반 단계별 응급 가이드를 제공.",
    features: [
      "🏆 건강보험심사평가원(HIRA) 보건의료 창업 아이디어 대회 입상",
      "📌 응급 대응 AI 서비스 구조 관련 기술 특허 출원 진행 중",
      "🌐 Netlify(FE) + AWS EC2(BE) 기반 실서비스 배포 및 운영",
      "🔊 화면을 보지 않아도 가능한 음성(TTS) 중심 응급 가이드 UX",
    ],
    problem:
      "응급 상황에서 비전문가는 증상 판단이 어렵고, 당황으로 인해 잘못된 처치나 골든타임 손실이 빈번하게 발생합니다.",
    solution: [
      "MongoDB에 저장된 사용자 기본 신체정보(연령·성별 등)를 활용한 응급 판단 보조 로직",
      "SBERT 기반 질의 의도 분석 + OpenAI LLM 응답 보강 구조 설계",
      "긴급 상황을 고려한 짧고 명확한 단계별 행동 지침 제공",
      "Whisper(STT)·gTTS(TTS) 연동으로 음성만으로도 대응 가능한 UX 구현",
    ],
    role:
      "Frontend(React)와 Backend(FastAPI) 전반 개발을 담당. AWS EC2 배포, MongoDB 연동, 사용자 정보 기반 응급 대응 플로우 및 API 설계·구현.",
    links: {
      github: "https://github.com/rcl0511/OPENSOURCECOLABO",
      demo: "https://sosaii.netlify.app/",
    },
  },

  {
    id: "smart-barricade",
    title: "Smart Barricade",
    type: "Team Project",
    period: "2023.03 - 2023.06",
    contribution: "50%",
    platform: "IoT / Android",
    isPatent: false,
    tech: ["ESP32", "BLE GATT", "Kotlin", "LoadCell", "C"],
    summary:
      "다중 인파 밀집 지역의 하중을 실시간으로 측정하여 사고를 예방하는 IoT 스마트 안전 시스템입니다.",
    problem:
      "축제나 행사장에서 군중 밀집도를 정량적으로 판단할 데이터가 부족하여 사후 대응에 의존하는 한계가 있습니다.",
    solution: [
      "로드셀 센서를 바리케이드에 설치하여 실시간 압력(하중) 데이터 수집",
      "ESP32 기반 BLE/Wi-Fi 통신을 통해 수집된 데이터를 모바일 앱으로 즉각 전송",
      "임계치 이상의 하중 감지 시 관리자 앱을 통한 푸시 알림 및 현장 경보 시스템 가동",
    ],
    role:
      "임베디드 통신 로직 설계 및 BLE GATT 최적화, 센서 데이터 필터링 알고리즘 구현.",
    features: [
      "실시간 하중 시각화 대시보드(Android)",
      "다중 통신(BLE & WiFi) 환경에서 충돌 해결",
      "중앙값 필터링으로 센서 노이즈 제거",
      "캡스톤 디자인 대상 수상 및 성과회 대표 참가",
    ],
    links: { github: "https://github.com/rcl0511" },
  },

  {
    id: "business-automation",
    title: "Business Automation",
    type: "Solo Project",
    period: "2023",
    contribution: "100%",
    platform: "Desktop Script",
    isPatent: false,
    tech: ["Node.js", "Python", "PDF Lib", "Automation"],
    summary:
      "의약품 도매 실무에서 반복되는 수작업을 자동화하여 업무 효율을 극대화한 시스템입니다.",
    problem:
      "수천 장의 거래명세서 확인 및 PDF 데이터 수기 입력으로 시간이 과도하게 소요되고 휴먼 에러가 발생합니다.",
    solution: [
      "비정형 PDF 포맷에서 데이터만 추출하는 파싱 엔진 구축",
      "추출 데이터 정규화 파이프라인 설계",
      "원클릭 스크립트로 반복 업무 통합",
    ],
    role: "업무 흐름 분석 → 문제 정의 → 자동화 시스템 설계·개발 전 과정 단독 수행.",
    features: [
      "현업 적용 및 피드백 반영",
      "업무 처리 시간 약 70% 단축",
      "규칙 기반 예외 처리로 파싱 정확도 향상",
    ],
    links: { github: "https://github.com/rcl0511" },
  },

  {
    id: "baseball-news",
    title: "Baseball News Generator",
    type: "Team Project",
    period: "2022",
    contribution: "100%",
    platform: "Desktop Tool",
    isPatent: false,
    tech: ["Python", "Rule-based NLP", "Data Processing"],
    summary:
      "정형화된 야구 경기 데이터를 자연어 기사로 자동 변환해주는 콘텐츠 생성 프로그램입니다.",
    problem:
      "경기 요약 기사 작성에 소요되는 반복 시간을 줄이고 생산성을 높여야 했습니다.",
    solution: [
      "경기 데이터를 문장 템플릿에 매칭",
      "상황(역전/완승 등)에 따른 조건 분기 로직으로 문장 조합",
      "데이터 수집→기사 초안 생성 자동화",
    ],
    role: "Data-to-Text 변환 로직 단독 구현.",
    features: [
      "수만 가지 조합의 기사 자동 생성",
      "데이터 기반 팩트 체크 자동화 효과",
    ],
    links: { github: "https://github.com/rcl0511" },
  },
];

// -----------------------------
// ProjectCard (대표 프로젝트 SOSAI 전용 디자인 포함)
// -----------------------------
export function ProjectCard({ project }: { project: Project }) {
  const href = `/projects/${project.id}`;
  const isFeatured = project.id === "sosai";

  return (
    <Link href={href} className="block">
      {isFeatured ? <FeaturedProjectCard project={project} /> : <DefaultProjectCard project={project} />}
    </Link>
  );
}

// -----------------------------
// Featured Card (SOSAI)
// - 2칸 span
// - Award/Patent/Deploy badge
// - 강한 비주얼 + 스캔 구조
// -----------------------------
function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 250, damping: 22 }}
      className={[
        "group relative overflow-hidden rounded-[36px] border",
        "bg-white shadow-sm hover:shadow-2xl hover:shadow-emerald-200/60 transition-all duration-500",
        "md:col-span-2 border-emerald-200/70",
      ].join(" ")}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-emerald-200/30 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/40 via-white to-slate-50/60" />
      </div>

      <div className="relative p-10 md:p-12">
        {/* 헤더: 최소 정보만 */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-3 mb-6">
  <span className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-600 text-white text-s font-black tracking-widest shadow-lg shadow-emerald-300/40">
    🏆 HIRA 창업 아이디어대회 입상
  </span>

  {project.isPatent ? (
    <span className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-600 text-white text-s font-black tracking-widest shadow-lg shadow-emerald-300/40">
       특허 진행중
    </span>
  ) : null}
</div>

            <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900">
              {project.title}
            </h3>

            <p className="mt-4 text-slate-600 leading-relaxed max-w-3xl">
              {project.summary}
            </p>

            
          </div>


        </div>

{project.links?.demo ? <PhonePreview url={project.links.demo} /> : null}

      </div>
    </motion.article>
  );
}

function PhonePreview({ url }: { url: string }) {
  return (
    <div className="mt-10 flex justify-center">
      {/* phone shell */}
      <div className="relative w-[260px] md:w-[320px] aspect-[9/19.5] rounded-[44px] bg-slate-900 shadow-[0_30px_90px_rgba(0,0,0,0.35)] p-[10px]">
        {/* inner bezel */}
        <div className="relative w-full h-full rounded-[36px] bg-black overflow-hidden">
          {/* notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-7 bg-black rounded-b-3xl z-20" />
          {/* camera dot */}
          <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-slate-700 z-30" />

          {/* iframe */}
          <iframe
            src={url}
            className="absolute inset-0 w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
        </div>
      </div>
    </div>
  );
}


// -----------------------------
// Default Card (나머지 프로젝트)
// -----------------------------
function DefaultProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 250, damping: 22 }}
      className="group cursor-pointer bg-white border border-slate-100 rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500"
    >
      <div className="aspect-video bg-slate-50 relative flex items-center justify-center overflow-hidden">
        <span className="text-slate-200 font-black text-4xl uppercase tracking-tighter opacity-20 group-hover:scale-110 transition-transform duration-700">
          {project.id}
        </span>

        <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="p-10">
        <div className="flex justify-between items-start mb-6">
          <div className="min-w-0">
            <p className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.2em] mb-2">
              {project.type}
            </p>
            <h3 className="text-3xl font-black text-slate-900 tracking-tighter leading-none">
              {project.title}
            </h3>
            <p className="mt-2 text-[11px] text-slate-400 font-mono uppercase tracking-widest">
              {project.period}
            </p>
          </div>

          <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all">
            <ArrowRight size={20} />
          </div>
        </div>

        <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-2">
          {project.summary}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 8).map((t: string) => (
            <span
              key={t}
              className="px-3 py-1 bg-slate-50 text-slate-400 text-[10px] font-bold rounded-full uppercase tracking-tight group-hover:text-emerald-600 group-hover:bg-emerald-50 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

// -----------------------------
// Small UI pieces
// -----------------------------
function Badge({
  text,
  icon,
  tone = "emerald",
}: {
  text: string;
  icon?: React.ReactNode;
  tone?: "emerald" | "emeraldOutline" | "dark" | "slate";
}) {
  const cls =
    tone === "dark"
      ? "bg-slate-900 text-white border-slate-900"
      : tone === "slate"
      ? "bg-white/70 text-slate-700 border-slate-200"
      : tone === "emeraldOutline"
      ? "bg-white/70 text-emerald-700 border-emerald-200"
      : "bg-emerald-600 text-white border-emerald-600";

  return (
    <span
      className={[
        "inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black tracking-widest border",
        cls,
      ].join(" ")}
    >
      {icon}
      {text}
    </span>
  );
}

function ProofCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl bg-white/70 border border-slate-200 p-5">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600">
          {icon}
        </div>
        <div>
          <p className="text-xs font-black text-slate-900">{title}</p>
          <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}
