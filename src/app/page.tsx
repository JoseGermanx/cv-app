import Image from "next/image";
import NavBar from "./ui/Navbar";
import Hero from "./ui/Hero";
import Footer from "./ui/Footer";

export default function Home() {
  return (
    <>
    <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-between p-3">
        <Hero />
      </main>
      <Footer />
    </>
  );
}
