import {useEffect}from 'react';
import ContactForm from './ContactForm';
import {SocialIcon} from'react-social-icons';
import {gsap} from 'gsap';

function Contact(){

  useEffect(()=>{
    gsap.from('.fade',{duration:2, opacity: 0, stagger:0.5});
  });

  return(
    <div className="px-4 w-full">
    <div className="my-5">
        <div className="relative md:flex w-full flex-col">
          <div className="fade w-full">
            <div className="h-40 md:w-96">
              <h2 className="text-5xl text-right tracking-widest font-light">
                Ask Me Anything</h2>
            </div>
          </div>
        </div>
    </div>
    <div className="md:grid md:grid-cols-3 md:mr-10">
      <div className="fade col-span-2">
        <ContactForm />
      </div>
      <div className="fade flex justify-center items-center font-thin tracking-widest bg-gray-900 text-white py-40 my-5 md:py-0 md:my-0">
        <div className="flex">
          <div className="fade">
            <SocialIcon style={{ height: 25, width: 25 }} url="https://www.whatsapp.com/" />
          </div>
          <div className="fade mx-2">+44(0)7828 991 384</div>
        </div>
        
      </div>
    </div>
    </div>
    
  )
}

export default Contact;