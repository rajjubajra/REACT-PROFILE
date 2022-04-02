import React from 'react'

function ContactForm({name, setName,email, setEmail, setPhone,phone, setSubject,subject, setMessage, message}) {


  return (
    <div className="w-full mx-10">
      <div className="grid grid-cols-4">
        <input 
        type="text"
        placeholder="Name"
        className="outline-none col-span-4 border-black border-l border-r border-t p-2 font-light placeholder:text-black" 
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />
        <input 
        type="text"
        placeholder="Email"
        className="outline-none col-span-4 md:col-span-2 border-black border-l border-r md:border-r-0 border-t p-2 placeholder:text-black" 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        <input 
        type="text"
        placeholder="Phone"
        className="outline-none col-span-4 md:col-span-2 border-black border-l border-r border-t p-2 placeholder:text-black" 
        value={phone}
        onChange={(e)=>setPhone(e.target.value)}
        />
        <input 
        type="text"
        placeholder="Subject"
        className="outline-none col-span-4 border-black border-l border-r border-t p-2 placeholder:text-black" 
        value={subject}
        onChange={(e)=>setSubject(e.target.value)}
        />
        <textarea
        className="outline-none col-span-4 border-black border p-2 placeholder:text-black"
        placeholder="Message"
        value={message}
        onChange={(e)=>setMessage(e.target.value)}></textarea>
        <button className="bg-gray-200 col-span-4 mt-1 border-black border">Submit</button>
      </div>
      
    </div>
  )
}

export default ContactForm
