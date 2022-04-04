import React from 'react';
import BigNavLocal from './BigNavLocal';
import BigNavRemote from './BigNavRemote';


function BigNav() {

  return (
    window.location.origin === 'http://localhost:3000'
    ? <BigNavLocal />
    : <BigNavRemote />
  )
}

export default BigNav