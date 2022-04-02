import React from 'react'
import IconComment from '../components/IconComment';
import {Link} from 'react-router-dom';
import IconOpen from '../components/IconOpen';

function JournalBlock({text, title, image, comments, link}) {
  return (
    <div className="mx-5">
        <div className="px-4">
          <img className="w-full h-96 object-cover" src={image} alt="paper flower" />
        </div>
        <div className="relative pt-5 ml-3 font-thin">
          <h3 className="font-serif text-2xl mb-2">{title}</h3>
          <div className="mb-5">
            <div dangerouslySetInnerHTML={{__html: text}} />
          </div>

          <Link className="text-xs flex border-l pl-3 text-right uppercase font-light" to={link}>
          <IconOpen /> <span className="relative left-3 top-1">Read more</span>
          </Link>
          
          <div className="flex mt-10 w-full border-t">
            <IconComment /> <div className="ml-2">{comments}</div>
          </div>
        </div>
    </div>
  )
}

export default JournalBlock
