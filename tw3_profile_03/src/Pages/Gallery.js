import {useEffect} from 'react';
import ContactForm from './ContactForm';
import gsap from 'gsap';

function Gallery() {

  useEffect(()=>{ 

    gsap.from('.pageEffect',{duration: 1.0, opacity: '0', ease: 'power2.in'})

    gsap.from('.titleEffect',{ duration: 1.0, y: '50%', opacity:'0', delay: 0 })

  });

  return (
    <div>
      <div>
        <h1 className="md:text-7xl text-5xl font-serif text-center py-10 tracking-widest italic">Gallery</h1>
      </div>

{/** Gallery ONE */}
      <div className="pageEffect px-20 py-10">
        <h2 className="text-5xl font-thin mb-10">Gallery One</h2>
        <ul className="grid md:grid-cols-4 gap-5">
          <li className="p-3 bg-orange-50 md:row-span-2 border border-gray-400 h-120">1</li>
          <li className="p-3 bg-orange-50 border border-gray-400 h-60">2</li>
          <li className="p-3 bg-orange-50 border border-gray-400 h-60">3</li>
          <li className="p-3 bg-orange-50 border border-gray-400 h-60">4</li>
          <li className="p-3 bg-orange-50 md:col-span-2 border border-gray-400 h-60">5</li>
          <li className="p-3 bg-orange-50 border border-gray-400 h-60">6</li>
          <li className="p-3 bg-orange-50 md:col-span-2 border border-gray-400 h-60">7</li>
          <li className="p-3 bg-orange-50 md:col-span-2 border border-gray-400 h-60">8</li>
        </ul>
      </div>


{/** Gallery TWO */}
      <div className="px-20 py-10">
        <h2 className="text-5xl font-thin mb-10">Gallery Two</h2>
        <ul className="grid md:grid-cols-4 gap-5">
          <li className="p-3 bg-orange-50 md:col-span-2 border border-gray-400 h-120">1</li>
          <li className="p-3 bg-orange-50 border border-gray-400 h-60">2</li>
          <li className="p-3 bg-orange-50 border border-gray-400 h-60">3</li>
          <li className="p-3 bg-orange-50 border border-gray-400 h-60">4</li>
          <li className="p-3 bg-orange-50 md:col-span-2 border border-gray-400 h-60">5</li>
          <li className="p-3 bg-orange-50 border border-gray-400 h-60">6</li>
          <li className="p-3 bg-orange-50 md:col-span-2 border border-gray-400 h-60">7</li>
          <li className="p-3 bg-orange-50 md:col-span-2 border border-gray-400 h-60">8</li>
        </ul>
      </div>


      {/** Gallery Three */}
      <div className="px-20 py-10">
        <h2 className="text-5xl font-thin mb-10">Gallery Three</h2>
        <ul className="grid md:grid-cols-4 gap-5">
          <li className="p-3 bg-orange-50 md:col-span-2 border border-gray-400 h-120">1</li>
          <li className="p-3 bg-orange-50 md:col-span-2 border border-gray-400 h-60">2</li>
          <li className="p-3 bg-orange-50 border border-gray-400 h-60">3</li>
          <li className="p-3 bg-orange-50 border border-gray-400 h-60">4</li>
          <li className="p-3 bg-orange-50 md:col-span-2 border border-gray-400 h-60">5</li>
          <li className="p-3 bg-orange-50 md:col-span-2 border border-gray-400 h-60">6</li>
          <li className="p-3 bg-orange-50 md:col-span-2 border border-gray-400 h-60">7</li>
          <li className="p-3 bg-orange-50 md:col-span-4 border border-gray-400 h-60">8</li>
        </ul>
      </div>

      <div>
        <ContactForm />
      </div>

    </div>
  )
}

export default Gallery
