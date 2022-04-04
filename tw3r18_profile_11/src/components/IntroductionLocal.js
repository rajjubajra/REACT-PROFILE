import {useEffect, useState} from 'react';
import logo from '../yw-logo-horizontal.png';
import IntroductionContainer from './IntroductionContainer';


const local_data =  [
  {
    "id": 1,
    "text" : "<p>Opsum dolor sit amet consectetur adipisicing commodi odit elit.</p><p>Velit corporis suscipit commo  diodit exercitationem laboriosam</p>"
  }
]


function IntroductionLocal() {

  /** set data to local-state */
  const [data, setData] = useState('');
  useEffect(()=>{  
      setData(local_data[0].text)
  },[])

  return (
    <IntroductionContainer logo={logo} data={data} />
  )
}

export default IntroductionLocal
