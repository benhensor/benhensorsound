import React from 'react'
import Logo from '../../assets/img/logo2023.png';
import './header.css';




export default function Header() {
  return (
    <header className="header" id="header">
      <div className="header-container">
        <div className="header-top">
          <div className="nav-logo" id="home">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="nav-text">
            <h1 className="nav-title">BEN HENSOR</h1>
            <span className="nav-subtitle">- sound editing & design</span>
          </div>
        </div>
        <div className="header-bottom">
          <div className="nav-container" id="nav-container">
            
            <div className="nav-menu">
              <button className="nav-link">film</button>
              <span>|</span>
              <button className="nav-link">commercials</button>
              <span>|</span>
              <button className="nav-link">about</button>
              <span>|</span>
              <button className="nav-link">contact</button>
            </div>
          </div>
        </div>
      </div>
      
        
    </header>
  )
}