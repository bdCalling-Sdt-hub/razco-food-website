'use client';

import React from 'react';
import { Provider } from 'react-redux';
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Navbar from "@/Components/Share/Navbar";
import Footer from "@/Components/Share/Footer";
import RegisterModal from "@/Modal/RegisterModal";
import LoginModal from "@/Modal/loginModal";
import { store } from "../redux/store";

const ClientProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <AntdRegistry>
        <Navbar />
        <LoginModal />
        <RegisterModal />
        {children}
        <Footer />
      </AntdRegistry>
    </Provider>
  );
};

export default ClientProvider;
