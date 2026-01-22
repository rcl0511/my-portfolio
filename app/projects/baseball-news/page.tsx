// app/projects/baseball-news/page.tsx
import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Calendar,
  Layers,
  Percent,
  Sparkles,
  ShieldAlert,
  Database,
  Users,
  FileText,
  BarChart3,
  Info,
  Workflow,
  Monitor,
  ServerCrash,
  ChevronLeft,
  ChevronRight,
  Brain,
  Search,
  Zap,
  Layout,
  Server,
  Cpu,
} from "lucide-react";

import { PROJECTS_DATA } from "@/components/projects.data";

/* ========================================================================== */
export default async function FastballPage() {
  if (!Array.isArray(PROJECTS_DATA)) return notFound();
  const project = PROJECTS_DATA.find((p) => p.id === "baseball-news");
  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-[#F9FBFC] text-slate-900 font-sans selection:bg-indigo-100 overflow-x-hidden">
      {/* 1) NAV */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 px-4 sm:px-6 md:px-20 py-3 md:py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-indigo-600 transition-colors"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Projects
          </Link>
          <div className="hidden sm:block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
            Case Study: {project.title}
          </div>
        </div>
      </nav>

      {/* 2) HERO */}
      <section className="relative overflow-visible bg-slate-950 pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-20">
        <div className="absolute inset-0 opacity-20 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/3 w-[520px] h-[520px] bg-indigo-600 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[420px] h-[420px] bg-purple-600 rounded-full blur-[130px]" />
        </div>

        {/* 프로젝트 네비게이션 아이콘 */}
        <HeroNavigation currentProjectId="baseball-news" />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center py-4 md:py-8">
          <div className="lg:col-span-7">
            <div className="flex gap-2 mb-6">
              <MiniBadge text="LLM + RAG" color="indigo" />
              <MiniBadge text="실서비스 배포" color="blue" />
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-4 md:mb-6 leading-tight">
              Fastball
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mb-6 md:mb-10">
              LLM과 RAG를 결합하여 스포츠 기사 작성을 자동화하는 AI 기반 기사 생성 시스템
            </p>

            <div className="flex flex-wrap gap-4">
              {project.links?.github && (
                <OutlineButton
                  href={project.links.github}
                  icon={<Github size={18} />}
                >
                  소스코드
                </OutlineButton>
              )}
              {project.links?.demo && (
                <OutlineButton
                  href={project.links.demo}
                  icon={<ExternalLink size={18} />}
                >
                  데모 사이트
                </OutlineButton>
              )}
              {project.links?.video && (
                <OutlineButton
                  href={project.links.video}
                  icon={<ExternalLink size={18} />}
                >
                  시연 영상
                </OutlineButton>
              )}
            </div>
          </div>

          {/* 우측: 바로가기 버튼 */}
          <div className="lg:col-span-5 flex flex-col justify-center items-center lg:items-end gap-6">
            <a
              href={project.links?.demo || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 md:gap-4 px-6 sm:px-8 md:px-12 py-6 md:py-8 bg-gradient-to-br from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-[24px] md:rounded-[32px] font-black text-base md:text-lg transition-all shadow-2xl shadow-indigo-600/30 hover:shadow-indigo-600/50 active:scale-95 max-w-md w-full"
            >
              <ExternalLink size={32} className="group-hover:scale-110 transition-transform" />
              <span>실제 웹사이트 바로가기</span>
              <span className="text-sm font-normal opacity-90">클릭하여 서비스 확인하기</span>
            </a>
            <p className="text-sm text-slate-400 font-mono text-center lg:text-right">
              {project.links?.demo?.replace("https://", "")}
            </p>
          </div>
        </div>
      </section>

      {/* 3) 핵심 기능 플로우 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          <DataFlowCard
            icon={<Search className="text-indigo-600" />}
            title="하이브리드 검색 (RAG)"
            desc="ChromaDB와 PostgreSQL을 활용한 문서 검색 및 리랭킹"
          />
          <DataFlowCard
            icon={<Brain className="text-purple-600" />}
            title="LLM 기사 생성"
            desc="Claude API를 활용한 자연스러운 문체의 기사 자동 생성"
          />
          <DataFlowCard
            icon={<Zap className="text-blue-600" />}
            title="원스톱 워크플로우"
            desc="데이터 업로드부터 기사 생성까지 웹에서 완결"
          />
        </div>
      </section>

      {/* 4) MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 py-12 md:py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
        {/* LEFT */}
        <div className="lg:col-span-8 space-y-16 md:space-y-20 lg:space-y-24">
          {/* Context */}
          <article>
            <SectionHeader
              title="Context & Problem"
              subtitle="기획 의도 및 문제 정의"
            />
            <div className="bg-white rounded-[24px] md:rounded-[32px] p-6 md:p-8 border border-slate-200 shadow-sm transition-all hover:shadow-md">
              <p className="text-lg text-slate-700 leading-relaxed whitespace-pre-line mb-10">
                {project.problem}
              </p>

              <div className="p-4 md:p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
                <div className="flex items-center gap-2 text-indigo-800 mb-4 font-bold">
                  <ShieldAlert size={20} /> 주요 문제점
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-[13px] text-indigo-900/70 font-medium">
                  <li className="flex gap-2">
                    <span>•</span> 기자 하루 평균 14건 이상의 기사 작성으로 시간 부족
                  </li>
                  <li className="flex gap-2">
                    <span>•</span> 반복적인 데이터 정리와 초안 작성에 최소 30분 소요
                  </li>
                  <li className="flex gap-2">
                    <span>•</span> 기존 템플릿 기반 도구는 획일적이고 딱딱한 기사 생성
                  </li>
                  <li className="flex gap-2">
                    <span>•</span> 문맥 이해 없이 데이터만 나열하는 한계
                  </li>
                </ul>
              </div>
            </div>
          </article>

          {/* Solution */}
          <article>
            <SectionHeader
              title="Solution"
              subtitle="해결 방안 및 시스템 설계"
            />
            <div className="bg-white rounded-[24px] md:rounded-[32px] p-6 md:p-8 border border-slate-200 shadow-sm transition-all hover:shadow-md">
              <div className="space-y-6">
                {project.solution?.map((sol, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-black text-sm">
                      {idx + 1}
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed flex-1">
                      {sol}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* System Architecture */}
          <article>
            <SectionHeader
              title="System Architecture"
              subtitle="RAG 기반 기사 생성 시스템"
            />

            {/* 아키텍처 다이어그램 */}
            <div className="bg-white rounded-[32px] p-8 md:p-12 border border-slate-200 shadow-sm mb-8">
              <ArchitectureDiagram />
            </div>

            <div className="space-y-6">
              <ArchitectureCard
                num="01"
                icon={<Database className="text-indigo-600" size={24} />}
                title="하이브리드 데이터 저장"
                items={[
                  "ChromaDB: 당일 경기 데이터를 자연어로 변환 후 벡터화하여 저장",
                  "PostgreSQL: 방대한 정보를 저장하고 리랭커로 관련 정보만 우선 적용",
                  "CSV 형태의 경기 데이터를 Claude로 자연어 문장 변환",
                  "임베딩 모델을 통한 벡터화 및 FAISS/ChromaDB 저장",
                ]}
              />
              <ArchitectureCard
                num="02"
                icon={<Brain className="text-purple-600" size={24} />}
                title="RAG 기반 기사 생성"
                items={[
                  "ChromaDB와 PostgreSQL에서 검색된 정보를 7:3 비율로 Claude에 전달",
                  "리랭커를 통한 관련성 높은 정보 우선 적용으로 기사 품질 향상",
                  "문맥을 이해하고 자연스러운 문체로 기사 생성",
                  "단순 데이터 나열이 아닌 맥락 있는 기사 작성",
                ]}
              />
            </div>
          </article>

          {/* Core Features */}
          <article>
            <SectionHeader
              title="Core Features"
              subtitle="핵심 기능 상세"
            />
            <div className="space-y-6">
              <FeatureCard
                icon={<Search className="text-indigo-600" />}
                title="스마트 검색 & 데이터 수집"
                items={[
                  "키워드 기반 웹 검색 및 사용자 문서 분석",
                  "ChromaDB를 활용한 벡터 기반 문서 검색",
                  "PostgreSQL을 통한 구조화된 데이터 검색",
                  "리랭커를 통한 관련성 높은 정보 우선 추출",
                ]}
              />
              <FeatureCard
                icon={<Brain className="text-purple-600" />}
                title="LLM 기반 기사 생성"
                items={[
                  "Claude API를 활용한 자연스러운 문체의 기사 생성",
                  "경기 데이터를 자연어로 변환하여 문맥 이해",
                  "7:3 비율로 ChromaDB와 PostgreSQL 데이터 결합",
                  "사용자 맞춤화 입력 반영 (예: '투수 중심으로 요약')",
                ]}
              />
              <FeatureCard
                icon={<FileText className="text-blue-600" />}
                title="자동 기사 포맷팅"
                items={[
                  "기사 형식(제목-소제목-본문) 자동 정렬 및 포매팅",
                  "출처 명시 및 필터링 기능",
                  "생성된 문단별로 참고 자료 시각적 표현",
                  "PDF 또는 Word로 변환 가능",
                ]}
              />
              <FeatureCard
                icon={<Zap className="text-sky-600" />}
                title="원스톱 워크플로우"
                items={[
                  "웹사이트 내에서 데이터 업로드부터 기사 생성까지 완결",
                  "실시간 미리보기 제공",
                  "빠르고 직관적인 사용자 경험",
                  "기사 작성 시간 대폭 단축 (30분 → 수분)",
                ]}
              />
            </div>
          </article>

          {/* Engineering Stack */}
          <article>
            <SectionHeader
              title="Engineering Stack"
              subtitle="사용된 기술 스택"
            />
            <div className="space-y-6">
              <TechTable tech={project.tech ?? []} />
              <div className="p-4 md:p-6 bg-slate-100 rounded-2xl text-base md:text-[18px] lg:text-[20px] text-slate-600 font-medium flex items-start gap-3 md:gap-4">
                <Info size={28} className="shrink-0 text-indigo-600 mt-0.5" />
                <span>
                  LLM과 RAG를 결합하여 단순 템플릿 기반이 아닌 문맥을 이해하는
                  자연스러운 기사를 생성합니다. ChromaDB와 PostgreSQL을 활용한
                  하이브리드 검색 시스템과 리랭커를 통해 기사 품질을 향상시켰습니다.
                </span>
              </div>
            </div>
          </article>

          {/* My Contributions */}
          <article>
            <SectionHeader
              title="My Contributions"
              subtitle="수행 역할 및 구현 포인트"
            />
            <div className="bg-slate-900 rounded-[24px] md:rounded-[32px] p-6 md:p-8 lg:p-12 text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-indigo-400 font-black text-xs uppercase tracking-[0.3em] mb-6">
                  Development Role
                </h3>
                <p className="text-base md:text-lg lg:text-xl font-medium leading-relaxed text-slate-200 mb-6 md:mb-8 whitespace-pre-line">
                  {project.role}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[13px] text-slate-200/90 font-medium">
                  <CheckLine
                    icon={<Monitor size={16} />}
                    text="React 기반 프론트엔드 인터페이스 제작"
                  />
                  <CheckLine
                    icon={<Zap size={16} />}
                    text="실시간 미리보기 및 사용자 경험 최적화"
                  />
                  <CheckLine
                    icon={<FileText size={16} />}
                    text="FastAPI 백엔드와의 통신 구현"
                  />
                  <CheckLine
                    icon={<Workflow size={16} />}
                    text="전체 워크플로우 UI/UX 설계"
                  />
                </div>
              </div>

              <Workflow className="absolute -bottom-10 -right-10 text-white/5 w-64 h-64 rotate-12" />
            </div>
          </article>
        </div>

        {/* RIGHT */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="lg:sticky lg:top-24 space-y-6">
            <SummaryCard
              title="Project Snapshot"
              items={[
                {
                  label: "Timeline",
                  value: project.period,
                  icon: <Calendar size={16} />,
                },
                {
                  label: "Platform",
                  value: project.platform,
                  icon: <Layers size={16} />,
                },
                {
                  label: "Contribution",
                  value: project.contribution,
                  icon: <Percent size={16} />,
                },
              ]}
            />

            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-[32px] p-8 text-white shadow-xl">
              <div className="flex items-center gap-2 mb-8">
                <Sparkles size={18} />
                <h3 className="font-bold uppercase text-[10px] tracking-widest">
                  Core Highlights
                </h3>
              </div>

              <div className="space-y-4">
                <ResultBadge
                  label="AI Technology"
                  value="LLM + RAG 결합으로 문맥 이해 기반 기사 생성"
                />
                <ResultBadge
                  label="Search System"
                  value="ChromaDB + PostgreSQL 하이브리드 검색"
                />
                <ResultBadge
                  label="Quality"
                  value={
                    <>
                      리랭커를 통한 관련성 높은 정보 우선 적용
                      <br />
                      자연스러운 문체의 기사 자동 생성
                    </>
                  }
                />
                <ResultBadge
                  label="Deployment"
                  value="Netlify(FE) + Railway(BE) 실서비스 배포"
                />
              </div>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}

/* ========================================================================== */
/* INTERNAL UI */
/* ========================================================================== */

function MiniBadge({
  text,
  color,
}: {
  text: string;
  color: "indigo" | "blue";
}) {
  const styles = {
    indigo: "bg-indigo-500/10 border-indigo-400/20 text-indigo-400",
    blue: "bg-blue-500/10 border-blue-400/20 text-blue-400",
  };
  return (
    <span
      className={`px-3 py-1 rounded-full border text-[10px] font-black uppercase tracking-widest ${styles[color]}`}
    >
      {text}
    </span>
  );
}

function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-10">
      <p className="text-indigo-600 font-black text-xs uppercase tracking-widest mb-2">
        {subtitle}
      </p>
      <div className="flex items-center gap-6">
        <h2 className="text-3xl font-black tracking-tight text-slate-900 shrink-0">
          {title}
        </h2>
        <div className="h-px w-full bg-slate-200" />
      </div>
    </div>
  );
}

function DataFlowCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div
      className="bg-white p-8 rounded-[32px] border border-slate-200
                 shadow-[0_20px_50px_rgba(99,102,241,0.12)]
                 hover:shadow-[0_20px_60px_rgba(99,102,241,0.22)]
                 flex flex-col items-center text-center group
                 hover:-translate-y-2 transition-all duration-300"
    >
      <div className="mb-4 p-4 bg-slate-50 rounded-2xl group-hover:scale-110 group-hover:bg-indigo-50 transition-all duration-300">
        {icon}
      </div>
      <h3 className="font-black text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed font-medium">{desc}</p>
    </div>
  );
}

function SummaryCard({ title, items }: { title: string; items: any[] }) {
  return (
    <div className="bg-white rounded-[32px] border border-slate-200 p-8 shadow-sm">
      <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8">
        {title}
      </h3>
      <div className="space-y-6">
        {items.map((it, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className="p-2.5 bg-slate-50 rounded-xl text-slate-400">
              {it.icon}
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                {it.label}
              </p>
              <p className="font-bold text-slate-900 leading-tight break-normal" style={{ wordBreak: 'keep-all' }}>
                {it.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ResultBadge({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="bg-white/10 rounded-2xl p-5 border border-white/10 backdrop-blur-md transition-transform hover:scale-[1.02]">
      <p className="text-[10px] font-bold text-indigo-100 uppercase mb-2 tracking-tighter">
        {label}
      </p>
      <p className="text-sm font-bold leading-relaxed">{value}</p>
    </div>
  );
}

function CheckLine({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 px-4 py-3">
      <div className="text-indigo-300">{icon}</div>
      <p className="text-[13px] font-semibold text-slate-100">{text}</p>
    </div>
  );
}

function OutlineButton({
  href,
  children,
  icon,
}: {
  href: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/20 rounded-full font-black text-sm transition-all active:scale-95"
    >
      {icon} {children}
    </a>
  );
}

function ArchitectureDiagram() {
  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-black text-slate-900 mb-2">RAG 기반 기사 생성 시스템</h3>
        <p className="text-slate-500 text-sm">하이브리드 검색 및 LLM을 활용한 자연스러운 기사 생성</p>
      </div>

      {/* 다이어그램 */}
      <div className="space-y-6">
        {/* Frontend Layer */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border-2 border-indigo-200">
          <div className="flex items-center gap-3 mb-4">
            <Monitor className="text-indigo-600" size={24} />
            <h4 className="text-lg font-black text-slate-900">Frontend (React)</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4 border border-indigo-100">
              <p className="text-xs font-bold text-indigo-600 uppercase mb-1">사용자 입력</p>
              <p className="text-sm text-slate-600">기사 주제, 자료 업로드</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-indigo-100">
              <p className="text-xs font-bold text-indigo-600 uppercase mb-1">실시간 미리보기</p>
              <p className="text-sm text-slate-600">기사 생성 과정 표시</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-indigo-100">
              <p className="text-xs font-bold text-indigo-600 uppercase mb-1">결과 출력</p>
              <p className="text-sm text-slate-600">생성된 기사 표시</p>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center">
          <div className="w-1 h-12 bg-gradient-to-b from-indigo-300 to-purple-300 rounded-full" />
        </div>

        {/* Backend Layer */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200">
          <div className="flex items-center gap-3 mb-4">
            <ServerCrash className="text-purple-600" size={24} />
            <h4 className="text-lg font-black text-slate-900">Backend (FastAPI)</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4 border border-purple-100">
              <p className="text-xs font-bold text-purple-600 uppercase mb-1">API 서버</p>
              <p className="text-sm text-slate-600">REST API 엔드포인트</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-purple-100">
              <p className="text-xs font-bold text-purple-600 uppercase mb-1">LLM 연동</p>
              <p className="text-sm text-slate-600">Claude API 호출</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-purple-100">
              <p className="text-xs font-bold text-purple-600 uppercase mb-1">RAG 시스템</p>
              <p className="text-sm text-slate-600">검색 및 리랭킹</p>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center">
          <div className="w-1 h-12 bg-gradient-to-b from-purple-300 to-blue-300 rounded-full" />
        </div>

        {/* Database Layer */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border-2 border-blue-200">
          <div className="flex items-center gap-3 mb-4">
            <Database className="text-blue-600" size={24} />
            <h4 className="text-lg font-black text-slate-900">Database & Vector Store</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4 border border-blue-100">
              <p className="text-xs font-bold text-blue-600 uppercase mb-1">ChromaDB</p>
              <p className="text-sm text-slate-600">벡터 기반 문서 검색</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-blue-100">
              <p className="text-xs font-bold text-blue-600 uppercase mb-1">PostgreSQL</p>
              <p className="text-sm text-slate-600">구조화된 데이터 저장</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-blue-100">
              <p className="text-xs font-bold text-blue-600 uppercase mb-1">리랭커</p>
              <p className="text-sm text-slate-600">관련성 높은 정보 우선</p>
            </div>
          </div>
        </div>
      </div>

      {/* 생성 플로우 */}
      <div className="mt-8 pt-8 border-t border-slate-200">
        <h4 className="text-lg font-black text-slate-900 mb-4 flex items-center gap-2">
          <Workflow className="text-purple-600" size={20} />
          기사 생성 플로우
        </h4>
        <div className="bg-slate-50 rounded-xl p-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div className="flex-1 text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <FileText className="text-indigo-600" size={24} />
              </div>
              <p className="text-sm font-bold text-slate-900">데이터 수집</p>
              <p className="text-xs text-slate-500 mt-1">CSV 경기 데이터 수집</p>
            </div>
            <ChevronRight className="text-slate-400 hidden md:block" size={24} />
            <div className="flex-1 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Brain className="text-purple-600" size={24} />
              </div>
              <p className="text-sm font-bold text-slate-900">자연어 변환</p>
              <p className="text-xs text-slate-500 mt-1">Claude로 자연어 문장 변환</p>
            </div>
            <ChevronRight className="text-slate-400 hidden md:block" size={24} />
            <div className="flex-1 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Database className="text-blue-600" size={24} />
              </div>
              <p className="text-sm font-bold text-slate-900">벡터화 저장</p>
              <p className="text-xs text-slate-500 mt-1">임베딩 후 ChromaDB 저장</p>
            </div>
            <ChevronRight className="text-slate-400 hidden md:block" size={24} />
            <div className="flex-1 text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Zap className="text-sky-600" size={24} />
              </div>
              <p className="text-sm font-bold text-slate-900">기사 생성</p>
              <p className="text-xs text-slate-500 mt-1">7:3 비율로 데이터 결합</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArchitectureCard({
  num,
  icon,
  title,
  items,
}: {
  num: string;
  icon: React.ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <div className="bg-white rounded-[32px] p-8 border-2 border-slate-200 shadow-sm hover:shadow-lg hover:border-indigo-200 transition-all">
      <div className="flex gap-6 items-start">
        <div className="shrink-0">
          <div className="w-16 h-16 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl flex items-center justify-center border-2 border-indigo-100">
            {icon}
          </div>
          <span className="block text-center text-2xl font-black text-slate-200 mt-2">{num}</span>
        </div>
        <div className="flex-1">
          <h4 className="text-2xl font-black text-slate-900 mb-4">{title}</h4>
          <ul className="space-y-3">
            {items.map((item, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="text-indigo-500 font-bold shrink-0 mt-1">•</span>
                <span className="text-slate-600 leading-relaxed font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-slate-50 rounded-2xl">{icon}</div>
        <h3 className="text-xl font-black text-slate-900">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex gap-3 text-sm text-slate-600 leading-relaxed font-medium"
          >
            <span className="text-indigo-500 font-bold shrink-0">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function HeroNavigation({ currentProjectId }: { currentProjectId: string }) {
  const featuredProjects = PROJECTS_DATA.filter(
    (p) => p.id === "sosai" || p.id === "smart-barricade" || p.id === "onliner" || p.id === "baseball-news"
  );

  const currentIndex = featuredProjects.findIndex(
    (p) => p.id === currentProjectId
  );

  if (currentIndex === -1) return null;

  const prevProject = currentIndex > 0 ? featuredProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < featuredProjects.length - 1 ? featuredProjects[currentIndex + 1] : null;

  return (
    <>
      {/* 왼쪽 화살표 */}
      {prevProject && (
        <Link
          href={`/projects/${prevProject.id}`}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 group p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full border border-white/20 hover:border-white/40 transition-all hover:scale-110"
        >
          <ChevronLeft size={32} className="text-white group-hover:text-indigo-200 transition-colors" />
        </Link>
      )}

      {/* 오른쪽 화살표 */}
      {nextProject && (
        <Link
          href={`/projects/${nextProject.id}`}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 group p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full border border-white/20 hover:border-white/40 transition-all hover:scale-110"
        >
          <ChevronRight size={32} className="text-white group-hover:text-indigo-200 transition-colors" />
        </Link>
      )}
    </>
  );
}

function TechTable({ tech }: { tech: string[] }) {
  const mapping = [
    { group: "Frontend", keywords: ["react"] },
    { group: "Backend", keywords: ["fastapi", "uvicorn"] },
    { group: "AI & LLM", keywords: ["langchain", "huggingface", "claude", "llama"] },
    { group: "Database & Vector", keywords: ["postgresql", "sqlite", "chromadb", "faiss"] },
    { group: "DevOps", keywords: ["docker"] },
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
            <div className="col-span-12 md:col-span-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              {b.group}
            </div>
            <div className="col-span-12 md:col-span-9 flex flex-wrap gap-2">
              {b.items.map((item) => (
                <span key={item} className="px-3 py-1 md:px-4 md:py-1.5 bg-white text-slate-700 rounded-lg md:rounded-xl text-[10px] md:text-xs font-bold border border-slate-200 shadow-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
