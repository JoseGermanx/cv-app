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
      typeSpeed: 90,
      loop: true,
      showCursor: true,
      backDelay: 1200,
    });
    return () => typed.destroy();
  }, []);

  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="relative isolate w-full px-6 pt-8 pb-16 lg:px-8 text-white overflow-hidden">

      {/* Background orbs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(96,165,250,0.35) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute top-1/2 -right-32 w-[400px] h-[400px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(34,211,238,0.4) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
      </div>

      <div className="mx-auto max-w-2xl py-8">
        <div className="text-center">

          {/* TrueFocus subtitle */}
          <TrueFocus
            sentence="Software Developer"
            manualMode={true}
            blurAmount={4}
            borderColor="rgba(96,165,250,0.7)"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />

          {/* Name */}
          <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-7xl">
            <span className="gradient-text">José Germán</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-base leading-7 text-slate-400 max-w-lg mx-auto">
            +15 años de experiencia como desarrollador web Full Stack en JavaScript.
          </p>

          {/* Typed role */}
          <div className="mt-4 h-12 flex items-center justify-center">
            <span
              ref={el}
              className="text-3xl font-semibold text-slate-300"
            />
          </div>

          {/* CTAs */}
          <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="https://links.jgxdev.com/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(96,165,250,0.3)]"
              style={{
                background: "linear-gradient(135deg, #3b82f6, #22d3ee)",
              }}
              target="_blank"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M11 3a1 1 0 100 2h3.586L9.293 9.293a1 1 0 101.414 1.414L16 6.414V10a1 1 0 102 0V4a1 1 0 00-1-1h-6z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
              Links de interés
            </Link>
            <Link
              href="https://www.linkedin.com/newsletters/7078460407316635648/"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-slate-300 hover:text-white transition-all duration-200 hover:scale-[1.03]"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(96,165,250,0.45)";
                (e.currentTarget as HTMLElement).style.background = "rgba(96,165,250,0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)";
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
              }}
            >
              Newsletter
            </Link>
          </div>
        </div>
      </div>

      {/* Social links */}
      <Socialmedia />
    </div>
  );
};

export default Hero;
