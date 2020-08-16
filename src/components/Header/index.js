import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './styles.css';
function Header() {
    return (
        <React.Fragment>
            <header>
                <Link to="/">
                    <img src={logo} alt="Logo projeto pet" />
                </Link>
                <h1 id="nome">Projeto Pet</h1>
                <nav>
                    <ul>
                        <li><Link className="link-item" to="/login">Login</Link></li>
                        <li><Link className="link-item" to="/register">Registrar</Link></li>
                        <li><Link className="link-item" to="/about">Sobre</Link></li>
                    </ul>
                </nav>
            </header>
        </React.Fragment>
    )
};

export default Header;