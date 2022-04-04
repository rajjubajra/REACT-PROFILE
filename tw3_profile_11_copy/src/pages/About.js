import {useEffect} from 'react';
import CardAbout from '../components/CardAbout';
import CardAboutJob from '../components/CardAboutJob';
import Introduction from '../components/Introduction';
import {gsap} from 'gsap';


const textone = [
  {
    "id": 1, 
    "title": "Title One", 
    "text" : "<p>Dolor sit amet consectetur adipisicing elit. Sunt eum voluptatem rem, dignissimos eaque vitae exercitationem obcaecati, voluptas iusto saepe praesentium labore repellendus excepturi perferendis molestiae, quae perspiciatis sapiente</p>"
  },
  {
    "id": 2, 
    "title": "Title Two", 
    "text" : "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eum voluptatem rem</p><p>Vitae laborum exercitationem obcaecati, voluptas iusto saepe praesentium labore repellendus excepturi perferendis molestiae, quae perspiciatis sapiente</p>"
  },
  {
    "id": 3, 
    "title": "Title Three", 
    "text" : "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eum voluptatem rem, dignissimos eaque vitae laborum exercitationem obcaecati, voluptas iusto saepe praesentium labore repellendus excepturi perferendis molestiae, quae perspiciatis sapiente</p>"
  }

]


const textTwo = [
  {
    "id": 1, 
    "step": "1", 
    "text" : "<p>Tit amet</p>"
  },
  {
    "id": 2, 
    "step": "2", 
    "text" : "<p>Exercitationem obcaecati</p>"
  },
  {
    "id": 3, 
    "step": "3", 
    "text" : "<p>Lorem ipsum dolor sit</p>"
  }

]


function About() {
  useEffect(()=>{
    gsap.from('.title',{ duration:1, opacity: 0})
    gsap.from('.about',{ delay:0, duration:0.5, opacity: 0, stagger:0.3})
    gsap.from('.text',{ delay: 0.3, duration:0.4, opacity: 0, stagger: 0.3})
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
                  {
                    textone.length > 0 &&
                    textone.map( item => {
                        return <div>
                          <CardAbout text={item.text} title={item.title} />
                        </div> 
                    })

                  }
                  
                  <div>
                      <h3 className="about uppercase pb-2 tracking-widest font-light">Project</h3>
                      <ul className="grid grid-cols-9 gap-10 max-w-lg font-thin">
                        {
                          textTwo.length > 0 &&
                          textTwo.map(item => {
                            return <div className="text col-span-3 flex justify-center">
                            <CardAboutJob step={item.step} text={item.text} />
                            </div>
                          })
                        }  
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
