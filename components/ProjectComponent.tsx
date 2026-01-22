"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

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

/**
 * ProjectCard
 * - Featured: SOSAI + Smart Barricade
 * - Default: 나머지
 */
export function ProjectCard({ project }: { project: Project }) {
  const href = `/projects/${project.id}`;
  const isFeatured = project.id === "sosai" || project.id === "smart-barricade" || project.id === "onliner" || project.id === "baseball-news";

  return (
    <>
      {isFeatured ? (
        <FeaturedProjectCard project={project} href={href} />
      ) : (
        <Link href={href} className="block">
          <DefaultProjectCard project={project} />
        </Link>
      )}
    </>
  );
}

/**
 * FeaturedProjectCard
 * - SOSAI: HIRA + 특허 / demo iframe phone preview
 * - Smart Barricade: 수상/대표참가 뱃지 / 이미지 phone preview
 */
function FeaturedProjectCard({ project, href }: { project: Project; href: string }) {
  const isSOSAI = project.id === "sosai";
  const isBarricade = project.id === "smart-barricade";
  const isOnliner = project.id === "onliner";
  const isFastball = project.id === "baseball-news";

  // Smart Barricade 폰 프리뷰(연결 화면 이미지)
  // (너가 올린 "연결됐을때 이미지" 링크)
  const barricadePreviewImg =
  "https://github.com/user-attachments/assets/f2d1c70a-7888-4606-8fa3-9d1237cb4b51";

  // ✅ Featured 뱃지 구성
  const badges = isSOSAI
    ? [
        "🏆 HIRA 보건의료 창업아이디어대회 입상",
        project.isPatent ? "국내 특허 출원 진행 중" : null,
      ].filter(Boolean) as string[]
    : isBarricade
    ? [
        "🏆 2025 숙명여대 캡스톤 디자인 대상",
        "🏆 2025 기계인더피날레(과 대회) 1등",
      ]
    : isOnliner
    ? [
        "멀티테넌트 SaaS"        
      ]
    : [
        "졸업프로젝트",
      ];

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 250, damping: 22 }}
      className={[
        "group relative overflow-hidden rounded-[36px] border",
        "bg-white shadow-sm hover:shadow-2xl hover:shadow-blue-200/60 transition-all duration-500",
        "border-blue-200/70",
      ].join(" ")}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/40 via-white to-slate-50/60" />
      </div>

      {/* 프로젝트 상세 페이지로 이동하는 링크 (전체 카드) */}
      <Link href={href} className="absolute inset-0 z-10" aria-label={`${project.title} 프로젝트 상세보기`} />

      <div className="relative p-6 sm:p-8 md:p-10 lg:p-12">
        {/* 헤더 */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="min-w-0">
            
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {badges.map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600 text-white text-[15px] font-black tracking-widest shadow-lg shadow-blue-300/40"
                >
                  {b}
                </span>
              ))}
            </div>

            <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-2">
              {project.type}
            </p>

            <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900">
              {project.title}
            </h3>

            <p className="mt-3 md:mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
              {project.summary}
            </p>

            <p className="mt-3 text-[11px] text-slate-400 font-mono uppercase tracking-widest">
              {project.period}
            </p>
          </div>
        </div>

        {/* Preview */}
        {isSOSAI && project.links?.demo ? (
          <div className="relative z-20" onClick={(e) => e.stopPropagation()}>
            <PhonePreviewIframe url={project.links.demo} />
          </div>
        ) : null}

        {isBarricade ? (
          <div className="relative z-20" onClick={(e) => e.stopPropagation()}>
            <PhonePreviewImage src={barricadePreviewImg} />
          </div>
        ) : null}

        {isOnliner && project.links?.demo ? (
          <div className="relative z-20" onClick={(e) => e.stopPropagation()}>
            <DesktopPreviewLink url="https://onlinerr.netlify.app/vendor/dashboard" />
          </div>
        ) : null}

        {isFastball && project.links?.demo ? (
          <div className="relative z-20" onClick={(e) => e.stopPropagation()}>
            <DesktopPreviewLink url={project.links.demo} />
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}

function PhonePreviewIframe({ url }: { url: string }) {
  return (
    <div className="mt-10 flex flex-col items-center gap-4">
      {/* 안내 문구 */}
      <div className="bg-sky-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
        실제 웹사이트입니다 클릭해보세요
      </div>
      
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="relative w-[260px] md:w-[320px] aspect-[9/19.5] rounded-[44px] bg-slate-900 shadow-[0_30px_90px_rgba(0,0,0,0.35)] p-[10px] block"
      >
        <div className="relative w-full h-full rounded-[36px] bg-black overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-7 bg-black rounded-b-3xl z-20" />
          <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-slate-700 z-30" />
          <iframe
            src={url}
            className="absolute inset-0 w-full h-full pointer-events-none"
            loading="lazy"
            referrerPolicy="no-referrer"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            title="phone-preview"
          />
        </div>
      </a>
    </div>
  );
}

function PhonePreviewImage({ src }: { src: string }) {
  return (
    <div className="mt-10 flex justify-center">
      <div className="relative w-[260px] md:w-[320px] aspect-[9/19.5]
                      rounded-[44px] bg-slate-900
                      shadow-[0_30px_90px_rgba(0,0,0,0.35)] p-[10px]">

        <div className="relative w-full h-full rounded-[36px] bg-black overflow-hidden">
          {/* notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2
                          w-36 h-7 bg-black rounded-b-3xl z-20" />

          {/* image */}
          <img
            src={src}
            alt="Smart Barricade App Preview"
            className="
              absolute inset-0
              w-full h-full
              object-contain   
              bg-black
            "
          />
        </div>
      </div>
    </div>
  );
}

function DesktopPreviewLink({ url }: { url: string }) {
  const displayUrl = url.replace("https://", "").replace("http://", "");
  return (
    <div className="mt-10 flex flex-col items-center gap-4">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          window.open(url, '_blank', 'noopener,noreferrer');
        }}
        className="group flex items-center gap-3 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-black text-sm transition-all shadow-lg shadow-indigo-600/20 active:scale-95"
      >
        <ExternalLink size={18} />
        실제 웹사이트 바로가기
      </a>
      <p className="text-xs text-slate-500 font-medium">
        {displayUrl}
      </p>
    </div>
  );
}


/**
 * DefaultProjectCard (나머지 프로젝트)
 */
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

      <div className="p-6 sm:p-8 md:p-10">
        <div className="flex justify-between items-start mb-6">
          <div className="min-w-0">
            <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-2">
              {project.type}
            </p>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tighter leading-none">
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
              className="px-3 py-1 bg-slate-50 text-slate-400 text-[10px] font-bold rounded-full uppercase tracking-tight group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
