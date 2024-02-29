// navbar para el footer, el cual se encuentra en la parte inferior de la pagina. Links solo texto y en horizontal.

import React from 'react'

const NavBarBottom = () => {
  return (
    <>
        <div className="bg-gray-900 p-4 text-white text-center">
            <div className="flex justify-center">
            <a href="/blog" className="px-4">Blog</a>
            <a href="/cv_jose_martinez.pdf" className="px-4">CV</a>
            <a href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7078460407316635648" className="px-4">Newsletter</a>
            </div>
        </div>
    </>
  )
}

export default NavBarBottom