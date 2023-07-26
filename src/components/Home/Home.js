import React from 'react';
import profile from '../../assets/img/bhMugshot01.png';
import './home.css';


export default function Home() {





return (
  <section id="home">
    <div className="home-container">

      <div className="home-header">
        <div className="home-profile-image">
          <img src={profile} alt="" />
        </div>
        <div className="home-titles">
          <h1 className="home-title">Ben Hensor</h1>
          <h2 className="home-subtitle">Sound Designer & Dubbing Mixer</h2>
        </div>
      </div>

      <div className="home-content">
        <p className="home-text">I am an award-winning sound designer working in film, television and commercials.</p>
        <p className="home-text">I specialise in creating cinematic, organic, story-focused sound for all forms of visual media and pride pride myself on getting to the heart of the narrative, creating immersive experiences for audiences.</p>
        <p className="home-text">My services cover a wide range of technical and creative post-production requirements, whether it’s making dialogue crystal clear or creating intricate audio environments from scratch.</p>
        <p className="home-text">With pver 10 years experience in post production, working alongside top directors and creative professionals, I am passionate about the power of sound to draw you into a story and take you on an adventure to new sonic worlds.</p>
        
        <div className="home-links">
          <a href="https://www.linkedin.com/in/benhensor/" rel="noreferrer" target="_blank">
            <span>LinkedIn</span>
          </a>
          <a href="https://www.imdb.com/name/nm5978088/?ref_=rvi_nm" rel="noreferrer" target="_blank">
            <span>IMDB</span>
          </a>
        </div>
      </div>
  
    </div>
  </section>
);
}