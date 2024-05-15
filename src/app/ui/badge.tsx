// componente que muestra una lista de badges, cada uno con un enlace a la credencial de credly debe aparecer a la izquierda de la sección de contacto en la página principal de manera flotante
// estilizar con tailwindcss y darle comportamiento de css con tailwindcss
/*
utilizar el siguiente código para mostrar los badges
        <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="e8d1ba54-d1d5-4daa-ac4f-f9bc88c7310f" data-share-badge-host="https://www.credly.com"></div>
        <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="dc2e7f4c-fb6e-4cab-87db-52e74c5b4808" data-share-badge-host="https://www.credly.com"></div>
*/

import Image from "next/image";
import Link from "next/link";

const Badge = () => {
  return (
    <div className=" bg-zinc-400 hidden lg:flex sm:fixed right-0 my-10 top-1/2 transform -translate-y-1/2 flex-col">
      <div
        data-iframe-width="150"
        data-iframe-height="270"
        data-share-badge-id="e8d1ba54-d1d5-4daa-ac4f-f9bc88c7310f"
        data-share-badge-host="https://www.credly.com"
      ></div>

      <div
        data-iframe-width="150"
        data-iframe-height="270"
        data-share-badge-id="dc2e7f4c-fb6e-4cab-87db-52e74c5b4808"
        data-share-badge-host="https://www.credly.com"
      ></div>
    </div>
  );
};

export default Badge;
