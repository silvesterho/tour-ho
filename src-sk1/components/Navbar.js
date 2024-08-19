
import React from 'react';
import {pageLinks, socialLinks} from "../data";

function Navbar() {
  return (
    <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <a href="index.html" className="nav-logo">
          <img src="images/logo.svg" alt="logo"  />
        </a>
        <button className="nav-toggle" id="nav-toggle">
          <i className="fas fa-bars"></i>
        </button>
      </div>
      <ul className="nav-links" id="nav-links">
        {pageLinks.map((link)=>{
          return(
            <li><a key={link.id} href={link.href} className="nav-link">
              {link.text}</a></li>
          );
        })}
       </ul>

      <ul className="nav-icons" id="nav-icons">

      {socialLinks.map((link)=>{
          return(
            <li><a key={link.id} href={link.href} target='_blank' rel='noreferrer' className="nav-icon">
              <i className={link.text}></i></a></li>
          );
        })} 
      </ul>
    </div>
    </nav>

  )
}

export default Navbar