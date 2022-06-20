import React, { Component } from 'react';
import logo from '../assets/img/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
class Header extends Component {
    state = {  } 
    render() { 
        return (
        <header className="shadow">
            <nav className="navbar rtl container wrapper">
                <a id="navbar-logo" href="#">
                    <img src={logo} alt="لوگو سیب تامبولی"/>
                </a>
                <div id="navbar-left-side">
                    <div id="navbar-links" className="navbar-nav">
                        <a className="nav-link" href="#">سفارش اینترنتی</a>
                        <a className="nav-link" href="#">قوانین سایت</a>
                    </div>
                    <div id="login-btn">
                        <a href="#" className="btn btn-primary"><FontAwesomeIcon className='mx-2' icon={faUser} />ورود | عضویت </a>
                    </div>
                    <button id="navbar-toggler" className="navbar-toggler" type="button">
                        <i className="fal fa-bars"></i>
                    </button>
                </div>

            </nav>
            <div id="navbar-collpase" className=" pb-3 pb-sm-0">
                <a className="navbar-collapse-link" href="#">ورود | عضویت </a>
                <a className="navbar-collapse-link" href="#">سفارش اینترنتی</a>
                <a className="navbar-collapse-link" href="#">قوانین سایت</a>
            </div>
        </header>
        );
    }
}
 
export default Header;