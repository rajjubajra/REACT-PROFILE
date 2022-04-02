import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {actionFetchData} from './fetchdataSlice';
import axios from 'axios';

function Action() {

  const dispatch = useDispatch();
  

  /** Fetch Landing Images */
  useEffect(() =>{
    axios({
      method: 'GET',
      url: '../data/landing.json',
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response =>  {
      console.log(response)
      dispatch(actionFetchData(response.data))
    })
    .catch(err => console.log(err))
  },[dispatch]);


  return (
    <div className="hidden">
      
    </div>
  )
}

export default Action