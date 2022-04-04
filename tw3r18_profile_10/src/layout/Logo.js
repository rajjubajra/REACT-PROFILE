import React,{useEffect} from 'react';
import gsap from 'gsap';

function Logo() {

  
  useEffect(()=>{
    gsap.from('.logo', {duration:2, opacity:0, delay:2});
  },[])

  return (
    <div className="logo font-thin ml-2">
        <h1 className="uppercase tracking-widest">Dance Lesson</h1>
        <p className="text-xs tracking-tighter">Consequatur sed</p>
    </div>
  )
}

export default Logo
