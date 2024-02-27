import React from "react";

// links a redes sociales, github, linkedin, twitter, instagram, facebook en un carrusel con los logos de cada red social

// listado de objetos con nombre de redes sociales y links a logos (tomar de https://simpleicons.org/)
const socialMedia = [
  {
    id: 1,
    name: "GitHub",
    imageSrc: "https://simpleicons.org/icons/github.svg",
    imageAlt: "GitHub",
    link: "https://www.github.com/josegermanx/",
  },
  {
    id: 2,
    name: "LinkedIn",
    imageSrc: "https://simpleicons.org/icons/linkedin.svg",
    imageAlt: "LinkedIn",
    link: "https://www.linkedin.com/in/josegermanx/",
  },
  {
    id: 3,
    name: "Twitter",
    imageSrc: "https://simpleicons.org/icons/twitter.svg",
    imageAlt: "Twitter",
    link: "https://twitter.com/jgxdev",
  },
  {
    id: 4,
    name: "Instagram",
    imageSrc: "https://simpleicons.org/icons/instagram.svg",
    imageAlt: "Instagram",
    link: "https://www.instagram.com/josegermanx/",
  },
  {
    id: 5,
    name: "Facebook",
    imageSrc: "https://simpleicons.org/icons/facebook.svg",
    imageAlt: "Facebook",
    link: "http://www.facebook.com/betacodecl/",
  },
];

const Socialmedia = () => {
  return (
    <div>
      <div className="flex-col mt-9">
        <div className="flex justify-center">
          {socialMedia.map((social) => (
            <div key={social.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden group-hover:opacity-75 lg:h-auto mx-4">
                <img
                  src={social.imageSrc}
                  alt={social.imageAlt}
                  className=" h-5 w-5 object-cover object-center lg:h-10 lg:w-10"
                />
                <a href={social.link} target="_blank">
                  <span aria-hidden="true" className="absolute inset-0" />
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
