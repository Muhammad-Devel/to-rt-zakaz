import { LockOutlined, UserOutlined, ShopOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Flex, Row } from "antd";
const Login = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <>
      <Flex
        vertical="vertical"
        justify="center"
        align="center"
        style={{ height: "100vh" }}
      >
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div className="text-center">
            <h1 className="text-4xl mb-3">
              <ShopOutlined style={{ color: "#3b82f6" }} />
              <span className="ml-3">Onlayn Do'kon</span>
            </h1>
            <h3 className="text-2xl mb-5">Kirish</h3>
          </div>
        </Row>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Form
            name="login"
            initialValues={{
              remember: true,
            }}
            style={{
              maxWidth: 360,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Flex justify="space-between" align="center">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <a href="" style={{ color: "GrayText" }}>
                  Forgot password
                </a>
              </Flex>
            </Form.Item>

            <Form.Item>
              <Button block type="primary" htmlType="submit">
                Log in
              </Button>
              or{" "}
              <a href="signin" style={{ color: "GrayText" }}>
                Register now!
              </a>
            </Form.Item>
          </Form>
        </Row>
      </Flex>
    </>
  );
};

export default Login;
