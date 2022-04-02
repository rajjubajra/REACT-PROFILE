import React from 'react'
import HomeBlockOne from '../components/HomeBlockOne';
import pasta4 from '../media/pasta-4.jpg';
import pasta5 from '../media/pasta-5.jpg';
import pasta1 from '../media/pasta-1.jpg';


function Home() {

  const textOne = "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem ad quod consequuntur optio dolorem libero sint accusamus placeat, id, impedit iusto rem inventore at harum! Maxime iure assumenda nulla rerum?</P>";

  const textTwo = "<p>Tolor sit amet consectetur, adipisicing elit. Autem ad quod consequuntur optio dolorem libero sint accusamus placeat, id, impedit iusto rem inventore at harum! Maxime iure assumenda nulla rerum</P>";

  const textThree = "<p>Ydipisicing elit. Autem ad quod consequuntur optio dolorem libero sint accusamus placeat, id, impedit iusto rem inventore at harum! Maxime iure assumenda nulla rerum Tolor sit amet consectetur, </P><p>The libero sint accusamus placeat, id, impedit iusto rem inventore at harum! Maxime iure assumenda nulla rerum</p>";

  

  return (
    <div className="relative min-h-screen">

{/** container - one  */}      
      <div className="fixed w-full h-auto">
        <div className="grid md:grid-cols-4 grid-cols-2 lg:gap-1">
          <div className="md:h-96 h-60 bg-cover bg-center bg-[url('./media/landing-1.jpg')] font-thin p-3">1</div>
          <div className="md:h-96 h-60 bg-cover bg-center bg-[url('./media/landing-2.jpg')] font-thin p-3">2</div>
          <div className="md:h-96 h-60 bg-cover bg-center bg-[url('./media/landing-3.jpg')] font-thin p-3">3</div>
          <div className="md:h-96 h-60 bg-cover bg-center bg-[url('./media/landing-4.jpg')] font-thin p-3">4</div>
        </div>

        <div className="md:px-20 px-5 md:flex justify-center items-center py-2">
          <div className="first-letter:text-4xl first-line:font-serif font-thin">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum incidunt blanditiis deserunt laboriosam nam quod officia nulla nemo explicabo perspiciatis. Dignissimos possimus ratione officiis perferendis esse velit et voluptatibus consectetur?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum incidunt blanditiis deserunt laboriosam nam quod officia nulla nemo explicabo perspiciatis.</p>
          </div>
        </div>
      </div>


{/** container two */}
      <div className="absolute md:top-1/2 mt-20 top-full md:px-20 md:py-3 bg-white">

        <div className="grid md:grid-cols-3 gap-2 mb-20">

            <div className="col-span-2">
              <HomeBlockOne text={textOne} image={pasta5} />
              <HomeBlockOne text={textTwo} image={pasta4} />
              <HomeBlockOne text={textThree} image={pasta1} />
            </div>

            <div className="p-10 bg-gray-800/80 text-gray-100 font-thin grid gap-10">       
            <p className="first-letter:text-3xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius totam neque labore saepe quo est. Sunt expedita, neque commodi suscipit error quae maxime vero reprehenderit minus veniam, dolore sit. Magni, laudantium? Odio exercitationem, amet suscipit inventore quos ea</p>
            <p className="first-letter:text-3xl">officiis laudantium non praesentium ullam ab esse quae reiciendis modi voluptas veniam, reprehenderit dignissimos? Rerum neque quo dolore ipsum voluptate consectetur suscipit vero sed delectus, quod, architecto et dolorum, nihil possimus quidem reiciendis deleniti velit eius aliquid obcaecati qui odio. At ipsum velit enim amet itaque ratione aliquam alias? Ipsam obcaecati eaque non accusamus incidunt deleniti inventore impedit rerum assumenda mollitia, </p>
            <p className="first-letter:text-3xl">Aspernatur id porro sit illum accusantium alias tempore itaque enim. Laudantium, maxime! Quos enim in aliquam aspernatur ipsum animi, accusamus iure officiis facilis repudiandae. At consectetur ullam, voluptate voluptatibus voluptatem repudiandae dolorem exercitationem minus quod officia expedita debitis assumenda nihil amet est molestiae nobis similique tempore totam, fugit repellendus corrupti?</p>
            <p className="first-letter:text-3xl">Yipisci distinctio fugiat aspernatur iusto quasi, neque maxime laudantium at temporibus molestias repellendus doloribus! Voluptate, provident facilis. Magni at aliquid reiciendis rerum impedit consequuntur, possimus voluptates tempore iste quas fuga quae voluptatem! Numquam doloribus deserunt perferendis. Quasi, ut dolor sunt repudiandae autem magni soluta reiciendis! Fugiat deleniti expedita soluta vel harum!</p>
            </div>  
        </div>
        
      </div>
    </div>
  )
}

export default Home