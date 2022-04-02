import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import gsap from 'gsap';
import Preview from './Preview';


function Header({pagemenu, setPagemenu}){

  const nav_data = useSelector(state => state.reducerNav.nav_data);
  const nav_fetched = useSelector(state => state.reducerNav.nav_fetched);
  const nav_data_length = useSelector(state => state.reducerNav.nav_data_length);
  //console.log(nav_data);

  /** Hamburg menu fade effect */
  useEffect(()=> { 
    gsap.from('.iconfade',{duration: 0.5, opacity: '0', ease: 'power2.in'})
    gsap.from('.menufade',{duration: 0.5, opacity: '0', ease: 'power2.in'})
    gsap.from('.titleEffect',{ duration: 1.0, y: '50%', opacity:'0', delay: 0 })
  },[pagemenu]);


  /** Hamburg Menu styles */
  const lineoneOpen = "w-full h-1 bg-gray-800"
  const lineTwoOpen = "w-full h-1 bg-gray-800 my-1"
  const lineThreeOpen = "w-full h-1 bg-gray-800"
  const lineOneClose = "w-full h-1 bg-gray-800 rotate-45 relative top-1"
  const lineTwoClose = ""
  const lineThreeClose = "w-full h-1 bg-gray-800 -rotate-45"



  return(
    <>
    <div>
{/** Page Title */}
      <div className="flex w-full justify-center">
          {/** HAMBURGER ICON */}    
        <div className="md:hidden" onClick={()=> setPagemenu(pagemenu ? false : true)}>
          <ul className="iconfade w-10 p-2 cursor-pointer relative top-12 mr-10">
            <li className={pagemenu ? lineoneOpen : lineOneClose}></li>
            <li className={pagemenu ? lineTwoOpen : lineTwoClose}></li>
            <li className={pagemenu ? lineThreeOpen : lineThreeClose}></li>
          </ul>
        </div>
        <h1 className="md:text-8xl text-5xl tracking-widest font-thin py-10">Ipsam Orem</h1>
      </div>

{/** Navigation */}
      <div>
        {/** DESKTOP/TABLET MENU */}
        <div className="hidden md:block">  
          <ul className="flex uppercase font-sm justify-center py-8 w-full font-thin tracking-widest">
            {
              nav_fetched && nav_data_length > 0 &&
              nav_data.map((item, index)=>{
                return <li key={index}>
                    <Link className="mx-3 p-3 text-black font-light" 
                    to={item.url}>
                    {item.name}</Link>
                </li>
              })
            }
          </ul>
        </div>
      </div>
    </div>


     {/** MOBILE MENU */}
      <div className={pagemenu ? "hidden" : "menufade"}>  
          <ul className="py-8 w-full font-thin tracking-widest text-center">
            {
              nav_fetched && nav_data_length > 0 &&
              nav_data.map((item, index)=>{
                return <li key={index} className="my-2">
                    <Link className="mx-3 p-3 text-black font-light" 
                    onClick={() => setPagemenu(true)} 
                    to={item.url}>
                    {item.name}</Link>
                </li>
              })
            }
          </ul>
      </div>
      <Preview />
      </>
  )
}

export default Header;