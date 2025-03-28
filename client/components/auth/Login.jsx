import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../actions/auth';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const hasPendingForm = await dispatch(login(values));
      message.success('Login successful!');
      
      // Redirect based on whether there's pending form data
      if (hasPendingForm) {
        navigate('/form'); // Or whatever your form route is
      } else {
        navigate('/');
      }
    } catch (error) {
      message.error('Login failed. Please try again.');
    }
  };

  return (
    <Form onFinish={onFinish}>
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input placeholder="Email" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login; 