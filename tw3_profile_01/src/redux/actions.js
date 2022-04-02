import { actionTypes } from "./actionTypes";
import axios from "axios";
import { navurl, imagedata } from "../config/config";



export const actionNav = () => {
  const headers = {
    headers: {
    'Accept': 'application/vnd.api+json'
    }
  }

  return function (dispatch){

    dispatch({type: actionTypes.MAINMENU_START_FETCHING});

    const req_nav = axios.get(navurl.URL, headers)
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

