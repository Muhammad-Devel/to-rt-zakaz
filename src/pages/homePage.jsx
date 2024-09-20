import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Call from "./call";
import { Layout, theme } from "antd";
import Navbar from "./navbar";
import Orders from "./orders";
import MapEmbed from "./googlemap";
import Home from "./home";

const { Header, Sider, Content } = Layout;

const HomePage = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <div>
      <Layout style={{ height: "100vh" }}>
        <Header
          style={{ background: colorBgContainer }}
          className="flex items-center justify-between px-2 sm:px-4 md:px-5 lg:px-6"
        >
          <nav className="w-full ">
            <Navbar />
          </nav>
          <Call />
        </Header>
        <main>
          <section
            className="flex justify-between items-center px-10 py-4"
            style={{
              margin: 10,
              marginBottom: 0,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Orders />
          </section>
          <section
            className="flex justify-between items-center px-10 py-4"
            style={{
              margin: 10,
              marginBottom: 0,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Home />
          </section>
          <section>/* Mijozlar Sharhlari */</section>
          <section>/* Promosyonlar */</section>
          <section>
            <MapEmbed />
          </section>
        </main>
        <footer>/* Aloqa va Foydalanish Qoidalari */</footer>
      </Layout>
    </div>
  );
};

export default HomePage;
