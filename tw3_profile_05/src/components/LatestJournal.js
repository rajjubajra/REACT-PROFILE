import React from 'react'
import IconComment from './IconComment';
import IconHeart from './IconHeart';

function LatestJournal({image, title, comments, likes}) {
  return (
    <div className="border h-80 bg-white">
            <img className="object-cover w-full h-48" 
            src={image} alt="paper flower" />
            <div className="py-5 text-center font-thin text-xl">
              {title}
            </div>
            <div className="py-4 border-t px-3 flex w-full justify-between font-thin">
              <div className="grid grid-flow-col gap-2"><IconComment /> {comments} </div>
              <div className="grid grid-flow-col gap-2"> {likes} <IconHeart /></div>
            </div>
          </div>
  )
}

export default LatestJournal
