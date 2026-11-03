'use client';

import { useEffect, useRef, useState } from 'react';

export default function PreviewLink({ href, children }) {
  const dialogRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  const show = (e) => {
    // Let modified clicks open the link normally.
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    setLoading(true);
    setOpen(true);
  };

  const host = new URL(href).hostname.replace(/^www\./, '');

  return (
    <>
      <a href={href} onClick={show}>
        {children}
      </a>
      <dialog
        ref={dialogRef}
        className='preview'
        onClose={() => setOpen(false)}
        onClick={(e) => e.target === dialogRef.current && setOpen(false)}
      >
        {open ? (
          <div className='preview-box'>
            <div className='preview-bar'>
              <span className='muted'>{host}</span>
              <span>
                <a href={href} target='_blank' rel='noopener noreferrer'>
                  Open in new tab
                </a>
                <button type='button' onClick={() => setOpen(false)} aria-label='Close'>
                  Close
                </button>
              </span>
            </div>
            <div className='preview-body'>
              {loading ? (
                <div className='preview-loader' role='status'>
                  <span className='spinner' />
                  <p className='muted'>Loading {host}…</p>
                </div>
              ) : null}
              <iframe src={href} title={host} onLoad={() => setLoading(false)} referrerPolicy='no-referrer' />
            </div>
            <p className='preview-note muted'>If the page stays blank, the site doesn&apos;t allow embedding. Use “Open in new tab”.</p>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
