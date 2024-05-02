import React from "react";
import Link from "next/link";

//componente para mostrar una lista de links de interes y link visual debe partir de la raiz de la app

export const LinksDeInteres = [
  {
    id: 1,
    name: "Introduction to Generative AI Learning Path",
    path: "https://www.cloudskillsboost.google/paths/118",
    category: "AI",
    namebetacode: "googleia",
  },
  {
    id: 2,
    name: "Artificial Intelligence for Beginners ",
    path: "https://microsoft.github.io/AI-For-Beginners/",
    category: "AI",
    namebetacode: "microsoftai",
  },
  {
    id: 3,
    name: " CS50 Introduction to Artificial Intelligence with Python",
    path: "https://www.edx.org/es/learn/artificial-intelligence/harvard-university-cs50-s-introduction-to-artificial-intelligence-with-python",
    category: "AI",
    namebetacode: "harvard50sai",
  },
  {
    id: 4,
    name: "Prompt engineering para Chatgpt",
    path: "https://www.coursera.org/learn/prompt-engineering",
    category: "AI",
    namebetacode: "courseraprompt",
  },
  {
    id: 5,
    name: "DevDocs",
    path: "https://devdocs.io/",
    category: "Software Development",
    namebetacode: "devdocs",
  }
];

const LinksInteres = () => {
  return (
    <div>
      <ul>
        {LinksDeInteres.map((link) => (
          <li key={link.id}>
            <Link href={link.path} target="_blanck">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinksInteres;
