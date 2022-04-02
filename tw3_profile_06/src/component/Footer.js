import React from 'react'

function Footer() {

  const date = new Date();
  return (
    <div className="md:flex md:text-sm text-xs font-thin py-5">
      <p className="text-center">&copy; All rights reserved. {date.getFullYear()} </p> 
      <p className="md:block hidden px-2"> | </p>
      <p className="text-center"><a href="https://yellow-website.com">yellow-website.com</a></p>
    </div>
  )
}

export default Footer
