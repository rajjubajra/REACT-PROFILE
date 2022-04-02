const {actionTypes} = require('./actionTypes');


/** MAIN NAVIGATION */
const initialStateNav = {
  nav_fetching: false,
  nav_fetched: false,
  nav_fetch_error: '',
  nav_data: [],
  nav_data_length: 0
}

export const reducerNav = (state = initialStateNav, action ) => {

  switch (action.type) {

    case actionTypes.MAINMENU_START_FETCHING:
      return {
        nav_fetching: false, 
        nav_data: []
      }
    case actionTypes.MAINMENU_FETCHED:
      return {
        nav_fetched: true,
        nav_data: action.data,
        nav_data_length: action.data.length
      }
    case actionTypes.MEINMENU_FETCH_ERROR:
      return {
        nav_fetched: false,
        nav_fetching: false, 
        nav_fetch_error: action.error
      }

    /** DEFAULT STATE */

    default: 
    return state;
    
  }
}


