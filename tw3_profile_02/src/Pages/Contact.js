import {useEffect} from 'react';
import gsap from 'gsap';

function Contact(){

  useEffect(()=>{ 

    gsap.from('.pageEffect',{duration: 1.0, opacity: '0', ease: 'power2.in'})

    gsap.from('.titleEffect',{ duration: 1.0, y: '50%', opacity:'0', delay: 0 })

  });
  
  return(
    <div className="bg-gray-900 text-white px-6 md:px-0 min-h-screen" >
      <div>
        <h1 className="md:text-8xl text-5xl font-serif text-center py-10 tracking-widest italic">Get in touch</h1>
      </div>
      <div className="pageEffect md:w-1/2 m-auto py-20">
        <form className="grid grid-flow-row gap-10">
          <input className="py-4 px-2 border-0 border-b border-gray-400 bg-gray-900 outline-none"  type="text" name="text" placeholder="Name" />
          <input className="py-4 px-2 border-0 border-b border-gray-400 bg-gray-900 outline-none" type="text" name="text" placeholder="Email" />
          <textarea className="py-4 px-2 border-0 border-b border-gray-400 bg-gray-900 outline-none" name="message" placeholder="Message"></textarea>
          <input className="cursor-pointer uppercase font-light tracking-widest" type="submit" name="submit" value="Submit" />
        </form>
      </div>
    </div>
  )
}

export default Contact;