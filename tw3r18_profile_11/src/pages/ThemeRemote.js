import{useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {actionThemeGallary} from '../redux/themeGalleryListSlice';
import ThemeContainer from './ThemeContainer';


function ThemeRemote() {

  /** FETCH THEME LIST DATA */
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(actionThemeGallary());
  },[dispatch])
  
  const {themegallery, theme_loading, theme_fetched} 
        = useSelector(state => state.theme_gallery);


  /** set data in to 'themelist' state */
  const [ themelist, setThemeList] = useState([]);

  useEffect(() => {
    setThemeList(themegallery);
  },[themegallery])

  console.log(themegallery, theme_loading, theme_fetched, themelist);
  
  return (
    <ThemeContainer themelist={themelist} />
  )
}

export default ThemeRemote
