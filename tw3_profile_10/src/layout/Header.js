import {useEffect} from 'react';
import gsap from 'gsap';
import Nav from './Nav';
import Logo from './Logo';

function Header() {


/** HEADER ANIMATION */
useEffect(()=>{
  gsap.from('.header', {duration: 2, y: "-100%", ease: 'power1'})
},[])


  return (
    <div className="header relative z-50 flex justify-between w-full px-2 py-4 bg-gray-50">
      <Logo />  
      <Nav />
    </div>
  )
}

export default Header
