import React from 'react'

const Footer = () => {
  return (
    <div className="absolute w-full border-t border-gray-200 bg-white py-5 text-center">
    <p className="text-gray-500">
      A web application made with by {" "}
      <a
        className="font-medium text-gray-800 underline transition-colors"
        href="https://dev.betacode.cl"
        target="_blank"
        rel="noopener noreferrer"
      >
        BetaCode
      </a>
    </p>
    <p>BetaCode Servicios Digitales e Informaticos E.I.R.L</p>
    <iframe src="https://www.superprof.cl/enfocado-ensenar-mis-estudiantes-para-aprendan-programar-javascript-manera-divertida.html"  width="100" height="20" title="SuperProf"></iframe>
    
  </div>
  )
}

export default Footer