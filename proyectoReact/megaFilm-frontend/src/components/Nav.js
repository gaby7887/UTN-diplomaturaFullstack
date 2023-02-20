import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/layout/Nav.css';

const Nav = () => {
    return (
        <header class="header-area header-fixed">
            <nav className="navbar navbar-expand-lg bg-black">
                <div className="container-fluid ms-5">
                    <NavLink to='/' className="navbar-brand text-white fs-2 fw-bold">MEGA<span id="logo">FILM</span></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item ms-3">
                            <NavLink to='/' className="nav-link text-light fw-bold" aria-current="page">Tienda</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/detalle' className="nav-link text-light fw-bold" aria-current="page">Detalle</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to='/estrenos' className="nav-link text-light fw-bold" aria-current="page">Estrenos</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to='/resenia' className="nav-link text-light fw-bold" aria-current="page">Reseña</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to='/contacto' className="nav-link text-light fw-bold" aria-current="page">Contacto</NavLink>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Peliculas" aria-label="Search"/>
                        <button className="btn btn-outline-warning bs-light me-5" type="submit">Buscar</button>
                    </form>
                </div>
                </div>
            </nav>
        </header>
    )
}

export default Nav;