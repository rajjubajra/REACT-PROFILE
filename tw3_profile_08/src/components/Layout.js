import {useEffect, useState} from 'react';
import Header from './Headers';
import Footer from './Footer';
import {useDispatch} from 'react-redux';
import {actionNav} from '../redux/actions';
import Preview from './Preview';




function Layout({children}){

  const dispatch = useDispatch();

  const [ pagemenu, setPagemenu ] = useState(true);
  
  


  useEffect(()=>{
    dispatch(actionNav());
  },[dispatch])

  

  return(

    <>
    <div className={`"relative w-full min-h-screen my-20"`}>
      <div className="fixed w-full h-auto z-40 bg-white">
        <Header  pagemenu={pagemenu} setPagemenu={setPagemenu} />
      </div>
      <div className="absolute top-20 w-full z-30">        
        {children}
      </div>
      <div className="z-50 fixed bottom-0 bg-white py-2 text-center w-full" >
        <Footer />
      </div>
    </div>
    <Preview />
    </>
  )
}


export default Layout;