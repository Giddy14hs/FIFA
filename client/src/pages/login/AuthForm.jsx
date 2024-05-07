import styles from "./styles.css"
import { Form, Input, Button, Card, Layout, Typography} from "antd"
import {UserOutlined, LockOutlined, MailOutlined} from "@ant-design/icons"

const {Title} = Typography;
const AuthForm = () => {

  const user = null;
  const [form] = Form.useForm();

  const onSubmit = ()=> {}
  const isLogin = false;

  return (
    <div>
      <Layout style={styles.container}>
      <Card 
      className="card" 
      title={
        <Title level={4} style={{textAlign: "center"}}>{isLogin ? "Login to" : "Join"}BoyzInTheHood</Title>
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
        </Form>
      </Card>
      </Layout>
    </div>
  )
}

export default AuthForm;