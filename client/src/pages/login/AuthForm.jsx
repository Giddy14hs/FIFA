import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Typography } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { login, signup } from '../../actions/authentication';
import './styles.css';
import image1 from "../../images/image4.jpg";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  // Form Submission
  const onSubmit = (formValues) => {
    if (!isLogin && formValues.password !== formValues.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (isLogin) {
      dispatch(login(formValues, navigate));
    } else {
      dispatch(signup(formValues, navigate));
    }
  };

  // Google Login handler
  const handleGoogleSignIn = () => {
    window.location.href = `${process.env.REACT_APP_API_URL}/auth/google`;
  };

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("profile");
    setUser(null);
    navigate("/");
  };

  // Save user and token after Google login redirect
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    const user = params.get('user');

    if (token && user) {
      try {
        const userData = JSON.parse(user);
        // Save to localStorage
        localStorage.setItem('profile', JSON.stringify({ result: userData, token }));
        setUser(userData);
        navigate('/');
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    }
  }, [navigate]);

  // Toggle Between Login and Sign Up
  const switchMode = () => {
    setIsLogin(!isLogin);
    setError('');
  };

  return (
    <div className="loginContainer">
      <div className="imageSection">
        <img src={image1} alt="login-illustration" className="loginImage" />
      </div>

      <div className="formSection">
        <div className="loginCard">
          <Title level={2} className="formTitle">{isLogin ? 'Log In to Brighter-World' : 'Sign Up to Brighter-World'}</Title>
          <Text strong className="formSubTitle">
            {isLogin ? 'Members Log in' : 'Create Your Account'}
          </Text>

          <Form layout="vertical" onFinish={onSubmit} className="loginForm">
            <Form.Item name="username" rules={[{ required: true, message: 'Please enter your username' }]}>
              <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>

            <Form.Item name="email" rules={[{ required: true, message: 'Please enter your email' }]}>
              <Input prefix={<MailOutlined />} placeholder="Email" />
            </Form.Item>

            <Form.Item name="password" rules={[{ required: true, message: 'Please enter your password' }]}>
              <Input.Password prefix={<LockOutlined />} placeholder="Password" />
            </Form.Item>

            {!isLogin && (
              <Form.Item name="confirmPassword" rules={[{ required: true, message: 'Please confirm your password' }]}>
                <Input.Password prefix={<LockOutlined />} placeholder="Confirm Password" />
              </Form.Item>
            )}

            {error && <Text type="danger">{error}</Text>}

            <Form.Item>
              <Button type="primary" htmlType="submit" className="loginButton">
                {isLogin ? 'Log In' : 'Sign Up'}
              </Button>
            </Form.Item>
          </Form>

          {/* Google Sign In or Logout */}
          {!user ? (
            <Button className="googleLoginButton" onClick={handleGoogleSignIn}>
              Sign in with Google
            </Button>
          ) : (
            <Button className="logoutButton" onClick={handleLogout}>
              Logout
            </Button>
          )}

          <Text className="signupText">
            {isLogin ? "New Here?" : "Already have an account?"}
            <Button type="link" onClick={switchMode} className="switchModeButton">
              {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
            </Button>
          </Text>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
