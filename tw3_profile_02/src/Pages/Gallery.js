import {useEffect} from 'react';
import gsap from 'gsap';

function Gallery(){

  useEffect(()=>{ 

    gsap.from('.pageEffect',{duration: 1.0, opacity: '0', ease: 'power2.in'})

    gsap.from('.titleEffect',{ duration: 1.0, y: '50%', opacity:'0', delay: 0 })

  });


  return(
    <div className="bg-gray-900 text-white" >
      <div>
        <h1 className="md:text-8xl text-6xl font-serif text-center py-10 tracking-widest italic">Gallery</h1>
      </div>

{/** Gallery ONE */}
      <div className="pageEffect px-20 py-10">
        <h2 className="md:text-5xl text-3xl font-thin mb-10">Gallery One</h2>
        <ul className="grid md:grid-cols-4 grid-cols-1 gap-5">
          <li className="p-3 bg-gray-800 border border-gray-50/10 md:h-120 h-60">1</li>
          <li className="p-3 bg-gray-800 border border-gray-50/10 h-60">2</li>
          <li className="p-3 bg-gray-800 border border-gray-50/10 h-60">3</li>
          <li className="p-3 bg-gray-800 border border-gray-50/10 h-60">4</li>
          <li className="p-3 bg-gray-800 md:col-span-2 border border-gray-50/10 h-60">5</li>
          <li className="p-3 bg-gray-800 md:col-span-2 border border-gray-50/10 h-60">6</li>
          <li className="p-3 bg-gray-800 md:col-span-2 border border-gray-50/10 h-60">7</li>
          <li className="p-3 bg-gray-800 md:col-span-2 border border-gray-50/10 h-60">8</li>
        </ul>
      </div>


{/** Gallery TWO */}
      <div className="px-20 py-10">
        <h2 className="md:text-5xl text-3xl font-thin mb-10">Gallery Two</h2>
        <ul className="grid md:grid-cols-4 grid-cols-1 gap-5">
          <li className="p-3 bg-gray-800 md:col-span-2 border border-gray-50/10 md:h-120">1</li>
          <li className="p-3 bg-gray-800 border border-gray-50/10 h-60">2</li>
          <li className="p-3 bg-gray-800 border border-gray-50/10 h-60">3</li>
          <li className="p-3 bg-gray-800 border border-gray-50/10 h-60">4</li>
          <li className="p-3 bg-gray-800 md:col-span-2 border border-gray-50/10 h-60">5</li>
          <li className="p-3 bg-gray-800 border border-gray-50/10 h-60">6</li>
          <li className="p-3 bg-gray-800 md:col-span-2 border border-gray-50/10 h-60">7</li>
          <li className="p-3 bg-gray-800 md:col-span-2 border border-gray-50/10 h-60">8</li>
        </ul>
      </div>


      {/** Gallery Three */}
      <div className="px-20 py-10">
        <h2 className="md:text-5xl text-3xl font-thin mb-10">Gallery Three</h2>
        <ul className="grid md:grid-cols-4 grid-cols-1 gap-5">
          <li className="p-3 bg-gray-800 md:col-span-2 border border-gray-50/10 h-120">1</li>
          <li className="p-3 bg-gray-800 md:col-span-2 border border-gray-50/10 h-60">2</li>
          <li className="p-3 bg-gray-800 border border-gray-50/10 h-60">3</li>
          <li className="p-3 bg-gray-800 border border-gray-50/10 h-60">4</li>
          <li className="p-3 bg-gray-800 md:col-span-2 border border-gray-50/10 h-60">5</li>
          <li className="p-3 bg-gray-800 md:col-span-2 border border-gray-50/10 h-60">6</li>
          <li className="p-3 bg-gray-800 md:col-span-2 border border-gray-50/10 h-60">7</li>
          <li className="p-3 bg-gray-800 md:col-span-4 border border-gray-50/10 h-60">8</li>
        </ul>
      </div>

    </div>
    )
}

export default Gallery;