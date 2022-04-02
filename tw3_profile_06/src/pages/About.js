import React from 'react'
import Image from '../media/woman.jpg';

function About() {

  const text = "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nulla fugiat vero quo ea doloremque blanditiis veritatis odio repellat sequi quae architecto assumenda repellendus, libero error ab soluta orem ipsum dolor, sit amet consectetur adipisicing elit. Quam error officia ullam a quasi temporibus, nostrum cumque nobis fugit illum, sint, fugiat magnam autem eligendi et vitae reprehenderit incidunt dicta</p><p>Eem ipsum dolor sit amet consectetur adipisicing elit. Dolores nulla fugiat vero quo ea doloremque blanditiis veritatis odio repellat sequi quae architecto assumenda repellendus, libero error ab soluta orem ipsum dolor, sit amet consectetur adipisicing elit. Quam error officia ullam a quasi temporibus, nostrum cumque nobis fugit illum, sint, fugiat magnam autem eligendi et vitae reprehenderit incidunt dicta!</p><p>Epellendus, libero error ab soluta orem ipsum dolor, sit amet consectetur adipisicing elit. Quam error officia ullam a quasi temporibus, nostrum cumque nobis fugit illum, sint, fugiat magnam autem eligendi et vitae reprehenderit incidunt dicta!</p>";

  const contact = "<div>myemail@example.com</div><div>+977 9841 269 262</div>"

  return (
    <div>
      <div className="grid md:grid-cols-2 md:min-h-screen">
        <div className="h-2/3 md:px-20 md:order-1 order-2">

          <div className="md:mt-20">
            <h1 className="uppercase font-light tracking-widest py-5 text-4xl">Bio</h1>
            <div className="first-letter:text-4xl font-thin text-sm" dangerouslySetInnerHTML={{__html: text}} />
          </div>
          <div className="mt-20 py-3 px-5 bg-gray-300">
            <h3 className="font-light">Get in touch</h3>
            <div className="font-thin" dangerouslySetInnerHTML={{__html: contact}} />
          </div>
          
        </div>
        <div className="flex order-1 md:order-2 justify-center items-center w-full md:min-h-screen h-72">
          <div className="md:w-3/4 md:h-2/3 h-72 w-2/3 bg-cover bg-right bg-[url('./media/woman.jpg')]"></div>
        </div>
      </div>
    </div>
  )
}

export default About
