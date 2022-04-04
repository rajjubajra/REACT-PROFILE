import {useEffect} from 'react';
import {Link} from 'react-router-dom';
import gsap from 'gsap';

function BigNavContainer({mainNav, dispatch, actionSetPage}) {

  /** gsap animation */
  useEffect(()=>{
    gsap.to('.nav',{delay:0.3, opacity:1, duration: 1, stagger:0.2})
  })

  return (
    <div className="md:h-screen md:flex items-center justify-end w-full">
    <ul className="z-50 text-[10vw] md:-mt-16 mt-28 text-right">
        {
          mainNav.length > 0 &&
          mainNav.map((item,index) => {
          return <li className={`nav opacity-0
                duration-300 font-thin
                hover:-translate-x-1
                hover:text-red-700`} 
                key={index}
                onClick={() => dispatch(actionSetPage(false))}
                >
                  <Link to={item.url}>{item.name}</Link>
              </li>
          })
        }
      </ul>
  </div>
  )
}

export default BigNavContainer