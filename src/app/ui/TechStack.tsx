import Image from 'next/image'

//incluir en los objetos una propiedad que sea el logo desde https://simpleicons.org/

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
    }
]

const TechStack = () => {
    return (
        <div>
            <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-5xl font-bold tracking-tight text-gray-900 text-center mb-5">Tecnologías</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {tecnologies.map((tecnology) => (
                        <div key={tecnology.id} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-auto overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75">
                                <img
                                    src={tecnology.imageLogo}
                                    alt={tecnology.imageAlt}
                                    className=" h-5 w-5 object-cover object-center lg:h-20 lg:w-20"
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
