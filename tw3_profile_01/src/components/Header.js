import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'; 
import gsap from 'gsap';
import {useDispatch, useSelector} from 'react-redux';
import {actionNav} from '../redux/actions';


function Header() {


  const dispatch = useDispatch();
  const state = useSelector(state => state.reducerNav.nav_data);
  const length = useSelector(state => state.reducerNav.nav_data_length);

  console.log(state, "length", length);

  /** fetch menu data */
  useEffect(()=>{
    dispatch(actionNav());
  },[dispatch])


  /** animations */
  useEffect(()=>{

    length > 0 && gsap.from('.header',{duration: 1, y: '-100%'}); 

    length > 0 && gsap.from('.link', {duration: 1, opacity: 0, delay: 0, stagger: 0.5});

  },[length])


  

  return (
    <div className="header bg-white/30 py-4 flex font-light justify-center tracking-wide md:uppercase text-gray-700 md:text-sm text-xs">
    {
      length > 0 && state.map((item,index)=>{
        return <Link 
        key={index} 
        className="link mx-2" 
        to={item.url}>
        {item.name}</Link>
      })
    }
    </div>
  )
}

export default Header