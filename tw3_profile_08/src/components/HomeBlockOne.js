import React from 'react'

function HomeBlockOne({image, text}) {

  //console.log(image);

  

  return (
    <div className="relative my-10 grid md:grid-cols-2 md:px-12 px-5 py-10 bg-white/80 md:border border-gray-900">
        <div className="w-full h-auto">
          <img className="w-full object-cover h-96" src={image}  alt="media file" />
        </div>
        <div className="px-5 mt-4 md:mt-0 tracking-wide text-gray-800 font-light">
          <div className="grid gap-4" dangerouslySetInnerHTML={{__html: text}}/>
        </div>
        <div className="md:absolute text-right mt-5 md:bottom-5 right-5 cursor-pointer font-light tracking-widest">View</div>
    </div>
  )
}

export default HomeBlockOne
