const base = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

export const IconMenu = (props) => (
  <svg {...base} {...props}>
    <path d='M4 7h16M4 12h16M4 17h16' />
  </svg>
);

export const IconClose = (props) => (
  <svg {...base} {...props}>
    <path d='M6 6l12 12M18 6L6 18' />
  </svg>
);

export const IconArrowDown = (props) => (
  <svg {...base} {...props}>
    <path d='M12 5v14M5 12l7 7 7-7' />
  </svg>
);

export const IconArrowUpRight = (props) => (
  <svg {...base} {...props}>
    <path d='M7 17L17 7M8 7h9v9' />
  </svg>
);

export const IconDownload = (props) => (
  <svg {...base} {...props}>
    <path d='M12 3v12M7 11l5 5 5-5M4 21h16' />
  </svg>
);

export const IconMail = (props) => (
  <svg {...base} {...props}>
    <rect x='3' y='5' width='18' height='14' rx='2' />
    <path d='m3.5 7 8.5 6 8.5-6' />
  </svg>
);

export const IconGithub = (props) => (
  <svg {...base} {...props}>
    <path d='M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21' />
  </svg>
);

export const IconLinkedin = (props) => (
  <svg {...base} {...props}>
    <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z' />
    <rect x='2' y='9' width='4' height='12' />
    <circle cx='4' cy='4' r='2' />
  </svg>
);

export const IconInstagram = (props) => (
  <svg {...base} {...props}>
    <rect x='2' y='2' width='20' height='20' rx='5' />
    <circle cx='12' cy='12' r='4' />
    <circle cx='17.5' cy='6.5' r='0.6' fill='currentColor' />
  </svg>
);
