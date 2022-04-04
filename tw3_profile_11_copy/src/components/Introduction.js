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
              <h1 className="font-league text-[6vw]">An Artist</h1>
              <div className="font-thin tracking-widest my-4 pl-1 grid gap-2">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus iusto sint molestias impedit ipsum</p><p>Amet consectetur adipisicing elit. Minus iusto sint molestias impedit suscipit unde laudantium? Quasi vero rem ut sed. Omnis odio sed modi odit?</p>
                  
              </div>
            </div>  
    </div>
  )
}

export default Introduction
