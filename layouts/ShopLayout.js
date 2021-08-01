import React from "react";
import { Footer, ShopNavBar } from "../components/common";

// eslint-disable-next-line react/prop-types
const ShopLayout = ({ children }) => {
  return (
    <div className="main-content">
      <ShopNavBar />
      {children}
      <Footer />
    </div>
  );
};

export default ShopLayout;
