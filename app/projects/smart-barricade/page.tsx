// app/projects/smart-barricade/page.tsx
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
  CheckCircle2,
  ShieldAlert,
  Wifi,
  Bluetooth,
  Cpu,
  Gauge,
  Wrench,
  Workflow,
  Info,
  Radar,
  Cable,
  Zap,
} from "lucide-react";

import { PROJECTS_DATA } from "@/components/projects.data";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ========================================================================== */
export default async function SmartBarricadePage() {
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
          <div className="absolute top-0 left-1/3 w-[520px] h-[520px] bg-blue-700 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[420px] h-[420px] bg-cyan-600 rounded-full blur-[130px]" />
        </div>

        {/* 프로젝트 네비게이션 아이콘 */}
        <HeroNavigation currentProjectId="smart-barricade" />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center py-4 md:py-8">
          <div className="lg:col-span-7">
            
            <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <span className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-blue-700 text-white text-xs md:text-sm font-black tracking-widest shadow-lg shadow-blue-300/40">
                🏆 2025 SMU 캡스톤 디자인 경진대회 대상(교내)
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-700 text-white text-s font-black tracking-widest shadow-lg shadow-blue-300/40">
                🏆 2025 기계인더피날레(과 대회) 1등
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-700 text-white text-s font-black tracking-widest shadow-lg shadow-blue-300/40">
                대학 성과발표 대표 참가
              </span>
            </div>

            

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-4 md:mb-6 leading-tight">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mb-6 md:mb-10">
                아두이노 센서 기반 스마트 제어 어플리케이션 시스템
            </p>

            <div className="flex flex-wrap gap-4">
              {project.links?.github && (
                <OutlineButton href={project.links.github} icon={<Github size={18} />}>
                  소스코드
                </OutlineButton>
              )}
              <PrimaryButton
  href="https://github.com/rcl0511/smart-barricade-app/releases/tag/02"
  icon={<ExternalLink size={18} />}
>
  앱 다운받기
</PrimaryButton>
            </div>
          </div>

          {/* 우측: 앱 화면(연결 상태 이미지) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <PhoneImageMockup
              src= "https://github.com/user-attachments/assets/f2d1c70a-7888-4606-8fa3-9d1237cb4b51"
              title="Connected State (BLE + WiFi AP)"
            />
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
              subtitle="왜 이 시스템이 필요한가"
            />
            <div className="bg-white rounded-[24px] md:rounded-[32px] p-6 md:p-8 border border-slate-200 shadow-sm transition-all hover:shadow-md">
              <p className="text-base md:text-lg text-slate-700 leading-relaxed whitespace-pre-line mb-6 md:mb-10">
                {project.problem ??
                  "군중 밀집 상황에서 위험을 ‘정량화’하기 어렵고, 사후 대응에 의존하는 한계가 있습니다. Smart Barricade는 물리적 하중(압력) 데이터를 기반으로 위험을 감지하고, 현장 물리 제어(게이트/액추에이터)까지 연결합니다."}
              </p>

              <div className="p-4 md:p-6 bg-blue-50 rounded-2xl border border-blue-100">
                <div className="flex items-center gap-2 text-blue-800 mb-4 font-bold">
                  <Sparkles size={20} /> 우리의 접근
                </div>
                <p className="text-sm md:text-[15px] text-blue-900/80 font-medium mb-4">
                  군중 안전 문제를 단순 통제가 아닌, <b>구조·제어·정보 전달이 결합된 시스템 문제</b>로 정의하고 새로운 접근을 시도했습니다.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-8 gap-y-2 md:gap-y-3 text-xs md:text-[13px] text-blue-900/70 font-medium">
                  <li className="flex gap-2">
                    <span>•</span> 압력/하중 기반 실시간 감지
                  </li>
                  <li className="flex gap-2">
                    <span>•</span> 능동형 구조 안정성 향상
                  </li>
                  <li className="flex gap-2">
                    <span>•</span> LED 기반 시각 안내 제공
                  </li>
                  <li className="flex gap-2">
                    <span>•</span> 원격 모니터링 및 제어
                  </li>
                </ul>
              </div>
            </div>
          </article>

          {/* Barricade Hardware */}
          <article>
            <SectionHeader
              title="Barricade Hardware"
              subtitle="실물 바리케이드 시스템"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ImageCard
                title="오픈 전 상태"
                desc="기본 상태의 스마트 바리케이드"
                src="https://github.com/user-attachments/assets/7de933dc-c786-4e7b-afe0-24d696f14379"
              />
              <ImageCard
                title="오픈 후 상태"
                desc="지지대 확장 및 LED 패널 작동 상태"
                src="https://github.com/user-attachments/assets/0bf5b374-ed38-4d3f-8b38-f36995eb85f1"
              />
            </div>
          </article>

          {/* Software Technology - 강조 */}
          <article className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl" />
            
            <div className="relative">
              <SectionHeader
                title="Software Technology"
                subtitle="소프트웨어 핵심 기술 🚀"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 border-2 border-blue-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-100 rounded-xl">
                      <Cpu className="text-blue-600" size={20} />
                    </div>
                    <h3 className="text-base font-black text-slate-900">ESP32 펌웨어</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    센서 데이터 수집 → 과부하 판정 → 액추에이터 제어
                  </p>
                  <div className="space-y-2 text-xs text-slate-500">
                    <p>• 10kg 초과 시 자동 대응</p>
                    <p>• 10초 유지 로직</p>
                    <p>• AUTO/MANUAL 모드</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 border-2 border-indigo-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-indigo-100 rounded-xl">
                      <Wifi className="text-indigo-600" size={20} />
                    </div>
                    <h3 className="text-base font-black text-slate-900">BLE + WiFi 통신</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    이중 통신으로 현장 환경에 유연하게 대응
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-blue-50 rounded-lg p-2 text-center">
                      <p className="text-xs font-bold text-blue-700">BLE</p>
                      <p className="text-xs text-slate-600">실시간</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-2 text-center">
                      <p className="text-xs font-bold text-purple-700">WiFi AP</p>
                      <p className="text-xs text-slate-600">HTTP</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 border-2 border-purple-200 shadow-sm md:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-purple-100 rounded-xl">
                      <Sparkles className="text-purple-600" size={20} />
                    </div>
                    <h3 className="text-base font-black text-slate-900">Android 앱 (Kotlin)</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    실시간 모니터링 + 원격 제어
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs text-slate-500">
                    <p>• 실시간 그래프</p>
                    <p>• 상태 모니터링</p>
                    <p>• 원격 제어</p>
                    <p>• BLE 연결 관리</p>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Hardware Technology */}
          <article>
            <SectionHeader
              title="Hardware Technology"
              subtitle="하드웨어 핵심 기술"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-50 rounded-xl">
                    <Gauge className="text-blue-600" size={20} />
                  </div>
                  <h3 className="text-base font-black text-slate-900">로드셀 센서</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  3개의 로드셀 + HX711로 하중 측정 → 중앙값 필터링으로 노이즈 제거
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-indigo-50 rounded-xl">
                    <ShieldAlert className="text-indigo-600" size={20} />
                  </div>
                  <h3 className="text-base font-black text-slate-900">구조 안정성</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  A자 브레이싱 + 지지대 확장으로 전도 안전율 <b className="text-green-600">5.9배</b> 향상
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-50 rounded-xl">
                    <Cpu className="text-purple-600" size={20} />
                  </div>
                  <h3 className="text-base font-black text-slate-900">액추에이터</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  4채널 릴레이 제어 → 선형 액추에이터 작동 → LED 패널 연동
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-slate-50 rounded-xl">
                    <Zap className="text-slate-600" size={20} />
                  </div>
                  <h3 className="text-base font-black text-slate-900">전원</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  12V 외부 전원 + 배터리팩 → 독립 운용 가능
                </p>
              </div>
            </div>
          </article>

          

          {/* UI & Monitoring */}
          <article>
            <SectionHeader
              title="UI & Monitoring"
              subtitle="앱 화면 / 연결 상태"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 justify-items-center">
              <div className="flex flex-col items-center">
                <PhoneImageMockup
                  src="https://github.com/user-attachments/assets/22065484-616c-4e60-b2a3-43a813b78a84"
                  title="UI (Lower Section)"
                />
                <p className="mt-4 text-sm text-slate-600 font-medium text-center">
                  센서/모드/제어 영역(하단 UI)
                </p>
              </div>
              <div className="flex flex-col items-center">
                <PhoneImageMockup
                  src="https://github.com/user-attachments/assets/948f4d8d-8437-471b-96db-5a611e0916a8"
                  title="Connected State"
                />
                <p className="mt-4 text-sm text-slate-600 font-medium text-center">
                  BLE 연결 상태 및 모니터링
                </p>
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
              <div className="p-6 bg-slate-100 rounded-2xl text-[18px] md:text-[20px] text-slate-600 font-medium flex items-start gap-4">
                <Info size={28} className="shrink-0 text-blue-600 mt-0.5" />
                <span>
                  현장 통신을 위해 BLE와 WiFi(AP)를 병행하고, 하중 센서의 노이즈는
                  필터링(중앙값/평활화)로 안정화했습니다.
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
            <div className="bg-slate-900 rounded-[32px] p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-blue-400 font-black text-xs uppercase tracking-[0.3em] mb-6">
                  Development Role
                </h3>
                <p className="text-xl md:text-m font-medium leading-relaxed text-slate-200 mb-8 whitespace-pre-line">
                  {project.role ??
                    "Android 앱(실시간 모니터링 UI) / BLE GATT 통신 최적화 / 센서 데이터 필터링 및 상태 표시 로직 구현"}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[13px] text-slate-200/90 font-medium">
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

        {/* RIGHT */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="lg:sticky lg:top-24 space-y-6">
            <SummaryCard
              title="Project Snapshot"
              items={[
                { label: "Timeline", value: project.period, icon: <Calendar size={16} /> },
                { label: "Platform", value: project.platform, icon: <Layers size={16} /> },
                { label: "Contribution", value: project.contribution, icon: <Percent size={16} /> },
              ]}
            />

            <div className="bg-gradient-to-br from-blue-700 to-cyan-700 rounded-[32px] p-8 text-white shadow-xl">
              <div className="flex items-center gap-2 mb-8">
                <Sparkles size={18} />
                <h3 className="font-bold uppercase text-[10px] tracking-widest">
                  Core Highlights
                </h3>
              </div>

              <div className="space-y-4">
                <ResultBadge
                  label="Sensor"
                  value="아두이노 센서 기반 실시간 하중 감지"
                />
                <ResultBadge
                  label="Control"
                  value="BLE/ WIFI 로 하드웨어 제어/ 조작"
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
  color: "sky" | "blue";
}) {
  const styles = {
    sky: "bg-sky-500/10 border-sky-400/20 text-sky-400",
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

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-10">
      <p className="text-blue-600 font-black text-xs uppercase tracking-widest mb-2">
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
                 shadow-[0_20px_50px_rgba(16,185,129,0.12)]
                 hover:shadow-[0_20px_60px_rgba(16,185,129,0.22)]
                 flex flex-col items-center text-center group
                 hover:-translate-y-2 transition-all duration-300"
    >
      <div className="mb-4 p-4 bg-slate-50 rounded-2xl group-hover:scale-110 group-hover:bg-blue-50 transition-all duration-300">
        {icon}
      </div>
      <h3 className="font-black text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed font-medium">{desc}</p>
    </div>
  );
}

function ApproachItem({
  num,
  icon,
  title,
  content,
}: {
  num: string;
  icon: React.ReactNode;
  title: string;
  content: string;
}) {
  return (
    <div className="flex gap-6 p-6 rounded-2xl border border-slate-100 bg-white hover:border-blue-100 transition-colors">
      <div className="shrink-0 flex flex-col items-center">
        <span className="text-2xl font-black text-slate-200">{num}</span>
        <div className="mt-3 w-10 h-10 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="min-w-0">
        <h4 className="font-black text-slate-900 mb-2">{title}</h4>
        <pre className="whitespace-pre-wrap text-sm text-slate-600 leading-relaxed font-medium">
          {content}
        </pre>
      </div>
    </div>
  );
}

function SpecPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
        {label}
      </p>
      <p className="mt-2 text-sm font-bold text-slate-800 leading-relaxed">
        {value}
      </p>
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

function ResultBadge({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="bg-white/10 rounded-2xl p-5 border border-white/10 backdrop-blur-md transition-transform hover:scale-[1.02]">
      <p className="text-[10px] font-bold text-blue-100 uppercase mb-2 tracking-tighter">
        {label}
      </p>
      <p className="text-sm font-bold leading-relaxed">{value}</p>
    </div>
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

function ImageCard({
  title,
  desc,
  src,
}: {
  title: string;
  desc: string;
  src: string;
}) {
  return (
    <div className="bg-white rounded-[32px] border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="p-7">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
          {title}
        </p>
        <p className="mt-2 text-sm text-slate-600 font-medium leading-relaxed">
          {desc}
        </p>
      </div>
      <div className="px-6 pb-6">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={title} className="w-full h-auto" />
        </div>
      </div>
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

function PhoneImageMockup({ src, title }: { src: string; title: string }) {
  return (
    <div className="flex justify-center">
      <div className="relative w-[260px] md:w-[320px] aspect-[9/19.5]
                      rounded-[44px] bg-slate-900
                      shadow-[0_30px_90px_rgba(0,0,0,0.35)] p-[10px]">

        <div className="relative w-full h-full rounded-[36px] bg-black overflow-hidden">
          {/* notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2
                          w-36 h-7 bg-black rounded-b-3xl z-20" />

          {/* image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={title}
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

function PrimaryButton({
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
      className="flex items-center gap-3 px-8 py-4 bg-blue-700 hover:bg-blue-600 text-white rounded-full font-black text-sm transition-all shadow-lg shadow-blue-600/20 active:scale-95"
    >
      {icon} {children}
    </a>
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

function TechTable({ tech }: { tech: string[] }) {
  const mapping = [
    { group: "Mobile", keywords: ["kotlin", "android"] },
    { group: "Embedded", keywords: ["esp32", "arduino", "c"] },
    { group: "Comm", keywords: ["ble", "gatt", "wifi", "http"] },
    { group: "Sensing", keywords: ["load", "hx711", "sensor"] },
  ];

  const buckets = mapping
    .map((m) => ({
      group: m.group,
      items: tech.filter((t) => m.keywords.some((k) => t.toLowerCase().includes(k))),
    }))
    .filter((r) => r.items.length > 0);

  return (
    <div className="bg-white rounded-[32px] border border-slate-200 overflow-hidden shadow-sm">
      <div className="grid grid-cols-1 divide-y divide-slate-100">
        {buckets.map((b) => (
          <div
            key={b.group}
            className="grid grid-cols-12 gap-4 p-7 items-center hover:bg-slate-50 transition-colors"
          >
            <div className="col-span-12 md:col-span-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              {b.group}
            </div>
            <div className="col-span-12 md:col-span-9 flex flex-wrap gap-2">
              {b.items.map((item) => (
                <span
                  key={item}
                  className="px-4 py-1.5 bg-white text-slate-700 rounded-xl text-xs font-bold border border-slate-200 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* tech가 매핑에 덜 걸리는 경우 대비 */}
      {!buckets.length ? (
        <div className="p-7">
          <div className="flex flex-wrap gap-2">
            {tech.map((item) => (
              <span
                key={item}
                className="px-4 py-1.5 bg-white text-slate-700 rounded-xl text-xs font-bold border border-slate-200 shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
