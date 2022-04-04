import {useEffect, useState, useRef} from 'react';
import {Link} from 'react-router-dom';
import {actionSetPage} from '../redux/pagenameSlice';
import Introduction from '../components/Introduction';
import gsap from 'gsap';
import {useDispatch} from 'react-redux';


const data = [
  {
    "id": 1,
    "name": "Work",
    "url": "/themes"
  },
  {
    "id": 1,
    "name": "About",
    "url": "/about"
  },
  {
    "id": 1,
    "name": "Contact",
    "url": "/contact"
  },
]

/** 7 days a week backgournd colour */
const bgcolor = [
  "bg-gradient-to-r from-yellow-50",
  "bg-gradient-to-r from-red-50",
  "bg-gradient-to-l from-gray-200",
  "bg-gradient-to-l from-green-50",
  "bg-gradient-to-l from-blue-50",
  "bg-gradient-to-l from-white",
  "bg-gradient-to-l from-gray-300",
]

function Home() {

  const date = new Date();
  console.log(date.getDay());

  const dispatch = useDispatch();
  
  useEffect(()=>{
    gsap.to('.nav',{delay:0, opacity:1, duration: 0.3, stagger:0.3})
  },[])  

  
  

  return (
    <div className={`relative w-full ${bgcolor[date.getDay()-1]}`}>
      <div className="w-full flex relative z-10">
        <div className="flex min-h-screen justify-self-center md:flex-none md:w-96 w-64">
          <Introduction />
        </div>
        <div className="relative flex flex-grow justify-center items-center font-thin md:text-[10vw] tracking-widest pl-20">
          <div className="text-9xl font-bold flex justify-center items-left h-screen absolute top-0 z-10">
            <div className="text-gray-900/10 rotate-90 lg:translate-x-4 xl:translate-x-20 nav">Menu</div>
          </div>
          <ul className="pause3 text-right relative z-50">
            {
              data.length > 0 &&
              data.map((item,index) => {
                return <li className={`nav 
                opacity-0
                duration-300 
                hover:-translate-x-1 
                hover:text-red-700`} key={index}
                onClick={() => dispatch(actionSetPage(false))}
                >
                  <Link  
                  to={item.url}>{item.name}</Link>
                </li>
              })
            }
          </ul>
        </div>
      </div>  
    </div>

  )
}

export default Home
