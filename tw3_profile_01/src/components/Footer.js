import React from 'react'

function Footer() {

  const date = new Date();
  
  return (
    <div className="w-full text-center text-sm font-thin bg-gray-300">
    &copy; All Rights Reserved {date.getFullYear()} |  design & developed by yellow-website.com
    </div>
  )
}

export default Footer
