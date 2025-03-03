import React from "react";
import { Link } from "react-router-dom";
import logodark from "/images/logos/logo-dark.svg";

const Logo: React.FC = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img src={logodark} alt="home" />
      </Link>
    </div>
  );
};

export default Logo;
