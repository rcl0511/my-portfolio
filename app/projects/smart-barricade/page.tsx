// app/projects/smart-barricade/page.tsx
import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft, Github, ExternalLink, Calendar, Layers, Percent, Sparkles,
  ShieldAlert, Wifi, Cpu, Gauge, Wrench, Workflow, Info, Radar, Cable, Zap,
  ChevronLeft, ChevronRight, CheckCircle2
} from "lucide-react";

import { PROJECTS_DATA } from "@/components/projects.data";

/* ==========================================================================
   TYPES
   ========================================================================== */
type PageProps = { params: Promise<{ id: string }> };

/* ==========================================================================
   MAIN PAGE
   ========================================================================== */
export default async function SmartBarricadePage({ params }: PageProps) {
  const { id } = await params;

  if (!Array.isArray(PROJECTS_DATA)) return notFound();
  const project = PROJECTS_DATA.find((p) => p.id === "smart-barricade");
  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-[#F9FBFC] text-slate-900 font-sans selection:bg-blue-100 overflow-x-hidden">
      {/* 1) NAV */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 px-4 sm:px-6 md:px-20 py-3 md:py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
          <div className="hidden sm:block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
            Case Study: {project.title}
          </div>
        </div>
      </nav>

      {/* 2) HERO - 목업 비중 및 수상 실적 강조 */}
      <section className="relative overflow-visible bg-slate-950 pt-12 md:pt-24 pb-12 md:pb-24 px-4 md:px-20">
        <div className="absolute inset-0 opacity-20 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/3 w-[520px] h-[520px] bg-blue-700 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[420px] h-[420px] bg-cyan-600 rounded-full blur-[130px]" />
        </div>

        <HeroNavigation currentProjectId="smart-barricade" />

        <div className="relative max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge text="🏆 2025 SMU 캡스톤 대상" color="sky" />
              <Badge text="🏆 기계인더피날레 1등" color="blue" />
            </div>

            <h1 className="text-4xl md:text-7xl font-black text-white tracking-tight mb-6 leading-tight">
              {project.title}
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mb-10">
              아두이노 센서 기반 스마트 제어 어플리케이션 시스템
            </p>

            <div className="flex flex-wrap gap-4">
              {project.links?.github && (
                <OutlineButton href={project.links.github} icon={<Github size={18} />}>
                  소스코드
                </OutlineButton>
              )}
              <PrimaryButton href="https://github.com/rcl0511/smart-barricade-app/releases/tag/02" icon={<ExternalLink size={18} />}>
                앱 다운받기
              </PrimaryButton>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <PhoneImageMockup 
              src="https://github.com/user-attachments/assets/f2d1c70a-7888-4606-8fa3-9d1237cb4b51" 
              title="Connected State" 
            />
          </div>
        </div>
      </section>

      {/* 4) MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-4 md:px-20 py-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8 space-y-24">
          
          <article>
            <SectionHeader title="Context & Problem" subtitle="왜 이 시스템이 필요한가" />
            <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-50 text-rose-700 text-xs font-bold border border-rose-100">
                문제점
              </div>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-8 whitespace-pre-line">
                {project.problem ?? "군중 밀집 상황에서 위험을 ‘정량화’하기 어렵고, 사후 대응에 의존하는 한계가 있습니다. Smart Barricade는 물리적 하중(압력) 데이터를 기반으로 위험을 감지하고, 현장 물리 제어(게이트/액추에이터)까지 연결합니다."}
              </p>
              <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                <div className="flex items-center gap-2 text-blue-800 mb-4 font-bold">
                  <Sparkles size={20} /> 우리의 접근
                </div>
                <p className="text-sm md:text-[15px] text-blue-900/80 font-medium mb-4">
                  군중 안전 문제를 단순 통제가 아닌, <b>구조·제어·정보 전달이 결합된 시스템 문제</b>로 정의하고 새로운 접근을 시도했습니다.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-sm text-blue-900/75 font-medium">
                  <li className="flex gap-2"><span>•</span> 압력/하중 기반 실시간 감지</li>
                  <li className="flex gap-2"><span>•</span> 능동형 구조 안정성 향상</li>
                  <li className="flex gap-2"><span>•</span> LED 기반 시각 안내 제공</li>
                  <li className="flex gap-2"><span>•</span> 원격 모니터링 및 제어</li>
                </ul>
              </div>
            </div>
          </article>

          <article>
            <SectionHeader title="System Approach" subtitle="왜 이렇게 설계했는가" />
            <div className="space-y-4">
              <ApproachItem num="01" title="하중 데이터 정량화" content="하중 데이터 정량화" />
              <ApproachItem num="02" title="BLE·WiFi 이중 통신" content="BLE·WiFi 이중 통신" />
              <ApproachItem num="03" title="실시간 모니터링 UI" content="실시간 모니터링 UI" />
              <ApproachItem num="04" title="현장 액추에이터 제어" content="현장 액추에이터 제어" />
            </div>
          </article>

          {/* Core Highlights · 성과 - 수상 내역 반영 */}
          <article>
            <div className="bg-gradient-to-br from-blue-700 to-cyan-700 rounded-[28px] p-7 text-white shadow-xl">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles size={18} />
                <h3 className="text-xl font-black tracking-tight">Core Highlights · 성과</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <ResultBadge label="Awards" value="2025 숙명여대 캡스톤 대상" />
                <ResultBadge label="Department" value="2025 계인더피날레 1등" />
                
              </div>
            </div>
          </article>

          <article>
            <SectionHeader title="System Architecture" subtitle="시스템 아키텍처" />
            <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm">
              <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed">
                아키텍처 설계: 센서 → 펌웨어 → 통신 → 앱 제어의 실시간 폐쇄 루프 구성.
              </p>
            </div>
          </article>

          <article>
            <SectionHeader title="Barricade Hardware" subtitle="실물 바리케이드 시스템" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ImageCard title="오픈 전 상태" desc="기본 상태의 스마트 바리케이드" src="https://github.com/user-attachments/assets/7de933dc-c786-4e7b-afe0-24d696f14379" />
              <ImageCard title="오픈 후 상태" desc="지지대 확장 및 LED 패널 작동 상태" src="https://github.com/user-attachments/assets/0bf5b374-ed38-4d3f-8b38-f36995eb85f1" />
            </div>
          </article>

          <article>
            <SectionHeader title="Hardware Technology" subtitle="하드웨어 핵심 기술" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h4 className="font-black text-slate-900 mb-3 flex items-center gap-2"><Gauge size={18} className="text-blue-600"/> 로드셀 센서</h4>
                <p className="text-sm text-slate-600">3개의 로드셀 + HX711로 하중 측정 → 중앙값 필터링으로 노이즈 제거</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h4 className="font-black text-slate-900 mb-3 flex items-center gap-2"><ShieldAlert size={18} className="text-blue-600"/> 구조 안정성</h4>
                <p className="text-sm text-slate-600">A자 브레이싱 + 지지대 확장으로 전도 안전율 5.9배 향상</p>
              </div>
            </div>
          </article>

          <article>
            <SectionHeader title="Engineering Stack" subtitle="사용된 기술 스택" />
            <div className="space-y-6">
              <TechTable tech={project.tech ?? []} />
              <div className="p-6 bg-slate-100 rounded-2xl text-sm text-slate-600 font-medium flex items-start gap-4">
                <Info size={24} className="shrink-0 text-blue-600 mt-0.5" />
                <span>현장 통신을 위해 BLE와 WiFi(AP)를 병행하고, 하중 센서의 노이즈는 필터링(중앙값/평활화)으로 안정화했습니다.</span>
              </div>
            </div>
          </article>

          {/* 통합 요약 카드 */}
          <article>
            <SectionHeader title="Integrated Summary" subtitle="아쉬운점 및 구현 포인트" />
            <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Implementation</p>
                <ul className="space-y-2 text-sm text-slate-700 font-medium">
                  <li className="flex gap-3"><span className="text-blue-600 font-black">•</span><span>BLE GATT 통신 최적화</span></li>
                  <li className="flex gap-3"><span className="text-blue-600 font-black">•</span><span>센서 데이터 필터링</span></li>
                  <li className="flex gap-3"><span className="text-blue-600 font-black">•</span><span>상태 그래프·알림</span></li>
                </ul>
              </div>
              <div className="space-y-4">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Limitations</p>
                <ul className="space-y-2 text-sm text-slate-700 font-medium">
                  <li className="flex gap-3 text-rose-700"><span className="font-black">•</span><span>실외 환경 내구성 검증 필요</span></li>
                  <li className="flex gap-3 text-rose-700"><span className="font-black">•</span><span>장기 운용 시 전력 최적화 과제</span></li>
                </ul>
              </div>
            </div>
          </article>

          <article>
            <SectionHeader title="My Contributions" subtitle="수행 역할 및 구현 포인트" />
            <div className="bg-slate-900 rounded-[32px] p-10 text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-blue-400 font-black text-xs uppercase tracking-[0.3em] mb-6">Development Role</h3>
                <p className="text-lg md:text-xl font-medium leading-relaxed text-slate-200 mb-8 whitespace-pre-line">
                  {project.role ?? "Android 앱 전담 개발 / BLE GATT 통신 연동 / 센서 데이터 시각화 및 제어 UI 구현"}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-200/90 font-medium">
                  <CheckLine icon={<Radar size={16} />} text="실시간 하중 시각화(그래프/상태)" />
                  <CheckLine icon={<Cable size={16} />} text="BLE Notify 파싱 + Write 제어" />
                  <CheckLine icon={<Workflow size={16} />} text="AUTO/MANUAL 모드 전환 UX" />
                  <CheckLine icon={<Wrench size={16} />} text="노이즈 억제(필터링) & 예외 처리" />
                </div>
              </div>
              <Cpu className="absolute -bottom-10 -right-10 text-white/5 w-64 h-64 rotate-12" />
            </div>
          </article>
        </div>

        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-24 space-y-6">
            <SummaryCard 
              title="Project Snapshot"
              items={[
                { label: "Timeline", value: project.period, icon: <Calendar size={16}/> },
                { label: "Platform", value: project.platform, icon: <Layers size={16}/> },
                { label: "Contribution", value: project.contribution, icon: <Percent size={16}/> }
              ]}
            />
          </div>
        </aside>
      </section>
    </main>
  );
}

/* ==========================================================================
   INTERNAL COMPONENTS
   ========================================================================== */

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-8 w-full group">
      <div className="flex items-end gap-3 mb-2">
        <div className="w-1 h-7 bg-blue-600 rounded-full group-hover:h-8 transition-all duration-300" />
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

function PhoneImageMockup({ src, title }: { src: string; title: string }) {
  return (
    <div className="relative w-[260px] md:w-[320px] transition-all duration-700 group">
      <div className="absolute -inset-10 bg-blue-500 rounded-[3rem] blur-[100px] opacity-15 pointer-events-none" />
      <div className="relative bg-slate-900 rounded-[44px] p-2 md:p-3 border-[1px] border-white/10 shadow-2xl overflow-hidden aspect-[9/19.5]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-20" />
        <div className="relative w-full h-full rounded-[36px] bg-black overflow-hidden">
          <img src={src} alt={title} className="absolute inset-0 w-full h-full object-contain bg-black" loading="lazy" />
        </div>
      </div>
    </div>
  );
}

function ResultBadge({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white/10 rounded-2xl p-5 border border-white/10 backdrop-blur-md transition-transform hover:scale-[1.02]">
      <p className="text-[10px] font-bold text-blue-100 uppercase mb-2 tracking-tighter">{label}</p>
      <p className="text-sm font-bold leading-relaxed">{value}</p>
    </div>
  );
}

function Badge({ text, color }: { text: string; color: "sky" | "blue" }) {
  return (
    <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-700 text-white text-xs md:text-sm font-black tracking-widest shadow-lg shadow-blue-300/40">
      {text}
    </span>
  );
}

function DataFlowCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center text-center">
      <div className="mb-4 p-4 bg-slate-50 rounded-2xl">{icon}</div>
      <h3 className="font-black text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed font-medium">{desc}</p>
    </div>
  );
}

function ImageCard({ title, desc, src }: { title: string; desc: string; src: string }) {
  return (
    <div className="bg-white rounded-[32px] border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="p-7">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{title}</p>
        <p className="mt-2 text-sm text-slate-600 font-medium leading-relaxed">{desc}</p>
      </div>
      <div className="px-6 pb-6">
        <div className="rounded-2xl border border-slate-200 overflow-hidden">
          <img src={src} alt={title} className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
}

function ApproachItem({ num, title, content }: { num: string; title: string; content: string }) {
  return (
    <div className="flex gap-6 p-6 rounded-2xl border border-slate-100 bg-white hover:border-blue-100 transition-colors">
      <span className="text-2xl font-black text-slate-200">{num}</span>
      <div>
        <h4 className="font-bold text-slate-900 mb-2">{title}</h4>
        <p className="text-sm text-slate-600 font-medium">{content}</p>
      </div>
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

function PrimaryButton({ href, children, icon }: { href: string; children: React.ReactNode; icon: React.ReactNode }) {
  return (
    <a href={href} target="_blank" className="flex items-center gap-3 px-8 py-4 bg-blue-700 hover:bg-blue-600 text-white rounded-full font-black text-sm transition-all shadow-lg active:scale-95">
      {icon} {children}
    </a>
  );
}

function OutlineButton({ href, children, icon }: { href: string; children: React.ReactNode; icon: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/20 rounded-full font-black text-sm transition-all active:scale-95">
      {icon} {children}
    </a>
  );
}

function CheckLine({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 px-4 py-3">
      <div className="text-blue-300">{icon}</div>
      <p className="text-[13px] font-semibold text-slate-100">{text}</p>
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
    { group: "Mobile", keywords: ["kotlin", "android"] },
    { group: "Embedded", keywords: ["esp32", "arduino", "c"] },
    { group: "Comm", keywords: ["ble", "gatt", "wifi", "http"] },
    { group: "Sensing", keywords: ["load", "hx711", "sensor"] },
  ];
  const buckets = mapping.map(m => ({ group: m.group, items: tech.filter(t => m.keywords.some(k => t.toLowerCase().includes(k))) })).filter(r => r.items.length > 0);

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