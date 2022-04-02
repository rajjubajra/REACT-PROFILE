import React from 'react'

function ContactText({text}) {
  return (
    <div className="grid gap-3 font-thin">
    <div className="first-letter:text-4xl" dangerouslySetInnerHTML={{__html: text}} />
    </div>
  )
}

export default ContactText
