import { AUTHENTICATION, LOGOUT, LOGIN } from "../constants/actionTypes";

const authenticationReducer = (state = {authData: null}, action) => {
  switch (action.type) {
    case AUTHENTICATION:
      localStorage.setItem("profile", JSON.stringify({...action?.data}));

      return {
        ...state,
        authData: action?.data
      }

    case LOGOUT:
      localStorage.removeItem('profile');
      return{
          ...state,
          authData: null
        }
    case LOGIN:
      return { ...state, authData: action.payload };
      
    default:
      return state;
  }
}

export default authenticationReducer;