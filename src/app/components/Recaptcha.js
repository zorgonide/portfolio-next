'use client';

import Script from 'next/script';
import { useCallback, useImperativeHandle, useRef } from 'react';

const RECAPTCHA_SRC = 'https://www.google.com/recaptcha/api.js?render=explicit';

export default function Recaptcha({ ref, sitekey, className }) {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);

  const renderWidget = useCallback(() => {
    const grecaptcha = window.grecaptcha;
    if (!grecaptcha) return;

    const render = () => {
      if (widgetIdRef.current !== null || !containerRef.current) return;
      widgetIdRef.current = grecaptcha.render(containerRef.current, { sitekey });
    };

    // grecaptcha.ready defers until the widget API is fully initialised.
    if (typeof grecaptcha.ready === 'function') {
      grecaptcha.ready(render);
    } else {
      render();
    }
  }, [sitekey]);

  useImperativeHandle(ref, () => ({
    getValue: () => (widgetIdRef.current === null ? null : window.grecaptcha.getResponse(widgetIdRef.current)),
    reset: () => {
      if (widgetIdRef.current !== null) window.grecaptcha.reset(widgetIdRef.current);
    },
  }), []);

  return (
    <>
      <div ref={containerRef} className={className} />
      <Script src={RECAPTCHA_SRC} strategy='afterInteractive' onReady={renderWidget} />
    </>
  );
}
