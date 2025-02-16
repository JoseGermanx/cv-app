"use client";

import Link from "next/link";
import React from "react";
import Typed from "typed.js";
import Socialmedia from "./Socialmedia";
import TrueFocus from "./TrueFocus";


const Hero = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["FullStack", "Frontend", "Backend"],
      typeSpeed: 100,
      loop: true,
      showCursor: true,
      backDelay: 1000,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="relative isolate px-6 pt-2 lg:px-8 h-auto mt-20 mb-10 text-white">
      <div
        className="absolute inset-x-0 -top-40 -z-20 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          // className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#a3bedd] to-[#403f4d] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          // style={{
          //   clipPath:
          //     "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          // }}
        />
      </div>
      <div className="mx-auto max-w-2xl py-4 sm:py-4 lg:py-4">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
        <div className="text-center">
          <TrueFocus
            sentence="Software Developer"
            manualMode={true}
            blurAmount={5}
            borderColor="orange"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            <span className=" text-blue-400">José Germán</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            +10 años de experiencia como desarrollador web y actualmente ayudo a estudiantes
            de desarrollo Full Stack en JavaScript.
          </p>
            <h2 className="text-6xl font-bold tracking-tight text-green-400 sm:text-6xl mt-3">
             <span ref={el} className=" text-gray-400"></span>
           </h2>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            {/* <Link href="/projects" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Ver projectos
          </Link> */}
            <Link
              href="/cv_jose_martinez.pdf"
              className="rounded-md bg-orange-300 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
            >
              Descargar CV
            </Link>
            <Link
              href="https://www.linkedin.com/newsletters/7078460407316635648/"
              target="_blank"
              className="rounded-md bg-orange-300 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
            >
              Suscríbete al newsletter
            </Link>
          </div>
        </div>
      </div>
      <Socialmedia />
    </div>
  );
};

export default Hero;
