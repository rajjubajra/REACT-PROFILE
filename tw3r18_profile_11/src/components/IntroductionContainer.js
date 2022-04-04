import {useEffect} from 'react';
import {gsap} from 'gsap';



function IntroductionContainer({logo, data}) {

   /** GSAP ANIMATION */
    useEffect(()=>{
    gsap.from('.logo',{duration:0.5, transform: 'translate(0px, 300px)'})
    gsap.from('.intro',{duration:0.5, opacity: '0', delay: 0.3, stagger: 1})
    gsap.to('.signature', {duration:1.0, opacity:1, stagger: 0.6})
  },[])


  return (
    <div className="flex justify-center">
      <div className="intro absolute md:bottom-20 bottom-10 left-5 md:w-96 w-56 ">
          <div className="signature font-windSong mb-32 text-yellow-800/20 text-[10vw] opacity-0 md:flex hidden">an Artist</div> 
          
          <div className="intro font-thin tracking-widest my-4 pl-1">
            <div dangerouslySetInnerHTML={{__html: data }} />
          </div>
      </div>  
    </div>
  )
}

export default IntroductionContainer
