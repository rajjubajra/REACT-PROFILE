import {useEffect, useState} from 'react';
import Header from './Headers';
import {useDispatch} from 'react-redux';
import {actionNav} from '../redux/actions';
import Preview from '../components/Preview';


function Layout({children}){

  const dispatch = useDispatch();

  const [ pagemenu, setPagemenu ] = useState(true);

  useEffect(()=>{
    dispatch(actionNav());
  },[dispatch])

  return(
    <>    <div className={`"relative w-full min-h-screen"`}>
      
      
      {children}

      
      <div className="fixed bottom-0 w-full bg-white" >
        <div>
          <Header  pagemenu={pagemenu} setPagemenu={setPagemenu} />
        </div>
      </div>
    </div>
    <Preview />
    </>

  )
}


export default Layout;