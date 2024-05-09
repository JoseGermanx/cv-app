import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const NavBar = () => {
  const [notificaciones, setNotificaciones] = useState (false)

  const notificar = () => {
    if (Notification.permission === "granted") {
      setNotificaciones(true)
     
    } else {
      Notification.requestPermission()
      .then((permission) => {
       setNotificaciones(true)
      })
      
    }
  }

  useEffect(()=>{
    if (Notification.permission === "granted") {
      setNotificaciones(true)
    }
    const notificaction = new Notification("Newsletter", {
      body: "Sigue mi newsletter en LinkedIn",
      icon: "https://jgxdev.com/favicon.ico",
    }
    );

    notificaction.onclick = function () {
      window.open("https://www.linkedin.com/newsletters/7078460407316635648");
    };
    

  }, [notificaciones])

  return (
    <nav className=" bg-slate-300">
      <div className="mx-auto w-full px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div> */}
          <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-start">
              <Link href="/">
                <Image
                  className="h-auto w-10"
                  src="/images/jgxdev_logo.png"
                  alt="jgxdev"
                  width={500}
                  height={500}
                />
              </Link>
            </div>
            <div className=" hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {/* <a
                  href="/projects"
                  className="bg-gray-900 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Proyectos
                </a> */}
                <Link
                  href="/#contact"
                  className="bg-gray-900 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Contacto
                </Link>
                <Link
                  href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7078460407316635648"
                  className="bg-gray-900 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  target="_blank"
                >
                  Newsletter
                </Link>
                <Link
                  href="/#terminal"
                  className="bg-gray-900 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Terminal
                  </Link>
                  <Link
                  href="/blog"
                  className="bg-gray-900 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Blog
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            {!notificaciones ? <Image
                  className="h-auto w-5"
                  src="/images/notification-bell-svgrepo-com.png"
                  alt="Activa las notificaciones"
                  width={200}
                  height={200}
                  onClick={notificar}
                /> :
                <Image
                  className="h-auto w-5"
                  src="/images/notification-bell-svgrepo-com-blue.png"
                  alt="Activa las notificaciones"
                  width={200}
                  height={200}
                />}
          
            <Link
              href="/cv_jose_martinez.pdf"
              className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium mx-2"
              aria-current="page"
            >
              CV
            </Link>
            <p>José Germán Martínez</p>
          </div>
        </div>
      </div>

      {/* <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a
            href="#"
            className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Team
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Projects
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Calendar
          </a>
        </div>
      </div> */}
    </nav>
  );
};

export default NavBar;
