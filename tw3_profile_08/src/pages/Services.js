import React from 'react';
import Title from '../components/Title';

function Services() {


  return (
    <div className="mx-10 my-20 font-thin">
      <Title title="Work with us" />
      <div className="grid md:grid-cols-2">
        <div className="md:mr-10 text-justify">
          <h2 className="text-4xl mb-6">We Serve</h2>
          <div className="grid gap-3">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, aliquid beatae. Aut officiis placeat ullam, dolores modi quidem illo eveniet.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia excepturi nihil atque quo earum nam quibusdam cupiditate delectus sapiente? Eaque similique laborum nihil reiciendis earum delectus quibusdam, sit voluptate cupiditate minus repellendus consectetur libero ab voluptates eveniet dolorum harum quidem, molestiae quaerat? Iusto assumenda itaque pariatur, libero aperiam quos quam?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui esse, consectetur corporis officia ipsa quas amet. Quaerat veritatis, ipsa laboriosam veniam sint alias itaque vero eum ducimus dignissimos repellendus adipisci deleniti voluptatibus nemo rem? Dicta, nemo totam eos obcaecati ipsa doloremque, error omnis eum pariatur qui, inventore quia saepe. Aliquam adipisci aut aspernatur sed dolor quidem pariatur a voluptatem, fugit ipsam provident reiciendis quia sapiente in iusto saepe recusandae perferendis veritatis veniam! Repellendus, illum suscipit distinctio laboriosam labore corrupti nam!</p>
          </div>
          
        </div>
        <div className="mt-6 md:mt-0">
          <ul className="grid grid-cols-2 w-full">
            <li className="bg-[url('./media/pasta-1.jpg')] h-80 w-auto bg-cover bg-center"></li>
            <li className="bg-[url('./media/pasta-2.jpg')] h-80 w-auto bg-cover bg-center"></li>
            <li className="bg-[url('./media/pasta-3.jpg')] h-80 w-auto bg-cover bg-center"></li>
            <li className="bg-[url('./media/pasta-4.jpg')] h-80 w-auto bg-cover bg-center"></li>
            <li className="bg-[url('./media/pasta-5.jpg')] h-80 w-auto bg-cover bg-center"></li>
            <li className="bg-[url('./media/spaghetti-1.jpg')] h-80 w-auto bg-cover bg-center"></li>
          </ul>
        </div>
      </div>
          
    </div>
  )
}

export default Services
