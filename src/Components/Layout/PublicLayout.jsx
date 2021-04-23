import React from "react";
import Content from "../Content/Content";
import Navbar from "../Navbar/Navbar";
import "../../global.css";

const PublicLayout = ({ children }) => {
  return (
    <div className="public-layout">
      <Navbar />
      <div className="content">{children}</div>
      <div className="sidebar"></div>
    </div>
  );
};

export default PublicLayout;
