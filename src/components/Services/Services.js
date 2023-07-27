import React from 'react';
import './services.css';


export default function About() {





  return (
    <section id="services">
      <div className="services-container">
        <div className="services-content">
          <h1 className="services-title">Services</h1>
          <p className="services-service">
            I offer a full range of audio post production services, including:
          </p>
          <ul className="services-list">
            <li className="services-item">Dialogue Editing</li>
            <li className="services-item">Sound Design</li>
            <li className="services-item">Sound Effects Editing</li>
            <li className="services-item">ADR Recording, Editing & Mixing</li>
            <li className="services-item">Foley Recording, Editing & Mixing</li>
            <li className="services-item">Music Editing & Mixing</li>
            <li className="services-item">Re-Recording Mixing</li>
            <li className="services-item">Mastering</li>
            <li className="services-item">Audio Restoration</li>
          </ul>
        </div>

        <div className="services-clients">
          <h1 className="services-title">Previous Happy Clients!</h1>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
    </section>
  );
  }