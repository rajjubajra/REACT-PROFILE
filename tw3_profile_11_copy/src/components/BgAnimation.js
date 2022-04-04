import {useEffect} from 'react';
import {gsap} from 'gsap';

function BgAnimation() {
  
  useEffect(()=>{
    gsap.from('.redball',{duration: 10, width: "0px", height: "0px", opacity:0});
  })


  return (
    <div className="fixed top-0 z-0 w-full">
      <div className="flex justify-center items-center w-full h-screen">
        <div>
          <div className="redball w-14 h-14 rounded-full bg-red-900"></div>
          <div></div>
        </div>        
      </div>
      
    </div>
  )
}

export default BgAnimation
