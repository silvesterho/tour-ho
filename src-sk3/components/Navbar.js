import React from 'react';
import {pageLinks,socialLinks} from '../data';
import logo from '../images/logo.svg';

export default function Navbar() {
  return (
    <nav className="navbar">
        <div className="nav-center">
            <div className="nav-header">
                <a href="index.html" className="nav-logo">
                    <img src={logo} alt="logo"/>
                </a>
                <button className="nav-toggle" id="nav-toggle" type="button"><i className="fas fa-bars"></i></button>
            </div>
            <ul className="nav-links" id="nav-links">
                {pageLinks.map((link) => { // map through the pageLinks array and return a list item for each link
                    return(
                        <li><a key={link.id} href={link.href} className="nav-link">{link.text}</a></li>
                    )
                })}
            </ul>
            <ul className="nav-icons">
                {socialLinks.map((link) => { // map through the socialLinks array and return a list item for each link
                    return(
                        <li><a key={link.id} href={link.href} className='nav-icon'><i className={link.icon}></i></a></li>
                    )
                })}
            </ul>
        </div>
    </nav>
  )
}
