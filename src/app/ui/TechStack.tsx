import Image from "next/image"


export const tecnologies = [
    {
        id: 1,
        name: 'React',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
        imageAlt: "React",
        imageLogo: "https://simpleicons.org/icons/react.svg",
        focus: "Frontend"
    },
    {
        id: 2,
        name: 'Next.js',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg',
        imageAlt: "Next.js",
        imageLogo: "https://simpleicons.org/icons/nextdotjs.svg",
        focus: "Frontend"
    },
    {
        id: 3,
        name: 'Tailwind CSS',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Tailwind_CSS_logo.svg',
        imageAlt: "Tailwind CSS",
        imageLogo: "https://simpleicons.org/icons/tailwindcss.svg",
        focus: "Frontend"
    },
    {
        id: 4,
        name: 'Node.js',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
        imageAlt: "Node.js",
        imageLogo: "https://simpleicons.org/icons/nodedotjs.svg",
        focus: "Backend"
    },
    {
        id: 5,
        name: 'Express.js',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png',
        imageAlt: "Express.js",
        imageLogo: "https://simpleicons.org/icons/express.svg",
        focus: "Backend"
    },
    {
        id: 6,
        name: 'MongoDB',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg',
        imageAlt: "MongoDB",
        imageLogo: "https://simpleicons.org/icons/mongodb.svg",
        focus: "Backend"
    },
    {
        id: 7,
        name: 'PostgreSQL',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg',
        imageAlt: "PostgreSQL",
        imageLogo: "https://simpleicons.org/icons/postgresql.svg",
        focus: "Backend"
    },
    {
        id: 10,
        name: 'AWS',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
        imageAlt: "AWS",
        imageLogo: "https://simpleicons.org/icons/amazonwebservices.svg",
        focus: "DevOps"
    },
    {
        id: 12,
        name: 'Docker',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Docker_%28container_engine%29_logo.png',
        imageAlt: "Docker",
        imageLogo: "https://simpleicons.org/icons/docker.svg",
        focus: "DevOps"
    },
    {
        id: 13,
        name: 'Jest',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Logo-jest.svg',
        imageAlt: "Jest",
        imageLogo: "https://simpleicons.org/icons/jest.svg",
        focus: "DevOps"
    },
    {
        id: 16,
        name: 'Flask',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg',
        imageAlt: "Flask",
        imageLogo: "https://simpleicons.org/icons/flask.svg",
        focus: "Backend"
    },
    {
        id: 18,
        name: 'MySQL',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Mysql-dolphin-square.jpg',
        imageAlt: "MySQL",
        imageLogo: "https://simpleicons.org/icons/mysql.svg",
        focus: "Backend"
    },
    {
        id: 19,
        name: 'TypeScript',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
        imageAlt: "TypeScript",
        imageLogo: "https://simpleicons.org/icons/typescript.svg",
        focus: "Programming"
    },
    {
        id: 20,
        name: 'Python',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
        imageAlt: "Python",
        imageLogo: "https://simpleicons.org/icons/python.svg",
        focus: "Programming"
    },
    {
        id: 22,
        name: 'HTML5',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
        imageAlt: "HTML5",
        imageLogo: "https://simpleicons.org/icons/html5.svg",
        focus: "Frontend"
    },
    {
        id: 23,
        name: 'CSS3',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
        imageAlt: "CSS3",
        imageLogo: "https://simpleicons.org/icons/css3.svg",
        focus: "Frontend"
    },
    {
        id: 24,
        name: 'JavaScript',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg',
        imageAlt: "JavaScript",
        imageLogo: "https://simpleicons.org/icons/javascript.svg",
        focus: "Programming"
    },
    {
        id: 26,
        name: 'Redux',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png',
        imageAlt:"Redux",
        imageLogo: "https://simpleicons.org/icons/redux.svg",
        focus: "Frontend"
    },
    {
        id:27,
        name: 'Astro',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Astro_Logo.svg',
        imageAlt: "Astro",
        imageLogo: "https://simpleicons.org/icons/astro.svg",
        focus: "Frontend"
    },
    {
        id: 28,
        name: 'Git',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg', 
        imageAlt: "Git",
        imageLogo: "https://simpleicons.org/icons/git.svg",
        focus: "DevOps"
    },
    {
        id:29,
        name: 'GitHub',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
        imageAlt: "GitHub",
        imageLogo: "https://simpleicons.org/icons/github.svg",
        focus: "DevOps"
    }

]

const TechStack = () => {
    return (
        <div>
            <div className=" mt-10 mx-auto max-w-2xl px-4 sm:px-6 sm:py-24 lg:max-w-3xl lg:px-8 text-white">
                <h2 className="text-5xl font-bold tracking-tight text-center mb-5">Tecnologías</h2>

                <p className="mt-6 text-lg leading-8 text-gray-600">
                    Estas son algunas de las tecnologías que he utilizado en mis proyectos.
                </p>
                {["Frontend", "Backend", "Programming", "DevOps"].map((focus) => (
                    <div key={focus}>
                        <h3 className="text-3xl mb-3 mt-3">{focus}</h3>
                        <div className={`text-black mt-6 grid grid-cols-3 gap-x-6 gap-y-10 sm:grid-cols-3 md:grid-cols-8 xl:gap-x-8 justify-center bg-gray-300 p-14 rounded-md shadow-lg shadow-gray-700`}>
                            {tecnologies.filter(tec => tec.focus === focus).map((tecnology) => (
                                <div key={tecnology.id} className="group relative">
                                    <div className="aspect-h-1 aspect-w-1 w-auto overflow-hidden lg:aspect-none group-hover:opacity-75">
                                        <Image
                                            src={tecnology.imageLogo}
                                            alt={tecnology.imageAlt}
                                            className="hover:scale-110 h-10 w-10 object-cover object-center lg:h-15 lg:w-15"
                                            width={100}
                                            height={100}
                                        />
                                        <p className="mt-2 font-thin text-xs text-center hover:font-normal">{tecnology.name}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                </div>
            </div>
    )
}

export default TechStack
