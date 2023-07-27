import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './commercialsplayer.css';


export default function CommercialsPlayer() {

  const location = useLocation();
  const navBack = useNavigate();


  const { selectedVideo: commercial } = location.state;
  

  // console.log('Commercial: ', commercial)

  const { title, description, embedVideo } = commercial;

  const handleBack = () => {
    navBack('/commercials');
  };


  return (
    <section id="comms-video">
      <div className="comms-video-container">

        <div className="comms-video-player" dangerouslySetInnerHTML={{ __html: embedVideo}} />
        <h1 className="comms-video-title">{title}</h1>
        <p className="comms-video-description">{description}</p>
        <button onClick={handleBack}>Back</button>

      </div>
    </section>
  )
}