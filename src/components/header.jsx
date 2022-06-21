import React, { Component } from 'react';
import logo from '../assets/img/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
class Header extends Component {
    state = {}
    render() {
        return (
            <header className="shadow">
                <nav className="navbar rtl container wrapper">
                    <a id="navbar-logo" href="#">
                        <img src={logo} alt="لوگو سیب تامبولی" style={{ width: 120 }} />
                    </a>
                    <div id="navbar-left-side">
                        <div id="navbar-links" className="navbar-nav">
                            <a className="nav-link" style={{ cursor: 'pointer' }}>قوانین سایت</a>
                        </div>
                        <div id="login-btn">
                            <a className="btn btn-primary"><FontAwesomeIcon className='mx-2' icon={faUser} style={{ cursor: 'pointer' }} />ورود | عضویت </a>
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