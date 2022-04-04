import React from 'react'

function ContactFormContainer({submit, confMsg, handleSubmit, 
                              setName,setEmail,setSubject, setMessage}) {
  return (
    <div className="md:w-1/2 px-8 md:px-0 m-auto">
    {
      submit
      ? <div className="fadeOut p-10 mt-20 font-light">
        {confMsg} <p className="text-xs font-thin mt-5"> - Yellow-Website</p>
        </div>
      : <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-4 gap-8">
          <div className="lg:col-span-2 col-span-4">
            <input 
            required
            className="w-full py-2 px-1 border-b border-gray-900 placeholder:text-gray-900 placeholder:font-thin outline-none" 
            type="text" 
            placeholder="Name" 
            onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="lg:col-span-2 col-span-4">
            <input 
            required
            className="w-full py-2 px-1 border-b border-gray-900 placeholder:text-gray-900 placeholder:font-thin outline-none" 
            type="text" 
            placeholder="Email" 
            onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div className="col-span-4">
            <input 
            className="py-2 px-1 border-b border-gray-900 w-full placeholder:text-gray-900 placeholder:font-thin outline-none" 
            type="text" 
            placeholder="Subject" 
            onChange={(e)=>setSubject(e.target.value)} />
          </div>
          <div className="col-span-4">
            <textarea 
            required
            className="w-full py-2 px-1 h-40 border-b border-gray-900 placeholder:text-gray-900 placeholder:font-thin outline-none"   placeholder="Message"
            onChange={(e)=>setMessage(e.target.value)}
            ></textarea>
          </div> 
          <div className="w-full col-span-4">
            <button className="w-full py-2 text-gray-200 font-light uppercase tracking-widest bg-gray-900">Submit</button>
          </div>
        </div>
      </form>
    }
    </div>
  )
}

export default ContactFormContainer
