import React from 'react'
import "./special.css"
import { Layout, Form, Input, Radio, Checkbox, Button  } from 'antd'
import { createForms } from '../../../api'
import { useDispatch } from 'react-redux'

const Special = () => {
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
                <h1 className="text-center">Special Loans</h1>
                <ul>
                  <h4>All special loans will be serviced for a maximum of 3 months.</h4>
                  <ol>
                    <li>Clients will have serviced 1st loans. </li>
                    <li>All special loans should have a separate savings from business loans.</li>
                    <li>Be of good standing with the group.</li>
                  </ol><br></br>
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

export default Special;