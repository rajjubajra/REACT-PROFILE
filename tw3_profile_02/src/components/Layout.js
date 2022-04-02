import {useEffect, useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import {useDispatch} from 'react-redux';
import {actionNav} from '../redux/actions';
import Preview from './Preview';

function Layout({children}) {

  const dispatch = useDispatch();

  useEffect(()=>{
      dispatch(actionNav());
  },[dispatch])


  const [pageState, setPageState] = useState(true);


console.log(pageState);



  return (
    <div className="w-full min-h-screen relative">
      <div>
        <Header setPageState={setPageState} pageState={pageState} />
      </div>

      <div className={`${pageState ? 'min-h-screen' : 'hidden'}`}>
        {children}
      </div>
      
      <div className={`${pageState ? "w-full bottom-0 pt-5 bg-black text-white" : "w-full absolute bottom-0 pt-5"}`}>
        <Footer />
      </div>
      <Preview />
    </div>
  )
}

export default Layout
