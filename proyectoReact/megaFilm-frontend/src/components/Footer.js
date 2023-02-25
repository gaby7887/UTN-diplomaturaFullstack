import React from "react";
import { Link } from "react-router-dom";
import '../styles/layout/Footer.css';

const Footer = () => {
    return (
        <footer className="footerContenedor">
            <div className="footerLogo">
                <div className="footerBrand">
                    <Link to='/' className="navbar-brand text-white fs-2 fw-bold">MEGA<span id="logo">FILM</span></Link>
                </div>
                <span className="text-muted footer">© 2023 Gabriela Breitenberger, Inc</span>
            </div>
        </footer>
    )
}

export default Footer;