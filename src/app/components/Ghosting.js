'use client';

import { useRef, useState } from 'react';
import Recaptcha from './Recaptcha';
import { RECAPTCHA_SITE_KEY, GHOSTING_FORM_ENDPOINT } from './formConfig';

const REASONS = ['Boring conversation', 'Product market fit', 'Personal stuff', 'Ammar is a catfish', 'Needed the validation'];

export default function Ghosting() {
  const [status, setStatus] = useState('');
  const recaptcha = useRef(null);

  const handleSubmission = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const captchaValue = recaptcha.current?.getValue();

    if (RECAPTCHA_SITE_KEY && !captchaValue) {
      setStatus('Please complete the captcha first.');
      return;
    }

    setStatus('Sending…');
    fetch(GHOSTING_FORM_ENDPOINT, {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' },
    })
      .then(() => {
        form.reset();
        recaptcha.current?.reset();
        setStatus('Thanks for the closure.');
      })
      .catch(() => setStatus('Something went wrong — try again in a bit.'));
  };

  return (
    <main className='ghosting-page'>
      <div className='container ghosting-container'>
        <form className='ghosting-form card' method='POST' onSubmit={handleSubmission}>
          <input type='hidden' name='_subject' value='Ghosting game response' />

          <div className='ghosting-heading'>
            <p className='eyebrow'>The voices in my head would like to know</p>
            <h1>Why&apos;d you ghost me?</h1>
          </div>

          <fieldset className='reason-options'>
            <legend>Reason for ghosting *</legend>
            {REASONS.map((reason) => (
              <label key={reason}>
                <input type='radio' name='reason' value={reason} required />
                {reason}
              </label>
            ))}
          </fieldset>

          <label>
            Any other feedback
            <textarea name='message' placeholder='Your answer' />
          </label>

          {RECAPTCHA_SITE_KEY ? <Recaptcha className='captcha' ref={recaptcha} sitekey={RECAPTCHA_SITE_KEY} /> : null}

          <button type='submit' className='btn btn-primary'>
            Send message
          </button>
          {status ? <p className='form-status'>{status}</p> : null}
        </form>
      </div>
    </main>
  );
}
