import React from 'react'

function About() {
  return (
    <div>

{/** CONTAINER ONE */}
      <div className="grid md:grid-cols-2">

        <div className="w-full h-80 md:min-h-screen bg-cover bg-center bg-[url('./media/lence.jpg')] grayscale"></div>


        <div className="px-10">
          <h2 className="text-3xl my-3 mb-5 font-light tracking-widest">Artist</h2>
          <div className="first-letter:text-3xl font-thin grid gap-4">

          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio dolorem fugit eos obcaecati alias praesentium assumenda ipsam omnis est, repudiandae porro vitae possimus optio commodi quibusdam hic dicta sit cum? Earum voluptatibus nemo quos. Incidunt, architecto, repellendus magnam odio ratione, quasi nulla eius rerum tempora nisi veritatis rem ducimus? Beatae delectus accusamus adipisci labore suscipit, esse tempore recusandae repellendus quam saepe iste nesciunt tenetur nihil? Enim nulla modi provident sed. Architecto quia necessitatibus consectetur animi obcaecati. Magni veritatis alias esse nisi fugit eius maiores odit voluptas perspiciatis reiciendis quisquam consectetur, commodi laboriosam repellat tempora obcaecati exercitationem consequuntur vero officiis mollitia?</p>

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet facere beatae est doloremque incidunt maxime distinctio aut porro quia. Et doloremque ut quisquam sunt quae aliquam voluptate! Sapiente enim saepe aspernatur ab omnis at neque voluptates eveniet, officiis quibusdam fuga provident, molestiae quidem voluptatibus culpa dolor, possimus debitis. Quae esse iusto repudiandae officiis culpa sapiente ad, enim voluptatum, possimus corporis autem impedit pariatur distinctio neque hic eveniet! Debitis quod consequatur eligendi error veritatis quisquam nobis, maiores aliquam voluptates eius dolores quam recusandae iure provident, fuga est corrupti hic ad, culpa saepe repellat. Voluptatum, quam suscipit! Ratione, magni non! Praesentium corporis animi minus ipsam dolor qui quaerat temporibus rem totam officia aliquid, soluta nihil quas, atque quae nemo quia, corrupti omnis.</p>
          </div>
        </div>
      </div>
{/** CONTAINER TWO */}
      <div className="mt-20 p-5">
        <h2 className="text-3xl font-light tracking-widest py-5">Collections</h2>
        <div className="font-thin">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus unde animi distinctio quis, velit, saepe dolor earum a tempora explicabo impedit, eveniet possimus eligendi facere quasi provident dolorem. Eveniet, sapiente. Molestias mollitia quisquam ab, sequi temporibus minima ex repellat incidunt ipsam a. Molestias reiciendis, ab iste explicabo qui rerum neque. Asperiores, quas. Delectus ducimus itaque harum natus ipsam fugiat atque nobis tempora! Voluptate est fuga facere et ipsam necessitatibus, velit totam nisi perspiciatis iure voluptatum nemo optio temporibus quibusdam iste neque similique non consequatur repudiandae accusamus odit aliquam qui tenetur cupiditate! Eligendi temporibus magnam reprehenderit odio laudantium vitae necessitatibus nihil cum. 
        </div>
        <div className="my-5 grid grid-cols-2 gap-10 h-screen">
          <div className="row-span-2 bg-[url('./media/honey.jpg')] grayscale h-full bg-center bg-cover"></div>
          <div className="bg-[url('./media/cornflakes.jpg')] grayscale  bg-cover bg-center"></div>
          <div className="bg-[url('./media/egg-cartons.jpg')] grayscale bg-cover bg-center"></div>
        </div>
      </div>
    </div>
  )
}

export default About
