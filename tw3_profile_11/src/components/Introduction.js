import {useEffect} from 'react';
import logo from '../yw-logo-horizontal.png';
import {gsap} from 'gsap';
import { useSelector, useDispatch } from 'react-redux';
import {actionFetchIntroduction} from '../redux/fetchDataSlice';


function Introduction() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(actionFetchIntroduction("http://localhost:8888/REACT-PROFILE/d9-profile/web/jsonapi/node/introduction"));
  },[dispatch])

  useEffect(()=>{
    gsap.from('.logo',{duration:1, transform: 'translate(0px, 300px)'})
    gsap.from('.intro',{duration:1, opacity: '0', delay: 1, stagger: 1})
  },[])

  return (
    <div className="w-full flex justify-center">
            <div className="absolute bottom-20"> 
              <img className="logo w-52" src={logo} alt="yellow-webiste.com" />
              <div className="font-thin tracking-widest my-4 pl-1">
                  <p className="intro">Hi! I create websites. I am based in London.</p>
                  <p className="intro">Chose a theme I will customize as per your need and help you to deploy the website.</p>
              </div>
            </div>  
    </div>
  )
}

export default Introduction
