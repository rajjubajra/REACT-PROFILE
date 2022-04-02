import React from 'react'

function Photography() {
  return (
    <div>
        <h1 className="ml-3 text-4xl font-light tracking-widest my-10">Through a Lens</h1>
        <div className="mb-20 grid grid-cols-2 gap-20 h-screen">
          <div className="row-span-2 bg-[url('./media/woman.jpg')] grayscale h-full bg-center bg-cover"></div>
          <div className="bg-[url('./media/newborn.jpg')] grayscale  bg-cover bg-center"></div>
          <div className="bg-[url('./media/woman-g.jpg')] bg-cover bg-center"></div>
        </div>

        <div className="my-20 grid grid-cols-2 gap-20 h-screen">
          <div className="bg-[url('./media/fig.jpg')] grayscale h-full bg-center bg-cover"></div>
          <div className="row-span-2 bg-[url('./media/bread-g.jpg')] grayscale  bg-cover bg-center"></div>
          <div className="bg-[url('./media/bread.jpg')] grayscale bg-cover bg-center"></div>
        </div> 


        <div className="my-20 grid grid-cols-2 gap-20 h-screen">
          <div className="row-span-2 bg-[url('./media/cornflakes.jpg')] grayscale h-full bg-center bg-cover"></div>
          <div className="bg-[url('./media/honey.jpg')] grayscale bg-cover bg-center"></div>
          <div className="bg-[url('./media/egg-cartons.jpg')] grayscale bg-cover bg-center"></div>
        </div>    
    </div>
  )
}

export default Photography
