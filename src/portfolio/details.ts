export const Details = {
  seo: {
    title: 'John Coder',
    description: 'John Coder - Full-stack software engineer with many years of experience building web applications',
  },
  about: {
    title: 'John Coder',
    subtitle: 'Full-stack software engineer',
    summary: 'I am a full-stack software engineer with many years of experience building web applications.',
    description: `
      I am a creative and detail-oriented web developer who loves building sleek, responsive websites that strike the perfect
      balance between form and function. I have a strong foundation in HTML, CSS, and JavaScript, and I am passionate about
      crafting user-friendly interfaces and dynamic web experiences. Whether I am putting together a personal portfolio or
      working on a full-scale web app, I approach every project with curiosity, clean code, and a problem-solving mindset.
      <br /><br />
      I thrive in fast-paced environments where innovation and collaboration are key. I am driven by a desire to
      make the web more accessible and engaging and I am always excited to take on the next challenge. When I am not coding, you will
      find me working on my pixel art design or exploring the many wonderful local, state, and national parks.
    `,
    footer: `
      This portfolio was developed using
      <a href="https://react.dev/" target="_blank" class="highlight">React</a>,
      <a href="https://nextjs.org/" target="_blank" class="highlight">Next.js</a>,
      <a href="https://tailwindcss.com/" target="_blank" class="highlight">Tailwind CSS</a>,
      and <a href="https://daisyui.com/" target="_blank" class="highlight">daisyUI</a>.
    `,
  },
  socialLinks: [
    {
      name: 'X',
      link: 'https://www.x.com/',
      icon: '/images/x-icon.png',
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/',
      icon: '/images/linkedin-icon.png',
    },
    {
      name: 'GitHub',
      link: 'https://www.github.com/',
      icon: '/images/github-icon.png',
    },
  ],
  projects: [
    {
      name: 'Controller App',
      description: 'This app will allow you to use your smartphone as a game controller.',
      icon: '/images/controller-logo.png',
      links: [
        {
          link: 'https://apps.apple.com/',
          icon: '/images/app-store-badge.png',
          width: 100,
        },
        {
          link: 'https://play.google.com/',
          icon: '/images/google-play-badge.png',
          width: 113,
        },
      ],
    },
    {
      name: 'Camera App',
      description: 'This app will allow you take photos and edit them with many customization options.',
      icon: '/images/camera-logo.png',
      links: [
        {
          link: 'https://apps.apple.com/',
          icon: '/images/app-store-badge.png',
          width: 100,
        },
        {
          link: 'https://play.google.com/',
          icon: '/images/google-play-badge.png',
          width: 113,
        },
      ],
    },
  ],
  skills: [
    'JavaScript, Node.js, TypeScript, HTML5, CSS3',
    'MongoDB, Redis',
    'Adobe Photoshop, Adobe Illustrator',
    'macOS, Windows, Linux',
  ],
  experiences: [
    {
      company: 'General Company',
      title: 'Senior Software Engineer',
      date: 'Jan 2024 - Present',
      location: 'New York, NY',
      website: 'https://www.example.com/',
      logo: '/images/general-company-logo.png',
    },
    {
      company: 'Software Leaders',
      title: 'Software Engineer',
      date: 'Mar 2021 - Dec 2023',
      location: 'New York, NY',
      website: 'https://www.example.com/',
      logo: '/images/software-leaders-logo.png',
    },
  ],
};
