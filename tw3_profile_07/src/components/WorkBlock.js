import React from 'react'
import IconComment from './IconComment';
import {Link} from 'react-router-dom';

function WorkBlock({title, text,image, comments, link}) {
  return (
    <div className="grid md:grid-cols-2 md:gap-10 mr-5">
        <div className="px-4">
          <img className="w-full h-96 object-cover grayscale" src={image} alt="paper flower" />
        </div>
        <div className="relative md:pt-20 pt-5 ml-3 font-thin">
          <h3 className="font-serif text-2xl mb-2">{title}</h3>
          <div className="mb-5 md:mb-0">
            <div dangerouslySetInnerHTML={{__html: text}} />
          </div>

          <Link className="text-xs border-l ml-4 pl-3 text-right uppercase font-light" to={link}>
          Read more</Link>
          
          <div className="md:absolute md:bottom-2 mt-16 flex w-full border-t">
            <IconComment /> <div className="ml-2">{comments}</div>
          </div>
        </div>
    </div>
  )
}

export default WorkBlock
