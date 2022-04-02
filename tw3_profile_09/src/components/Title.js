import React from 'react'

function Title({title}) {
  return (
    <div className="w-full text-center">
    <h1 className="text-5xl font-thin tracking-widest first-letter:text-9xl">
      {title}
    </h1>
    </div>
  )
}

export default Title
