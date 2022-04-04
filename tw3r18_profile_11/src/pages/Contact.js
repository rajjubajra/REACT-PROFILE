import {useEffect}from 'react';
import ContactForm from './ContactForm';
import {SocialIcon} from'react-social-icons';
import {gsap} from 'gsap';
//import Logo from '../components/Logo';

function Contact(){

  useEffect(()=>{
    gsap.from('.fade',{duration:2, opacity: 0, stagger:0.5});
  });

  return(
    <div className="px-4 w-full lg:mt-0 my-10">

      {/** PAGE TITLE */}
    <div className="my-12">
        <div className="relative md:flex w-full">
          <div className="fade w-full">
            <div className="lg:w-96">
              <h2 className="text-5xl lg:text-right text-center tracking-widest font-light">
                Ask Me Anything
              </h2>
            </div>
          </div>
          <div className="mr-20">
            {/** <Logo /> */}
          </div>
          
        </div>
    </div>
    <div className="lg:grid lg:grid-cols-3 md:mr-10">

      {/** CONTACCT FORM */}
      <div className="fade col-span-2 lg:mb-0 mb-12">
        <ContactForm />
      </div>

      {/** CONTACT TEL NUMBER */}
      <div className="fade flex justify-center items-center 
      font-thin 
      tracking-widest 
      bg-gray-900
      text-white 
      h-96
      py-40 my-5 md:py-0 md:my-0">
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