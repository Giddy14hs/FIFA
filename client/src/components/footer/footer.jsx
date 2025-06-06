import React,{useEffect} from 'react'
import "./footer.css"
import { createContact, getContacts } from '../../actions/review';
import {useDispatch} from 'react-redux'
import {Form, Input, Button} from "antd"

const Footer = () => {

  const [form] = Form.useForm();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts(), [dispatch])
  })

  const handleSubmit = (formValues) =>{

    //formValues.preventDefault();

    dispatch(createContact(formValues))
    form.resetFields();
  }

  return (
    <div id="footer"  >
        <footer className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="firstComment">
                  <h2>Follow Us</h2>
                  <p>Stay connected with us and be part of a global movement empowering individuals through financial inclusion. By following us on social media, you'll receive the latest updates on our projects, success stories, and opportunities to get involved. Join our community and see how microfinance is transforming lives every day.</p>
                </div>
                <div className="social-d-flex flex-row py-5">
                  <a href="https://x.com/BrighterWorld17?t=rCviBKZ7YWh6vRLl3j7wXA&s=09" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-twitter p-2 m-2"></i></a>
                  <a href="https://www.facebook.com/share/1BMRMMq87T/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook p-2"></i></a> 
                  <a href="#" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram p-2"></i></a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="second content">
                  <h2>Contact Us</h2>
                  <Form form={form} onFinish={handleSubmit}>
                  <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}
                  >
                    <Input placeholder="Email" allowClear/>
                  </Form.Item>
                  <Form.Item
                    name="message"
                    rules={[{ required: true, message: 'Please input your message!' }]}
                  >
                    <Input.TextArea allowClear rows={2} placeholder="Message" />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
                </div>
              </div>
              <div className="col-md-6">
                <div className="firstInquiry">
                  <h2>General Inquiries</h2>
                  <p>Monday to Friday</p>
                  <p>8.00am - 5:00pm</p>
                  <p>Call: 0720328587 or 0103228576</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="firstComment">
                  <h2>FIND US</h2>
                  <p>BRIGHTER WORLD LTD</p>
                  <p>P.O BOX 6332-00300</p>
                  <p>NAIROBI/KENYA</p>
                  <a href='/privacypolicy' alt="PrivacyPolicy">Privacy Policy</a>
                  <p>Email: brighter22@brighterworldltd.com</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
    </div>
  )
}

export default Footer;