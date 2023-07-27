import React from 'react';
import { useNavigate } from 'react-router-dom';
import films from '../../films.js'
import './film.css';


export default function Film() {

  const navToVideo = useNavigate();

  const handleSelect = (film) => {
    navToVideo('/film-player', { state: { selectedVideo: film } });
  };

return (
  <section id="film">
    <div className="film-container">

      <div className="film-panels">

      {films.map((film) => (
            <div className="film-panel" key={film.id} onClick={() => handleSelect(film)}>
              <button className="film-panel-trigger">
              <span className="film-panel-title">{film.title}</span>
                <div className="film-panel-images">
                  <img className="film-panel-image" src={film.image[0]} alt="" />
                  <img className="film-panel-image" src={film.image[1]} alt="" />
                  <img className="film-panel-image" src={film.image[2]} alt="" />
                  <div className="film-hover-fade"></div>
                </div>

              </button>
            </div>
          ))}

      </div>

    </div>
  </section>
);
}