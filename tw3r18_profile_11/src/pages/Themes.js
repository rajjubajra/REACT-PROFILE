import React from 'react';
//import ThemeRemote from './ThemeRemote';
import ThemeLocal from './ThemeLocal';



function Themes() {
  
  return (
    window.location.origin === 'http://localhost:3000' 
    ? <ThemeLocal />
    : <ThemeLocal />
  )
}

export default Themes
