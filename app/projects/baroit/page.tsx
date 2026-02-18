// app/projects/baroit/page.tsx
import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  Layers,
  Percent,
  Sparkles,
  ShieldAlert,
  Workflow,
  ShieldCheck,
  Database,
  Layout,
  Router,
  FileText,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Info,
} from "lucide-react";

import { PROJECTS_DATA } from "@/components/projects.data";

/* ==========================================================================
   TYPES
   ========================================================================== */
type PageProps = { params: Promise<{ id: string }> };

/* ==========================================================================
   MAIN PAGE
   ========================================================================== */
export default async function BaroitPage({ params }: PageProps) {
  const { id } = await params;
  if (!Array.isArray(PROJECTS_DATA)) return notFound();
  const project = PROJECTS_DATA.find((p) => p.id === "baroit");
  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-[#F9FBFC] text-slate-900 font-sans selection:bg-sky-100 overflow-x-hidden">
      {/* 1. NAVIGATION */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 px-6 md:px-20 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-sky-600 transition-colors"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
          <div className="hidden sm:block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
            Case Study: {project.title}
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative overflow-visible bg-slate-950 pt-12 md:pt-24 pb-12 md:pb-24 px-4 md:px-20">
        <div className="absolute inset-0 opacity-20 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-sky-600 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-600 rounded-full blur-[120px]" />
        </div>

        <HeroNavigation currentProjectId="baroit" />

        <div className="relative max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="flex gap-2 mb-6">
              <Badge text="MVP Hackathon" color="sky" />
              <Badge text="Frontend Focus" color="blue" />
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white tracking-tight mb-6 leading-tight">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mb-10">
              창업팀 아이디어 기반 MVP 구현 및 비즈니스 가치 검증을 목표로 한
              멘토-멘티 학습 코칭 웹 서비스
            </p>

            <div className="flex flex-wrap gap-4">
              {project.links?.demo && (
                <PrimaryButton href={project.links.demo} icon={<ExternalLink size={18} />}>
                  주소 바로가기
                </PrimaryButton>
              )}
            </div>
          </div>

          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <DesktopMockup url={project.links?.demo || ""} />
          </div>
        </div>
      </section>

      {/* 3. MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-4 md:px-20 py-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8 space-y-24">
          
          <article>
            <SectionHeader title="Context" subtitle="기획 의도" />
            <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-50 text-rose-700 text-xs font-bold border border-rose-100">
                문제점
              </div>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed whitespace-pre-line">
                멘토는 멘티의 학습 현황과 과제·피드백·일정을 한눈에 관리하고 싶고,
                멘티는 과제·피드백·학습 일정·성과를 한곳에서 점검하고 싶습니다.
                실제 코칭 현장에서 바로 사용할 수 있는 MVP가 필요했습니다.
              </p>
            </div>
          </article>

          <article>
            <SectionHeader title="Design Principles" subtitle="설계 원칙" />
            <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm">
              <div className="p-6 bg-amber-50/60 rounded-2xl border border-amber-100">
                <div className="flex items-center gap-2 text-amber-700 mb-4 font-bold text-sm">
                  <ShieldAlert size={18} /> 핵심 원칙
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-sm text-amber-900/75 font-medium">
                  <li className="flex gap-2"><span>•</span> 멘티 편의성 1순위</li>
                  <li className="flex gap-2"><span>•</span> 날짜 기반 학습 관리</li>
                  <li className="flex gap-2"><span>•</span> 전문적이지만 딱딱하지 않은 톤</li>
                  <li className="flex gap-2"><span>•</span> 복잡 기능보다 실행 흐름 우선</li>
                </ul>
              </div>
            </div>
          </article>

          <article>
            <SectionHeader title="System Approach" subtitle="왜 이렇게 설계했는가" />
            <div className="space-y-4">
              <ApproachItem num="01" title="라우팅·권한 분리" 
                content={
                  <ul className="space-y-2">
                    <li className="flex gap-2"><span className="text-sky-600 font-black">•</span><span>/mentor · /mentee 라우트 분리 및 접근 제어</span></li>
                  </ul>
                } 
              />
              <ApproachItem num="02" title="Mock ↔ 실 API 전환" 
                content={
                  <ul className="space-y-2">
                    <li className="flex gap-2"><span className="text-sky-600 font-black">•</span><span>데모 및 테스트를 위한 유연한 API 스위칭 구조</span></li>
                  </ul>
                } 
              />
              <ApproachItem num="03" title="상태 관리 전략" 
                content={
                  <ul className="space-y-2">
                    <li className="flex gap-2"><span className="text-sky-600 font-black">•</span><span>React Query(서버) + Zustand(UI) 역할 분담</span></li>
                  </ul>
                } 
              />
            </div>
          </article>



          <article>
            <SectionHeader title="System Architecture" subtitle="시스템 아키텍처" />
            <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <InfoCard icon={<Layout size={18} />} title="Frontend SPA" desc="React SPA, 역할별 레이아웃 분리" />
                <InfoCard icon={<Router size={18} />} title="Routing" desc="ProtectedRoute + 역할 기반 접근" />
                <InfoCard icon={<Database size={18} />} title="State & API" desc="React Query + axiosInstance" />
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <div className="max-w-4xl mx-auto">
                  <img
                    src="/assets/baroit-architecture.png"
                    alt="Blaybus System Architecture"
                    className="w-full h-auto rounded-xl border border-slate-200 shadow-sm"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl text-sm text-slate-600 font-medium flex items-start gap-4 border border-slate-100">
                <Info size={24} className="shrink-0 text-sky-500 mt-0.5" />
                <span>환경 변수 기반으로 Auth만 실서버를 사용하거나 전체를 Mock 데이터로 운영하는 등 유연한 데모 환경을 구축했습니다.</span>
              </div>
            </div>
          </article>

          <article>
            <SectionHeader title="Mentee App UI" subtitle="멘티 앱 화면" />
            <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm space-y-6">
              <div className="max-w-5xl mx-auto space-y-6">
                <img
                  src="/assets/baroit-mentee-flow.png"
                  alt="Mentee App Flow"
                  className="w-full h-auto rounded-2xl border border-slate-200 shadow-sm"
                  loading="lazy"
                />
                <img
                  src="/assets/baroit-mentee-planner.png"
                  alt="Mentee Daily Planner"
                  className="w-full h-auto rounded-2xl border border-slate-200 shadow-sm"
                  loading="lazy"
                />
              </div>
            </div>
          </article>

          <article>
            <SectionHeader title="Screen Description" subtitle="화면 구성 요약" />
            <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 rounded-2xl border border-slate-100 p-4">
                  <span className="text-sky-600 font-black">01</span>
                  <span className="text-sm text-slate-700 font-medium">멘토 대시보드: 학습 흐름·피드백 상태·미처리 항목 요약</span>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-slate-100 p-4">
                  <span className="text-sky-600 font-black">02</span>
                  <span className="text-sm text-slate-700 font-medium">멘토 과제 등록: 날짜/과목/목표 기반 등록·반복 설정</span>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-slate-100 p-4">
                  <span className="text-sky-600 font-black">03</span>
                  <span className="text-sm text-slate-700 font-medium">멘토 피드백 작성: 제출물 확인 + 템플릿 코멘트</span>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-slate-100 p-4">
                  <span className="text-sky-600 font-black">04</span>
                  <span className="text-sm text-slate-700 font-medium">멘티 플래너: 캘린더·과제·코멘트·타임테이블 통합</span>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-slate-100 p-4">
                  <span className="text-sky-600 font-black">05</span>
                  <span className="text-sm text-slate-700 font-medium">과제/피드백 상세: 과제 내용 + 피드백 한 화면</span>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-slate-100 p-4">
                  <span className="text-sky-600 font-black">06</span>
                  <span className="text-sm text-slate-700 font-medium">알림: 과제 마감/피드백 등록 알림 제공</span>
                </div>
              </div>
              <div className="mt-8">
                <a
                  href="/assets/baroit-screen-desc.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sky-600 text-white text-xs font-black tracking-widest shadow-lg shadow-sky-200/50 hover:bg-sky-500 transition-colors"
                >
                  화면 설명 PDF 열기
                </a>
              </div>
            </div>
          </article>

          <article>
            <SectionHeader title="Engineering Stack" subtitle="사용된 기술 스택" />
            <TechTable tech={project.tech ?? []} />
          </article>

          <article>
            <SectionHeader title="My Contributions" subtitle="수행 역할 및 구현 포인트" />
            <div className="bg-slate-900 rounded-[32px] p-10 text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-sky-400 font-black text-xs uppercase tracking-[0.3em] mb-6">Frontend Role</h3>
                <p className="text-lg font-medium leading-relaxed text-slate-200 mb-8 whitespace-pre-line">
                  {project.role}
                </p>

              </div>
              <Workflow className="absolute -bottom-10 -right-10 text-white/5 w-64 h-64 rotate-12" />
            </div>
          </article>
        </div>

        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-24 space-y-6">
            <SummaryCard 
              title="Project Snapshot"
              items={[
                { label: "Timeline", value: "2026.02.01 - 2026.02.10", icon: <Calendar size={16}/> },
                { label: "Platform", value: "Web / React SPA", icon: <Layers size={16}/> },
                { label: "Contribution", value: "Frontend", icon: <Percent size={16}/> }
              ]}
            />
          </div>
        </aside>
      </section>
    </main>
  );
}

/* ==========================================================================
   UI COMPONENTS
   ========================================================================== */

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-8 w-full group">
      <div className="flex items-end gap-3 mb-1.5">
        <div className="w-1 h-7 bg-sky-600 rounded-full group-hover:h-8 transition-all duration-300" />
        <p className="text-[26px] md:text-[30px] font-[900] text-slate-700 tracking-tight leading-none">
          {subtitle}
        </p>
      </div>
      <div className="flex items-center gap-4 pl-[18px]">
        <h2 className="text-[10px] md:text-xs font-bold tracking-[0.15em] text-slate-400 uppercase shrink-0">
          {title}
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-slate-200 via-slate-100 to-transparent" />
      </div>
    </div>
  );
}

function DesktopMockup({ url }: { url: string }) {
  const thumbnailUrl = `https://image.thum.io/get/width/1800/${url}`;
  return (
    <div className="relative w-full max-w-[1200px] xl:max-w-[1400px] transition-all duration-700">
      <div className="absolute -inset-10 bg-sky-500 rounded-[3rem] blur-[120px] opacity-15 pointer-events-none" />
      <div className="relative bg-slate-900 rounded-[32px] p-2 md:p-4 border border-slate-800 shadow-2xl overflow-hidden group">
        <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/70 rounded-[22px] mb-2">
          <span className="w-3 h-3 rounded-full bg-red-400/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
          <span className="w-3 h-3 rounded-full bg-green-400/80" />
          <div className="ml-4 h-3 flex-1 rounded-full bg-white/10" />
        </div>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="relative block aspect-[16/10] bg-white rounded-[24px] overflow-hidden cursor-pointer"
        >
          <img
            src={thumbnailUrl}
            alt="preview"
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            style={{ imageRendering: "-webkit-optimize-contrast" }}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-sky-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full flex items-center gap-2 shadow-xl scale-90 group-hover:scale-100 transition-transform duration-300">
              <ExternalLink size={18} className="text-sky-600" />
              <span className="text-slate-900 font-bold text-sm">사이트 바로가기</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

function ResultBadge({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white/10 rounded-2xl p-5 border border-white/10 backdrop-blur-md">
      <p className="text-[10px] font-bold text-sky-200 uppercase mb-2 tracking-widest">{label}</p>
      <p className="text-[11px] md:text-xs font-medium tracking-tighter leading-none">{value}</p>
    </div>
  );
}

function Badge({ text, color }: { text: string; color: "sky" | "blue" }) {
  const styles = {
    sky: "bg-sky-500/10 border-sky-400/20 text-sky-400",
    blue: "bg-blue-500/10 border-blue-400/20 text-blue-400",
  };
  return (
    <span className={`px-3 py-1 rounded-full border text-[10px] font-black uppercase tracking-widest ${styles[color]}`}>
      {text}
    </span>
  );
}

function ApproachItem({ num, title, content }: { num: string; title: string; content: React.ReactNode }) {
  return (
    <div className="flex gap-6 p-6 rounded-2xl border border-slate-100 bg-white hover:border-sky-100 transition-colors">
      <span className="text-2xl font-black text-slate-200">{num}</span>
      <div>
        <h4 className="font-bold text-slate-900 mb-2">{title}</h4>
        <div className="text-sm text-slate-600 font-medium">{content}</div>
      </div>
    </div>
  );
}

function InfoCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-sky-600">{icon}</span>
        <h4 className="font-black text-sm text-slate-800">{title}</h4>
      </div>
      <p className="text-sm text-slate-500 leading-snug">{desc}</p>
    </div>
  );
}

function SummaryCard({ title, items }: { title: string; items: any[] }) {
  return (
    <div className="bg-white rounded-[32px] border border-slate-200 p-8 shadow-sm">
      <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8">{title}</h3>
      <div className="space-y-6">
        {items.map((it, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className="p-2.5 bg-slate-50 rounded-xl text-slate-400">{it.icon}</div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{it.label}</p>
              <p className="font-bold text-slate-900 leading-tight">{it.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PrimaryButton({ href, children, icon }: { href: string; children: React.ReactNode; icon: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white rounded-full font-black text-sm transition-all shadow-lg active:scale-95">
      {icon} {children}
    </a>
  );
}

function CheckLine({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-sky-400 shrink-0">{icon}</div>
      <span>{text}</span>
    </div>
  );
}

function TechTable({ tech }: { tech: string[] }) {
  const mapping = [
    { group: "Frontend", keywords: ["react", "vite", "router", "tailwind"] },
    { group: "State", keywords: ["query", "zustand"] },
    { group: "Data & Export", keywords: ["axios", "pdf", "docx"] },
  ];
  const buckets = mapping.map(m => ({
    group: m.group,
    items: tech.filter(t => m.keywords.some(k => t.toLowerCase().includes(k)))
  })).filter(r => r.items.length > 0);
  
  return (
    <div className="bg-white rounded-[32px] border border-slate-200 overflow-hidden shadow-sm">
      <div className="grid grid-cols-1 divide-y divide-slate-100">
        {buckets.map((b) => (
          <div key={b.group} className="grid grid-cols-12 gap-4 p-7 items-center hover:bg-slate-50 transition-colors">
            <div className="col-span-12 md:col-span-3 text-[10px] font-black uppercase tracking-widest text-slate-400">{b.group}</div>
            <div className="col-span-12 md:col-span-9 flex flex-wrap gap-2">
              {b.items.map((item) => (
                <span key={item} className="px-3 py-1 bg-white text-slate-700 rounded-lg text-[10px] font-bold border border-slate-200 shadow-sm">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HeroNavigation({ currentProjectId }: { currentProjectId: string }) {
  const featuredIds = ["sosai", "smart-barricade", "onliner", "baseball-news", "baroit"];
  const featuredProjects = PROJECTS_DATA.filter((p) => featuredIds.includes(p.id));
  const currentIndex = featuredProjects.findIndex((p) => p.id === currentProjectId);
  
  const prevProject = currentIndex > 0 ? featuredProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < featuredProjects.length - 1 ? featuredProjects[currentIndex + 1] : null;

  return (
    <>
      {prevProject && (
        <Link href={`/projects/${prevProject.id}`} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:scale-110 transition-all">
          <ChevronLeft size={32} className="text-white" />
        </Link>
      )}
      {nextProject && (
        <Link href={`/projects/${nextProject.id}`} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:scale-110 transition-all">
          <ChevronRight size={32} className="text-white" />
        </Link>
      )}
    </>
  );
}