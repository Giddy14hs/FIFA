import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "./formLoans.css";
import { Form, Input, Radio, Checkbox, Button, message, Select } from 'antd';
import { useDispatch } from 'react-redux';
import { createForms, getForms } from "../../actions/forms.js";

const {Option} = Select;

const BenevolentForm = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  
  // Get auth state from Redux store
  const { isAuthenticated } = useSelector((state) => state.authentication);

  useEffect(() => {
    dispatch(getForms());
  }, [dispatch]);

  const handleSubmit = async (formValues) => {
    // Check if user is authenticated
    if (!isAuthenticated) {
      message.warning('Please login to submit the form');
      // Save form data to localStorage before redirecting
      localStorage.setItem('pendingFormData', JSON.stringify(formValues));
      // Redirect to login page
      navigate('/login');
      return;
    }

    const newForm = {
      name: formValues.name,
      radioInput: formValues.accountHolder,
      userEmail: formValues.email,
      phoneNumber: formValues.phone.replace(/\D/g, ''),
      loanCategory: formValues.loanCategory,
    };

    setLoading(true);
    try {
      await dispatch(createForms(newForm));
      form.resetFields();
      message.success("Form submitted successfully!");
    } catch (error) {
      message.error('Failed to submit form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Check for pending form data when component mounts
  useEffect(() => {
    if (isAuthenticated) {
      const pendingData = localStorage.getItem('pendingFormData');
      if (pendingData) {
        form.setFieldsValue(JSON.parse(pendingData));
        localStorage.removeItem('pendingFormData');
      }
    }
  }, [isAuthenticated, form]);

  return (
    <Form form={form} onFinish={handleSubmit} className="form-control">
      {/* ... existing form fields ... */}
      
      <Form.Item>
        <Button 
          type="primary" 
          htmlType="submit"
          loading={loading}
        >
          {isAuthenticated ? 'Submit' : 'Login to Submit'}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default BenevolentForm; 