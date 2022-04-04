import {useEffect, useState} from 'react';
import logo from '../yw-logo-horizontal.png';
import { useDispatch, useSelector } from 'react-redux';
import {actionIntroduction} from '../redux/introductionPageSlice';
import IntroductionContainer from './IntroductionContainer';



function IntroductionRemote() {

  /** FETCH INTRODUCTION DATA */
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(actionIntroduction());
  },[dispatch])
  const { introduction_loading, introduction_fetched} = useSelector(state => state.introduction_page);
  const remote_data = useSelector(state => state.introduction_page.getIntroduction.data);

  //console.log(remote_data, introduction_loading, introduction_fetched);
  //introduction_fetched && console.log(remote_data[0].attributes.body.value);
  

  /** set data to local-state */
  const [data, setData] = useState('');
  useEffect(()=>{
    introduction_fetched && setData(remote_data[0].attributes.body.value)
  },[introduction_fetched, remote_data])


  return (
    introduction_loading 
    ? "Loading..." 
    : <IntroductionContainer logo={logo} data={data}  />
  )
}

export default IntroductionRemote
