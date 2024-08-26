"use client";

import NavBar from "./ui/Navbar";
import Hero from "./ui/Hero";
import Footer from "./ui/Footer";
import TechStack from "./ui/TechStack";
import Contact from "./ui/Contact";

export default function Home() {

  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-between p-3 mt-16 bg-gradient-to-bl from-gray-100 to-slate-300">
        <Hero />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
