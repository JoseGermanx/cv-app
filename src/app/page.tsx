'use client'

import React, { useEffect } from "react";
import NavBar from "./ui/Navbar";
import Hero from "./ui/Hero";
import Footer from "./ui/Footer";
import TechStack from "./ui/TechStack";
import TerminalController from "./ui/Terminal";
import Socialmedia from "./ui/Socialmedia";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
    <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-between p-3">
        <Hero />
        <div className=" hidden sm:inline sm:mt-56 lg:mt-1 lg:w-2/3 sm:w-4/5" id="terminal">
        <TerminalController />
        </div>
        <TechStack />
        
      </main>
      <Footer />
    </>
  );
}
