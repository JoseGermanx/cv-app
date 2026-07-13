import Link from "next/link";
import { projects } from "../lib/projects";

export default function Page() {
  return (
    <div style={{ background: "#07090f", minHeight: "100vh" }} className="text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight gradient-text inline-block">
            Proyectos
          </h1>
          <p className="mt-3 text-slate-400 text-base max-w-xl">
            Proyectos personales que he desarrollado y que puedes probar en línea.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/25 hover:bg-white/[0.05]"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.05] border border-white/[0.07] group-hover:border-blue-400/30 transition-colors">
                <project.icon className="h-6 w-6 text-slate-400 group-hover:text-blue-400 transition-colors" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-100 text-base group-hover:text-white transition-colors">
                {project.name}
              </h3>
              <p className="mt-1.5 text-xs text-slate-500 leading-relaxed flex-1">
                {project.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-slate-400 group-hover:text-blue-400 transition-colors">
                Ver proyecto →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
