import {useEffect} from 'react';
import piano from '../media/piano.jpg';
import gsap from 'gsap';


function Home(){

  useEffect(()=>{ 

    gsap.from('.pageEffect',{duration: 1.5, opacity: '0', ease: 'power2.in'})

    gsap.from('.titleEffect',{ duration: 1.0, y: '50%', opacity:'0', delay: 1 })

  });





  return(
    <div>

{/** BLOCK ONE */}
    <div className="pageEffect w-full min-h-screen bg-[url('./media/music-lp.jpg')] bg-fixed bg-cover flex justify-center items-center flex-col">
    
      <div className="text-white relative bottom-16 font-serif tracking-widest text-7xl italic">
        <h1 className="titleEffect text-center">Lorem Ipsam</h1>
      </div>
      <div className="flex text-white md:text-3xl font-thin">
        <h1 className="md:mx-5 md:px-8 px-4 border-r border-gray-400">Song Writer</h1>
        <h1 className="md:mx-5 mx-2">Composer</h1> 
        <h1 className="md:mx-5 md:px-8 px-4 border-l border-gray-400">Singer</h1>
      </div> 
    
    </div>



{/** BLOCK TWO */}
    <div className="w-full py-40 md:py-0 md:min-h-screen bg-[url('./media/microphone.jpg')] bg-fixed bg-cover md:flex  justify-center items-center text-white">

      <div className="md:w-1/2 bg-white/5 p-7 font-thin 
      first-line:uppercase 
      first-letter:text-7xl
      first-letter:font-bold
      first-letter:font-serif">
        Worem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae odio animi, commodi consequatur sapiente perspiciatis vel dicta ut suscipit minus natus voluptates qui accusantium aut excepturi perferendis quisquam ipsam officia similique quo corrupti. Fuga veniam ea aspernatur perferendis, veritatis ut neque. Explicabo iste voluptatum distinctio rerum, fugiat laborum aut voluptatem culpa dicta veritatis officiis eius doloribus quia est, architecto at molestias officia incidunt aliquid optio eveniet. Facere, commodi! Rem voluptas voluptate velit eaque sunt. Et fuga omnis dignissimos architecto pariatur doloremque delectus rem quod laborum obcaecati quos laudantium, minima expedita, at exercitationem ipsam quas illo cupiditate consequuntur tenetur magnam. Voluptas.
      </div>
    </div>



{/** BLOCK THREE */}   
      <div className="w-full md:flex bg-gray-900 min-h-screen">
        <div className="md:w-1/2 py-10 md:py-0 md:h-screen flex justify-center items-center">
          <img className="w-auto h-72" src={piano} alt="media" />
        </div>

        <div className="md:w-1/2 md:h-screen md:flex justify-center items-center">

          <div className="md:px-20 px-10 pb-10 md:pb-0 text-gray-50 font-thin 
          first-letter:text-4xl first-letter:mr-1 first-letter:font-bold">
            <p>Torem ipsum dolor sit amet consectetur adipisicing elit. Quisquam minus officiis itaque, maxime reprehenderit ipsam obcaecati ea omnis saepe quia sunt. Voluptatum provident tenetur neque. Consectetur, recusandae, soluta, maxime nobis eius et ducimus sunt rem adipisci rerum debitis sapiente officia quam corporis labore! Veniam omnis molestias facere error. Voluptatem iure perspiciatis quae deserunt ea enim ipsum veritatis, excepturi vero esse quo eius similique ad magni vitae repellendus! Totam quaerat repudiandae doloribus in asperiores eius cumque sed quas dignissimos porro! Cupiditate, et. Reiciendis veniam voluptates, quos quia qui eum, officiis fugiat consequatur dignissimos corrupti quas adipisci temporibus distinctio harum facere velit?</p>
          </div>
          
        </div>

      </div>


    </div>
    
  )
}

export default Home;