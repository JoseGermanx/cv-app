'use client'

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Menu from "./Menu";
import useScroll from "../lib/hooks/use-scroll";

const NavBar = () => {
  const [notificaciones, setNotificaciones] = useState(false);
  const [mobile, setMobile] = useState(false);
  const scrolled = useScroll(50);

  const notificar = () => {
    if (Notification.permission === "granted") {
      setNotificaciones(true);
    } else {
      Notification.requestPermission().then(() => {
        setNotificaciones(true);
      });
    }
  };

  useEffect(() => {
    if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    ) {
      setMobile(true);
      return;
    }
    if (Notification.permission === "granted") {
      setNotificaciones(true);
    }
    if (window.location.pathname === "/" && !notificaciones) {
      const notificaction = new Notification("Newsletter", {
        body: "Sigue mi newsletter en LinkedIn",
        icon: "https://jgxdev.com/favicon.ico",
      });
      notificaction.onclick = function () {
        window.open("https://www.linkedin.com/newsletters/7078460407316635648");
      };
    }
  }, [notificaciones]);

  return (
    <nav className="z-50 top-0 text-white">
      <div
        className={`flex fixed top-0 w-full z-30 transition-all duration-300 ${
          scrolled
            ? "bg-[#07090f]/90 backdrop-blur-xl border-b border-white/[0.07] shadow-[0_1px_30px_rgba(0,0,0,0.5)]"
            : "bg-[#07090f]/60 backdrop-blur-md border-b border-white/[0.04]"
        }`}
      >
        {/* Left: Logo + Nav links */}
        <div className="flex flex-1 items-center px-5 xl:px-8 h-16 max-w-screen-xl xl:mx-auto">
          <Link href="/" className="flex items-center mr-8 shrink-0">
            <span className="gradient-text text-2xl font-bold tracking-tight">
              jgxdev
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1 flex-1">
            <Link
              href="/#contact"
              className="px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/[0.06] rounded-lg transition-all duration-200"
            >
              Contacto
            </Link>
            <Link
              href="https://www.superprof.cl/aprende-javascript-transforma-carrera-tecnologia-soy-graduado-ingenieria-puedo-ayudar-dar-pasos-firmes-este.html"
              className="px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/[0.06] rounded-lg transition-all duration-200"
              target="_blank"
            >
              Agenda una clase
            </Link>
            <Link
              href="/terminal"
              className="px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/[0.06] rounded-lg transition-all duration-200"
            >
              Terminal
            </Link>
            <div className="px-1">
              <Menu />
            </div>
          </div>
        </div>

        {/* Right: Certs + Blog + Bell */}
        <div className="flex items-center gap-2 px-5 xl:px-8 shrink-0">
          <div className="hidden sm:flex items-center gap-1.5 mr-1">
            <Link
              href="https://www.credly.com/badges/e8d1ba54-d1d5-4daa-ac4f-f9bc88c7310f/public_url"
              target="_blank"
              className="opacity-75 hover:opacity-100 transition-opacity"
              title="Node.js Developer Advanced"
            >
              <Image
                src="/images/node-js-developer-advanced.png"
                className="h-8 w-8 rounded-full ring-1 ring-white/10"
                alt="Node.js Advanced"
                width={32}
                height={32}
              />
            </Link>
            <Link
              href="https://www.credly.com/badges/dc2e7f4c-fb6e-4cab-87db-52e74c5b4808/public_url"
              target="_blank"
              className="opacity-75 hover:opacity-100 transition-opacity"
              title="Full Stack MERN Developer"
            >
              <Image
                src="/images/fullstack-mern-developer.png"
                className="h-8 w-8 rounded-full ring-1 ring-white/10"
                alt="Full Stack MERN"
                width={32}
                height={32}
              />
            </Link>
          </div>

          <Link
            href="/blog"
            className="px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/[0.06] rounded-lg transition-all duration-200"
          >
            Blog
          </Link>

          {!mobile &&
            (!notificaciones ? (
              <button
                onClick={notificar}
                className="p-2 opacity-50 hover:opacity-90 transition-opacity"
                title="Activar notificaciones"
              >
                <Image
                  className="h-4 w-4"
                  src="/images/notification-bell-svgrepo-com.png"
                  alt="Activar notificaciones"
                  width={16}
                  height={16}
                />
              </button>
            ) : (
              <div className="p-2 opacity-75">
                <Image
                  className="h-4 w-4"
                  src="/images/notification-bell-svgrepo-com-blue.png"
                  alt="Notificaciones activas"
                  width={16}
                  height={16}
                />
              </div>
            ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
