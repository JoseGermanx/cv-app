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
    notificar();
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
      const notificaction = new Notification("Newsletter", {
        body: "Sigue mi newsletter en LinkedIn",
        icon: "https://jgxdev.com/favicon.ico",
      }
      );

      notificaction.onclick = function () {
        window.open("https://www.linkedin.com/newsletters/7078460407316635648");
      };
      
    } else {
      Notification.requestPermission()
      .then((permission) => {
       console.log(permission)
      })
      
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
    </>
  );
}
