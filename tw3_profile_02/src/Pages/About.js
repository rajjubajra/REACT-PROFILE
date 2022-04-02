import {useEffect} from 'react';
import gsap from 'gsap';

function About(){

  useEffect(()=>{ 

    gsap.from('.pageEffect',{duration: 1.5, opacity: '0', ease: 'power2.in'})

    gsap.from('.titleEffect',{ duration: 1.0, y: '50%', opacity:'0', delay: 1 })

  });

  return(
    <div className="pageEffect">

{/** BLOCK ONE */}      
      <div className="min-h-screen bg-[url('./media/guitar.jpg')] bg-fixed bg-cover flex items-center">
        <h1 className="titleEffect md:text-9xl text-7xl -rotate-90 md:rotate-0 text-white tracking-widest font-serif relative md:left-40 italic">About</h1>
      </div>

{/** BLOCK TWO */}
      <div className="min-h-screen bg-[url('./media/record-player.jpg')] bg-cover bg-scroll flex justify-center items-center">
        <div className="md:w-1/2 text-white p-10 bg-black/20 first-letter:text-7xl first-letter:mr-3 first-letter:font-bold first-line:uppercase font-thin">
          Dolor, sit amet consectetur adipisicing elit. Assumenda ab inventore, sapiente rerum ut sit, id nulla et totam odio exercitationem dolor itaque enim veniam velit. Deleniti expedita neque ipsam! Natus eius quam cum vitae, inventore nostrum dicta repudiandae beatae quas quos provident libero necessitatibus alias deleniti rerum nemo vero consequatur reprehenderit placeat iste, fuga, veniam nulla! Dignissimos, iusto perferendis excepturi a optio labore fugit repudiandae expedita ad possimus voluptatibus recusandae repellendus magnam vitae, maiores, accusantium omnis perspiciatis libero quia officiis neque eos. Modi adipisci animi sapiente deleniti doloribus praesentium quaerat ex id itaque ullam exercitationem, aperiam maiores fuga eum, optio error corrupti 
        </div>
      </div>


{/** BLOCK THREE */}
      <div className="w-full min-h-screen flex justify-center items-center bg-gray-900 md:px-20 px-10 py-20 md:py-0">
        <div className="text-white md:h-60 first-letter:text-7xl first-letter:mr-3 first-letter:font-bold first-line:uppercase font-thin">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error vitae, blanditiis eligendi reiciendis atque animi minima earum officia consequuntur quas impedit at assumenda ex nemo, sequi eum itaque saepe dolor deleniti? Vitae, corrupti quas, harum molestias aut repellat beatae sit earum repellendus corporis consequatur nisi eaque qui placeat ducimus ut illum praesentium error quae vel temporibus adipisci animi labore. Voluptatem, voluptates adipisci nam dolorem consequatur porro corrupti mollitia explicabo? Officiis nulla minima expedita ut nihil cupiditate possimus? Iusto rem magni aspernatur laudantium. Libero ut eos, voluptates eligendi a, est harum natus aliquam explicabo culpa adipisci nisi soluta dolores nobis numquam blanditiis? Perspiciatis dolore provident error itaque at veniam, incidunt ducimus nihil consectetur voluptate? Ipsam minus quis quasi aperiam doloremque rerum error perspiciatis atque, provident reprehenderit corporis quam incidunt optio mollitia! Aspernatur quasi, harum doloremque debitis nulla beatae cumque eum quo magnam nihil, earum nobis dolores maxime voluptatum rem numquam? Culpa quisquam temporibus facilis laboriosam aperiam a, nam necessitatibus, ad deserunt doloribus amet eaque consequuntur praesentium tempore animi inventore sapiente? Facilis suscipit velit alias nobis consequuntur, ad, veniam nisi iure eius similique fuga aperiam nulla rem dolorum ipsa, quis vitae nostrum rerum! Nisi alias sequi repudiandae praesentium eligendi totam ullam ad.</p>
        </div>
      </div>
    </div>
  )
}

export default About;