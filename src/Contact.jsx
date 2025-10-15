import React, { useState, useRef } from 'react';
import './App.css';

const emailRegex = new RegExp(
  `(?:[a-z0-9!#$%&'*+\\x2f=?^_\`\\x7b-\\x7d~\\x2d]+(?:\\.[a-z0-9!#$%&'*+\\x2f=?^_\`\\x7b-\\x7d~\\x2d]+)*|"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9\\x2d]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9\\x2d]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9\\x2d]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])`
);

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameTouched, setNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [messageTouched, setMessageTouched] = useState(false);
  const [feedback, setFeedback] = useState({ text: '', type: '' });

  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      if (!name.trim()) setNameTouched(true);
      if (!email.trim()) setEmailTouched(true);
      if (!message.trim()) setMessageTouched(true);
      setFeedback({ text: 'Please fill out all fields', type: 'error' });
      setTimeout(() => setFeedback({ text: '', type: '' }), 3000);
      return;
    }

    if (!emailRegex.test(email)) {
      setFeedback({ text: 'Please enter a valid email', type: 'error' });
      setTimeout(() => setFeedback({ text: '', type: '' }), 3000);
      return;
    }

    setNameTouched(false);
    setEmailTouched(false);
    setMessageTouched(false);

    setSubmitted(true);
    setFeedback({ text: "Thanks for submitting! We'll be in touch soon.", type: 'success' });
    setTimeout(() => setFeedback({ text: '', type: '' }), 3000);

    if (formRef.current) {
      formRef.current.submit();
    }

    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
      setSubmitted(false);
      if (formRef.current) formRef.current.reset();
    }, 100);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2vh 0',
      }}
    >
      <form
        ref={formRef}
        name="gform"
        id="gform"
        encType="text/plain"
        action="https://docs.google.com/forms/d/e/1FAIpQLScw0CDzH6KASqVOWOMPQQzprQPsJAVpB8BOJTOrw4yqW7ep_Q/formResponse?"
        target="hidden_iframe"
        onSubmit={handleSubmit}
        style={{
          width: '35vw',
          display: 'flex',
          flexDirection: 'column',
          height: '70vh',
        }}
      >
        <input
          type="text"
          name="entry.1323338764"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          onBlur={() => setNameTouched(true)}
          style={{ width: '100%', height: '4vh', marginTop: '8vh',
            outline: nameTouched && !name.trim() ? '1px solid red' : 'none',
           }}
        />
        <input
          type="text"
          name="entry.999202281"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setEmailTouched(true)}
          style={{ width: '100%', height: '4vh', marginTop: '2.5vh', fontFamily: 'Questrial, sans-serif',
            outline: emailTouched && !email.trim() ? '1px solid red' : 'none',
           }}
        />
        <textarea
          className="message-area"
          name="entry.1788117698"
          placeholder={`Have a question? Want to collaborate? Or just want to tell us something cool?

It all starts here...`}
          rows="4"
          cols="50"
          onChange={(e) => setMessage(e.target.value)}
          onBlur={() => setMessageTouched(true)}
          style={{ width: '100%', height: '20vh', marginTop: '2.5vh',
            outline: messageTouched && !message.trim() ? '1px solid red' : 'none',
           }}
        />
        <input
          type="submit"
          value="Submit"
          style={{
            backgroundColor: '#7B00CC',
            color: '#FFD966',
            width: '8.5vw',
            height: '2.3vw',
            marginTop: '2.5vh',
            fontFamily: 'Questrial, sans-serif',
            outline: 'none',
            boxShadow: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        />

        {feedback.text && (
          <div
            style={{
              color: '#7B00CC',
              marginTop: '1.5vh',
              fontFamily: 'Questrial, sans-serif',
              fontWeight: 600,
              fontSize: '1.1em',
              textAlign: 'center',
            }}
          >
            {feedback.text}
          </div>
        )}

        <div style={{ flexGrow: 1 }} />
      </form>

      <iframe
        name="hidden_iframe"
        id="hidden_iframe"
        style={{ display: 'none' }}
        onLoad={() => {
          if (submitted) {};
        }}
      ></iframe>
    </div>
  );
}

export default Contact;
