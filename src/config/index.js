module.exports = {
  siteTitle: 'Saket Mahajan | Software Engineer',
  siteDescription:
    'Im pursuing Masters in Computer Science from Santa Clara University. My goal is to grow as a person and as a professional, every day.',
  siteKeywords:
    'Saket Mahajan, Saket, Mahajan, mahajan.saket96, smahajan, mahajansaket, software engineer, front-end engineer, web developer, new grad, santa clara',
  siteUrl: 'https://smahajan.com',
  siteLanguage: 'en_US',
  // googleAnalyticsID: 'UA-45666519-2',
  // googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Saket Mahajan',
  location: 'Santa Clara, CA',
  email: 'smahajan@scu.edu',
  github: 'https://github.com/mahajansaket',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/mahajansaket',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/saketmahajan/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/mahajansaket',
    },
    {
      name: 'StackOverflow',
      url: 'https://stackoverflow.com/users/11246120/killme',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
