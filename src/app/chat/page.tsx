import React from "react";
import Footer from "../ui/Footer";
import ChatNextUi from "../ui/ChatNextUi";

export default function Page() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center p-3">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 text-center mb-5">
          Links de interes
        </h1>
        <ChatNextUi />
      </div>
      <Footer />
    </>
  );
}
