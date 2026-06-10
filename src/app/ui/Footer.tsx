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
        <div className="mt-3">
          <a
            href="https://github.com/JoseGermanx/feedback/issues/new?title=%5BBug%5D%20"
            className="text-slate-700 hover:text-red-400 transition-colors text-xs inline-flex items-center gap-1 mx-auto"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 2l1.5 1.5"/>
              <path d="M14.5 3.5L16 2"/>
              <path d="M9 7.5A3 3 0 0 1 15 7.5"/>
              <path d="M6.5 10a5.5 5.5 0 0 0 11 0v4a5.5 5.5 0 0 1-11 0v-4z"/>
              <path d="M3 11h3"/>
              <path d="M18 11h3"/>
              <path d="M3 17l2.5-1.5"/>
              <path d="M18.5 15.5L21 17"/>
              <path d="M12 19v3"/>
            </svg>
            Reportar un error
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
