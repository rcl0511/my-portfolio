import { PROJECTS_DATA } from "@/components/ProjectComponent";
import ProjectDetailPage from "@/components/DetailedPage";

export default function Page({ params }: { params: { id: string } }) {
  // URL의 id와 일치하는 프로젝트 데이터 찾기
  const project = PROJECTS_DATA.find((p) => p.id === params.id);

  if (!project) {
    return (
      <div className="h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-black text-slate-900 mb-4">404</h1>
          <p className="text-slate-600 text-lg">존재하지 않는 프로젝트입니다.</p>
          <a href="/#projects" className="mt-8 inline-block px-8 py-4 bg-slate-900 hover:bg-emerald-600 text-white font-bold rounded-full transition-all text-sm tracking-widest uppercase">
            Back to Projects
          </a>
        </div>
      </div>
    );
  }

  return <ProjectDetailPage project={project} />;
}
