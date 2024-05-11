import React from "react";
import BlogLinks from "../ui/BlogLinks";
import Footer from "../ui/Footer";
import LinksInteres from "../ui/LinksInteres";

export const metadata = {
  title: "Link de interés - José Germán Martínez",
  description: "Links de interés por José Germán Martínez"
};

export default function Page() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center p-3">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 text-center mb-5">
          Links de interes
        </h1>
        <LinksInteres />
    
      </div>
      <Footer />
    </>
  );
}
