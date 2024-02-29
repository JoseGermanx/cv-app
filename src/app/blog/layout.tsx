import Footer from "../ui/Footer";
import NavBar from "../ui/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <div className="">
        <div className="w-full flex-none md:w-64"></div>
        <div className="flex-grow md:pt-12">
          {children}
        </div>
      </div>
    </>
  );
}
