
import React from "react";
import Footer from "./Footer";
import Header from "../components/header";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">

      <Header />

      <main className="flex-grow">
        {children}
      </main>

      <Footer />

    </div>
  );
};

export default Layout;
