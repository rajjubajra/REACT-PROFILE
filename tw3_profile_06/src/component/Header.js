import React from 'react'
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';



function Header() {

  const nav_data = useSelector(state => state.reducerNav.nav_data);
  const nav_fetched = useSelector(state => state.reducerNav.nav_fetched);
  const nav_data_length = useSelector(state => state.reducerNav.nav_data_length);

  //console.log(nav_data, nav_fetched, nav_data_length);

  return (
    <div className="flex justify-between w-full max-w-5xl">
      <div>
        <h1 className="text-2xl font-thin tracking-widest">Ipsam Lorim</h1>
        <h3 className="text-xs font-thin">Worlwid</h3>
      </div>
      <div>      
      <ul className="flex md:text-sm text-xs uppercase md:tracking-widest font-thin mt-7">      
      {
        nav_fetched && nav_data_length > 0 && 
        nav_data.map((item,index)=>{
          return(
            <li className="md:mx-3 mx-2" key={index}><Link to={item.url}>{item.name}</Link></li>
          ) 
        })
      }
      </ul>
      </div>
    </div>
  )
}

export default Header
