import styles from "./styles.css"
import {useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux"
import { Form, Input, Button, Card, Layout, Typography} from "antd"
import {UserOutlined, LockOutlined, MailOutlined} from "@ant-design/icons"
import { useState } from "react";
import {login, signup} from "../../actions/authentication";

const {Title} = Typography;
const AuthForm = () => {

  const user = null;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form] = Form.useForm();
  const [isLogin, setIsLogin] = useState(true);

  const onSubmit = (formValues)=> {
    if (isLogin) {
      dispatch(login(formValues, navigate))
    }else {
      dispatchEvent(signup(formValues, navigate))
    }
  }
  const switchMode = ()=> {
    setIsLogin(prevIsLogin => !prevIsLogin);
  }

  return (
    <div>
      <Layout style={styles.container}>
      <Card 
      className="card" 
      title={
        <Title level={4} style={{textAlign: "center"}}>{isLogin ? "Login to" : "Join"}&nbsp; BoyzInTheHood</Title>
      }>
        <Form 
        name="authform"
        form={form}
        size="large"
        wrapperCol={{span: 20, offset: 2}}
        onFinish={onSubmit}
        >
          {isLogin || (
            <>
            <Form.Item 
            name="username"
            rules={[
              {
                required: true,
                message: "Please enter your username"
              }
            ]}
            >
              <Input prefix={<UserOutlined/>} placeholder="username"/>
            </Form.Item>
            </>
          )}
          <Form.Item 
            name="email"
            rules={[
              {
                required: true,
                message: "Please enter a valid email address"
              }
            ]}
            >
              <Input type="email" prefix={<MailOutlined/>} placeholder="email address"/>
            </Form.Item>
            <Form.Item 
            name="password"
            rules={[
              {
                required: true,
                message: "Please enter your password"
              }
            ]}
            >
              <Input.Password type="password" prefix={<LockOutlined/>} placeholder="password"/>
            </Form.Item>
            {isLogin || (
              <Form.Item 
              name="ConfirmPassword"
              rules={[
                {
                  required: true,
                  message: "Please repeat your password"
                }
              ]}
              >
                <Input type="password" prefix={<LockOutlined/>} placeholder="ConfirmPassword"/>
              </Form.Item>
            )}
            <Form.Item>
              <Button htmlType="submit" type="primary">
              {isLogin ? "Log In" : "Join"}
              </Button>
              <span style={{margin: "0 10px 0px 20px"}}>&nbsp; Or</span>
              <Button type="link" onClick={switchMode}>
                {isLogin ? "Register Now" : "Have an account"}
              </Button>
            </Form.Item>
        </Form>
      </Card>
      </Layout>
    </div>
  )
}

export default AuthForm;