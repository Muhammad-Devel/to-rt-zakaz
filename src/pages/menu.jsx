import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LoginOutlined,
  HomeOutlined,
  WechatWorkOutlined,
  ShoppingOutlined,
  PhoneOutlined,
  ShopOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            <div className="flex-shrink-0 md:hidden flex items-center justify-center mr-3">
              <button
                className="text-gray-950 hover:text-gray-950 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-shrink-0">
              <a
                href="#"
                className="text-lg font-bold"
                style={{ color: "#3b82f6" }}
              >
                <div className="font-bold font-sans text-base sm:text-xl md:text-2xl">
                  <ShopOutlined />
                  <span className="ml-1 sm:ml-2 md:ml-3">Onlayn Do'kon</span>
                </div>
              </a>
            </div>
            <div
              className={`md:hidden ${
                isOpen ? "block" : "hidden"
              } absolute mt-5 top-12 left-0 right-0 bg-zinc-50 z-10`}
            >
              <div className="ml-10 px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className="text-gray-950 hover:border-b-4 border-indigo-500 block"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-950 hover:border-b-4 border-indigo-500 block"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-gray-950 hover:border-b-4 border-indigo-500 block"
                >
                  Services
                </a>
                <a
                  href="#"
                  className="text-gray-950 hover:border-b-4 border-indigo-500 block"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="hidden md:block md:ml-4">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#"
                  className="text-gray-950 hover:border-b-4 border-indigo-500"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-950 hover:border-b-4 border-indigo-500"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-gray-950 hover:border-b-4 border-indigo-500"
                >
                  Services
                </a>
                <a
                  href="#"
                  className="text-gray-950 hover:border-b-4 border-indigo-500"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
