import React from 'react'


function About() {
  return (
    <div className="px-4">

{/** container - 1 */}
      <div className="my-5">
        <div className="relative md:flex w-full flex-col">
          <div className="w-full">
            <div className="h-40 md:w-96">
              <h2 className="text-5xl text-right tracking-widest font-light">About me</h2>
              <h3 className="text-right tracking-widest uppercase mt-1">Introduction</h3>
            </div>
          </div>
        </div>
      </div>

{/** container - 2 */}
      <div>
        <div className="mb-20 grid grid-cols-2 grid-row-3 md:gap-20 gap-2 h-screen">
          <div className="md:row-span-3 bg-[url('./media/architecture.jpg')] h-full bg-center bg-cover">1</div>
          <div className="bg-[url('./media/architecture-83.jpg')]  bg-cover bg-center">2</div>
          <div className="bg-[url('./media/staircase.jpg')] grayscale bg-cover bg-center">3</div>
          <div className="bg-[url('./media/stair.jpg')] grayscale bg-cover bg-center">4</div>
        </div>

        <div className="my-20 grid md:grid-cols-3 grid-row-3 md:gap-20 gap-2 h-screen">
          <div className="row-span-2 bg-[url('./media/window.png')] grayscale h-full bg-center bg-cover">5</div>
          <div className="row-span-3 bg-[url('./media/door.jpg')] grayscale bg-cover bg-center">6</div>
          <div className="row-span-3 bg-[url('./media/landscape.jpg')] grayscale bg-cover bg-center"> 7 </div>
          <div className="bg-[url('./media/landscape.jpg')] grayscale bg-cover bg-center">8</div>
        </div> 

        <div className="my-20 grid grid-cols-2 md:gap-20  gap-2 h-screen">
          <div className="row-span-2 bg-[url('./media/holiday-home-1.jpg')] grayscale h-full bg-center bg-cover"></div>
          <div className="bg-[url('./media/house-4.jpg')] grayscale bg-cover bg-center"></div>
          <div className="bg-[url('./media/house-2.jpg')] grayscale bg-cover bg-center"></div>
        </div> 
      </div>
          
    </div>
  )
}

export default About
