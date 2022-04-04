import React from 'react'

function CardAboutJob({step,text}) {
  return (
    <li className="w-full border-b">
        <div className="w-full flex justify-center">
          <span className="w-20 h-20 bg-gray-900 text-white rounded-full flex justify-center items-center text-5xl">{step}</span>
        </div>  
        <div className="text-center py-3">
          <div dangerouslySetInnerHTML={{__html: text}}   />
        </div>        
    </li>
  )
}

export default CardAboutJob