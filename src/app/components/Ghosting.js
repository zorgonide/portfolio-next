'use client';

import { useRef, useState } from 'react';
import Recaptcha from './Recaptcha';
import { RECAPTCHA_SITE_KEY, GHOSTING_FORM_ENDPOINT } from './formConfig';

const REASONS = ['Boring conversation', 'Product market fit', 'Personal stuff', 'Ammar is a catfish', 'Needed the validation'];

function GhostIllustration() {
  return (
    <svg className='ghosting-illustration' viewBox='0 0 120 130' aria-hidden='true'>
      <path
        d='M60 8C32.4 8 10 30.4 10 58v54c0 3 3.6 4.6 5.9 2.6l9.6-8.4c1.6-1.4 4-1.4 5.6 0l9.9 8.6c1.6 1.4 4 1.4 5.6 0l9.9-8.6c1.6-1.4 4-1.4 5.6 0l9.9 8.6c1.6 1.4 4 1.4 5.6 0l9.9-8.6c1.6-1.4 4-1.4 5.6 0l9.6 8.4c2.3 2 5.9.4 5.9-2.6V58C110 30.4 87.6 8 60 8Z'
        fill='url(#ghostGradient)'
      />
      <circle cx='42' cy='56' r='6' fill='#05060a' />
      <circle cx='78' cy='56' r='6' fill='#05060a' />
      <ellipse cx='60' cy='78' rx='7' ry='9' fill='#05060a' />
      <defs>
        <linearGradient id='ghostGradient' x1='10' y1='8' x2='110' y2='120' gradientUnits='userSpaceOnUse'>
          <stop stopColor='#2dd4bf' />
          <stop offset='0.55' stopColor='#7c8cff' />
          <stop offset='1' stopColor='#f472b6' />
        </linearGradient>
      </defs>
    </svg>
  );
}

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
      <div className='container ghosting-container'>
        <form className='ghosting-form card' method='POST' onSubmit={handleSubmission}>
          <input type='hidden' name='_subject' value='Ghosting game response' />

          <GhostIllustration />

          <div className='ghosting-heading'>
            <h3>The voices in my head would like to know</h3>
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

          {/* {RECAPTCHA_SITE_KEY ? <Recaptcha className='captcha' ref={recaptcha} sitekey={RECAPTCHA_SITE_KEY} /> : null} */}

          <button type='submit' className='btn btn-primary'>
            Send message
          </button>
          {status ? <p className='form-status'>{status}</p> : null}
        </form>
      </div>
    </main>
  );
}
