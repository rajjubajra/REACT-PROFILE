import React from 'react';
import IconLike from '../components/IconLike';

function ShopCardRate({rate}) {
  return (
    <div className="grid grid-cols-2 gap-2 text-center font-light tracking-widest">
      <div>£{rate}</div>  
      <div className="flex justify-end w-full"><IconLike /></div>
      <button className="px-4 col-span-2 py-2 border font-light tracking-widest cursor-pointer  bg-white">Add to cart</button>

    </div>
  )
}

export default ShopCardRate
