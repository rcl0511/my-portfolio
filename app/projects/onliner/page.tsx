// app/projects/onliner/page.tsx
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
  ShieldCheck,
  Database,
  Users,
  FileText,
  Lock,
  MapPin,
  ShoppingCart,
  Info,
  Workflow,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
} from "lucide-react";

import { PROJECTS_DATA } from "@/components/projects.data";

/* ========================================================================== */
export default async function OnlinerPage() {
  if (!Array.isArray(PROJECTS_DATA)) return notFound();
  const project = PROJECTS_DATA.find((p) => p.id === "onliner");
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

      {/* 2) HERO - 그리드 비율을 4:8로 조정하여 목업 공간 극대화 */}
      <section className="relative overflow-visible bg-slate-950 pt-12 sm:pt-16 md:pt-24 pb-12 sm:pb-16 md:pb-24 px-4 sm:px-6 md:px-20">
        <div className="absolute inset-0 opacity-20 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/3 w-[520px] h-[520px] bg-indigo-600 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[420px] h-[420px] bg-purple-600 rounded-full blur-[130px]" />
        </div>

        <HeroNavigation currentProjectId="onliner" />

        <div className="relative max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4">
            <div className="flex gap-2 mb-6">
              <MiniBadge text="멀티테넌트 SaaS" color="indigo" />
              <MiniBadge text="실서비스 배포" color="blue" />
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-4 md:mb-6 leading-tight">
              Onliner
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mb-6 md:mb-10">
              병원과 도매업체를 연결하는 의약품 거래 SaaS
              <br className="hidden sm:block" />
              <span className="text-indigo-300">종이명세서의 자동화</span>
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
            </div>
          </div>

          {/* 우측: 노트북 화면 목업 크기 극대화 */}
          <div className="lg:col-span-8 flex flex-col gap-12">
            <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
              <div className="flex flex-col gap-4">
                <p className="text-xs text-indigo-200 font-bold uppercase tracking-[0.3em] pl-4">
                  Vendor Dashboard
                </p>
                <DesktopMockup url="https://onlinerr.netlify.app/vendor/dashboard" />
                <div className="mt-2 pl-4">
                  <OutlineButton
                    href="https://onlinerr.netlify.app/vendor/dashboard"
                    icon={<ExternalLink size={16} />}
                  >
                    Vendor 바로가기
                  </OutlineButton>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-xs text-emerald-200 font-bold uppercase tracking-[0.3em] pl-4">
                  Hospital Dashboard
                </p>
                <DesktopMockup url="https://onlinerr.netlify.app/hospital/dashboard" />
                <div className="mt-2 pl-4">
                  <OutlineButton
                    href="https://onlinerr.netlify.app/hospital/dashboard"
                    icon={<ExternalLink size={16} />}
                  >
                    Hospital 바로가기
                  </OutlineButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4) MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 py-12 md:py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
        <div className="lg:col-span-8 space-y-16 md:space-y-20 lg:space-y-24">
          <article>
            <SectionHeader
              title="Context & Problem"
              subtitle="기획 의도 및 문제 정의"
            />
            <div className="bg-white rounded-[24px] md:rounded-[32px] p-6 md:p-8 border border-slate-200 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-50 text-rose-700 text-xs font-bold border border-rose-100">
                문제점
              </div>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                의약품 도매업체는 매달 <span className="font-bold text-slate-900">수천 장의 종이거래명세서</span>를 수작업으로 정리하고 누락된 명세서를 확인하는 과정에서 <span className="font-bold text-rose-600">과도한 시간이 소요</span>됩니다.
                <br />
                다시 도장을 받기 위한 <span className="font-semibold text-slate-900">시간 지체</span>, 전화주문을 전산에 입력하는 과정에서 발생하는 오류 등 
                <span className="font-bold text-slate-900">휴먼 에러</span>로 인한 <span className="font-bold text-rose-600">재고 관리 손실</span>이 발생했습니다.
              </p>
            </div>
          </article>

          <article>
            <SectionHeader
              title="Solution"
              subtitle="해결 방안 및 시스템 설계"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm hover:shadow-md flex flex-col items-center text-center transition-all">
                <div className="mb-4 p-4 bg-slate-50 rounded-2xl">
                  <ShoppingCart className="text-slate-600" size={32} />
                </div>
                <h3 className="font-black text-slate-900 mb-2">주문 통합 관리</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">여러 병원 주문을 한 화면에서 통합 관리</p>
              </div>
              <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm hover:shadow-md flex flex-col items-center text-center transition-all">
                <div className="mb-4 p-4 bg-slate-50 rounded-2xl">
                  <MessageCircle className="text-slate-600" size={32} />
                </div>
                <h3 className="font-black text-slate-900 mb-2">실시간 채팅</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">WebSocket 기반 병원↔도매업체 실시간 소통</p>
              </div>
              <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm hover:shadow-md flex flex-col items-center text-center transition-all">
                <div className="mb-4 p-4 bg-slate-50 rounded-2xl">
                  <FileText className="text-slate-600" size={32} />
                </div>
                <h3 className="font-black text-slate-900 mb-2">자동 명세서</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">PDF 업로드로 명세서 자동 생성 및 발행</p>
              </div>
            </div>
          </article>

          <article>
            <SectionHeader
              title="System Architecture"
              subtitle="멀티테넌트 구조 및 인증 시스템"
            />
            <p className="text-sm md:text-[15px] text-slate-600 mb-4 font-medium">
              아키텍처 설계: 멀티테넌트 분리와 권한 기반 라우팅을 중심으로 구성.
            </p>
            <div className="bg-white rounded-[32px] p-8 md:p-12 border border-slate-200 shadow-sm mb-8">
              <ArchitectureDiagram />
            </div>
          </article>

          <article>
            <SectionHeader
              title="Core Features"
              subtitle="핵심 기능 Core Features"
            />
            <div className="grid grid-cols-1 gap-5">
              <FeatureItem num="01" title="PDF 자동 파싱 & 명세서 관리" desc="PDF 파싱 · 데이터 추출 · 명세서 자동 생성 · 서명/이의신청" tags={["PDF Parsing", "Excel Processing", "Digital Signature"]} />
              <FeatureItem num="02" title="WebSocket 실시간 채팅" desc="실시간 채팅 · 대화방 분리 · 읽음 처리 · 타이핑 표시" tags={["WebSocket", "Real-time Messaging", "Context Rooms"]} />
              <FeatureItem num="03" title="멀티테넌트 & 역할 기반 권한" desc="멀티테넌트 분리 · 포털 자동 분기 · 역할 기반 접근" tags={["Multi-tenant", "Role-based Access", "Portal Separation"]} />
              <FeatureItem num="04" title="통합 대시보드 & 브라우저 알림" desc="통합 대시보드 · 상태 모니터링 · 브라우저 알림" tags={["Dashboard", "Browser Notification", "Real-time Status"]} />
            </div>
          </article>

          <article>
            <SectionHeader
              title="Engineering Stack"
              subtitle="사용된 기술 스택"
            />
            <TechTable tech={project.tech ?? []} />
          </article>

          <article>
            <SectionHeader title="Limitations" subtitle="아쉬운점" />
            <div className="bg-white rounded-[24px] md:rounded-[32px] p-6 md:p-8 border border-slate-200 shadow-sm">
              <p className="text-sm md:text-[15px] text-slate-700 font-medium leading-relaxed">
                본 프로젝트는 현재 독립적인 프로토타입 단계이나, 의료 기관의 실시간 전산망(EMR/OCS)과 인터페이스 연동 시 응급 의료 인프라의 패러다임을 전환할 혁신적 솔루션으로서 높은 시장 가치를 보유하고 있습니다.
              </p>
            </div>
          </article>

          <article>
            <SectionHeader
              title="My Contributions"
              subtitle="수행 역할 및 구현 포인트"
            />
            <div className="bg-slate-900 rounded-[24px] md:rounded-[32px] p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-indigo-400 font-black text-xs uppercase tracking-[0.3em] mb-6">Development Role</h3>
                <p className="text-lg md:text-xl font-medium leading-relaxed text-slate-200 mb-8 whitespace-pre-line">
                  {project.role}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <CheckLine icon={<Database size={16} />} text="멀티테넌트 아키텍처 설계 및 구현" />
                  <CheckLine icon={<Lock size={16} />} text="역할 기반 접근 제어(RBAC) 구현" />
                  <CheckLine icon={<MapPin size={16} />} text="Google Maps API 기반 배송 추적" />
                  <CheckLine icon={<FileText size={16} />} text="PDF 파싱 및 자동 명세서 생성" />
                </div>
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
                { label: "Timeline", value: project.period, icon: <Calendar size={16} /> },
                { label: "Platform", value: project.platform, icon: <Layers size={16} /> },
                { label: "Contribution", value: project.contribution, icon: <Percent size={16} /> },
              ]}
            />
          </div>
        </aside>
      </section>
    </main>
  );
}

/* ========================================================================== */
/* INTERNAL UI COMPONENTS */
/* ========================================================================== */

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-8 w-full group">
      <div className="flex items-end gap-3 mb-2">
        <div className="w-1 h-7 bg-indigo-600 rounded-full group-hover:h-8 transition-all duration-300" />
        <p className="text-[26px] md:text-[30px] font-black tracking-tight text-slate-800 leading-none">
          {subtitle}
        </p>
      </div>
      <div className="flex items-center gap-4 pl-[18px]">
        <h2 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-slate-400 shrink-0">
          {title}
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-slate-200 via-slate-100 to-transparent" />
      </div>
    </div>
  );
}

// 노트북 선명도 및 크기 개선 버전
function DesktopMockup({ url }: { url: string }) {
  const thumbnailUrl = `https://image.thum.io/get/width/2000/${url}`;
  return (
    <div className="relative w-full transition-all duration-700">
      <div className="absolute -inset-10 bg-indigo-500 rounded-[3rem] blur-[120px] opacity-10 pointer-events-none" />
      <div className="relative bg-slate-900 rounded-[24px] md:rounded-[32px] p-1.5 md:p-2 border border-white/10 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.55)] overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm mb-1">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          </div>
          <div className="ml-3 h-2 flex-1 rounded-full bg-white/5" />
        </div>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="block aspect-[4/3] bg-white rounded-[18px] overflow-hidden relative"
          aria-label="Open dashboard"
        >
          <img
            src={thumbnailUrl}
            alt="dashboard-preview"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              transform: "scale(1.6)",
              transformOrigin: "top center",
              imageRendering: "-webkit-optimize-contrast",
            }}
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </a>
      </div>
    </div>
  );
}

function FeatureItem({ num, title, desc, tags }: { num: string; title: string; desc: string; tags: string[] }) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-indigo-200 transition-colors">
      <div className="flex items-start gap-6">
        <div className="shrink-0">
          <div className="w-10 h-10 rounded-xl border border-slate-200 text-slate-400 font-black text-sm flex items-center justify-center">
            {num}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-black text-slate-900 mb-2">{title}</h3>
          <p className="text-base text-slate-600 leading-relaxed mb-4 font-medium">{desc}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-500 rounded-lg text-xs font-bold border border-slate-100">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniBadge({ text, color }: { text: string; color: "indigo" | "blue" }) {
  const styles = {
    indigo: "bg-indigo-500/10 border-indigo-400/20 text-indigo-400",
    blue: "bg-blue-500/10 border-blue-400/20 text-blue-400",
  };
  return (
    <span className={`px-3 py-1 rounded-full border text-[10px] font-black uppercase tracking-widest ${styles[color]}`}>
      {text}
    </span>
  );
}

function DataFlowCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center text-center">
      <div className="mb-4 p-4 bg-slate-50 rounded-2xl text-slate-600">{icon}</div>
      <h3 className="font-black text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed font-medium">{desc}</p>
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
            <div className="min-w-0">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{it.label}</p>
              <p className="font-bold text-slate-900 leading-tight truncate">{it.value}</p>
            </div>
          </div>
        ))}
      </div>
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

function OutlineButton({ href, children, icon }: { href: string; children: React.ReactNode; icon: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/20 rounded-full font-black text-sm transition-all active:scale-95">
      {icon} {children}
    </a>
  );
}

function ArchitectureDiagram() {
  return (
    <div className="w-full">
      <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h4 className="text-lg font-black text-slate-900 mb-4">시스템 구조</h4>
        <div className="grid grid-cols-3 gap-4 text-center mb-6">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase mb-1">Frontend</p>
            <p className="text-sm text-slate-700 font-medium">React (Netlify)</p>
          </div>
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase mb-1">Backend</p>
            <p className="text-sm text-slate-700 font-medium">Spring Boot (Render)</p>
          </div>
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase mb-1">Database</p>
            <p className="text-sm text-slate-700 font-medium">MariaDB (Docker)</p>
          </div>
        </div>
        <div className="mb-4">
          <img src="/assets/onliner-architecture.png" alt="Onliner System Architecture" className="w-full h-auto rounded-xl border border-slate-200 shadow-sm" />
        </div>
        <p className="text-sm text-slate-500 text-center font-medium">병원/도매업체 포털 분리 및 WebSocket 기반 실시간 채팅 시스템</p>
      </div>
      <div className="mt-8 pt-6 border-t border-slate-200">
        <h4 className="text-lg font-black text-slate-900 mb-4 flex items-center gap-2">
          <Lock className="text-slate-600" size={20} />인증 및 권한 관리 플로우
        </h4>
        <div className="bg-slate-50 rounded-xl p-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1 text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-2"><Users className="text-slate-600" size={24} /></div>
              <p className="text-sm font-bold text-slate-900">사용자 로그인</p>
            </div>
            <ChevronRight className="text-slate-400 hidden md:block" size={24} />
            <div className="flex-1 text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-2"><Lock className="text-slate-600" size={24} /></div>
              <p className="text-sm font-bold text-slate-900">역할 기반 권한</p>
            </div>
            <ChevronRight className="text-slate-400 hidden md:block" size={24} />
            <div className="flex-1 text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-2"><ShieldCheck className="text-slate-600" size={24} /></div>
              <p className="text-sm font-bold text-slate-900">메뉴 접근 제어</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroNavigation({ currentProjectId }: { currentProjectId: string }) {
  const featuredProjects = PROJECTS_DATA.filter(p => ["sosai", "smart-barricade", "onliner", "baseball-news"].includes(p.id));
  const currentIndex = featuredProjects.findIndex(p => p.id === currentProjectId);
  if (currentIndex === -1) return null;
  const prevProject = currentIndex > 0 ? featuredProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < featuredProjects.length - 1 ? featuredProjects[currentIndex + 1] : null;

  return (
    <>
      {prevProject && (
        <Link href={`/projects/${prevProject.id}`} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 group p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:scale-110 transition-all">
          <ChevronLeft size={32} className="text-white" />
        </Link>
      )}
      {nextProject && (
        <Link href={`/projects/${nextProject.id}`} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 group p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:scale-110 transition-all">
          <ChevronRight size={32} className="text-white" />
        </Link>
      )}
    </>
  );
}

function TechTable({ tech }: { tech: string[] }) {
  const mapping = [
    { group: "Frontend", keywords: ["react", "router", "axios", "netlify", "maps"] },
    { group: "Backend", keywords: ["spring", "boot", "java", "jpa"] },
    { group: "Database", keywords: ["mariadb", "mysql"] },
    { group: "Integration", keywords: ["pdfbox", "poi", "pdf", "parsing", "websocket"] },
    { group: "DevOps", keywords: ["docker", "netlify", "render"] },
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
            <div className="col-span-12 md:col-span-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{b.group}</div>
            <div className="col-span-12 md:col-span-9 flex flex-wrap gap-2">
              {b.items.map((item) => (
                <span key={item} className="px-3 py-1 bg-white text-slate-700 rounded-xl text-[10px] font-bold border border-slate-200 shadow-sm">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}