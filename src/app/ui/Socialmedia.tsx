import React from "react";

// links a redes sociales, github, linkedin, twitter, instagram, facebook en un carrusel con los logos de cada red social

// listado de objetos con nombre de redes sociales y links a logos (tomar de https://simpleicons.org/)
const socialMedia = [
  {
    id: 1,
    name: "GitHub",
    imageSrc: "https://simpleicons.org/icons/github.svg",
    imageAlt: "GitHub",
    link: "",
  },
  {
    id: 2,
    name: "LinkedIn",
    imageSrc: "https://simpleicons.org/icons/linkedin.svg",
    imageAlt: "LinkedIn",
    link: "https://www.linkedin.com/in/josgermanx/",
  },
  {
    id: 3,
    name: "Twitter",
    imageSrc: "https://simpleicons.org/icons/twitter.svg",
    imageAlt: "Twitter",
    link: "",
  },
  {
    id: 4,
    name: "Instagram",
    imageSrc: "https://simpleicons.org/icons/instagram.svg",
    imageAlt: "Instagram",
    link: "",
  },
  {
    id: 5,
    name: "Facebook",
    imageSrc: "https://simpleicons.org/icons/facebook.svg",
    imageAlt: "Facebook",
    link: "",
  },
];

const Socialmedia = () => {
  return (
    <div>
      <div className="flex-col justify-center">
        <div>
          <h2 className="text-5xl font-bold tracking-tight text-gray-900 text-center mb-5">
            Redes Sociales
          </h2>
        </div>
        <div className="flex">
          {socialMedia.map((social) => (
            <div key={social.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={social.imageSrc}
                  alt={social.imageAlt}
                  className=" h-5 w-5 object-cover object-center lg:h-10 lg:w-10"
                />
                <a href={social.link}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {social.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Socialmedia;
