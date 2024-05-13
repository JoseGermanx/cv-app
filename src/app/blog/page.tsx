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
      <div className="flex min-h-screen flex-col items-center justify-between p-3 mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 text-center mb-5">
          Blog
        </h1>
        <BlogLinks />
      </div>
      <Footer />
    </>
  );
}
