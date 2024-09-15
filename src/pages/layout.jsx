import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Call from "./call";

import { Layout, theme } from "antd";
import Navbar from "./menu";
const { Header, Sider, Content } = Layout;

const Layer = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <>
      <Layout style={{ height: "100vh" }}>
        {/* <Sider trigger={null} collapsible collapsed={collapsed}>
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
                icon: (
                  <HomeOutlined className="text-lg sm:text-xl md:text-2xl" />
                ),
                label: <Link to="/">Bosh Ekran</Link>,
              },
              {
                key: "2",
                icon: (
                  <ShoppingOutlined className="text-lg sm:text-xl md:text-2xl" />
                ),
                label: <Link to="/">Buyurtmalarim</Link>,
              },
              {
                key: "3",
                icon: (
                  <PhoneOutlined className="text-lg sm:text-xl md:text-2xl" />
                ),
                label: <Link to="/">Bog'lanish</Link>,
              },
              {
                key: "4",
                icon: (
                  <WechatWorkOutlined className="text-lg sm:text-xl md:text-2xl" />
                ),
                label: <Link to="/">Onlayn Chat</Link>,
              },
              {
                key: "5",
                icon: (
                  <LoginOutlined className="text-lg sm:text-xl md:text-2xl" />
                ),
                label: <Link to="login">Log in</Link>,
              },
            ]}
            className="text-xs sm:text-sm md:text-base w-full"
            style={{ maxWidth: "300px" }} // Adjust max width as needed
          />
        </Sider> */}

        <Layout>
          <Header
            style={{
              background: colorBgContainer,
            }}
            className="flex items-center justify-between px-2 sm:px-4 md:px-5 lg:px-6"
          >
            <Navbar></Navbar>
            <Call></Call>
          </Header>

          <Content
            style={{
              margin: "10px 10px",
              padding: 0,
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
