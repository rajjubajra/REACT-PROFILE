import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {actionSetPage} from '../redux/pagenameSlice';
import BigNavContainer from './BigNavContainer';



function BigNavRemote() {


  const {mainmenu, loading, fetched } = useSelector(state => state.main_menu);
  //console.log(mainmenu, loading, fetched, localhost);
  const dispatch = useDispatch();

  
  const [mainNav, setMainNav] = useState([]);

  useEffect(()=>{
    let arr = []
    fetched && mainmenu.length > 0 &&
    mainmenu.map(item => {
      return item.attributes.parent === "" &&
      arr.push({
        "id": item.id,
        "name": item.attributes.title,
        "url": item.attributes.url.replace('/yw-d9','') 
      })
    })

    /** set to state  */
    setMainNav(arr)

  },[fetched, mainmenu])

  //console.log(mainNav);


  return (
    loading 
    ? "loading" 
    : <BigNavContainer 
        mainNav={mainNav} 
        dispatch={dispatch} 
        actionSetPage={actionSetPage} />
  )
}

export default BigNavRemote