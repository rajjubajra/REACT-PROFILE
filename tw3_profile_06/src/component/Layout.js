import {useEffect} from 'react';
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

  

  return (
    <>    
    <div className="mx-5">
      
      <div className="flex justify-center py-8">
        <Header />
      </div>
      
      {children}

      <div className="flex justify-center">
        <Footer />
      </div>

    </div>
    <Preview />
    </>

  )
}

export default Layout
