import {useEffect} from 'react';
import AboutCard from '../components/AboutCard';
import HowDoIWork from '../components/HowDoIWork';
import Title from '../components/Title';
import {gsap} from 'gsap';

function AboutConatiner({skillsTools, howDoIwork}) {


  /** ANIMATION - gsap animation */
  useEffect(()=>{
    gsap.from('.title',{ duration:0.5, opacity: 0})
    gsap.from('.about',{ delay:0.3, duration:0.5, opacity: 0, stagger:0.5})
    gsap.to('.text',{ delay:0.5, duration:1, opacity: 1, stagger: 0.4})
  },[]);

  return (
    <div className="relative mt-7">
      <div className="w-full grid grid-cols-12">
          {/** ABOUT BLOCK */}
          <div className="md:col-span-10  md:translate-y-0  col-span-7">
            <div className="flex justify-center items-center flex-col w-full h-screen">
              <div className="md:px-6 md:text-xl text-xs">
                  <div className="about">
                    <AboutCard skillsTools={skillsTools} />
                  </div>
                  <div className="about mt-2">
                    <HowDoIWork data={howDoIwork} />
                  </div>
              </div>
            </div>
          </div>
          {/** PAGE TITLE */}  
          <div className="md:col-span-2">
            <Title title="About" />
          </div>
      </div>
    </div>
  )
}

export default AboutConatiner