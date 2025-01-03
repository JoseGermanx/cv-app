'use client'

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import  Menu  from "./Menu";

const NavBar = () => {
  const [notificaciones, setNotificaciones] = useState (false);
  const [mobile, setMobile] = useState(false);

  const notificar = () => {
    if (Notification.permission === "granted") {
      setNotificaciones(true)
     
    } else {
      Notification.requestPermission()
      .then((permission) => {
       setNotificaciones(true)
      })
      
    }
  }

  useEffect(()=>{
    let navegador = navigator.userAgent;
        if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
          setMobile(true)
            return 
        }
    if (Notification.permission === "granted") {
      setNotificaciones(true)
    }
    
    if(window.location.pathname === "/" && !notificaciones){
    const notificaction = new Notification("Newsletter", {
      body: "Sigue mi newsletter en LinkedIn",
      icon: "https://jgxdev.com/favicon.ico",
    }
    );
  
    notificaction.onclick = function () {
      window.open("https://www.linkedin.com/newsletters/7078460407316635648");
    };
  }

  }, [notificaciones])

  return (
    <nav className=" bg-slate-300 mx-auto w-full px-2 sm:px-6 lg:px-8 fixed z-50 top-0">
      <div className="mx-auto w-full px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div> */}
          <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-start">
              <Link href="/">
                <Image
                  className="h-auto w-10"
                  src="/images/jgxdev_logo.png"
                  alt="jgxdev"
                  width={500}
                  height={500}
                />
              </Link>
            </div>
            <div className=" hidden lg:ml-6 lg:block">
              <div className="flex space-x-4">
                {/* <a
                  href="/projects"
                  className="bg-gray-900 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Proyectos
                </a> */}
                <Link
                  href="/#contact"
                  className="bg-gray-900 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Contacto
                </Link>
                <Link
                  href="https://techmarketingpulse.beehiiv.com/subscribe"
                  className="bg-gray-900 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  target="_blank"
                >
                  Newsletter
                </Link>
                <Link
                  href="https://www.superprof.cl/aprende-javascript-transforma-carrera-tecnologia-soy-graduado-ingenieria-puedo-ayudar-dar-pasos-firmes-este.html"
                  className="bg-gray-900 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  target="_blank"
                >
                  Agenda una clase
                </Link>
                <Link
                  href="/terminal"
                  className="bg-gray-900 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Terminal
                  </Link>
                  <Link
                  href="/blog"
                  className="bg-gray-900 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Blog
                </Link>
                <div
                  className="flex items-center bg-gray-500 hover:bg-gray-700 hover:text-white rounded-md px-3"
                 >
                <Menu
                />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <Link
              href={"https://www.credly.com/badges/e8d1ba54-d1d5-4daa-ac4f-f9bc88c7310f/public_url"}
              target="_blank"
             >
            <Image
            src={"/images/node-js-developer-advanced.png"}
            className="h-auto w-10 rounded-full mx-1"
            alt="Cert"
            width={500}
            height={500}
            />
            </Link>
            <Link
            href={"https://www.credly.com/badges/dc2e7f4c-fb6e-4cab-87db-52e74c5b4808/public_url"}
            target="_blank"
            >
             <Image
            src={"/images/fullstack-mern-developer.png"}
            className="h-auto w-10 rounded-full"
            alt="Cert"
            width={500}
            height={500}
            />
            </Link>
            <Link
              href="/cv_jose_martinez.pdf"
              className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium mx-2"
              aria-current="page"
            >
              CV
            </Link>
            <p>José Germán Martínez</p>
            {mobile ? null : !notificaciones ? <Image
                  className="h-auto w-5 cursor-pointer mx-2"
                  src="/images/notification-bell-svgrepo-com.png"
                  alt="Activa las notificaciones"
                  title="Activa las notificaciones"
                  width={200}
                  height={200}
                  onClick={notificar}
                /> :
                <Image
                  className="h-auto w-5 mx-2"
                  src="/images/notification-bell-svgrepo-com-blue.png"
                  alt="Notificaciones activas"
                  title="Notificaciones activas"
                  width={200}
                  height={200}
                />} 
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
