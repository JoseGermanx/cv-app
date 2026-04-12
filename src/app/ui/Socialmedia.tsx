import Image from "next/image";
import React from "react";

export const socialMedia = [
  {
    id: 1,
    name: "GitHub",
    imageSrc: "/images/github.svg",
    imageAlt: "GitHub",
    link: "https://www.github.com/josegermanx/",
  },
  {
    id: 3,
    name: "LinkedIn",
    imageSrc: "/images/linkedin.svg",
    imageAlt: "LinkedIn",
    link: "https://www.linkedin.com/in/josegermanx/",
  },
];

const Socialmedia = () => {
  return (
    <div className="flex justify-center gap-4 mt-8">
      {socialMedia.map((social) => (
        <a
          key={social.id}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          title={social.name}
          className="group flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(96,165,250,0.5)";
            (e.currentTarget as HTMLElement).style.background = "rgba(96,165,250,0.1)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
            (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
          }}
        >
          <Image
            src={social.imageSrc}
            alt={social.imageAlt}
            width={18}
            height={18}
            className="opacity-60 group-hover:opacity-100 transition-opacity invert"
          />
        </a>
      ))}
    </div>
  );
};

export default Socialmedia;
