import React from 'react';
//import {Link} from 'react-router-dom';
function Footer() {
  const date = new Date();
  return (
    <div className="relative z-50 md:flex text-xs font-thin justify-center text-center py-2 bg-gray-50/25 w-full text-black">
      <p>&copy; All Rights Reserved {date.getFullYear()} &nbsp;&nbsp;</p>
      <p> desing and developed by : <a href="https://yellow-website.com" target="_blank" rel="noreferrer">Yellow-Website.com</a>
      </p> 
    </div>
  )
}

export default Footer
