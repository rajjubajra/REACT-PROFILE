import CardTheme from '../components/CardTheme';
import image02 from '../media/profile-02.jpg';
import image03 from '../media/profile-03.jpg';
import image04 from '../media/profile-04.jpg';
import image05 from '../media/profile-05.jpg';
import {gsap} from 'gsap';
import{useEffect} from 'react';



function Themes() {


  useEffect(()=>{
    gsap.from('.card', {duration:1, opacity:0, stagger:0.5});
  },[])

  return (
    <div className="px-4">
    <h2 className="py-3 font-light text-2xl uppercase tracking-widest">Theme Gallery</h2>
    <div className="text-xs grid grid-cols-2 w-full gap-2 font-light">
      <div className="card">
        <CardTheme image={image05} link={`#`} title="Profile-10 -  [tw3-profile-10]"/>
      </div>
      <div className="card">
        <CardTheme image={image04} link={`#`} title="Profile-10 -  [tw3-profile-10]"/>
      </div>
      <div className="card">
        <CardTheme image={image03} link={`#`} title="Profile-10 -  [tw3-profile-10]"/>
      </div>
      <div className="card">
        <CardTheme image={image02} link={`#`} title="Profile-10 -  [tw3-profile-10]"/>
      </div>
      
    </div>
    </div>
  )
}

export default Themes
