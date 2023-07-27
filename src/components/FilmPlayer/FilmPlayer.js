import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './filmplayer.css';


export default function FilmPlayer() {

  const location = useLocation();
  const navBack = useNavigate();


  const { selectedVideo: film } = location.state;
  

  // console.log('Film: ', film)

  const { title, description, embedVideo } = film;

  const handleBack = () => {
    navBack('/film');
  };


  return (
    <section id="film-video">
      <div className="film-video-container">

        <div className="film-video-player" dangerouslySetInnerHTML={{ __html: embedVideo}} />
        <h1 className="film-video-title">{title}</h1>
        <p className="film-video-description">{description}</p>
        <button onClick={handleBack}>Back</button>

      </div>
    </section>
  )
}