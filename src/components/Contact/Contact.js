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
  const [status, setStatus] = useState({})

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setButtonText('Sending...')
    let response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(formDetails)
      })
      setButtonText('SEND')
      let result = await response.json()
      setFormDetails(formData)
      if (result.code === 200) {
        setStatus({ success: true, message: 'Message sent successfully!'})
        setTimeout(() => {
        setStatus({});
        }, 2000);
      } else {
        setStatus({ success: false, message: 'Something went wrong, please try again later.'})
        setTimeout(() => {
          setStatus({});
        }, 2000);
      }
  }

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
      <button type="submit"><span>{buttonText}</span><img src={send} alt="" className="connect-icon" /></button>
      {
        status.message &&
        <div className="contact-status-message">
          <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
        </div>
      }
    </form>


        </div>    
      </div>
    </section>
  );
  }