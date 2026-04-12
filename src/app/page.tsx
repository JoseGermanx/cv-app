"use client";

import NavBar from "./ui/Navbar";
import Hero from "./ui/Hero";
import Footer from "./ui/Footer";
import TechStack from "./ui/TechStack";
import Contact from "./ui/Contact";

export default function Home() {
  return (
    <div style={{ background: "#07090f", minHeight: "100vh" }}>
      <NavBar />
      <main className="flex flex-col items-center pt-16">
        <Hero />
        <div
          className="w-full max-w-4xl mx-auto"
          style={{
            height: "1px",
            background: "linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)",
          }}
        />
        <TechStack />
        <div
          className="w-full max-w-4xl mx-auto"
          style={{
            height: "1px",
            background: "linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)",
          }}
        />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
