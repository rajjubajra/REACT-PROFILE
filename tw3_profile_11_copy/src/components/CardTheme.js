import React from 'react'
import {Link} from 'react-router-dom';

function CardTheme({image, title, link}) {
  return (
    <div className="w-full border p-3">
        <p className="text-xm font-thin">{title}</p>
        <img src={image} alt="image02" className="w-full py-2" />
        <p><Link to={link}>View</Link></p>
      </div>
  )
}

export default CardTheme
