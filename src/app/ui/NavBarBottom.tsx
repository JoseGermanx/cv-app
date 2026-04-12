import Link from 'next/link'
import React from 'react'

const NavBarBottom = () => {
  const links = [
    { label: 'Inicio', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'CV', href: '/cv_jose_martinez.pdf' },
    { label: 'Agenda una clase', href: 'https://www.superprof.cl/aprende-javascript-transforma-carrera-tecnologia-soy-graduado-ingenieria-puedo-ayudar-dar-pasos-firmes-este.html', external: true },
    { label: 'Newsletter', href: 'https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7078460407316635648', external: true },
  ]

  return (
    <div
      className="py-5 text-center"
      style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
    >
      <div className="flex flex-wrap justify-center gap-1">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
            className="px-4 py-1.5 text-sm text-slate-500 hover:text-slate-200 transition-colors duration-200"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default NavBarBottom
