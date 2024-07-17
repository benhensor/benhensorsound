import React, { useState } from 'react';
import send from '../../assets/icons/send.svg';
import './contact.css';


export default function Contact() {

  const formData = {
    name: '',
    email: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formData)
  const [buttonText, setButtonText] = useState('SEND')

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Sending...');
    let response = await fetch('/.netlify/functions/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(formDetails)
    });

    let result = await response.json();
    setFormDetails(formData);
    if (result.code === 200) {
      setButtonText('Message sent successfully!');
    } else {
      setButtonText('Something went wrong, please try again later.');
    }

    // Reset the button text after 2 seconds
    setTimeout(() => {
      setButtonText('SEND');
    }, 2000);
  };

  return (
    <section id="contact">
      <div className="contact-container">
        <h1 className="contact-title">Contact</h1>
        <div className="contact-box">
        <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          value={formDetails.name}
          onChange={(e) => onFormUpdate('name', e.target.value)} 
          required
        />
      </div>
      <div>
        <label htmlFor="email">email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email"
          value={formDetails.email}
          onChange={(e) => onFormUpdate('email', e.target.value)} 
          required
        />
      </div>
      <div>
        <label htmlFor="message">message:</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your message"
          value={formDetails.message}
          onChange={(e) => onFormUpdate('message', e.target.value)} 
          required
        />
      </div>
      <button type="submit">
        <span>{buttonText}</span>
        <img src={send} alt="" className="connect-icon" />
      </button>
    </form>


        </div>    
      </div>
    </section>
  );
  }