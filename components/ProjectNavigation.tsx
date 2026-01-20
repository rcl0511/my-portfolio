"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PROJECTS_DATA } from "./projects.data";

interface ProjectNavigationProps {
  currentProjectId: string;
}

export function ProjectNavigation({
  currentProjectId,
}: ProjectNavigationProps) {
  // Featured 프로젝트만 필터링 (sosai, smart-barricade, onliner, baseball-news)
  const featuredProjects = PROJECTS_DATA.filter(
    (p) => p.id === "sosai" || p.id === "smart-barricade" || p.id === "onliner" || p.id === "baseball-news"
  );

  const currentIndex = featuredProjects.findIndex(
    (p) => p.id === currentProjectId
  );

  if (currentIndex === -1) return null;

  const prevProject =
    currentIndex > 0 ? featuredProjects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < featuredProjects.length - 1
      ? featuredProjects[currentIndex + 1]
      : null;

  return (
    <div className="relative max-w-7xl mx-auto px-6 md:px-20 py-8 border-b border-slate-200 bg-white/50 backdrop-blur-sm min-h-[120px] flex items-center">
      {/* 왼쪽 화살표 - 슬라이드 형태로 크게 */}
      {prevProject && (
        <Link
          href={`/projects/${prevProject.id}`}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 group flex items-center gap-4 px-8 py-6 rounded-2xl hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all border-2 border-indigo-200 hover:border-indigo-400 hover:shadow-2xl hover:shadow-indigo-500/30 bg-white z-20 hover:scale-105"
        >
          <div className="p-4 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl group-hover:from-indigo-600 group-hover:to-indigo-700 transition-all shadow-lg">
            <ChevronLeft
              size={36}
              className="text-white group-hover:scale-110 transition-transform"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-[11px] font-bold text-indigo-500 uppercase tracking-widest mb-1">
              Previous
            </p>
            <p className="text-base font-black text-slate-900 leading-tight group-hover:text-indigo-600 transition-colors">
              {prevProject.title}
            </p>
          </div>
        </Link>
      )}

      {/* 오른쪽 화살표 - 슬라이드 형태로 크게 */}
      {nextProject && (
        <Link
          href={`/projects/${nextProject.id}`}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 group flex items-center gap-4 px-8 py-6 rounded-2xl hover:bg-gradient-to-l hover:from-indigo-50 hover:to-purple-50 transition-all border-2 border-indigo-200 hover:border-indigo-400 hover:shadow-2xl hover:shadow-indigo-500/30 bg-white z-20 hover:scale-105 text-right"
        >
          <div className="flex flex-col">
            <p className="text-[11px] font-bold text-indigo-500 uppercase tracking-widest mb-1">
              Next
            </p>
            <p className="text-base font-black text-slate-900 leading-tight group-hover:text-indigo-600 transition-colors">
              {nextProject.title}
            </p>
          </div>
          <div className="p-4 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl group-hover:from-indigo-600 group-hover:to-indigo-700 transition-all shadow-lg">
            <ChevronRight
              size={36}
              className="text-white group-hover:scale-110 transition-transform"
            />
          </div>
        </Link>
      )}
    </div>
  );
}
