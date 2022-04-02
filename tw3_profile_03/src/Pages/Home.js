import {useEffect} from 'react';
import ContactForm from './ContactForm';
import gsap from 'gsap';

function Home(){

  useEffect(()=> { 
    gsap.from('.fade',{duration: 1.0, opacity: '0', ease: 'power2.in'})
    gsap.from('.titleEffect',{ duration: 1.0, x: '50%', opacity:'0', delay: 1 })
  });

  return(
    <div className="fade">

{/** CONTAINER ONE */}    
    <div className="w-full min-h-screen bg-center bg-cover bg-[url('./media/bicycle-g.jpg')]">
      <div className="flex justify-end items-center min-h-screen
                      bg-gradient-to-l from-orange-100">
        <h1 className="titleEffect md:text-6xl text-3xl w-1/2 mr-20 text-right first-letter:text-8xl first-letter:italic text-orange-900 font-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing</h1>
      </div>
    </div>

{/** CONTAINER TWO */}
    <div className="md:px-20 my-20 px-10 grid md:gap-0 gap-2 md:grid-cols-2">
      {/** block - 1 */}
      <div className="flex justify-center items-center md:px-20 md:order-1 order-2" >
        <p className="first-letter:text-5xl first-letter:font-bold first-letter:font-serif first-letter:mr-1 tracking-wide font-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem aliquid quos, veritatis laborum eaque aperiam. A repudiandae fugiat, excepturi ducimus nihil minima tempore ea reprehenderit inventore dolorum ex illo, magni quisquam quis delectus laudantium ipsa recusandae maxime quia, animi sed corrupti. Ipsa odit ullam quaerat, vel incidunt inventore, nesciunt, vero ut dolorum minima illum? Fugiat, fugit vitae.</p>
      </div>
      {/** block - 2 */}
      <div className="bg-[url('./media/dolphin.jpg')] bg-center bg-cover h-96 w-full md:order-2 order-1">-</div>
      {/** block - 3 */}
      <div className="bg-[url('./media/cat.jpg')] bg-center bg-cover h-96 order-3">-</div>
      {/** block - 4 */}
      <div  className="flex justify-center items-center md:px-20 order-4">
        <p  className="first-letter:text-5xl first-letter:font-bold first-letter:font-serif first-letter:mr-1 tracking-wide font-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur sed, unde explicabo iste doloribus consequuntur iure saepe, facere eos voluptate facilis exercitationem corrupti totam rem nesciunt nemo eveniet vel aspernatur qui officia, magnam recusandae sapiente amet in. Doloremque tenetur pariatur nobis voluptate delectus commodi asperiores, necessitatibus at odio, quo optio!
        </p>
      </div>
    {/** block - 5 */}
      <div  className="flex justify-center items-center md:px-20 md:order-5 order-6">
        <p  className="first-letter:text-5xl first-letter:font-bold first-letter:font-serif first-letter:mr-1 tracking-wide font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ratione, illo, veniam animi porro quo deleniti, saepe beatae aperiam eveniet dolorem incidunt nemo enim quaerat! Rem saepe quis modi magni, quisquam nemo vero pariatur expedita ea, ex accusamus est non.</p>
      </div>
    {/** block - 6 */}
      <div className="bg-[url('./media/feathers.jpg')] bg-center bg-cover h-96 md:order-6 order-5">-</div>
    {/** block - 7 */}  
      <div className="bg-[url('./media/bird.jpg')] bg-center bg-cover h-96 order-7">-</div>
    {/** block - 8 */}  
      <div  className="flex justify-center items-center md:px-20 order-8">
        <p  className="first-letter:text-5xl first-letter:font-bold first-letter:font-serif first-letter:mr-1 tracking-wide font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quibusdam nostrum distinctio atque non maxime a possimus quidem nihil saepe voluptatum laborum ullam minima asperiores quos ipsum exercitationem? Dolorum totam nam eveniet quas aspernatur hic, autem ullam sed et minus sunt qui officiis rem maiores deserunt voluptate dolor saepe ipsam culpa iure! Dolores dolorum assumenda corrupti omnis, aut sapiente repudiandae est eum eaque vitae repellat provident porro modi ipsum fuga?</p>
      </div>
    </div>


  {/** CONTACT FORM */}
    <div>
      <ContactForm />
    </div>


    </div>


  )

}
export default Home;