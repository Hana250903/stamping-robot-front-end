import React from "react";
import { Link } from "react-router-dom";
import logortldark from "/images/logos/logo-dark-rtl.svg";

const Logo: React.FC = () => {
    return (
        <div className="logo">
            <Link to="/">
                <img src={logortldark} alt="home" />
            </Link>
        </div>
    );
};

export default Logo;
