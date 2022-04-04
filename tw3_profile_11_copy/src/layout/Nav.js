import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {actionSetPage} from '../redux/pagenameSlice';
import logo from '../yw-logo-240x240.png';


function Nav() {

  const dispatch = useDispatch();
  const page = useSelector(state => state.isHomepage.value)

  console.log(page);

  

  return (
      <ul>
        <li className="menu">
          {
            page 
            ? 
            <div className="pt-1 pb-1 pr-2">
            <Link to="/"><img className="w-12 rotate-90" src={logo} alt="yw logo" /></Link>
            </div>
          : <Link 
          className="text-sm font-thin uppercase" to="/">
            <div 
            onClick={()=> dispatch(actionSetPage(true))}
            className="pt-1 pb-1 pr-2 border 
            border-white 
            duration-300
            hover:border-r-black/30">Home</div>
          </Link>

          }
          
        </li>
      </ul>
    
  )
}

export default Nav
