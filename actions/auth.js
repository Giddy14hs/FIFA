import * as api from '../api';

// Regular login
export const login = (formData) => async (dispatch) => {
  try {
    const { data } = await api.login(formData);
    dispatch({ type: 'LOGIN_SUCCESS', payload: data });
    return true;
  } catch (error) {
    dispatch({ type: 'AUTH_ERROR', payload: error.message });
    throw error;
  }
};

// Google login
export const googleLogin = (response) => async (dispatch) => {
  try {
    // Handle Google sign-in response
    const googleUser = response.profileObj;
    
    // You might want to send this to your backend
    const { data } = await api.googleLogin(response.tokenId);
    
    dispatch({ 
      type: 'GOOGLE_LOGIN_SUCCESS', 
      payload: {
        ...googleUser,
        token: response.tokenId
      }
    });
    return true;
  } catch (error) {
    dispatch({ type: 'AUTH_ERROR', payload: error.message });
    throw error;
  }
};

export const logout = () => (dispatch) => {
  // Clear any auth tokens or user data from localStorage
  localStorage.removeItem('token');
  localStorage.removeItem('googleToken');
  dispatch({ type: 'LOGOUT' });
}; 