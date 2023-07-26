import React from 'react';
import logo from '../../assets/img/logo2023.png';
import './footer.css';


export default function Footer() {

  const year = new Date().getFullYear();



  return (
    <section id="footer">
      <div className="footer-container">
        <div className="footer-content">
        <p className="footer-copyright">&#169; {year} <img className="footer-logo" src={logo} alt="logo" /> Ben Hensor</p>
        </div>
      </div>
    </section>
  );
  }