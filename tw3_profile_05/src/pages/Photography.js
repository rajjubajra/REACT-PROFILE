import React from 'react'
//import paperflower from '../media/paper-flower.jpg';

function Photography() {
  return (
    <div className="px-4">

{/** container - 1 */}
      <div className="my-20">
        <div className="relative md:flex w-full flex-col">
          <div className="w-full">
            <div className="h-40 md:w-96">
              <h2 className="text-5xl text-right tracking-widest font-light">Photography</h2>
              <h3 className="text-right tracking-widest uppercase mt-1">Latest Work</h3>
            </div>
          </div>
          <div className="md:w-2/3 md:h-96 h-40 bg-cover bg-center z-0 bg-[url('./media/flower.jpg')]">-</div>
          <div className="z-10 md:w-96 md:h-96 w-full h-40 bg-cover bg-center md:absolute md:right-40 my-2 bg-[url('./media/room-gca.jpg')]">
            --
          </div>
          <div className="z-10 md:w-60 md:h-96 h-40 bg-cover bg-center md:absolute md:right-20 md:top-32 bg-[url('./media/plant-42.jpg')]">
            -|-
          </div>
          
        </div>
      </div>

{/** container - 2 */}
      <div>
        <h1 className="ml-3 text-4xl font-light tracking-widest my-10">Through a Lens</h1>
        <div className="mb-20 grid grid-cols-2 grid-row-3 md:gap-20 gap-2 h-screen">
          <div className="md:row-span-3 bg-[url('./media/kimono.jpg')] h-full bg-center bg-cover">1</div>
          <div className="bg-[url('./media/japanese-lan.jpg')]  bg-cover bg-center">2</div>
          <div className="bg-[url('./media/door-handle.jpg')] bg-cover bg-center">3</div>
          <div className="bg-[url('./media/lantern.jpg')] bg-cover bg-center">4</div>
        </div>

        <div className="my-20 grid md:grid-cols-3 grid-row-3 md:gap-20 gap-2 h-screen">
          <div className="row-span-2 bg-[url('./media/lantern.jpg')] h-full bg-center bg-cover">5</div>
          <div className="row-span-3 bg-[url('./media/teapot.jpg')] bg-cover bg-center">6</div>
          <div className="row-span-3 bg-[url('./media/tea.jpg')] bg-cover bg-center"> 7 </div>
          <div className="bg-[url('./media/landscape.jpg')] bg-cover bg-center">8</div>
        </div> 

        <div className="my-20 grid grid-cols-2 md:gap-20  gap-2 h-screen">
          <div className="row-span-2 bg-[url('./media/buddha-eye.jpg')] grayscale h-full bg-center bg-cover"></div>
          <div className="bg-[url('./media/statues.jpg')] grayscale bg-cover bg-center"></div>
          <div className="bg-[url('./media/buddha.jpg')] grayscale bg-cover bg-center"></div>
        </div> 
      </div>
          
    </div>
  )
}

export default Photography
