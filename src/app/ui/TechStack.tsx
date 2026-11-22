'use client';

import Image from "next/image"

export const tecnologies = [
    { id: 1,  name: 'React',       imageLogo: "https://cdn.jsdelivr.net/npm/simple-icons@16.38.0/icons/react.svg",          focus: "Frontend" },
    { id: 2,  name: 'Next.js',     imageLogo: "https://cdn.jsdelivr.net/npm/simple-icons@16.38.0/icons/nextdotjs.svg",       focus: "Frontend" },
    { id: 3,  name: 'Tailwind CSS',imageLogo: "https://cdn.jsdelivr.net/npm/simple-icons@16.38.0/icons/tailwindcss.svg",     focus: "Frontend" },
    { id: 22, name: 'HTML5',       imageLogo: "https://cdn.jsdelivr.net/npm/simple-icons@16.38.0/icons/html5.svg",           focus: "Frontend" },
    { id: 23, name: 'CSS3',        imageLogo: "https://cdn.jsdelivr.net/npm/simple-icons@16.38.0/icons/css.svg",            focus: "Frontend" },
    { id: 26, name: 'Redux',       imageLogo: "https://cdn.jsdelivr.net/npm/simple-icons@16.38.0/icons/redux.svg",           focus: "Frontend" },
    { id: 27, name: 'Astro',       imageLogo: "https://cdn.jsdelivr.net/npm/simple-icons@16.38.0/icons/astro.svg",           focus: "Frontend" },
    { id: 4,  name: 'Node.js',     imageLogo: "https://cdn.jsdelivr.net/npm/simple-icons@16.38.0/icons/nodedotjs.svg",       focus: "Backend" },
    { id: 5,  name: 'Express.js',  imageLogo: "https://cdn.jsdelivr.net/npm/simple-icons@16.38.0/icons/express.svg",        focus: "Backend" },
    { id: 6,  name: 'MongoDB',     imageLogo: "https://cdn.jsdelivr.net/npm/simple-icons@16.38.0/icons/mongodb.svg",         focus: "Backend" },
    { id: 7,  name: 'PostgreSQL',  imageLogo: "https://cdn.jsdelivr.net/npm/simple-icons@16.38.0/icons/postgresql.svg",     focus: "Backend" },
    { id: 16, name: 'Flask',       imageLogo: "https://cdn.jsdelivr.net/npm/simple-icons@16.38.0/icons/flask.svg",           focus: "Backend" },
    { id: 18, name: 'MySQL',       imageLogo: "https://cdn.jsdelivr.net/npm/simple-icons@16.38.0/icons/mysql.svg",           focus: "Backend" },
    { id: 19, name: 'TypeScript',  imageLogo: "https://cdn.jsdelivr.net/npm/simple-icons@16.38.0/icons/typescript.svg",     focus: "Programming" },
    { id: 24, name: 'JavaScript',  imageLogo: "https://cdn.jsdelivr.net/npm/simple-icons@16.38.0/icons/javascript.svg",     focus: "Programming" },
    { id: 20, name: 'Python',      imageLogo: "https://cdn.jsdelivr.net/npm/simple-icons@16.38.0/icons/python.svg",          focus: "Programming" },
    { id: 10, name: 'Google Cloud',         imageLogo: "https://cdn.jsdelivr.net/npm/simple-icons@16.38.0/icons/googlecloud.svg", focus: "DevOps" },
    { id: 12, name: 'Docker',      imageLogo: "https://cdn.jsdelivr.net/npm/simple-icons@16.38.0/icons/docker.svg",          focus: "DevOps" },
    { id: 13, name: 'Jest',        imageLogo: "https://cdn.jsdelivr.net/npm/simple-icons@16.38.0/icons/jest.svg",            focus: "DevOps" },
    { id: 28, name: 'Git',         imageLogo: "https://cdn.jsdelivr.net/npm/simple-icons@16.38.0/icons/git.svg",             focus: "DevOps" },
    { id: 29, name: 'GitHub',      imageLogo: "https://cdn.jsdelivr.net/npm/simple-icons@16.38.0/icons/github.svg",          focus: "DevOps" },
]

const categoryAccent: Record<string, string> = {
  Frontend:    "rgba(96,165,250,0.7)",   // blue
  Backend:     "rgba(34,211,238,0.7)",   // cyan
  Programming: "rgba(167,139,250,0.7)",  // purple
  DevOps:      "rgba(52,211,153,0.7)",   // emerald
}

const TechStack = () => {
    return (
        <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-16">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold tracking-tight gradient-text inline-block">
                    Tecnologías
                </h2>
                <p className="mt-3 text-slate-400 text-base max-w-md mx-auto">
                    Stack que utilizo en proyectos profesionales.
                </p>
            </div>

            <div className="flex flex-col gap-6">
                {["Frontend", "Backend", "Programming", "DevOps"].map((focus) => (
                    <div
                        key={focus}
                        className="rounded-2xl p-6"
                        style={{
                            background: "rgba(255,255,255,0.03)",
                            border: "1px solid rgba(255,255,255,0.07)",
                        }}
                    >
                        <div className="flex items-center gap-2 mb-5">
                            <span
                                className="w-1 h-5 rounded-full"
                                style={{ background: categoryAccent[focus] }}
                            />
                            <h3 className="text-sm font-semibold tracking-widest uppercase text-slate-400">
                                {focus}
                            </h3>
                        </div>

                        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
                            {tecnologies
                                .filter((tec) => tec.focus === focus)
                                .map((tech) => (
                                    <div
                                        key={tech.id}
                                        className="group flex flex-col items-center gap-2 p-3 rounded-xl cursor-default transition-all duration-200"
                                        style={{
                                            background: "rgba(255,255,255,0.03)",
                                            border: "1px solid rgba(255,255,255,0.06)",
                                        }}
                                        onMouseEnter={(e) => {
                                            (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)";
                                            (e.currentTarget as HTMLElement).style.borderColor = categoryAccent[focus].replace("0.7", "0.35");
                                        }}
                                        onMouseLeave={(e) => {
                                            (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
                                            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                                        }}
                                    >
                                        <Image
                                            src={tech.imageLogo}
                                            alt={tech.name}
                                            width={28}
                                            height={28}
                                            unoptimized
                                            className="transition-transform duration-200 group-hover:scale-110 invert opacity-75 group-hover:opacity-100"
                                        />
                                        <span className="text-[10px] text-slate-500 group-hover:text-slate-300 transition-colors text-center leading-tight">
                                            {tech.name}
                                        </span>
                                    </div>
                                ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TechStack
