'use client';

import React from 'react';
import { Provider } from 'react-redux';
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Navbar from "@/Components/Share/Navbar";
import Footer from "@/Components/Share/Footer";
import RegisterModal from "@/Modal/RegisterModal";
import LoginModal from "@/Modal/loginModal";
import { store } from "../redux/store";
import { Toaster } from 'react-hot-toast';
import { UserProvider } from '@/provider/User';

const ClientProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <UserProvider>
        <AntdRegistry>
          <Navbar />
          <LoginModal />
          <RegisterModal />
          {children}
          <Footer />
        </AntdRegistry>
      </UserProvider>
      <Toaster />
    </Provider>
  );
};

export default ClientProvider;
