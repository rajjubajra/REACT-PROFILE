import React from 'react'

function CardTheme({image, title, link}) {

  const handleClick = () => {
      window.open(link);
  };

  return (
    <div className="w-full border p-3">
        <p className="text-xm font-thin">{title}</p>
        <img src={image} alt="image02" className="w-full py-2" />
        <p className="cursor-pointer" onClick={() => handleClick()}>View</p>
      </div>
  )
}

export default CardTheme
