import React from 'react';
import {Link} from 'react-router-dom';

function Footer() {



  const date = new Date();
  return (
  
      <div className="relative z-50 flex text-xs font-thin justify-center text-center py-2 w-full text-black">
        <p>&copy;{date.getFullYear()} &nbsp;&nbsp;</p>
        <p>
          <Link to={{ pathname:"https://yellow-website.com"}} target="_blank" rel="noreferrer">Yellow-Website.com</Link>
        </p> 
        
      </div>
    
  )
}

export default Footer
