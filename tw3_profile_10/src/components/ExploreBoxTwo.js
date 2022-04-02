import React from 'react'

function ExploreBoxTwo({image, alt}) {
  return (
    <div className="md:h-96 flex">
        <div className="flex-none flex justify-center items-center w-1/3">
          <div className="w-52 md:h-40 h-32 translate-x-10 md:-translate-y-24 bg-gray-50 drop-shadow-md border border-gray-100 font-thin flex justify-center items-center">
            ?
          </div>
          </div>
          <div className="flex-grow flex justify-center items-center md:pr-0 pr-2">
            <img src={image} alt={alt} />
          </div>
    </div>
  )
}

export default ExploreBoxTwo
