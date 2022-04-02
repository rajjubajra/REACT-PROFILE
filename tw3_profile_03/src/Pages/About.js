import {useEffect} from 'react';
import girl from '../media/girl.jpg';
import car from '../media/car.jpg';
import ContactForm from './ContactForm';
import gsap from 'gsap';

function About() {

  useEffect(()=> { 

    gsap.from('.pageEffect',{duration: 1.0, opacity: '0', ease: 'power2.in'})
    gsap.from('.titleEffect',{ duration: 1.0, y: '50%', opacity:'0', delay: 0 })

  });

  return (
    <div className="pageEffect w-full h-auto md:px-20 px-10 py-10 mb-20">
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <img src={girl} alt="girl" />
        </div>
        <div>
          <img src={car} alt="car" />
        </div>
      </div>

      <h1 className="text-center w-full md:text-7xl text-4xl font-serif tracking-wider italic">About me</h1>
      <div className="font-light first-letter:text-6xl first-letter:mr-1 first-letter:font-serif mb-40">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt iste cum eum aut sunt modi, culpa corrupti! Animi quod eum facilis delectus quaerat velit natus, autem vel commodi mollitia repellat omnis hic quasi qui excepturi sequi consequatur ipsum, assumenda, temporibus illum esse aliquid minus at. Eveniet voluptatem repellendus alias consequatur ratione, iusto assumenda reprehenderit. Expedita nostrum, aliquid assumenda sit vel aliquam, debitis dolorum tenetur illum amet voluptate, cumque unde? Natus, consequatur dolorum asperiores aperiam velit, praesentium nam saepe blanditiis quod laudantium incidunt officiis reiciendis corrupti eveniet, et laboriosam delectus quibusdam aspernatur. Voluptate, optio neque beatae eos architecto aliquam suscipit similique rem non aspernatur, eius deleniti ratione ipsam? Numquam magni cum necessitatibus beatae at perspiciatis explicabo deleniti ea fugiat quo? Officiis eum pariatur quidem obcaecati cumque nulla aperiam esse, aut quos adipisci rerum, dolorem mollitia similique harum? Officia non corrupti eveniet ad facere harum? In vero aliquid excepturi quas eligendi nisi officiis reiciendis recusandae? Natus ad, at illum harum ab molestias, facere, sequi modi in quos magnam quam perspiciatis voluptate beatae! Ullam facere molestiae laboriosam, officia distinctio rerum accusantium? Nobis autem iste voluptatem incidunt corrupti dignissimos nemo excepturi provident culpa odio, nihil earum tenetur neque delectus totam voluptatibus eum officiis reprehenderit?</p>
      </div>

      <div>
        <ContactForm />
      </div>
      
    </div>
  )
}

export default About
