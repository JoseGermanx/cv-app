import React from 'react'
import NavBarBottom from './NavBarBottom'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer style={{ background: '#07090f' }}>
      <NavBarBottom />
      <div
        className="py-6 text-center"
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
      >
        <p className="text-slate-600 text-sm flex items-center justify-center gap-1.5 flex-wrap">
          Hecho con{" "}
          <Image
            src="https://simpleicons.org/icons/nextdotjs.svg"
            alt="Next.js"
            width={13}
            height={13}
            className="inline opacity-40 invert"
          />{" "}
          por{" "}
          <a
            className="text-slate-400 hover:text-white transition-colors"
            href="https://jgxdev.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            José Germán Martínez
          </a>
        </p>
        <a href="https://betacode.cl" target='_blank'>
        <p className="text-slate-700 text-xs mt-1.5">
          BetaCode Servicios Digitales e Informáticos E.I.R.L.
        </p>
        </a>
        <div className="flex justify-center items-center gap-1.5 mt-3">
          <a
            href="https://dev.to/josegermanx"
            className="text-slate-600 hover:text-slate-300 transition-colors text-xs"
            target="_blank"
            rel="noopener noreferrer"
          >
            dev.to/josegermanx
          </a>
          <Image
            src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
            alt="dev.to"
            width={18}
            height={18}
            className="opacity-50 hover:opacity-80 transition-opacity"
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer
