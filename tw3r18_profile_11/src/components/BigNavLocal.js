import {useEffect, useState} from 'react';
import BigNavContainer from './BigNavContainer';


const data = [
  {
    "id": 1,
    "name": "Gallery",
    "url": "/theme-gallery"
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


function BigNavLocal() {

  

  const [mainNav, setMainNav] = useState([]);

  useEffect(()=>{
    setMainNav(data)
  },[])

  console.log(mainNav);
    
  

  return (
    <BigNavContainer 
    mainNav={mainNav} 
    //dispatch={} 
    //actionSetPage={actionSetPage} 
    />
  )
}

export default BigNavLocal