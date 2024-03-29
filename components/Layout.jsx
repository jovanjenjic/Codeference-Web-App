import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";
import WaveRevarse from "./WaveRevarse";

function Layout({ children }) {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Header />
      {children}
      <div>
        <WaveRevarse bgColor="bg-blue-600" waveColor="#eff6ff" />
        <Footer />
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
