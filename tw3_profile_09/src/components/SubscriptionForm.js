import React from 'react'

function SubscriptionForm({firstname, setFirstname, lastname, setLastname, email, setEmail}) {


  return (
    <div className="w-full md:px-5">
      <div className="grid grid-cols-4">
        <input 
        type="text"
        placeholder="Email"
        className="outline-none col-span-4 md:col-span-4 border-black border-l border-r border-t p-2 placeholder:text-black" 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        <input 
        type="text"
        placeholder="First Name"
        className="outline-none md:col-span-2 col-span-4 border-black border-l border-r border-t p-2 font-light placeholder:text-black" 
        value={firstname}
        onChange={(e)=>setFirstname(e.target.value)}
        />
        <input 
        type="text"
        placeholder="Last Name"
        className="outline-none md:col-span-2 col-span-4 border-black border-l border-r md:border-l-0 border-t p-2 font-light placeholder:text-black" 
        value={lastname}
        onChange={(e)=>setLastname(e.target.value)}
        />
        <button className="bg-gray-200 py-2 col-span-4  border-black border font-light tracking-widest">Submit</button>
      </div>
      
    </div>
  )
}

export default SubscriptionForm
