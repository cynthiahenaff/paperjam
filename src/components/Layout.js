import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div data-theme="cupcake" class="flex flex-col h-screen bg-base-100">
      <Header />
      <main class="flex-1 bg-base-100 text-base-content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
