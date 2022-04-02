import React from 'react'

function GalleryCard({image, index, alt}) {


  return (
    <div key={index} className="h-96 flex justify-center items-center">
        <img 
            className="w-80 h-80 hover:h-80 hover:w-full   cursor-pointer object-cover m-2 grayscale hover:grayscale-0 hover:border-0 border-8 border-black outline-none" 
            src={image} 
            alt={alt} />
    </div>
  )
}

export default GalleryCard
