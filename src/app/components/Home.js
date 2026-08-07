'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
// import Recaptcha from './Recaptcha';
// import { RECAPTCHA_SITE_KEY, FORM_ENDPOINT } from './formConfig';
import {
  IconArrowDown,
  IconArrowUpRight,
  IconClose,
  IconDownload,
  IconGithub,
  IconInstagram,
  IconLinkedin,
  IconMail,
  IconMenu,
} from './Icons';

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/zorgonide', Icon: IconGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ammar-khurshid-757140177/', Icon: IconLinkedin },
  { label: 'Instagram', href: 'https://www.instagram.com/ammar.khurshid/', Icon: IconInstagram },
];

const STATS = [
  { value: '5+', label: 'Years corporate coding' },
  { value: '4', label: 'Companies' },
  { value: 'MSc CS', label: 'Distinction' },
];

const ABOUT_TAGS = ['React', 'Next.js', 'TypeScript', 'Adobe Analytics', 'UI/UX', 'Node.js'];

const Projects = [
  {
    title: 'MovieFlix 🎥',
    description: 'Built out of a need to stop endless scrolling through Netflix. Log in and get customized movie recommendations, and leave reviews.',
    image: '/images/movieflix.png',
    link: 'https://movieflix-next-delta.vercel.app/',
  },
  {
    title: 'Travelo 🚲',
    description:
      'A user could rent and return bikes from different locations around the city, and super users could manage operations (charging and repairing status) and revenue (per user and per vehicle revenue).',
    image: '/images/travelo.png',
    link: 'https://github.com/zorgonide/travelo-travel-app',
  },
  // {
  //   title: 'Emokey 🔒',
  //   description:
  //     "An alternative to conventional password authentication using emojis. Every password is uniquely hashed to 3 emojis, and the user's input is obfuscated into emojis. Built for Human Centered Security at the University of Glasgow (A grade).",
  //   image: '/images/emokey.png',
  //   link: 'https://emokey2.netlify.app/',
  // },
  {
    title: 'Four-wheeled bot 🏎',
    description:
      'Streams video from a Raspberry Pi bot to a host computer in a master-slave configuration to perform obstacle detection and drive the bot with commands sent from the master.',
    image: '/images/bot.png',
    link: 'https://github.com/zorgonide/FourWheeledBot',
  },
];

const Education = [
  {
    university: 'University of Glasgow, Scotland',
    time: '2022 — 2023',
    degree: 'MSc Computing Science',
    grade: 'Distinction',
  },
  {
    university: 'Manipal Institute of Technology, India',
    time: '2017 — 2021',
    degree: 'BTech Information Technology',
    grade: '7.8/10 CGPA',
  },
  {
    university: 'Delhi Public School, Indirapuram, India',
    time: '2011 — 2016',
    degree: 'High School, CBSE',
    grade: '87.4%',
  },
];

const Experience = [
  {
    company: "Sainsbury's",
    time: 'Aug 2024 — Present',
    role: 'Software Engineer',
    description: "Product analytics across Sainsbury's, Argos, Habitat and TU Clothing.",
    tech: ['React', 'Next.js', 'JavaScript', 'HTML', 'CSS', 'Adobe Analytics'],
  },
  {
    company: 'Reply',
    time: 'Sep 2023 — Aug 2024',
    role: 'Consultant',
    description: 'Analytics developer working with Adobe Experience Cloud.',
    tech: ['JavaScript', 'HTML', 'CSS', 'Adobe Analytics'],
  },
  {
    company: 'Adobe',
    time: 'Feb 2022 — Aug 2022',
    role: 'Senior Technical Product Consultant',
    description: 'Helped clients implement, optimise and troubleshoot web implementations for Adobe Analytics.',
    tech: ['JavaScript', 'HTML', 'CSS', 'SQL', 'Adobe Analytics'],
  },
  {
    company: 'ICICI Lombard',
    time: 'Feb 2021 — Feb 2022',
    role: 'Developer',
    description: "Built Angular web apps for health insurance at India's largest private insurer.",
    tech: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Java', 'React'],
  },
  {
    company: 'Viga Entertainment Studio',
    time: 'Jul 2020 — Dec 2020',
    role: 'Frontend Intern',
    description: 'Developed a React web app to track sequences and shots in movie production.',
    tech: ['React', 'Redux', 'JavaScript', 'Firebase', 'UI/UX Design'],
  },
];

const SKILL_GROUPS = [
  { title: 'Focus', items: ['Web Development', 'Adobe Analytics', 'UI/UX Design'] },
  { title: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'HTML', 'CSS', 'SQL'] },
  {
    title: 'Technologies',
    items: ['React', 'Next.js', 'React Native', 'Angular', 'Gatsby', 'Node.js', 'Express', 'Raspberry Pi', 'Postman', 'Figma', 'Material UI'],
  },
];

function SectionHeading({ eyebrow, title, sub }) {
  return (
    <div className='section-head reveal'>
      <p className='eyebrow'>{eyebrow}</p>
      <h2 className='section-title'>{title}</h2>
      {sub ? <p className='section-sub'>{sub}</p> : null}
    </div>
  );
}

function Project({ project }) {
  const { title, description, image, link } = project;
  return (
    <article className='project card reveal'>
      <div className='project-media'>
        <Image src={image} alt={title} fill sizes='(max-width: 768px) 100vw, 50vw' />
      </div>
      <div className='project-body'>
        <h3>{title}</h3>
        <p>{description}</p>
        <a className='project-link' target='_blank' rel='noopener noreferrer' href={link}>
          View project <IconArrowUpRight />
        </a>
      </div>
    </article>
  );
}

function Timeline() {
  return (
    <ol className='timeline'>
      {Experience.map((job) => (
        <li className='timeline-item reveal' key={job.company}>
          <div className='timeline-card card'>
            <div className='timeline-top'>
              <h3 className='timeline-role'>{job.role}</h3>
              <span className='timeline-date'>{job.time}</span>
            </div>
            <p className='timeline-company'>{job.company}</p>
            <p>{job.description}</p>
            <ul className='tech-list'>
              {job.tech.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function Home() {
  const [year, setYear] = useState('');
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isStuck, setStuck] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [status, setStatus] = useState('');
  const recaptcha = useRef(null);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

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
    fetch(FORM_ENDPOINT, {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' },
    })
      .then(() => {
        form.reset();
        recaptcha.current?.reset();
        setStatus('Thanks! Your message is on its way. 🚀');
      })
      .catch(() => setStatus('Something went wrong — try me on LinkedIn instead.'));
  };

  useEffect(() => {
    // Set on the client so static prerendering doesn't freeze the year at build time.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setYear(new Date().getFullYear());
  }, []);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('nav-open', isMenuOpen);
    return () => document.body.classList.remove('nav-open');
  }, [isMenuOpen]);

  useEffect(() => {
    const spy = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5] }
    );
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) spy.observe(el);
    });

    return () => spy.disconnect();
  }, []);

  useEffect(() => {
    const pending = new Set(document.querySelectorAll('.reveal'));

    const reveal = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && show(entry.target)), {
      threshold: 0.12,
    });

    // A hash deep link jumps the page before the observer's first delivery, so sweep whatever is on screen.
    const sweep = () => {
      pending.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) show(el);
      });
    };

    function show(el) {
      el.classList.add('is-visible');
      reveal.unobserve(el);
      pending.delete(el);
      if (pending.size === 0) stop();
    }

    function stop() {
      reveal.disconnect();
      window.removeEventListener('scroll', sweep);
      window.removeEventListener('load', sweep);
    }

    pending.forEach((el) => reveal.observe(el));
    window.addEventListener('scroll', sweep, { passive: true });
    window.addEventListener('load', sweep);
    sweep();

    return stop;
  }, []);

  return (
    <>
      <nav className={`nav ${isStuck ? 'is-stuck' : ''}`} aria-label='Main navigation'>
        <div className='container'>
          <a className='nav-logo' href='#top'>
            ammarkhurshid<span>.com</span>
          </a>
          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            {NAV_ITEMS.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} className={activeSection === id ? 'active' : ''} onClick={closeMenu}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type='button'
            className='nav-toggle'
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </nav>

      <header className='hero' id='top'>
        <div className='hero-grid' />
        <div className='hero-orb one' />
        <div className='hero-orb two' />
        <div className='container hero-inner'>
          <p className='hero-badge'>
            <span className='status-dot' />
            Open to interesting work
          </p>
          <h1 className='hero-title'>
            Ammar <span className='gradient-text'>Khurshid</span>
          </h1>
          <p className='hero-role'>Fullstack web developer</p>
          <p className='hero-copy'>
            I build fast, accessible interfaces with React and Next.js — currently shipping product analytics experiences at Sainsbury&apos;s.
          </p>
          <div className='hero-actions'>
            <a href='#contact' className='btn btn-primary'>
              <IconMail /> Get in touch
            </a>
            <a href='/Ammar_Resume.pdf' className='btn btn-ghost'>
              <IconDownload /> Download resume
            </a>
          </div>
          <dl className='hero-stats'>
            {STATS.map(({ value, label }) => (
              <div key={label}>
                <dt>{value}</dt>
                <dd>{label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <a href='#about' className='hero-scroll' aria-label='Scroll to about'>
          <IconArrowDown />
        </a>
      </header>

      <main>
        <section className='section' id='about'>
          <div className='container'>
            <SectionHeading eyebrow='01 — About' title='A little about me' />
            <div className='about-layout'>
              <div className='about-photo reveal'>
                <Image src='/images/ammar.jpg' alt='Ammar Khurshid' width={280} height={280} priority />
              </div>
              <div className='about-text reveal'>
                <p>
                  Hi, I&apos;m <strong>Ammar</strong> 👨🏻‍💻 — an MSc Computing Science graduate from the{' '}
                  <a href='https://www.gla.ac.uk/' target='_blank' rel='noopener noreferrer'>
                    University of Glasgow
                  </a>
                  .
                </p>
                <p>
                  A frontend developer by profession with a soft spot for <code>React</code>, design systems and making analytics data actually useful.
                </p>
                <p>Hit me up for anything and everything tech related, or if you want to hear why Samwise Gamgee is the real hero, not Frodo Baggins.</p>
                <ul className='about-tags'>
                  {ABOUT_TAGS.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className='section' id='experience'>
          <div className='container'>
            <SectionHeading eyebrow='02 — Experience' title='Where I’ve worked' sub='Five years across product, consulting and analytics engineering.' />
            <Timeline />
          </div>
        </section>

        <section className='section' id='projects'>
          <div className='container'>
            <SectionHeading eyebrow='03 — Projects' title='Things I have built' sub='Side projects, coursework and experiments that escaped the localhost.' />
            <div className='projects-grid'>
              {Projects.map((project) => (
                <Project key={project.title} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section className='section' id='education'>
          <div className='container'>
            <SectionHeading eyebrow='04 — Education' title='Where I studied' />
            <div className='edu-grid'>
              {Education.map((education) => (
                <div className='edu-card card reveal' key={education.university}>
                  <span className='edu-date'>{education.time}</span>
                  <h3>{education.university}</h3>
                  <p>{education.degree}</p>
                  <span className='edu-grade'>{education.grade}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className='section' id='skills'>
          <div className='container'>
            <SectionHeading eyebrow='05 — Toolkit' title='Skills & technologies' />
            <div className='skills-grid'>
              {SKILL_GROUPS.map((group) => (
                <div className='skill-group card reveal' key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className='section' id='contact'>
          <div className='container'>
            <div className='contact-layout'>
              <div className='reveal'>
                <SectionHeading
                  eyebrow='06 — Contact'
                  title='Get in touch'
                  sub='Got a role, a project or a strong Lord of the Rings opinion? Drop me a line.'
                />
                <ul className='contact-links'>
                  {SOCIALS.map(({ label, href, Icon }) => (
                    <li key={label}>
                      <a href={href} target='_blank' rel='noopener noreferrer'>
                        <Icon /> {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <form className='contact-form card reveal' method='POST' onSubmit={handleSubmission}>
                <input type='hidden' name='_subject' value='Contact request from personal website' />
                <label>
                  Email
                  <input type='email' name='_replyto' placeholder='you@example.com' required />
                </label>
                <label>
                  Message
                  <textarea name='message' placeholder='Tell me about it…' required />
                </label>
                {/* {RECAPTCHA_SITE_KEY ? <Recaptcha className='captcha' ref={recaptcha} sitekey={RECAPTCHA_SITE_KEY} /> : null} */}
                <button type='submit' className='btn btn-primary'>
                  Send message
                </button>
                {status ? <p className='form-status'>{status}</p> : null}
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className='footer'>
        <div className='container'>
          <p>© {year} Ammar Khurshid</p>
          <ul className='social'>
            {SOCIALS.map(({ label, href, Icon }) => (
              <li key={label}>
                <a href={href} target='_blank' rel='noopener noreferrer' aria-label={label}>
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  );
}
