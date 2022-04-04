import { useEffect } from 'react';
import Header from './Header';
import {actionMainMenu} from '../redux/mainMenuSlice';
import {useDispatch} from 'react-redux';


function Layout({children}) {

  const dispatch = useDispatch();

  useEffect(() => {
    window.location.origin !== "http://localhost:3000" && dispatch(actionMainMenu())
  },[dispatch])

  return (
    <div className="relative min-h-screen">
      <div className="fixed">
        <div className="relative z-50 border-r">
          <Header />
        </div> 
      </div>
      <div className="pl-16 w-full flex flex-grow">
        {children}
      </div>      
    </div>
  )
}

export default Layout
