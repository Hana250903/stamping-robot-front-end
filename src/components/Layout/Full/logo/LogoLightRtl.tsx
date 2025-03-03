import React from "react";
import { Link } from "react-router-dom";
import logolightrtl from "./images/logos/logo-light-rtl.svg";

const Logo: React.FC = () => {
    return (
        <div className="logo">
            <Link to="/">
                <img src={logolightrtl} alt="home" />
            </Link>
        </div>
    );
};

export default Logo;
