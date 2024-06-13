import React, {useEffect, useState} from 'react'
import "./business.css"
import {Layout, Form, Input, Radio, Checkbox, Button, message } from "antd"
import { getForms,createForms } from "../../../actions/forms.js"
import { useDispatch } from 'react-redux'


const Business = () => {
  
  const [form] = Form.useForm();

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getForms()); 
  }, [dispatch]
  );

  const handleSubmit = async (formValues) =>{

    const newForm = {
      name: formValues.name,
      radioInput: formValues.accountHolder,
      userEmail: formValues.email,
      phoneNumber: formValues.phone.replace(/\D/g, '')
    }

    setLoading(true);
    try {
      await dispatch(createForms(newForm));
      form.resetFields();
      message.success("Form submitted successfully!");
    } catch (error) {
      message.error(error.message);
    } finally{
      setLoading(false)
    }
  };

  return (
    <Layout>
      <div class="container">
        <div className="business-container row">
              <div className="" id='business'>
                  <div class="col">
                  <img />
                  <h2 className="text-center">Business Loans</h2>
                  <ul>
                    <h4>Benefits</h4>
                    <ol>
                      <li>Provides a client with the needed capital to stabilize and/or expand an existing business and grow an income as means to support themselves and their family. </li>
                      <li>Allows members of the community to take initiative, empower themselves, become self-reliant and improve their quality of life.</li>
                    </ol><br></br>
                    <h4>Purpose</h4>
                    <ul>
                      <li>Would include loans to acquire a tangible asset such as a jiko, refrigerator, or furniture that would be used within the business context </li>
                    </ul>
                  </ul>
                  </div>
              </div>
        </div>
        <div class="p-2 col">
          <section className='form-section'>
            <h4>Interested in this product??</h4>
            <b>Fill the form below</b>
              <div>
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
              </div>
          </section>
        </div>
      </div>
    </Layout>
  )
};

export default Business;