import Image from "next/image";
import NavBar from "./ui/Navbar";
import Hero from "./ui/Hero";
import Footer from "./ui/Footer";
import TechStack from "./ui/TechStack";
import TerminalController from "./ui/Terminal";

export default function Home() {
  return (
    <>
    <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-between p-3">
        <Hero />
        <div className="w-2/3">
        <TerminalController />
        </div>
        <TechStack />
      </main>
      <Footer />
    </>
  );
}
