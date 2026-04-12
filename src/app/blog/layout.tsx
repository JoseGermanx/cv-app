import Footer from "../ui/Footer";
import NavBar from "../ui/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: "#07090f", minHeight: "100vh" }}>
      <NavBar />
      <div className="pt-16">
        {children}
      </div>
    </div>
  );
}
