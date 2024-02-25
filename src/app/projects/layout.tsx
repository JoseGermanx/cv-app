import NavBar from "../ui/Navbar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <NavBar />
    <div className="">
      <div className="w-full flex-none md:w-64">
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
    </>
  );
}