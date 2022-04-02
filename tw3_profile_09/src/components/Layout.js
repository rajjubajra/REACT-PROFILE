import {useEffect, useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import {useDispatch} from 'react-redux';
import {actionNav} from '../redux/actions';
import SocialIcons from './SocialIcons';
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

{/** HEADER */}

        <div className="fixed w-full h-auto z-50 bg-white">
        <Header  pagemenu={pagemenu} setPagemenu={setPagemenu} />
        </div>

{/** MAIN PAGE  */}
      
      <div className="absolute top-0 w-full z-40">
        {children}
      </div>


{/** FOOTER */}
      <div className="z-50 fixed bottom-0 bg-white py-2 text-center w-full" >
        <div className="w-full flex justify-center mb-1">
          <SocialIcons />
        </div>
        
        <Footer />
        <Preview />
      </div>
    </div>
    </>
  )
}


export default Layout;