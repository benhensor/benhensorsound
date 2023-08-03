import React from 'react';
import adidas from '../../assets/clients/adidas.svg';
import brompton from '../../assets/clients/brompton.svg';
import dorothyperkins from '../../assets/clients/dorothyperkins.svg';
import hypebeast from '../../assets/clients/hypebeast.svg';
import myenergi from '../../assets/clients/myenergi.svg';
import nfts from '../../assets/clients/nfts.svg';
import nike from '../../assets/clients/nike.svg';
import omniplex from '../../assets/clients/omniplex.svg';
import olympus from '../../assets/clients/olympus.svg';
import sutc from '../../assets/clients/sutc.svg';
import ullac from '../../assets/clients/ullac.svg';
import vogue from '../../assets/clients/vogue.svg';
import youngminds from '../../assets/clients/youngminds.svg';
import './services.css';


export default function About() {





  return (
    <section id="services">
      <div className="services-container">
        <div className="services-content">
          <h1 className="services-title">Services</h1>
          <p className="services-service">
          I can look after all audio aspects of your content integrating seamlessly with your video editor or post house. Working remotely from my professional studio I can save you time and money by utilising a cloud-based workflow, giving you more time to focus on the creative aspects of the sound.
          </p>
          <p className="services-service">
          The workflow can be tailored to fit your budget and requirements, so I can develop a solution that will suit you. Specific services include:
          </p>
          <div className="services-list-container">
          <ul className="services-list">
            <li className="services-item">• Dialogue Editing</li>
            <li className="services-item">• Sound Design</li>
            <li className="services-item">• Sound Effects Editing</li>
            <li className="services-item">• ADR Recording, Editing & Mixing</li>
            <li className="services-item">• Foley Recording, Editing & Mixing</li>
            <li className="services-item">• Music Editing & Mixing</li>
            <li className="services-item">• Re-Recording Mixing</li>
            <li className="services-item">• Mastering</li>
            <li className="services-item">• Audio Restoration</li>
          </ul>
          </div>
        </div>

        <div className="services-content">
        <h1 className="services-title">Previous Happy Clients!</h1>
        <div className="services-clients">
          <img className="services-clients-logo adidas" src={adidas} alt="" />
          <img className="services-clients-logo brompton" src={brompton} alt="" />
          <img className="services-clients-logo dorothyperkins" src={dorothyperkins} alt="" />
          <img className="services-clients-logo hypebeast" src={hypebeast} alt="" />
          <img className="services-clients-logo myenergi" src={myenergi} alt="" />
          <img className="services-clients-logo nfts" src={nfts} alt="" />
          <img className="services-clients-logo nike" src={nike} alt="" />
          <img className="services-clients-logo olympus" src={olympus} alt="" />
          <img className="services-clients-logo omniplex" src={omniplex} alt="" />
          <img className="services-clients-logo sutc" src={sutc} alt="" />
          <img className="services-clients-logo ullac" src={ullac} alt="" />
          <img className="services-clients-logo vogue" src={vogue} alt="" />
          <img className="services-clients-logo youngminds" src={youngminds} alt="" />


        </div>
        </div>
      </div>
    </section>
  );
  }