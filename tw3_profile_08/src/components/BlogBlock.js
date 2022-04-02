import React from 'react'

function BlogBlock({image, blogImg}) {
  return (
    <div className="w-full border pb-5">
        <div className="bg-cover bg-center">
          <img className="w-full h-80 object-cover" src={blogImg} alt="main" />
        </div>
        <div className="px-2">
          <div className="py-10 flex">
            <div>
              <img className="rounded-full w-10 h-10 object-cover mr-5 mt-1" src={image} alt="woman" />
            </div>
            <div className="text-sm font-thin">
              <p>Loren Ipson</p>
              <p>Nov 20, 2022</p>
            </div>
          </div>
          <div className="text-3xl font-thin">Dicta accusantium odio veritatis ltium sit amet</div>
          <div className="text-sm font-thin mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque magni reiciendis maxime eius omnis alias cupiditate, vero, sunt sequi provident ratione quam officia eveniet quae adipisci ullam optio, obcaecati dolore!</div>
        </div>
    </div>
  )
}

export default BlogBlock
