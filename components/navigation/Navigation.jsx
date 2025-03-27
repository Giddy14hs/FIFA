import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { logout } from '../../actions/auth';

const Navigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, user, googleUser } = useSelector((state) => state.authentication);

  const handleLogout = () => {
    dispatch(logout());
    if (window.gapi?.auth2) {
      const auth2 = window.gapi.auth2.getAuthInstance();
      if (auth2) {
        auth2.signOut();
      }
    }
    navigate('/');
  };

  return (
    <nav>
      {/* Your other navigation items */}
      
      <div className="auth-buttons">
        {!isAuthenticated && !googleUser ? (
          <>
            <Button type="primary" onClick={() => navigate('/login')}>
              Login
            </Button>
            <Button onClick={() => navigate('/signup')}>
              Sign Up
            </Button>
          </>
        ) : (
          <div className="user-section">
            <span>Welcome, {googleUser?.displayName || user?.username}</span>
            <Button onClick={handleLogout}>
              Logout
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation; 