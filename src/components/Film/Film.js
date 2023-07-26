import React from 'react';
import films from '../../films.js'
import './film.css';


export default function Film() {





return (
  <section id="film">
    <div className="film-container">

      <div className="film-panels">

      {films.map((film) => (
            <div className="film-panel" key={film.id}>
              <button className="film-panel-trigger">
                <div className="film-panel-images">
                  <img className="film-panel-image" src={film.image[0]} alt="" />
                  <img className="film-panel-image" src={film.image[1]} alt="" />
                  <img className="film-panel-image" src={film.image[2]} alt="" />
                  <div className="film-hover-fade"></div>
                </div>

                <div className="film-panel-title">
                  <h2>{film.title}</h2>
                </div>
              </button>
            </div>
          ))}
      
        
      






      </div>

    </div>
  </section>
);
}