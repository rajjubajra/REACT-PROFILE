import React from 'react'

function ContactForm() {
  return (
    <div className="md:w-1/2 px-8 md:px-0 m-auto py-10 mb-20">
      <h1 className="text-4xl font-serif py-10">Contact Me</h1>
      <form>
        <div className="grid grid-cols-4 gap-8">
          <div className="col-span-2">
            <input className="w-full py-2 px-1 border-b border-gray-900 placeholder:text-gray-900 placeholder:font-thin" type="text" placeholder="Name" />
          </div>
          <div className="col-span-2">
            <input className="w-full py-2 px-1 border-b border-gray-900 placeholder:text-gray-900 placeholder:font-thin" type="text" placeholder="Email" />
          </div>
          <div className="col-span-4">
            <input className="py-2 px-1 border-b border-gray-900 w-full placeholder:text-gray-900 placeholder:font-thin" type="text" placeholder="Subject" />
          </div>
          <div className="col-span-4">
            <textarea className="w-full py-2 px-1 h-40 border-b border-gray-900 placeholder:text-gray-900 placeholder:font-thin"   placeholder="Message"></textarea>
          </div> 
          <div className="w-full col-span-4">
            <button className="w-full py-2 text-gray-200 font-light uppercase tracking-widest bg-gray-900">Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
