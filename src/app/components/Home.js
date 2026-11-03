import ContactForm from './ContactForm';

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/zorgonide' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ammar-khurshid-757140177/' },
  { label: 'Instagram', href: 'https://www.instagram.com/ammar.khurshid/' },
];

const Projects = [
  {
    title: 'MovieFlix',
    description: 'Built out of a need to stop endless scrolling through Netflix. Log in and get customized movie recommendations, and leave reviews.',
    link: 'https://movieflix-next-delta.vercel.app/',
  },
  {
    title: 'Travelo',
    description:
      'A user could rent and return bikes from different locations around the city, and super users could manage operations (charging and repairing status) and revenue (per user and per vehicle revenue).',
    link: 'https://github.com/zorgonide/travelo-travel-app',
  },
  {
    title: 'Four-wheeled bot',
    description:
      'Streams video from a Raspberry Pi bot to a host computer in a master-slave configuration to perform obstacle detection and drive the bot with commands sent from the master.',
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
    url: 'https://www.sainsburys.co.uk',
    time: 'Aug 2024 — Present',
    role: 'Software Engineer',
    description: "Product analytics across Sainsbury's, Argos, Habitat and TU Clothing.",
  },
  {
    company: 'Reply',
    url: 'https://www.reply.com',
    time: 'Sep 2023 — Aug 2024',
    role: 'Consultant',
    description: 'Analytics developer working with Adobe Experience Cloud.',
  },
  {
    company: 'Adobe',
    url: 'https://www.adobe.com',
    time: 'Feb 2022 — Aug 2022',
    role: 'Senior Technical Product Consultant',
    description: 'Helped clients implement, optimise and troubleshoot web implementations for Adobe Analytics.',
  },
  {
    company: 'ICICI Lombard',
    url: 'https://www.icicilombard.com',
    time: 'Feb 2021 — Feb 2022',
    role: 'Developer',
    description: "Built Angular web apps for health insurance at India's largest private insurer.",
  },
  {
    company: 'Viga Entertainment Studio',
    time: 'Jul 2020 — Dec 2020',
    role: 'Frontend Intern',
    description: 'Developed a React web app to track sequences and shots in movie production.',
  },
];


export default function Home() {
  return (
    <main className='page'>
      <header>
        <h1>Ammar Khurshid</h1>
        <p className='muted'>Fullstack web developer</p>
      </header>

      <p className='intro'>
        I build fast, accessible interfaces with React and Next.js. Currently working on product analytics at Sainsbury&apos;s. I also care about
        design systems and making analytics data actually useful.
      </p>

      <section aria-label='Experience'>
        <ul className='rows'>
          {Experience.map((job) => (
            <li key={job.company}>
              <span className='muted'>{job.time}</span>
              <div>
                <p>
                  {job.role} at {job.url ? <a href={job.url} target='_blank' rel='noopener noreferrer'>{job.company}</a> : job.company}
                </p>
                <p className='muted'>{job.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Projects</h2>
        <ul className='rows'>
          {Projects.map((project) => (
            <li key={project.title}>
              <span />
              <div>
                <p>
                  <a href={project.link} target='_blank' rel='noopener noreferrer'>
                    {project.title}
                  </a>
                </p>
                <p className='muted'>{project.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Education</h2>
        <ul className='rows'>
          {Education.map((education) => (
            <li key={education.university}>
              <span className='muted'>{education.time}</span>
              <div>
                <p>{education.degree}</p>
                <p className='muted'>
                  {education.university} · {education.grade}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section id='contact'>
        <h2>Contact</h2>
        <p>
          Find me on{' '}
          {SOCIALS.map(({ label, href }, i) => (
            <span key={label}>
              {i > 0 ? (i === SOCIALS.length - 1 ? ' or ' : ', ') : ''}
              <a href={href} target='_blank' rel='noopener noreferrer'>
                {label}
              </a>
            </span>
          ))}
          , or <a href='/Ammar_Resume.pdf'>read my resume</a>.
        </p>
        <ContactForm />
      </section>
    </main>
  );
}
