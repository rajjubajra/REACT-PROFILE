import React from 'react';
import IntroductionLocal from './IntroductionLocal';
//import IntroductionRemote from './IntroductionRemote';




function Introduction() {

  return (
    window.location.origin === 'http://localhost:3000' 
    ? <IntroductionLocal />
    : <IntroductionLocal />
  )
}

export default Introduction
