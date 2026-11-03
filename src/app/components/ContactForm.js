'use client';

import { useState } from 'react';
import { FORM_ENDPOINT } from './formConfig';

export default function ContactForm() {
  const [status, setStatus] = useState('');

  const handleSubmission = (e) => {
    e.preventDefault();
    const form = e.target;

    setStatus('Sending…');
    fetch(FORM_ENDPOINT, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    })
      .then(() => {
        form.reset();
        setStatus('Thanks, your message is on its way.');
      })
      .catch(() => setStatus('Something went wrong. Try LinkedIn instead.'));
  };

  return (
    <form className='form' method='POST' onSubmit={handleSubmission}>
      <input type='hidden' name='_subject' value='Contact request from personal website' />
      <label>
        Email
        <input type='email' name='_replyto' required />
      </label>
      <label>
        Message
        <textarea name='message' rows={4} required />
      </label>
      <button type='submit'>Send</button>
      {status ? <p className='muted'>{status}</p> : null}
    </form>
  );
}
