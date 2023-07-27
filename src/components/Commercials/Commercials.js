import React from 'react';
import { useNavigate } from 'react-router-dom';
import commercials from '../../commercials.js'
import './commercials.css';


export default function Film() {

  const navToVideo = useNavigate();

  const handleSelect = (commercial) => {
    navToVideo('/commercials-player', { state: { selectedVideo: commercial } });
  };

return (
  <section id="commercials">
    <div className="commercials-container">

      <div className="commercials-panels">

      {commercials.map((commercial) => (
            <div className="commercials-panel" key={commercial.id} onClick={() => handleSelect(commercial)}>
              <button className="commercials-panel-trigger">
              <span className="commercials-panel-title">{commercial.title}</span>
                <div className="commercials-panel-images">
                  <img className="commercials-panel-image" src={commercial.image} alt="" />
                  <div className="commercials-hover-fade"></div>
                </div>

              </button>
            </div>
          ))}

      </div>

    </div>
  </section>
);
}