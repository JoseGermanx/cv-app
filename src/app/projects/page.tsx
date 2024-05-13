import Link from "next/link";
import TechStack, { tecnologies } from "../ui/TechStack";
import Image from "next/image";
import { socialMedia } from "../ui/Socialmedia";

const products = [
  {
    id: 1,
    name: "Dionisio Wines",
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/dh6ipg8bj/image/upload/v1701278366/parking-resercar-app/y5xinacoqoql66ywepna.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    tech: tecnologies
      .filter(
        (tech) =>
          tech.name === "React" ||
          tech.name === "Node.js" ||
          tech.name === "Express.js" ||
          tech.name === "PostgreSQL"
      )
      .map((tech) => tech.imageLogo),
    githubImg: "https://simpleicons.org/icons/github.svg",
    repo: "https://www.github.com/josegermanx",
    demo: "https://www.betacode.cl",
  },
  {
    id: 2,
    name: "APP Car",
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/dh6ipg8bj/image/upload/v1701278366/parking-resercar-app/y5xinacoqoql66ywepna.jpg",
    imageAlt: "Front of mens Basic Tee in gray.",
    tech: tecnologies
      .filter(
        (tech) =>
          tech.name === "React" ||
          tech.name === "Node.js" ||
          tech.name === "Express.js" ||
          tech.name === "MySQL"
      )
      .map((tech) => tech.imageLogo),
    githubImg: "https://simpleicons.org/icons/github.svg",
    repo: "https://www.github.com/josegermanx",
    demo: "https://www.betacode.cl",
  },
  {
    id: 3,
    name: "Portfolio",
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/dh6ipg8bj/image/upload/v1701278366/parking-resercar-app/y5xinacoqoql66ywepna.jpg",
    imageAlt: "Front of mens Basic Tee in gray.",
    tech: tecnologies
      .filter(
        (tech) =>
          tech.name === "Tailwind CSS" ||
          tech.name === "Next.js" ||
          tech.name === "TypeScript" ||
          tech.name === "Jest"
      )
      .map((tech) => tech.imageLogo),
    githubImg: "https://simpleicons.org/icons/github.svg",
    repo: "https://www.github.com/josegermanx",
    demo: "https://www.betacode.cl",
  },
  {
    id: 4,
    name: "Agendamiento de citas",
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/dh6ipg8bj/image/upload/v1701278366/parking-resercar-app/y5xinacoqoql66ywepna.jpg",
    imageAlt: "Front of mens Basic Tee in gray.",
    tech: tecnologies
      .filter(
        (tech) =>
          tech.name === "React" ||
          tech.name === "Node.js" ||
          tech.name === "Express.js" ||
          tech.name === "PostgreSQL"
      )
      .map((tech) => tech.imageLogo),
    githubImg: "https://simpleicons.org/icons/github.svg",
    repo: "https://www.github.com/josegermanx",
    demo: "https://www.betacode.cl",
  },
  {
    id: 5,
    name: "Gestión de inventario",
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/dh6ipg8bj/image/upload/v1701278366/parking-resercar-app/y5xinacoqoql66ywepna.jpg",
    imageAlt: "Front of mens Basic Tee in gray.",
    tech: tecnologies
      .filter(
        (tech) =>
          tech.name === "React" ||
          tech.name === "Node.js" ||
          tech.name === "Express.js" ||
          tech.name === "MySQL"
      )
      .map((tech) => tech.imageLogo),
    githubImg: "https://simpleicons.org/icons/github.svg",
    repo: "https://www.github.com/josegermanx",
    demo: "https://www.betacode.cl",
  },
  {
    id: 6,
    name: "Gestión de ventas",
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/dh6ipg8bj/image/upload/v1701278366/parking-resercar-app/y5xinacoqoql66ywepna.jpg",
    imageAlt: "Front of mens Basic Tee in gray.",
    tech: tecnologies
      .filter(
        (tech) =>
          tech.name === "React" ||
          tech.name === "Node.js" ||
          tech.name === "Express.js" ||
          tech.name === "MongoDB" ||
          tech.name === "TypeScript"
      )
      .map((tech) => tech.imageLogo),
    githubImg: "https://simpleicons.org/icons/github.svg",
    repo: "https://www.github.com/josegermanx",
    demo: "https://www.betacode.cl",
  },
  {
    id: 6,
    name: "TODO Front End App",
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/dh6ipg8bj/image/upload/v1701278366/parking-resercar-app/y5xinacoqoql66ywepna.jpg",
    imageAlt: "Front of mens Basic Tee in gray.",
    tech: tecnologies
      .filter(
        (tech) =>
          tech.name === "HTML5" ||
          tech.name === "CSS3" ||
          tech.name === "JavaScript"
      )
      .map((tech) => tech.imageLogo),
    githubImg: "https://simpleicons.org/icons/github.svg",
    repo: "https://www.github.com/josegermanx",
    demo: "https://www.betacode.cl",
  },
  // More products...
];

export default function Page() {
  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Proyectos
        </h2>
        <p>
          Acá pueder ver algunos de los proyectos en los que participado y las
          tecnologìas que se utilizron para su implementación.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <>
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <div className=" flex p-3">
                <Link href={product.repo} className="my-1">
                <Image
                  alt={"Repositorio " + product.name}
                  src={product.githubImg}
                  width={20}
                  height={20}
                />
              </Link>
              <Link href={product.demo} className="my-1 mx-2">
                <Image
                  alt={"Demo" + product.name}
                  src={"https://simpleicons.org/icons/microsoftedge.svg"}
                  width={20}
                  height={20}
                />
              </Link>
              </div>
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-auto lg:w-full"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-xl text-gray-700">
                      <Link href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </Link>
                    </h3>
                    <div className="flex mt-4 justify-center">
                      {product.tech &&
                        product.tech.map((tech, index) => (
                          <Image
                            key={index}
                            src={tech}
                            alt={product.imageAlt}
                            className="h-2 w-2 object-cover object-center lg:h-8 lg:w-8 mx-3"
                            width={1}
                            height={1}
                          />
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
