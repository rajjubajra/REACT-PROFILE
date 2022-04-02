import {useEffect} from 'react';
//import {useDispatch, useSelector} from 'react-redux';
//import {navigationData} from '../redux/navigationSlice';
import {Link} from 'react-router-dom';
//import axios from 'axios';
import {gsap} from 'gsap';
import data from '../data/nav.json';


function Nav() {

  /** DATA FETCHING */
  // const dispatch = useDispatch();
  // const data = useSelector(state => state.navigation.value); 
  //const baseurl = window.location.origin;

  //console.log(data);
//   useEffect(()=>{
//     axios({
//       method: 'GET',
//       url: window.location.origin +'/data/nav.json',
//       header: { 
//         'content-type': 'application/json',
//         'Accept': 'application/json'
//       }
//     })
//     .then(res => {dispatch(navigationData(res.data))})
//     .catch(err => console.error(err))
// },[dispatch])


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