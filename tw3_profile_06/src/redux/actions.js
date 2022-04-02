import { actionTypes } from "./actionTypes";
import axios from "axios";
import { baseurl } from "../config/config";


export const actionNav = () => {

  const headers = {
    headers: {
    'Accept': 'application/vnd.api+json'
    }
  }

  const url = window.location.hostname === "localhost" 
              ? "http://localhost:3000/data/nav.json"
              : baseurl.URL;

  //console.log(window.location.hostname);            
  //console.log(url);

  return function (dispatch){

    dispatch({type: actionTypes.MAINMENU_START_FETCHING});

    const req_nav = axios.get(url, headers)
    req_nav.then((res) => {
      console.log("mein menu", res.data);
      dispatch({
        type: actionTypes.MAINMENU_FETCHED,
        data: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: actionTypes.MEINMENU_FETCH_ERROR,
        fetched: false,
        error: err
      })
    })

  }

}//actionNav Closed

