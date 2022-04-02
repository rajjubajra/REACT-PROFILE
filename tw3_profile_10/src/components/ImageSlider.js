import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux'
import {gsap} from 'gsap';

function ImageSlider() {

  /** index to view image */
  const [show, setShow] = useState(0);

  /** fetch landing images */
  const images = useSelector(state => state.fetchdata.value)
console.log(images);
/** GSAP ANIMATION */
      setTimeout(()=>{
          setShow(show < images.length -1 ? show + 1 : 0)
      },10000)


      useEffect(()=>{
        images.length > 0 &&  
        gsap.from('.slide',{duration: 2, opacity: 0})
      },[show])

      useEffect(()=>{
        images.length > 0 && 
        gsap.from('.view',{duration: 6, opacity:0, transform: "translate(0, -100%)"})
      },[show])

  return (
      <ul className="absolute top-0 w-full h-auto">
        {
          images.length > 0 &&
          images.map((item, index)=>{
            return <div key={index} >
            <li>
              <img 
              className={index === show ? 'slide w-full h-screen object-cover' : 'hidden'} 
              src={item.url} 
              alt={item.alt} />
            </li>
            <div className="flex justify-center items-center w-full">
                <h1 
                className={`absolute bottom-20 md:text-7xl text-5xl text-gray-200 text-center md:w-1/2 px-1 ${show === index ? "view" : "hidden"}`}>
                {item.text}
                </h1>
            </div>
            </div>
          })
        }
        </ul>
  )
}

export default ImageSlider
