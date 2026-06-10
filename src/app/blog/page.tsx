import React from "react";
import BlogLinks from "../ui/BlogLinks";
import Footer from "../ui/Footer";

export const metadata = {
  title: "Blog",
  description: "Blog posts by José Germán Martínez"
};

export default function Page() {
  return (
    <>
      <div className="mx-auto max-w-2xl px-6 py-20 text-white">
        <h1 className="text-3xl font-bold tracking-tight gradient-text inline-block mb-2">
          Blog
        </h1>
        <p className="text-slate-500 text-sm mb-12">Notas, tutoriales y reflexiones sobre desarrollo.</p>
        <BlogLinks />
      </div>
      <Footer />
    </>
  );
}
