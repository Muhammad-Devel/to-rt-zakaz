import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Call from "./call";
import { Layout, theme } from "antd";
import Navbar from "./menu";
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
      <header>
        <nav>
          <Navbar />
          <Call />
        </nav>
        <h1>Bizning Sayt</h1>
        <p>Eng yaxshi mahsulotlar bilan tanishing!</p>
      </header>
      <main>
        <section>
          <Orders />
        </section>
        <section>
          <Home />
        </section>
        <section>/* Mijozlar Sharhlari */</section>
        <section>/* Promosyonlar */</section>
        <section>
          <MapEmbed />
        </section>
      </main>
      <footer>/* Aloqa va Foydalanish Qoidalari */</footer>
    </div>
  );
};

export default HomePage;
