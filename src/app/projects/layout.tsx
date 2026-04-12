import NavBar from "../ui/Navbar"
import Footer from "../ui/Footer"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: "#07090f", minHeight: "100vh" }}>
      <NavBar />
      <div className="pt-16">
        {children}
      </div>
      <Footer />
    </div>
  );
}
