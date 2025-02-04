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
              src="/beta_code.png"
              alt="Beta code logo"
              width="80"
              height="80"
              className="mr-2 rounded-sm"
            ></Image>
            <p><strong>JGx</strong><span className="text-blue-400">Dev</span></p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
