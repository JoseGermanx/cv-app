

const tecnologies = [
    {
        id: 1,
        name: 'React',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
        imageAlt: "React",
        imageLogo: "https://simpleicons.org/icons/react.svg"
    },
    {
        id: 2,
        name: 'Next.js',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg',
        imageAlt: "Next.js",
        imageLogo: "https://simpleicons.org/icons/nextdotjs.svg"
    },
    {
        id: 3,
        name: 'Tailwind CSS',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Tailwind_CSS_logo.svg',
        imageAlt: "Tailwind CSS",
        imageLogo: "https://simpleicons.org/icons/tailwindcss.svg"
    },
    {
        id: 4,
        name: 'Node.js',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
        imageAlt: "Node.js",
        imageLogo: "https://simpleicons.org/icons/nodedotjs.svg"
    },
    {
        id: 5,
        name: 'Express.js',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png',
        imageAlt: "Express.js",
        imageLogo: "https://simpleicons.org/icons/express.svg"
    },
    {
        id: 6,
        name: 'MongoDB',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg',
        imageAlt: "MongoDB",
        imageLogo: "https://simpleicons.org/icons/mongodb.svg"
    },
    {
        id: 7,
        name: 'PostgreSQL',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg',
        imageAlt: "PostgreSQL",
        imageLogo: "https://simpleicons.org/icons/postgresql.svg"
    },
    {
        id: 10,
        name: 'AWS',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
        imageAlt: "AWS",
        imageLogo: "https://simpleicons.org/icons/amazonaws.svg"
    },
    {
        id: 11,
        name: 'Azure',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg',
        imageAlt: "Azure",
        imageLogo: "https://simpleicons.org/icons/microsoftazure.svg"
    },
    {
        id: 12,
        name: 'Docker',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Docker_%28container_engine%29_logo.png',
        imageAlt: "Docker",
        imageLogo: "https://simpleicons.org/icons/docker.svg"
    },
    {
        id: 13,
        name: 'Jest',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Logo-jest.svg',
        imageAlt: "Jest",
        imageLogo: "https://simpleicons.org/icons/jest.svg"
    },
    {
        id: 16,
        name: 'Flask',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg',
        imageAlt: "Flask",
        imageLogo: "https://simpleicons.org/icons/flask.svg"
    },
    {
        id: 18,
        name: 'MySQL',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Mysql-dolphin-square.jpg',
        imageAlt: "MySQL",
        imageLogo: "https://simpleicons.org/icons/mysql.svg"
    },
    {
        id: 19,
        name: 'TypeScript',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
        imageAlt: "TypeScript",
        imageLogo: "https://simpleicons.org/icons/typescript.svg"
    },
    {
        id: 20,
        name: 'Python',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
        imageAlt: "Python",
        imageLogo: "https://simpleicons.org/icons/python.svg"
    },
    {
        id: 22,
        name: 'HTML5',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
        imageAlt: "HTML5",
        imageLogo: "https://simpleicons.org/icons/html5.svg"
    },
    {
        id: 23,
        name: 'CSS3',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
        imageAlt: "CSS3",
        imageLogo: "https://simpleicons.org/icons/css3.svg"
    },
    {
        id: 24,
        name: 'JavaScript',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg',
        imageAlt: "JavaScript",
        imageLogo: "https://simpleicons.org/icons/javascript.svg"
    },
    {
        id: 26,
        name: 'Redux',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png',
        imageAlt:"Redux",
        imageLogo: "https://simpleicons.org/icons/redux.svg"
    },
    {
        id:27,
        name: 'Astro',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Astro_Logo.svg',
        imageAlt: "Astro",
        imageLogo: "https://simpleicons.org/icons/astro.svg"
    }

]

const TechStack = () => {
    return (
        <div>
            <div className=" mt-24 mx-auto max-w-2xl px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-5xl font-bold tracking-tight text-gray-900 text-center mb-5">Tecnologías</h2>

                <div className="mt-6 grid grid-cols-3 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 justify-center ">
                    {tecnologies.map((tecnology) => (
                        <div key={tecnology.id} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-auto overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75">
                                <img
                                    src={tecnology.imageLogo}
                                    alt={tecnology.imageAlt}
                                    className=" h-10 w-10 object-cover object-center lg:h-20 lg:w-20"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TechStack
