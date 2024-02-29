import React from 'react'
import NavBarBottom from './NavBarBottom'

const Footer = () => {
  return (
    <div className="absolute w-full border-t border-gray-200 bg-white py-5 text-center">
      <NavBarBottom />
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
  </div>
  )
}

export default Footer