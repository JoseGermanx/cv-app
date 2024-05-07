"use client";

import React, { useEffect } from "react";
import NavBar from "./ui/Navbar";
import Hero from "./ui/Hero";
import Footer from "./ui/Footer";
import TechStack from "./ui/TechStack";
import TerminalController from "./ui/Terminal";
import Contact from "./ui/Contact";
import { Suspense } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const requestNotification = () => {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }
    Notification.requestPermission()
    .then((permission) => {
     console.log(permission)
    })
  };

  const notificar = () => {
    if (Notification.permission === "granted") {
      const notificaction = new Notification("Servicio de notificaciones", {
        body: "Notificación de prueba en el website de José Germán Martínez",
        vibrate: [200, 100, 200]
      });

      notificaction.onclick = function () {
        window.open("https://jgxdev.com");
      };
      
    } else {
      alert("No tienes permisos de notificación");
    }
  }


  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-between p-3">
       
        <Hero />
        
        <div
          className=" hidden sm:inline sm:mt-56 lg:mt-1 lg:w-2/3 sm:w-4/5"
          id="terminal"
        >
          
          <Suspense fallback={<div>Loading...</div>}>
            <TerminalController />
          </Suspense>
        </div>
        <TechStack />
        <Contact />
      </main>
      <Footer />
      <button
          type="button"
          className="p-3 bg-slate-600"
          onClick={requestNotification}
        >
          Notificar
        </button>
        <button
          type="button"
          className="p-3 bg-slate-600"
          onClick={notificar}
        >
          Notificación
        </button>
    </>
  );
}
