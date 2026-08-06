'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Recaptcha from './Recaptcha';

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? '6LfKJhUpAAAAAC91p3Iv45bDilAm0BdM1X9NHxq6';
const FORM_ENDPOINT = 'https://getform.io/f/73ebbb0e-851d-4921-ae48-e8f5b4b64f56';

const Projects = [
  {
    title: 'MovieFlix 🎥',
    description: 'Built out of a need to stop endless scrolling through Netflix. Log in and get customized movie recommendations, and leave reviews.',
    image: '/images/movieflix.png',
    link: 'https://movieflix-tv.netlify.app/',
  },
  {
    title: 'Travelo 🚲',
    description:
      'A user could rent and return bikes from different locations around the city, and super users could manage operations (charging and repairing status) and revenue (per user and per vehicle revenue).',
    image: '/images/travelo.png',
    link: 'https://github.com/zorgonide/travelo-travel-app',
  },
  {
    title: 'Emokey 🔒 - Reinventing passwords with emojis',
    description:
      "Built an alternative method to conventional password authentication, using emojis instead. Every password text is uniquely hashed to 3 emojis, and the user's input is obfuscated into emojis. Built for Human Centered Security Course at University of Glasgow. (A grade)",
    image: '/images/emokey.png',
    link: 'https://emokey2.netlify.app/',
  },
  {
    title: 'Semi-autonomous four-wheeled bot 🏎',
    description:
      'Stream video from a bot using Raspberry Pi and camera to a host computer in master-slave configuration to perform obstacle detection and move the bot around using commands sent from the master computer',
    image: '/images/bot.png',
    link: 'https://github.com/zorgonide/FourWheeledBot',
  },
];

const Education = [
  {
    university: 'University of Glasgow, Scotland',
    time: '2022 - 2023',
    degree: 'MSc Computing Science',
    grade: 'Distinction',
  },
  {
    university: 'Manipal Institute of Technology, India',
    time: '2017 - 2021',
    degree: 'BTech Information Technology',
    grade: '7.8/10 CGPA',
  },
  {
    university: 'Delhi Public School, Indirapuram, India',
    time: '2011 - 2016',
    degree: 'High School, CBSE',
    grade: '87.4%',
  },
];

const Experience = [
  {
    company: "Sainsbury's",
    time: 'Aug 2024 - Present',
    role: 'Software Engineer',
    description: "Product analytics across Sainsbury's, Argos, Habitat, TU Clothing.",
    tech: 'React, Next.js, HTML, CSS, Javascript, Adobe Analytics',
  },
  {
    company: 'Reply',
    time: 'Sep 2023 - Aug 2024',
    role: 'Consultant',
    description: 'Analytics Developer working with Adobe Experience Cloud',
    tech: 'Javascript, HTML, CSS, Adobe Analytics',
  },
  {
    company: 'Adobe',
    time: 'Feb 2022 - Aug 2022',
    role: 'Senior Technical Product Consultant',
    description: 'Facilitated clients in implementing, optimising, and troubleshooting web implementations for Adobe Analytics.',
    tech: 'Javascript, HTML, CSS, SQL, Adobe Analytics',
  },
  {
    company: 'ICICI Lombard',
    time: 'Feb 2021 - Feb 2022',
    role: 'Developer',
    description: "Developed Angular web apps for health insurance for India's largest private insurer.",
    tech: 'Angular, Typescript, HTML, CSS, Java, React',
  },
  {
    company: 'Viga Entertainment Studio',
    time: 'Jul 2020 - Dec 2020',
    role: 'Frontend Intern',
    description: 'Developed a React web app to serve as a repository for tracking sequences and shots in movie production.',
    tech: '  React, Redux, HTML, CSS, Javascript, Firebase, UI/UX Design',
  },
];

function Project({ project }) {
  const { title, description, image, link } = project;
  return (
    <div className='project shadow-large'>
      <div className='project-image'>
        <Image src={image} alt={title} height={180} width={300} />
      </div>
      <div className='project-info'>
        <h3>{title}</h3>
        <p>{description}</p>
        <a target='_blank' rel='noopener noreferrer' href={link}>
          View Project
        </a>
      </div>
    </div>
  );
}

function Experiences() {
  return (
    <div className='timeline'>
      <ul>
        {Experience.map((experience, i) => (
          <li key={i}>
            <div className='date'>{experience.time}</div>
            <div className='title'>{experience.role}</div>
            <div className='company'>{experience.company}</div>
            <div className='descr'>{experience.description}</div>
            <div className='tech text-muted'>{experience.tech}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function EduBlock({ education }) {
  const { university, time, degree, grade } = education;
  return (
    <div className='education-block'>
      <h4 className='weight-bold'>{university}</h4>
      <span className='education-date'>{time}</span>
      <p className='italic'>{degree}</p>
      <ul>
        <li>{grade}</li>
      </ul>
    </div>
  );
}

export default function Home() {
  const [copyright, setCopyright] = useState('');
  const [isMenuActive, setMenuActive] = useState(false);
  const recaptcha = useRef(null);

  const handleMenuOpen = () => {
    setMenuActive(!isMenuActive);
  };

  const handleMenuClose = () => {
    setMenuActive(!isMenuActive);
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const captchaValue = recaptcha.current?.getValue();
    if (captchaValue) {
      fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })
        .then(() => {
          form.reset();
          recaptcha.current?.reset();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        })
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    // Set on the client so static prerendering doesn't freeze the year at build time.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCopyright(`${new Date().getFullYear()} Ammar Khurshid`);
  }, []);

  return (
    <div>
      <div id='mobile-menu-open' className={`shadow-large ${isMenuActive ? 'active' : ''}`} onClick={handleMenuOpen}>
        <i className='fa fa-bars' aria-hidden='true'></i>
      </div>
      <header>
        <div id='mobile-menu-close' className={isMenuActive ? 'active' : ''} onClick={handleMenuClose}>
          <span>Close</span> <i className='fa fa-times' aria-hidden='true'></i>
        </div>
        <ul id='menu' className='shadow'>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#experience'>Experience</a>
          </li>
          <li>
            <a href='#education'>Education</a>
          </li>
          <li>
            <a href='#projects'>Projects</a>
          </li>
          <li>
            <a href='#skills'>Skills</a>
          </li>
          <li>
            <a href='#certificate'>Certifications</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </header>

      <div id='lead'>
        <div id='particles-js'></div>
        <div id='lead-content'>
          <h1>Ammar Khurshid</h1>
          <h2>Fullstack Web Developer</h2>
          <a href='/Ammar_Resume.pdf' className='btn-rounded-white'>
            Download Resume
          </a>
        </div>

        <div id='lead-overlay'></div>

        <div id='lead-down'>
          <a href='#about' style={{ color: 'white' }}>
            <span>
              <i className='fa fa-chevron-down' aria-hidden='true'></i>
            </span>
          </a>
        </div>
      </div>

      <div id='about'>
        <div className='container'>
          <br />
          <div className='row'>
            <div className='col-md-4'>
              <h2 className='heading'>About Me</h2>
            </div>
            <div className='col-md-8'>
              <Image
                src='/images/ammar.jpg'
                alt='Me'
                style={{
                  marginBottom: '10px',
                  borderRadius: '80%',
                }}
                width={200}
                height={200}
                priority
              />
              <p style={{ textAlign: 'left' }}>
                Hi, I&apos;m <b>Ammar</b> 👨🏻‍💻
                <br />
                I&apos;m an MSc Computing Science graduate from the <a href='https://www.gla.ac.uk/'>University of Glasgow</a>
                <i className='fa fa-graduation-cap' aria-hidden='true'></i>.
                <br />
                <code>A frontend web developer by profession with proficiency in ReactJs ❤.</code>
                <br />
                <br />
                Hit me up for anything and everything tech related, or if you want to see me talk about why Samwise Gamgee is the real hero, not Frodo Baggins.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id='experience' className='background-alt'>
        <h2 className='heading'>Experience</h2>
        <Experiences />
      </div>

      <div id='education'>
        <h2 className='heading'>Education</h2>
        {Education.map((education, i) => (
          <EduBlock key={i} education={education} />
        ))}
      </div>

      <div id='projects' className='background-alt'>
        <h2 className='heading'>Projects</h2>
        <div className='container'>
          <div className='row'>
            {Projects.map((project, i) => (
              <Project key={i} project={project} />
            ))}
          </div>
        </div>
      </div>

      <div id='skills'>
        <h2 className='heading'>Skills</h2>
        <ul>
          <li>Web Development</li>
          <li>Adobe Analytics</li>
          <li>UI/UX Design</li>
        </ul>
        <br />
        <h2 className='heading'>Languages</h2>
        <ul>
          <li>JavaScript</li>
          <li>Python</li>
          <li>Java</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>SQL</li>
        </ul>
        <br />

        <h2 className='heading'>Technologies</h2>
        <ul>
          <li>React</li>
          <li>React Native</li>
          <li>Angular</li>
          <li>GatsbyJs</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>Raspberry Pi</li>
          <li>Postman</li>
          <li>Figma</li>
          <li>Bootstrap</li>
          <li>Material UI</li>
        </ul>
      </div>

      <div className='optional-section background-alt' id='certificate'>
        <h2 className='heading'>Certifications</h2>
        <div className='optional-section-block'>
          <ul>
            <li>Full-Stack Web Development with React Specialization</li>
            <li>Introduction to User Experience Design on Coursera</li>
            <li>Introduction to Self-Driving Cars by University of Toronto on Coursera.</li>
            <li>The Arduino Platform and C Programming by University of California, Irvine on Coursera.</li>
            <li>Data Analysis with Python by IBM on Coursera.</li>
            <li>Build an E-commerce Dashboard with Figma on Coursera</li>
            <li>Server-side Development with NodeJS, Express and MongoDB on Coursera</li>
            <li>Creating a Personal Site with Gatsby</li>
          </ul>
        </div>
      </div>

      <div id='contact'>
        <h2>Get in Touch</h2>
        <br />
        <div id='contact-form'>
          <form id='form' method='POST' onSubmit={handleSubmission}>
            <input type='hidden' name='_subject' value='Contact request from personal website' />
            <input type='email' name='_replyto' placeholder='Your email' required />
            <textarea name='message' placeholder='Your message' required />
            <Recaptcha className='captcha' ref={recaptcha} sitekey={RECAPTCHA_SITE_KEY} />
            <button type='submit'>Send</button>
          </form>
        </div>
      </div>

      <footer>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-5 copyright'>
              <p id='copyright'>{copyright}</p>
            </div>
            <div className='col-sm-2 top'>
              <a href='#about' style={{ color: 'white' }}>
                <span id='to-top'>
                  <i className='fa fa-chevron-up' aria-hidden='true'></i>
                </span>
              </a>
            </div>
            <div className='col-sm-5 social'>
              <ul>
                <li>
                  <a href='https://github.com/zorgonide' target='_blank' rel='noopener noreferrer'>
                    <i className='fa fa-github' aria-hidden='true'></i>
                  </a>
                </li>
                <li>
                  <a href='https://www.linkedin.com/in/ammar-khurshid-757140177/' target='_blank' rel='noopener noreferrer'>
                    <i className='fa fa-linkedin' aria-hidden='true'></i>
                  </a>
                </li>
                <li>
                  <a href='https://www.instagram.com/ammar.khurshid/' target='_blank' rel='noopener noreferrer'>
                    <i className='fa fa-instagram' aria-hidden='true'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
