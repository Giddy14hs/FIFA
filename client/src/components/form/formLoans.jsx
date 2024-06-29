import React, { useState, useEffect } from 'react';
import "./formLoans.css";
import { Form, Input, Radio, Checkbox, Button, message } from 'antd';
import { useDispatch } from 'react-redux';
//import { createForms, getForms } from "../../actions/forms.js";

const BenevolentForm = () => {

  const [form] = Form.useForm();

  const dispatch = useDispatch();
  
  const [loading, setLoading] = useState(false);

 // useEffect(() => {
   // dispatch(getForms());
 // }, [dispatch]);

  const handleSubmit = async (formValues) => {
    const newForm = {
      name: formValues.name,
      radioInput: formValues.accountHolder,
      userEmail: formValues.email,
      phoneNumber: formValues.phone.replace(/\D/g, ''),
    };

    setLoading(true);
    try {
      //await dispatch(createForms(newForm));
      form.resetFields();
      message.success("Form submitted successfully!");
    } catch (error) {
      message.error('Failed to submit form. Please try again.',error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form form={form} onFinish={handleSubmit} className="form-control">
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please enter your name!' }]}
      >
        <Input placeholder="Enter Name" />
      </Form.Item>
      
      <Form.Item
        label="Are you a Brighter-World Programme Account Holder"
        name="accountHolder"
        rules={[{ required: true, message: 'Please select an option!' }]}
        className="form-item-radio-group"
      >
        <Radio.Group>
          <Radio value="yes">Yes</Radio>
          <Radio value="no">No</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        label="E-mail"
        name="email"
        rules={[
          { required: true, message: 'Please enter your email!' },
          { type: 'email', message: 'Please enter a valid email!' }
        ]}
      >
        <Input placeholder="Enter E-mail" />
      </Form.Item>

      <Form.Item
        label="Phone"
        name="phone"
        rules={[
          { required: true, message: 'Please enter your phone number!' },
          { pattern: /^\d{10}$/, message: 'Please enter a valid phone number!' } // Adjust regex to your needs
        ]}
      >
        <Input placeholder="Enter Phone" />
      </Form.Item>

      <Form.Item
        name="terms"
        valuePropName="checked"
        rules={[{ validator: (_, value) => value ? Promise.resolve() : Promise.reject('Should accept terms') }]}
      >
        <Checkbox>
          I Agree to the Terms of use
        </Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="submit" loading={loading}>
          Submit
        </Button>
        <Button htmlType="button" className="cancel" onClick={() => form.resetFields()}>
          Cancel
        </Button>
      </Form.Item>
    </Form>
  );
};

export default BenevolentForm;