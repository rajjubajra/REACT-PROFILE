import {useEffect} from 'react';
import gsap from 'gsap';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

function Header({setPageState, pageState}) {

  useEffect(()=>{ 

    gsap.from('.fade',{duration: 0.5, opacity: '0', ease: 'power2.in'})

    //gsap.from('.titleEffect',{ duration: 1.0, y: '50%', opacity:'0', delay: 0 })

  });

  
  const nav_data = useSelector(state => state.reducerNav.nav_data);
  const nav_data_length = useSelector(state => state.reducerNav.nav_data_length);
  const nav_fetched = useSelector(state => state.reducerNav.nav_fetched);


  //const [iconsStat, setIconStat] = useState(true);

  const lineOneA = "w-full h-1 bg-gray-600 my-1";
  const lineTwoA = "w-full h-1 bg-gray-600 my-1";
  const lineOneB = "w-full h-1 bg-gray-600 rotate-45 relative top-2";
  const lineTwoB = "w-full h-1 bg-gray-600 -rotate-45 relative top-1";


  


  return (
    <div>


{/** ICON */}
      <div className={`${pageState ? "w-full bg-black flex justify-end" : "w-full fixed flex justify-end"}`}>
        <div className="w-14 h-14 px-2 py-4  cursor-pointer" onClick={() => setPageState(pageState ? false : true)}>
          <div className={pageState ? lineOneA : lineOneB }></div>
          <div className={pageState ? lineTwoA : lineTwoB }></div>
        </div> 
      </div>




{/** Navigation Link */}

      <div className={`${pageState ? 'hidden' : 'fade w-full h-screen flex justify-center items-center'}`}>
        <ul className="text-center">
        {
            nav_fetched && nav_data_length > 0 && nav_data.map((item,index) => {
              return <li key={index} 
              className="m-1 md:p-4 py-2 tracking-wider font-light"
              onClick={() => setPageState(true)}>
                <Link to={item.url}>{item.name}</Link>
              </li>
            })
        }
        </ul>
      </div>


    
    
    </div>
  )
}

export default Header
