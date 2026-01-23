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
  ShieldAlert,
  ShieldCheck,
  Database,
  Users,
  Package,
  Truck,
  FileText,
  Building2,
  BarChart3,
  Lock,
  MapPin,
  ShoppingCart,
  Warehouse,
  ClipboardList,
  Info,
  Workflow,
  Monitor,
  ServerCrash,
  ChevronLeft,
  ChevronRight,
  Layout,
  Server,
  Cpu,
  MessageCircle,
  Bell,
  CreditCard,
  FileCheck,
  AlertCircle,
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

      {/* 2) HERO */}
      <section className="relative overflow-visible bg-slate-950 pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-20">
        <div className="absolute inset-0 opacity-20 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/3 w-[520px] h-[520px] bg-indigo-600 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[420px] h-[420px] bg-purple-600 rounded-full blur-[130px]" />
        </div>

        {/* 프로젝트 네비게이션 아이콘 */}
        <HeroNavigation currentProjectId="onliner" />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center py-4 md:py-8">
          <div className="lg:col-span-7">
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

          {/* 우측: 바로가기 버튼 */}
          <div className="lg:col-span-5 flex flex-col justify-center items-center lg:items-end gap-4">
            <div className="w-full max-w-md space-y-3">
              {/* Vendor 입장 */}
              <a
                href="https://onlinerr.netlify.app/vendor/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-2xl font-bold transition-all shadow-lg hover:shadow-xl active:scale-[0.98] w-full"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <ExternalLink size={20} />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-bold">도매업체 포털</div>
                    <div className="text-xs opacity-80">Vendor Dashboard</div>
                  </div>
                </div>
                <span className="text-white/80 group-hover:translate-x-1 transition-transform">→</span>
              </a>

              {/* Hospital 입장 */}
              <a
                href="https://onlinerr.netlify.app/hospital/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 px-6 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-2xl font-bold transition-all shadow-lg hover:shadow-xl active:scale-[0.98] w-full"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <ExternalLink size={20} />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-bold">병원 포털</div>
                    <div className="text-xs opacity-80">Hospital Dashboard</div>
                  </div>
                </div>
                <span className="text-white/80 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
            
            <p className="text-xs text-slate-400 font-mono text-center lg:text-right">
              onlinerr.netlify.app
            </p>
          </div>
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
              <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-6 md:mb-10">
                의약품 도매업체는 매달 <span className="font-bold text-slate-900">수천 장의 종이거래명세서</span>를 수작업으로 정리하고 누락된 명세서를 확인하는 과정에서 <span className="font-bold text-rose-600">과도한 시간이 소요</span>됩니다.
                <br />
                다시 도장을 받기 위한 <span className="font-semibold text-slate-900">시간 지체</span>, 전화주문을 전산에 입력하는 과정에서 발생하는 오류 등 
                <span className="font-bold text-slate-900">휴먼 에러</span>로 인한 <span className="font-bold text-rose-600">재고 관리 손실</span>이 발생했습니다.
              </p>

              <div className="p-4 md:p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
                <div className="flex items-center gap-2 text-indigo-800 mb-4 font-bold">
                  <ShieldAlert size={20} /> 주요 문제점
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  <div className="flex items-start gap-2">
                    <span className="text-indigo-600 font-bold mt-0.5">•</span>
                    <span className="text-xs md:text-[13px] text-indigo-900/70 font-medium">종이 명세서 손상·분실</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-indigo-600 font-bold mt-0.5">•</span>
                    <span className="text-xs md:text-[13px] text-indigo-900/70 font-medium">거래장 관리 번거로움</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-indigo-600 font-bold mt-0.5">•</span>
                    <span className="text-xs md:text-[13px] text-indigo-900/70 font-medium">전화 주문으로 인한 오류</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-indigo-600 font-bold mt-0.5">•</span>
                    <span className="text-xs md:text-[13px] text-indigo-900/70 font-medium">소통 채널 부재</span>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Solution */}
          <article>
            <SectionHeader
              title="Solution"
              subtitle="해결 방안 및 시스템 설계"
            />
           

            {/* 핵심 기능 플로우 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
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

          {/* System Architecture */}
          <article>
            <SectionHeader
              title="System Architecture"
              subtitle="멀티테넌트 구조 및 인증 시스템"
            />

            {/* 아키텍처 다이어그램 */}
            <div className="bg-white rounded-[32px] p-8 md:p-12 border border-slate-200 shadow-sm mb-8">
              <ArchitectureDiagram />
            </div>

            
          </article>

          {/* Core Features */}
          <article>
            <SectionHeader
              title="Core Features"
              subtitle="핵심 기능"
            />
            <div className="space-y-6">
              {/* 1. PDF 자동 파싱 */}
              <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-start gap-6">
                  <div className="shrink-0">
                    <div className="w-14 h-14 bg-slate-700 rounded-2xl flex items-center justify-center text-white font-black text-xl">
                      01
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-black text-slate-900 mb-3">PDF 자동 파싱 & 명세서 관리</h3>
                    <p className="text-base text-slate-600 leading-relaxed mb-4">
                      <span className="font-semibold text-slate-900">Apache PDFBox</span>와 <span className="font-semibold text-slate-900">POI</span>를 활용한 자동 데이터 추출. 
                      Grid 입력 및 PDF 업로드로 명세서를 자동 생성하고, 병원 수신함에서 서명 및 이의신청 처리가 가능합니다.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-medium border border-slate-200">PDF Parsing</span>
                      <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-medium border border-slate-200">Excel Processing</span>
                      <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-medium border border-slate-200">Digital Signature</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. WebSocket 실시간 채팅 */}
              <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-start gap-6">
                  <div className="shrink-0">
                    <div className="w-14 h-14 bg-slate-700 rounded-2xl flex items-center justify-center text-white font-black text-xl">
                      02
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-black text-slate-900 mb-3">WebSocket 실시간 채팅</h3>
                    <p className="text-base text-slate-600 leading-relaxed mb-4">
                      <span className="font-semibold text-slate-900">WebSocket</span> 기반 병원↔도매업체 간 실시간 소통 시스템. 
                      명세서별 또는 일반 문의 컨텍스트로 대화방을 분리하고, 읽음 처리 및 타이핑 표시 기능을 제공합니다.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-medium border border-slate-200">WebSocket</span>
                      <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-medium border border-slate-200">Real-time Messaging</span>
                      <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-medium border border-slate-200">Context Rooms</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. 멀티테넌트 & 권한 관리 */}
              <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-start gap-6">
                  <div className="shrink-0">
                    <div className="w-14 h-14 bg-slate-700 rounded-2xl flex items-center justify-center text-white font-black text-xl">
                      03
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-black text-slate-900 mb-3">멀티테넌트 & 역할 기반 권한</h3>
                    <p className="text-base text-slate-600 leading-relaxed mb-4">
                      업체 코드로 데이터를 완전히 분리하고, <span className="font-semibold text-slate-900">hospital/vendor 포털</span>을 자동 분기합니다. 
                      MASTER/SALES/WAREHOUSE 권한별 메뉴 필터링으로 업무 효율성을 극대화합니다.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-medium border border-slate-200">Multi-tenant</span>
                      <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-medium border border-slate-200">Role-based Access</span>
                      <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-medium border border-slate-200">Portal Separation</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. 통합 대시보드 & 알림 */}
              <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-start gap-6">
                  <div className="shrink-0">
                    <div className="w-14 h-14 bg-slate-700 rounded-2xl flex items-center justify-center text-white font-black text-xl">
                      04
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-black text-slate-900 mb-3">통합 대시보드 & 브라우저 알림</h3>
                    <p className="text-base text-slate-600 leading-relaxed mb-4">
                      일일 매출 현황, 배송/재고/명세서 상태를 <span className="font-semibold text-slate-900">실시간 대시보드</span>에서 한눈에 확인하고, 
                      새 명세서 도착 및 확인 요청 시 <span className="font-semibold text-slate-900">브라우저 알림</span>으로 즉시 통보받습니다.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-medium border border-slate-200">Dashboard</span>
                      <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-medium border border-slate-200">Browser Notification</span>
                      <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-medium border border-slate-200">Real-time Status</span>
                    </div>
                  </div>
                </div>
              </div>
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 text-xs md:text-[13px] text-slate-200/90 font-medium">
                  <CheckLine
                    icon={<Database size={16} />}
                    text="멀티테넌트 아키텍처 설계 및 구현"
                  />
                  <CheckLine
                    icon={<Lock size={16} />}
                    text="역할 기반 접근 제어(RBAC) 구현"
                  />
                  <CheckLine
                    icon={<MapPin size={16} />}
                    text="Google Maps API 기반 배송 추적"
                  />
                  <CheckLine
                    icon={<FileText size={16} />}
                    text="PDF 파싱 및 자동 명세서 생성"
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
      {/* 시스템 구조 + 아키텍처 이미지 - 하나의 카드로 */}
      <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h4 className="text-lg font-black text-slate-900 mb-4">시스템 구조</h4>
        
        {/* 스택 표 */}
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

        {/* 아키텍처 이미지 */}
        <div className="mb-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/assets/onliner-architecture.png" 
            alt="Onliner System Architecture"
            className="w-full h-auto rounded-xl border border-slate-200 shadow-sm"
          />
        </div>

        {/* 설명 */}
        <p className="text-sm text-slate-500 text-center">
          병원/도매업체 포털 분리 및 WebSocket 기반 실시간 채팅 시스템
        </p>
      </div>

      {/* 인증 플로우 */}
      <div className="mt-8 pt-6 border-t border-slate-200">
        <h4 className="text-lg font-black text-slate-900 mb-4 flex items-center gap-2">
          <Lock className="text-slate-600" size={20} />
          인증 및 권한 관리 플로우
        </h4>
        <div className="bg-slate-50 rounded-xl p-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div className="flex-1 text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Users className="text-slate-600" size={24} />
              </div>
              <p className="text-sm font-bold text-slate-900">사용자 로그인</p>
              <p className="text-xs text-slate-500 mt-1">업체 코드 + 이메일/비밀번호</p>
            </div>
            <ChevronRight className="text-slate-400 hidden md:block" size={24} />
            <div className="flex-1 text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Lock className="text-slate-600" size={24} />
              </div>
              <p className="text-sm font-bold text-slate-900">역할 기반 권한 부여</p>
              <p className="text-xs text-slate-500 mt-1">MASTER / SALES / WAREHOUSE</p>
            </div>
            <ChevronRight className="text-slate-400 hidden md:block" size={24} />
            <div className="flex-1 text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <ShieldCheck className="text-slate-600" size={24} />
              </div>
              <p className="text-sm font-bold text-slate-900">메뉴 필터링</p>
              <p className="text-xs text-slate-500 mt-1">권한에 따른 접근 제어</p>
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
    <div className="bg-white rounded-[24px] md:rounded-[32px] p-6 md:p-8 border-2 border-slate-200 shadow-sm hover:shadow-lg hover:border-indigo-200 transition-all">
      <div className="flex gap-4 md:gap-6 items-start">
        <div className="shrink-0">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl md:rounded-2xl flex items-center justify-center border-2 border-indigo-100">
            {icon}
          </div>
          <span className="block text-center text-lg md:text-xl font-black text-slate-200 mt-1 md:mt-2">{num}</span>
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-lg md:text-xl font-black text-slate-900 mb-3 md:mb-4 break-normal">{title}</h4>
          <ul className="space-y-2 md:space-y-3">
            {items.map((item, i) => (
              <li key={i} className="flex gap-2 md:gap-3 items-start">
                <span className="text-indigo-500 font-bold shrink-0 mt-0.5 md:mt-1 text-xs md:text-sm">•</span>
                <span className="text-sm md:text-base text-slate-600 leading-relaxed font-medium break-normal flex-1 min-w-0" style={{ wordBreak: 'keep-all' }}>{item}</span>
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
    <div className="bg-white rounded-[24px] md:rounded-[32px] p-6 md:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all">
      <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
        <div className="p-2 md:p-3 bg-slate-50 rounded-xl md:rounded-2xl shrink-0">{icon}</div>
        <h3 className="text-lg md:text-xl font-black text-slate-900 break-normal flex-1 min-w-0" style={{ wordBreak: 'keep-all' }}>{title}</h3>
      </div>
      <ul className="space-y-2 md:space-y-3">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex gap-2 md:gap-3 text-sm md:text-base text-slate-600 leading-relaxed font-medium"
          >
            <span className="text-indigo-500 font-bold shrink-0 mt-0.5">•</span>
            <span className="break-normal flex-1 min-w-0" style={{ wordBreak: 'keep-all' }}>{item}</span>
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
          <div key={b.group} className="grid grid-cols-12 gap-4 p-4 md:p-7 items-center hover:bg-slate-50 transition-colors">
            <div className="col-span-12 md:col-span-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              {b.group}
            </div>
            <div className="col-span-12 md:col-span-9 flex flex-wrap gap-2">
              {b.items.map((item) => (
                <span key={item} className="px-3 py-1 md:px-4 md:py-1.5 bg-white text-slate-700 rounded-xl text-[10px] md:text-xs font-bold border border-slate-200 shadow-sm">
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
