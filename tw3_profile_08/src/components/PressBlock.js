import React from 'react'

function PressBlock({image}) {
  return (
      <div className="md:flex m-5 border-b border-r mb-20">
        <div className="">
          <img src={image} alt="press1" />
        </div>
        <div className="p-5">
          <h2 className="my-2 text-2xl font-thin">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia vitae nostrum quidem libero exercitationem recusandae quibusdam atque.</h2>
          <div className="grid gap-2 text-sm font-thin">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem accusantium possimus atque asperiores facilis ipsa quia labore perspiciatis iure dolores voluptatibus quis, et sint delectus saepe nesciunt eos assumenda omnis!</p><p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque eligendi saepe illo consequuntur similique eveniet ipsa temporibus aperiam dolorum!
            </p>
          </div>
          <div className="font-thin tracking-widest text-xs uppercase mt-2 py-2 bg-black w-24 text-white text-center">Read</div>
          
        </div>
      </div>
  )
}

export default PressBlock
