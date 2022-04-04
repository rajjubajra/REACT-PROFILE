import CardTheme from '../components/CardTheme';
import React, {useEffect} from 'react';
import {gsap} from 'gsap';


function ThemeContainer({themelist}) {

  /** GSAP Animation */
  useEffect(()=>{
    gsap.from('.card', {duration:1, opacity:0, stagger:0.5});
  },[])
  
  return (
    <div className="px-4">
        <h2 className="py-10 font-light md:text-4xl text-3xl tracking-widest">
          The Gallery
        </h2>
        <div className="text-xs grid md:grid-cols-2 w-full gap-2 font-light">
          {
            themelist.length > 0 &&
            themelist.map((item,index)=>{
              return <div key={index} className="card">
                <CardTheme 
                    image={item.field_theme_gallery_theme_image}
                    title={item.title}
                    link={item.field_theme_gallery_theme_link}
                />
              </div>
            })
          }
        </div>
    </div>
  )
}

export default ThemeContainer
