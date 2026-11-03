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
    // reCAPTCHA temporarily disabled — see commented usage below.
    // const captchaValue = recaptcha.current?.getValue();
    // if (RECAPTCHA_SITE_KEY && !captchaValue) {
    //   setStatus('Please complete the captcha first.');
    //   return;
    // }

    setStatus('Sending…');
    fetch(GHOSTING_FORM_ENDPOINT, {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' },
    })
      .then(() => {
        form.reset();
        recaptcha.current?.reset();
        setStatus('Thanks for the closure. Feedback will be used to improve product.');
      })
      .catch(() => setStatus('Something went wrong — try again in a bit.'));
  };

  return (
    <main className='ghosting-page'>
      <h1>The voices in my head would like to know</h1>
      <form className='form' method='POST' onSubmit={handleSubmission}>
        <input type='hidden' name='_subject' value='Ghosting game response' />

        <fieldset>
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
          <textarea name='message' rows={4} />
        </label>

        {/* {RECAPTCHA_SITE_KEY ? <Recaptcha className='captcha' ref={recaptcha} sitekey={RECAPTCHA_SITE_KEY} /> : null} */}

        <button type='submit'>Send</button>
        {status ? <p className='muted'>{status}</p> : null}
      </form>
    </main>
  );
}
