import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserAddOutlined,
  LoginOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme, Typography } from "antd";
const { Header, Sider, Content } = Layout;
const { Title } = Typography;

const Layer = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <>
      <Layout style={{ height: "100vh" }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Button
            className="text-[#fff] mt-2 mb-3"
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "18px",
              width: 35,
              height: 35,
              float: "right",
            }}
          />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <HomeOutlined />,
                label: <Link to="/">Home</Link>,
              },
              {
                key: "2",
                icon: <LoginOutlined />,
                label: <Link to="login">Log in</Link>,
              },
              {
                key: "3",
                icon: <UserAddOutlined />,
                label: <Link to="signin">Sign in</Link>,
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Title className="font-bold font-sans pt-2 pl-5">
              To'rt Markaz
            </Title>
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Layer;
