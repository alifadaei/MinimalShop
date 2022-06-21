import React, { Component } from 'react';
import logo from '../assets/img/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
class Header extends Component {
    state = {}
    render() {
        return (
            <header className="shadow" style={{ zIndex: 3000, background: 'white' }} >
                <nav className="navbar rtl container wrapper">
                    <Link to='/' id="navbar-logo" href="#">
                        <img src={logo} alt="لوگو سیب تامبولی" style={{ width: 120 }} />
                    </Link>
                    <div id="navbar-left-side">
                        <div id="navbar-links" className="navbar-nav">
                            <Link to='/faq' className="nav-link" style={{ cursor: 'pointer' }}>قوانین سایت</Link>
                        </div>
                        <div id="login-btn">
                            <Link className="btn btn-primary" to="/login"><FontAwesomeIcon className='mx-2' icon={faUser} style={{ cursor: 'pointer' }} />ورود | عضویت </Link>
                        </div>
                        <button id="navbar-toggler" className="navbar-toggler" type="button">
                            <i className="fal fa-bars"></i>
                        </button>
                    </div>

                </nav>
            </header>
        );
    }
}

export default Header;