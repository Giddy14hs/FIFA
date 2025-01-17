import * as api from "../api"
import { AUTHENTICATION, LOGOUT, LOGIN } from "../constants/actionTypes";

const signup = (formValues, navigate) => async dispatch => {
  try {
    const {data} = await api.signup(formValues)
    dispatch({
      type: AUTHENTICATION,
      payload: data
    });
    navigate("/");
  } catch (error) {
    console.log("Signup failed:", error.response ? error.response.data :error.message)
    throw error;
  }
}
const login = (formValues, navigate) => async dispatch => {
  try {
    const {data} = await api.login(formValues)
    dispatch({
      type: LOGIN,
      payload: data
    });

    // Save profile to localStorage
    localStorage.setItem("profile", JSON.stringify(data));
    
    navigate("/");
  } catch (error) {
    console.log(error.response.data.message)
    throw error;
  }
}

const googleLogin = (data, navigate) => async (dispatch) => {
  try {
    // Dispatch to Redux
    dispatch({ type: 'LOGIN', payload: { result: data.result, token: data.token } });

    // Save to localStorage
    localStorage.setItem('profile', JSON.stringify({ result: data.result, token: data.token }));

    // Navigate to a different page
    navigate('/');
  } catch (error) {
    console.error('Google login action error:', error);
  }
};

const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT})
};

export {login, signup, logout, googleLogin};