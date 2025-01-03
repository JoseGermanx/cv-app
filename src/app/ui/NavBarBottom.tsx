// navbar para el footer, el cual se encuentra en la parte inferior de la pagina. Links solo texto y en horizontal.

import Link from 'next/link'
import React from 'react'

const NavBarBottom = () => {
  return (
    <>
        <div className="bg-gray-900 p-4 text-white text-center">
            <div className="flex justify-center">
            <Link href="/" className="px-4">Inicio</Link>
            <Link href="/blog" className="px-4">Blog</Link>
            <Link href="/cv_jose_martinez.pdf" className="px-4">CV</Link>
            <Link href="https://www.superprof.cl/aprende-javascript-transforma-carrera-tecnologia-soy-graduado-ingenieria-puedo-ayudar-dar-pasos-firmes-este.html" className="px-4" target="_blank">Agenda una clase</Link>
            <Link href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7078460407316635648" className="px-4">Newsletter</Link>
            </div>
        </div>
    </>
  )
}

export default NavBarBottom