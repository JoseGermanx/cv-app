import React from 'react'
import NavBarBottom from './NavBarBottom'
import Image from 'next/image'

const Footer = () => {
  return (
    <>
    <NavBarBottom />
    <div className="bg-gray-700 w-full py-5 text-center text-white">
    <p className="text-gray-200">
      A web application made with <Image
        src="https://simpleicons.org/icons/nextdotjs.svg"
        alt="Next.js"
        width={25}
        height={25}
        className="inline"
      />{" "}
       by {" "}
      <a
        className="font-medium text-gray-200 underline transition-colors"
        href="https://jgxdev.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        José Germán Martínez
      </a>
    </p>
    <p>BetaCode Servicios Digitales e Informaticos E.I.R.L</p>
    <div className='flex justify-center align-bottom'><a className='mx-2' href='https://dev.to/josegermanx'>Léeme en dev.to</a><Image src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="dev.to" width={25} height={25} /> </div>
  </div>
  </>
  )
}

export default Footer