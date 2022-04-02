import {useEffect} from 'react';
import gsap from 'gsap';
import ContactForm from './ContactForm';

function Press(){

  useEffect(()=>{ 

    gsap.from('.pageEffect',{duration: 1.0, opacity: '0', ease: 'power2.in'})

    gsap.from('.titleEffect',{ duration: 1.0, y: '50%', opacity:'0', delay: 0 })

  });

  return(
    <div>
      <div>
        <h1 className="md:text-7xl text-5xl font-serif text-center py-10 tracking-widest italic">Press</h1>
      </div>

{/** Gallery ONE */}
      <div className="pageEffect px-20 py-10">
        <h2 className="text-5xl font-thin mb-10">From the press</h2>
        <ul className="grid md:grid-cols-3 gap-20">
          <li className="p-3 bg-orange-50 border border-gray-400 h-60">1</li>
          <li className="p-3 bg-orange-50 border border-gray-400 h-60">2</li>
          <li className="p-3 bg-orange-50 border border-gray-400 h-60">3</li>
          <li className="p-3 bg-orange-50 border border-gray-400 h-60">4</li>
          <li className="p-3 bg-orange-50 border border-gray-400 h-60">5</li>
          <li className="p-3 bg-orange-50 border border-gray-400 h-60">6</li>
          <li className="p-3 bg-orange-50 border border-gray-400 h-60">7</li>
          <li className="p-3 bg-orange-50 border border-gray-400 h-60">8</li>
        </ul>
      </div>

      <div>
        <ContactForm />
      </div>



    </div>
  )
}

export default Press;