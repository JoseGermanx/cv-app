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
      <div className="mx-auto max-w-2xl px-6 py-16 text-white">
        <h1 className="text-4xl font-bold tracking-tight gradient-text inline-block mb-10">
          Blog
        </h1>
        <BlogLinks />
      </div>
      <Footer />
    </>
  );
}
