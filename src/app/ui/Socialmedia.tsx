import Image from "next/image";
import React from "react";

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
  }
];

const Socialmedia = () => {
  return (
    <div>
      <div className="flex-col mt-9">
        <div className="flex justify-center">
          {socialMedia.map((social) => (
            <div key={social.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden group-hover:opacity-75 lg:h-auto mx-4">
                <Image
                  src={social.imageSrc}
                  alt={social.imageAlt}
                  width={40}
                  height={40}
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
