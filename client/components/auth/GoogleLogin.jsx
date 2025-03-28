import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { googleLogin } from '../../actions/auth';

const GoogleLoginButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSuccess = async (response) => {
    try {
      await dispatch(googleLogin(response));
      // Check if there was a pending form submission
      const pendingFormData = localStorage.getItem('pendingFormData');
      if (pendingFormData) {
        navigate('/form');
      } else {
        navigate('/');
      }
    } catch (error) {
      console.error('Google login failed:', error);
    }
  };

  const onFailure = (error) => {
    console.error('Google login failed:', error);
  };

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      buttonText="Login with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default GoogleLoginButton; 