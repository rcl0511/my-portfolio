"use client";
import { motion } from "framer-motion";
import { ArrowLeft, Github, Youtube, ExternalLink, CheckCircle2, Monitor, Zap } from "lucide-react";
import Link from "next/link";

export default function ProjectDetailPage({ project }: { project: any }) {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* 헤더 & 백 버튼 */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-20 py-6 flex items-center justify-between">
          <Link href="/#projects" className="group flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
          <div className="flex items-center gap-4">
            {project.links.github && (
              <a href={project.links.github} target="_blank" className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                <Github size={20} />
              </a>
            )}
            {project.links.video && project.links.video !== "#" && (
              <a href={project.links.video} target="_blank" className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                <Youtube size={20} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* 히어로 섹션 */}
      <section className="relative py-20 md:py-32 px-6 md:px-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-emerald-600 font-mono text-xs tracking-widest uppercase">{project.period}</span>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mt-4 mb-6 tracking-tighter">
              {project.title}
            </h1>
            
            <div className="flex flex-wrap gap-6 mb-8 text-sm">
              <div className="flex items-center gap-2 font-bold">
                <CheckCircle2 size={18} className="text-emerald-500" />
                Contribution: {project.contribution}
              </div>
              <div className="flex items-center gap-2 font-bold">
                <Monitor size={18} className="text-emerald-500" />
                {project.platform}
              </div>
              <div className="flex items-center gap-2 font-bold">
                <Zap size={18} className="text-emerald-500" />
                {project.type}
              </div>
            </div>

            <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
              {project.summary}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 메인 콘텐츠 */}
      <section className="py-20 md:py-32 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* 좌측: 상세 내용 */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* Problem & Solution */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <h2 className="text-3xl font-black text-slate-900 mb-8 tracking-tighter">Problem & Solution</h2>
              
              <div className="space-y-8">
                <div className="p-8 bg-red-50/50 border border-red-100 rounded-2xl">
                  <h3 className="text-lg font-bold text-red-600 mb-3">⚠️ Problem</h3>
                  <p className="text-slate-700 leading-relaxed">{project.problem}</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-emerald-600 mb-4">✓ Solution</h3>
                  {project.solution.map((s: string, i: number) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="flex gap-4 p-4 bg-emerald-50/50 rounded-xl border border-emerald-100"
                    >
                      <span className="text-emerald-600 font-bold text-lg flex-shrink-0">→</span>
                      <p className="text-slate-700 leading-relaxed">{s}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* My Role & Impact */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <h2 className="text-3xl font-black text-slate-900 mb-8 tracking-tighter">My Role & Impact</h2>
              
              <div className="space-y-8">
                <div className="p-8 bg-blue-50/50 border border-blue-100 rounded-2xl">
                  <h3 className="text-lg font-bold text-blue-600 mb-3">💼 My Responsibility</h3>
                  <p className="text-slate-700 leading-relaxed">{project.role}</p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Key Features & Achievements</h3>
                  {project.features.map((f: string, i: number) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                    >
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span className="text-slate-700">{f}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* 우측: 기술 스택 & 링크 */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="lg:col-span-1">
            
            {/* Tech Stack */}
            <div className="sticky top-32 space-y-8">
              <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-[0.2em] mb-6">Tech Stack</h3>
                <div className="space-y-3">
                  {project.tech.map((t: string, i: number) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + i * 0.05 }}
                      className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-700 hover:border-emerald-300 hover:text-emerald-600 transition-all text-center"
                    >
                      {t}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-[0.2em] mb-6">Resources</h3>
                <div className="space-y-3">
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-lg hover:border-slate-300 hover:shadow-lg transition-all group">
                      <Github size={20} className="group-hover:text-slate-900" />
                      <span className="font-bold text-sm text-slate-700 group-hover:text-slate-900">GitHub Repository</span>
                      <ExternalLink size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  )}
                  {project.links.video && project.links.video !== "#" && (
                    <a href={project.links.video} target="_blank" className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-lg hover:border-slate-300 hover:shadow-lg transition-all group">
                      <Youtube size={20} className="text-red-500 group-hover:text-red-600" />
                      <span className="font-bold text-sm text-slate-700 group-hover:text-slate-900">Demo Video</span>
                      <ExternalLink size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  )}
                </div>
              </div>

              {/* 특허 배지 */}
              {project.isPatent && (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center">
                  <p className="text-sm font-black text-emerald-600 uppercase tracking-widest mb-2">✨ Patent Pending</p>
                  <p className="text-xs text-emerald-600 leading-relaxed">이 프로젝트는 현재 특허 출원 진행 중입니다.</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 다른 프로젝트 탐색 */}
      <section className="py-20 md:py-32 px-6 md:px-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-12 tracking-tighter">Explore Other Projects</h2>
          <Link href="/#projects" className="inline-block px-8 py-4 bg-slate-900 hover:bg-emerald-600 text-white font-bold rounded-full transition-all text-sm tracking-widest uppercase">
            Back to All Projects
          </Link>
        </div>
      </section>
    </main>
  );
}
