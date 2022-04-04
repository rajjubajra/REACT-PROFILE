import React from 'react'

function CardAbout({title, text}) {
  return (
    <div>
      <h3 className="about uppercase pb-2 tracking-widest font-light">{title}</h3>
      <div className="text font-thin">
        <div dangerouslySetInnerHTML={{__html: text}} />
      </div>
    </div>
  )
}

export default CardAbout