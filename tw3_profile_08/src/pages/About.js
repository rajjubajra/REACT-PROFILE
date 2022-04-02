import React from 'react';
import Chef from '../media/chef.jpg';
import Title from '../components/Title';

function About() {
  return (
    <div className="mx-10 my-20 flex flex-col ">
      <Title title="About us" />
      <div>
        <h2 className="text-3xl font-thin mb-1">Meet the Team</h2>
        <div className="text-justify font-thin">
          <img className="w-80 h-auto float-right pl-10 pb-5 mt-2" src={Chef} alt="chef" />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat iste repudiandae tenetur soluta quod. Dolorum delectus maxime similique tenetur reprehenderit. Eligendi fugiat sequi delectus repellat odio sint iusto, voluptas saepe rerum quae harum ratione eos nulla rem animi provident temporibus, sit labore, debitis eius magni in impedit. Hic quam ipsam numquam dolor voluptatibus deserunt sequi omnis laboriosam perspiciatis modi accusantium error illum excepturi, amet aperiam cum nisi aspernatur libero itaque quo! Excepturi velit similique facere, a quod eius iste dolores? Porro, laborum officiis quas voluptates, neque accusamus ullam magnam, amet ratione pariatur at in enim possimus voluptas maxime. Autem, exercitationem.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iste esse magnam saepe, sapiente quas qui est porro hic nostrum praesentium pariatur. Labore sit inventore odio, ad quae ut nobis eum nesciunt tempore sapiente dicta impedit repudiandae asperiores optio. Omnis alias aperiam quae magnam libero eveniet voluptatum voluptas culpa sunt.</p>
        </div>
      </div>
      <div className="my-10">
          <div className="grid grid-rows-2 md:grid-cols-2">
            <div className="font-thin text-justify mr-5 md:order-1 order-2">
              <h2  className="text-3xl font-thin mb-2">Team Members</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque deleniti magnam esse perferendis ipsum accusamus quia fuga aliquam cupiditate doloribus reiciendis error minima temporibus eos totam exercitationem cum eaque, magni ab incidunt. Perferendis eveniet eaque possimus atque adipisci, dignissimos sapiente!</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ut ab expedita itaque accusantium ipsa praesentium sed illum dolorum provident non optio magni, repudiandae id quis eveniet perferendis consequuntur ipsam officia odio fugit. Aperiam, quis ipsam repudiandae asperiores architecto voluptatibus laboriosam vero quia? Unde neque nesciunt repellat sed impedit quae.</p>
            </div>
            <div className="bg-[url('./media/team.jpg')] lg:bg-top bg-cover bg-center lg:h-96 order-1 md:order-2">
            </div>
          </div>
      </div>
      
    </div>
  )
}

export default About
