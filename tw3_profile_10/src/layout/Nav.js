import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {gsap} from 'gsap';


const navdata = [
  {
    "id": 1,
    "name": "Home",
    "url": "/home"
  },
  {
    "id": 2,
    "name": "About",
    "url": "/about"
  },
  {
    "id": 3,
    "name": "Exploer",
    "url": "/explore"
  }
]


function Nav() {


const [data, setData] = useState([]);

useEffect(()=>{
  setData(navdata);
},[])

/** ANIMATION */
useEffect(() => {
  data.length > 0 && 
  gsap.from('.link', {duration:1, opacity: 0, delay: 1, stagger: 0.5});
})



  return (
    <ul className="flex text-sm font-thin">
        {
          data.length > 0 &&
          data.map((item,index)=>{
            return (
              <li key={index} className="link">
                <Link to={item.url} className="mx-2 px-4 py-2 border-b">
                {item.name}
                </Link>
              </li>
            )
          })
        }
      </ul>
  )
}

export default Nav