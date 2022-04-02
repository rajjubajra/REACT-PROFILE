import {useEffect} from 'react';
import CardAboutJob from '../components/CardAboutJob';
import Introduction from '../components/Introduction';
import {gsap} from 'gsap';


function About() {


  useEffect(()=>{
    gsap.from('.title',{ duration:1, opacity: 0})
    gsap.from('.about',{ delay:1, duration:1, opacity: 0, transform: 'rotate(12deg)', stagger:0.5})
    gsap.from('.text',{ delay: 2, duration:2, opacity: 0, stagger: 0.4})
  },[])

  return (
    <div className="relative">
      <div className="w-full flex">
          {/** INTRODUCTION BLOCK */}
          <div className="first-letter:flex min-h-screen justify-self-center md:flex-none md:w-96 w-64">
              <Introduction />
          </div>

          {/** ABOUT BLOCK */}
          <div className="flex flex-grow justify-center items-center tracking-widest pl-20">
            <div className="relative flex justify-center items-center flex-col w-full h-screen">
              <div className="flex justify-end w-full">
                <h1 className="title text-9xl font-bold xl:text-gray-900/20 md:text-gray-900/10 translate-y-40 md:translate-x-32  rotate-90">About</h1>
              </div>
              <div className="grid gap-5 xl:px-52 -translate-y-20">
                  <div>
                    <h3 className="about uppercase pb-2 tracking-widest font-light">Skills</h3>
                    <div className="text font-thin">Web Design / Graphic Design / Drupal Theming / HTML, CSS and Javascript / React js and React-Redux / 
                    </div>
                  </div>
                  <div>
                    <h3 className="about uppercase pb-2 tracking-widest font-light">Tools</h3>
                    <div className="text font-thin">
                      Drupal JSONAPI, RESTful Web Services, React js, Redux-toolkit, tailwindcss
                    </div>
                  </div>
                  <div>
                      <h3 className="about uppercase pb-2 tracking-widest font-light">Project</h3>
                      <ul className="grid grid-cols-9 gap-10 max-w-lg font-thin">
                        <div className="text col-span-3 flex justify-center">
                          <CardAboutJob step="1" text="Select a Website Theme from the gallery" />
                        </div>
                        <div className="text col-span-3 flex justify-center">
                          <CardAboutJob step="2" text="I will customize the theme as per your need" />
                        </div>
                        <div className="text col-span-3 flex justify-center">
                          <CardAboutJob step="3" text="Deploy the website" />
                        </div>
                      </ul>
                  </div>
              </div>
            </div>
          </div>  
      </div>
    </div>

  
  )
}

export default About
