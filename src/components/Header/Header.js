import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo2023.png';
import './header.css';




export default function Header() {
  return (
    <header className="header" id="header">


      <div className="header-container">
        <div className="header-top">
          <div className="nav-logo" id="home">
            <Link to="/"><img src={Logo} alt="Logo" /></Link>
          </div>
          <div className="nav-text">
            <h1 className="nav-title">BEN HENSOR</h1>
            <span className="nav-subtitle">- sound editing & design</span>
          </div>
        </div>
        <div className="header-bottom">
          <div className="nav-container" id="nav-container">
            
            <div className="nav-menu">
            <Link to="/film"><button className="nav-link">film</button></Link>
            <span>|</span>
            <Link to="/commercials"><button className="nav-link">commercials</button></Link>
            <span>|</span>
            <Link to="/services"><button className="nav-link">services</button></Link>
            <span>|</span>
            <Link to="/contact"><button className="nav-link">contact</button></Link>
            </div>
          </div>
        </div>
      </div>
      
        
    </header>
  )
}