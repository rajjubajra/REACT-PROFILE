import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';



function Header({pagemenu, setPagemenu}){

  const nav_data = useSelector(state => state.reducerNav.nav_data);
  const nav_fetched = useSelector(state => state.reducerNav.nav_fetched);
  const nav_data_length = useSelector(state => state.reducerNav.nav_data_length);
  //console.log(nav_data);

  



  return(
    <>
    <div>



{/** Page Title */}
      

{/** Navigation */}
      <div className="py-7">
        {/** DESKTOP/TABLET MENU */}
        <div className="md:flex md:justify-between text-center md:max-w-6xl"> 
          <h1 className="tracking-widest text-center md:text-right text-3xl font-thin md:py-5 pb-2 px-10">
            Architecture
          </h1> 
          <ul className="flex uppercase font-sm justify-center md:justify-end md:py-8  w-full font-thin tracking-widest">
            {
              nav_fetched && nav_data_length > 0 &&
              nav_data.map((item, index)=>{
                return <li key={index}>
                    <Link className="md:mx-3 md:text-sm text-xs p-3 text-black font-light" 
                    to={item.url}>
                    {item.name}</Link>
                </li>
              })
            }
          </ul>
        </div>
      </div>
    </div>

      </>
  )
}

export default Header;