'use client'

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import  Menu  from "./Menu";
import useScroll from "../lib/hooks/use-scroll";


const NavBar = () => {
  const [notificaciones, setNotificaciones] = useState (false);
  const [mobile, setMobile] = useState(false);

  const scrolled = useScroll(50);

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
    <nav className=" z-50 top-0">
      <div
        className={`fixed top-0 w-full ${scrolled
          ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
          : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
          <Link href="/" className="flex items-center font-display text-2xl">
            <Image
              src="/images/jgxdev_logo.png"
              alt="jgxdev"
              width="80"
              height="80"
              className="h-auto w-10"
            ></Image>
            <p><strong>JGx</strong><span className="text-blue-400">Dev</span></p>
          </Link>
          <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-start">
              
            </div>
            <div className=" hidden lg:ml-6 lg:block">
              <div className="flex space-x-4">
                <Link
                  href="/#contact"
                  className="bg-gray-900 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Contacto
                </Link>
                <Link
                  href="https://www.linkedin.com/newsletters/7078460407316635648/"
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
                  className="flex items-center bg-gray-900 hover:bg-gray-700 hover:text-white rounded-md px-3"
                 >
                <Menu
                />
                </div>
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
    </nav>
  );
};

export default NavBar;
