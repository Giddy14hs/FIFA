import React from 'react'
import "./msingi.css"
import { Layout , Form, Input, Radio, Checkbox, Button } from 'antd'
import { createForms } from '../../../api'
import { useDispatch } from 'react-redux'

const Msingi = () => {
  const [form] = Form.useForm();

  const dispatch = useDispatch();


  const handleSubmit = (formValues) =>{

    //formValues.preventDefault();

    dispatch(createForms(formValues))
    form.resetFields();
  }

  return (
    <Layout>
    <div class="container">
      <div className="business-container row">
            <div className="" id='business'>
                <div class="col">
                <img />
                <h2 className="text-center">Group Loans</h2>
                <ul>
                  <h4>Benefits</h4>
                  <ol>
                    <li>Provides a client with the needed capital to start a business and grow an income as means to support themselves and their family. </li>
                    <li>Allows members of the community to take initiative, empower themselves to become self-reliant. </li>
                  </ol><br></br>
                  <h4>Purpose</h4>
                  <ul>
                    <li>A loan to start a new business for a client without an existing business but has the desire to develop their business skills to support themselves and/or their family. </li>
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
                  rules={[{ required: true, message: 'Please enter your phone number!' }]}
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
                  <Button type="primary" htmlType="submit" className="submit">
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
}

export default Msingi;