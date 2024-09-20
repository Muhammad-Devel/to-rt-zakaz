import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Call from "./call";
import { Layout, theme } from "antd";
import Navbar from "./navbar";
import Orders from "./orders";
import MapEmbed from "./googlemap";
import Home from "./home";
import ProductCard from "./productcard";
// import MapComponent from "./mapcomponent";

const { Header, Sider, Content } = Layout;

const Layer = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <>
      <Layout style={{ height: "100vh" }}>
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

          <div
            className="flex justify-between items-center px-10 py-4"
            style={{
              margin: 10,
              marginBottom: 0,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Orders />
          </div>
          <div
            className="flex justify-between items-center flex-wrap mx-auto px-10 py-4"
            style={{
              margin: 10,
              marginBottom: 0,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Home />
          </div>
          <div
            className="flex justify-between items-center px-10 py-4"
            style={{
              margin: 10,
              marginBottom: 0,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <MapEmbed />
          </div>
        </Layout>
      </Layout>
    </>
  );
};

export default Layer;
