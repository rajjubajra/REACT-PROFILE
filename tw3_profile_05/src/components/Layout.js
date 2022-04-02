import {useEffect, useState} from 'react';
import Header from './Headers';
import Footer from './Footer';
import {useDispatch} from 'react-redux';
import {actionNav} from '../redux/actions';
import FooterMenu from './FooterMenu';
import Preview from './Preview';

function Layout({children}){

  const dispatch = useDispatch();

  const [ pagemenu, setPagemenu ] = useState(true);

  useEffect(()=>{
    dispatch(actionNav());
  },[dispatch])

  return(
    <>
    <div className={`"relative w-full min-h-screen"`}>
      <div>
        <Header  pagemenu={pagemenu} setPagemenu={setPagemenu} />
      </div>
      
      {children}

      <div className="md:ml-36">
        <FooterMenu />
      </div>
      <div className="text-center w-full" >
        <Footer />
      </div>
    </div>
    <Preview />
    </>
  )
}


export default Layout;