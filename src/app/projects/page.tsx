'use client';

import Link from "next/link";
import { tecnologies } from "../ui/TechStack";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Dionisio Wines",
    description: "Plataforma e-commerce para viñedos con carrito de compras y panel de administración.",
    imageSrc: "https://res.cloudinary.com/dh6ipg8bj/image/upload/v1701278366/parking-resercar-app/y5xinacoqoql66ywepna.jpg",
    imageAlt: "Dionisio Wines",
    tech: tecnologies.filter((t) => ["React", "Node.js", "Express.js", "PostgreSQL"].includes(t.name)),
    repo: "https://www.github.com/josegermanx",
    demo: "https://www.betacode.cl",
  },
  {
    id: 2,
    name: "APP Car",
    description: "Sistema de reserva de parking con gestión de vehículos en tiempo real.",
    imageSrc: "https://res.cloudinary.com/dh6ipg8bj/image/upload/v1701278366/parking-resercar-app/y5xinacoqoql66ywepna.jpg",
    imageAlt: "APP Car",
    tech: tecnologies.filter((t) => ["React", "Node.js", "Express.js", "MySQL"].includes(t.name)),
    repo: "https://www.github.com/josegermanx",
    demo: "https://www.betacode.cl",
  },
  {
    id: 3,
    name: "Portfolio",
    description: "Sitio web personal con blog, terminal interactiva y sección de proyectos.",
    imageSrc: "https://res.cloudinary.com/dh6ipg8bj/image/upload/v1701278366/parking-resercar-app/y5xinacoqoql66ywepna.jpg",
    imageAlt: "Portfolio",
    tech: tecnologies.filter((t) => ["Next.js", "Tailwind CSS", "TypeScript", "Jest"].includes(t.name)),
    repo: "https://www.github.com/josegermanx",
    demo: "https://www.betacode.cl",
  },
  {
    id: 4,
    name: "Agendamiento de citas",
    description: "App de gestión de citas médicas con notificaciones y calendario integrado.",
    imageSrc: "https://res.cloudinary.com/dh6ipg8bj/image/upload/v1701278366/parking-resercar-app/y5xinacoqoql66ywepna.jpg",
    imageAlt: "Agendamiento de citas",
    tech: tecnologies.filter((t) => ["React", "Node.js", "Express.js", "PostgreSQL"].includes(t.name)),
    repo: "https://www.github.com/josegermanx",
    demo: "https://www.betacode.cl",
  },
  {
    id: 5,
    name: "Gestión de inventario",
    description: "Sistema ERP para control de stock, entradas, salidas y reportes.",
    imageSrc: "https://res.cloudinary.com/dh6ipg8bj/image/upload/v1701278366/parking-resercar-app/y5xinacoqoql66ywepna.jpg",
    imageAlt: "Gestión de inventario",
    tech: tecnologies.filter((t) => ["React", "Node.js", "Express.js", "MySQL"].includes(t.name)),
    repo: "https://www.github.com/josegermanx",
    demo: "https://www.betacode.cl",
  },
  {
    id: 6,
    name: "Gestión de ventas",
    description: "Dashboard de ventas con métricas, gráficos y exportación de reportes.",
    imageSrc: "https://res.cloudinary.com/dh6ipg8bj/image/upload/v1701278366/parking-resercar-app/y5xinacoqoql66ywepna.jpg",
    imageAlt: "Gestión de ventas",
    tech: tecnologies.filter((t) => ["React", "Node.js", "Express.js", "MongoDB", "TypeScript"].includes(t.name)),
    repo: "https://www.github.com/josegermanx",
    demo: "https://www.betacode.cl",
  },
  {
    id: 7,
    name: "TODO Front End App",
    description: "Aplicación de tareas con filtros, persistencia local y animaciones CSS.",
    imageSrc: "https://res.cloudinary.com/dh6ipg8bj/image/upload/v1701278366/parking-resercar-app/y5xinacoqoql66ywepna.jpg",
    imageAlt: "TODO Front End App",
    tech: tecnologies.filter((t) => ["HTML5", "CSS3", "JavaScript"].includes(t.name)),
    repo: "https://www.github.com/josegermanx",
    demo: "https://www.betacode.cl",
  },
];

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
            Proyectos en los que he participado y las tecnologías utilizadas en cada uno.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(96,165,250,0.25)";
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(96,165,250,0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay with links */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Link
                    href={product.repo}
                    target="_blank"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-white transition-all"
                    style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.2)" }}
                  >
                    <Image
                      src="https://simpleicons.org/icons/github.svg"
                      alt="GitHub"
                      width={14}
                      height={14}
                      className="invert"
                    />
                    Repo
                  </Link>
                  <Link
                    href={product.demo}
                    target="_blank"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white transition-all"
                    style={{ background: "linear-gradient(135deg, #3b82f6, #22d3ee)" }}
                  >
                    Demo →
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                <h3 className="font-semibold text-slate-100 text-base">
                  {product.name}
                </h3>
                <p className="mt-1.5 text-xs text-slate-500 leading-relaxed flex-1">
                  {product.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {product.tech.map((tech) => (
                    <div
                      key={tech.id}
                      className="flex items-center gap-1 px-2 py-1 rounded-lg"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                      title={tech.name}
                    >
                      <Image
                        src={tech.imageLogo}
                        alt={tech.name}
                        width={12}
                        height={12}
                        className="invert opacity-60"
                      />
                      <span className="text-[10px] text-slate-500">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
