import React from 'react';
import AboutLocal from './AboutLocal';
import AboutRemote from './AboutRemote';


function About() {

  return (
    window.location.origin === 'http://localhost:3000'
    ? <AboutLocal />
    : <AboutRemote />
  
  )
}

export default About
