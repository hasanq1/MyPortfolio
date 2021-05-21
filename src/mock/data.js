import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Hasan Qureshi', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my online portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Hasan Qureshi',
  subtitle: 'I am a rising Software Engineer/ Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'IMG_0052.JPG',
  paragraphOne:
    "Currently a senior at the University of Houston. I am studying to earn my Bachelor's in Computer Science with focus on software engineering, networking, and cyber security. Programming and web dev is my passion. macOS is my favorite operating system and pretty much anything that’s  . I enjoy meeting new people to collaborate with and am always on the lookout for new projects to work on.",
  paragraphTwo:
    'My philosophy is to never stop learning; so naturally, I enjoy stepping outside of my comfort zone to learn new skills - even if it’s not tech-related. I usually travel from my former residence in Brooklyn, NY to my current one in Houston, Texas, and am open to opportunities in either city. Some of my aspersions are to be an Officer in the United States Air Force, and eventually start my own tech start-up.',

  paragraphThree:
    '"Favorite quotes: “Stay hungry, stay foolish” “Have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary.” “Your time is limited, so don’t waste it living someone else’s life.” " Amat Victoria Curam ""',
  // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'coding.jpeg',
    title: 'Programming',
    info:
      "I love coding. I' written many programs in class, and also have some projects. I also love web development and enjoy working with the react library for the frontend and node for the backend. My favorite stack to work with is the MERN stack",
    info2:
      'My favorite operating system is macOS because of its versatility and security. The creativity never stops for me on macOS-- afterall this website was created on my MacBook Pro. Here are some other projects I have created on my MacBook.',
    url: '',
    repo: 'https://github.com/hasanq1', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'nyc.jpg',
    title: 'Photograpy',
    info:
      "I enjoy photography too, I have a collection of still lifes that I use as my personal wallpapaers. I havent posted many but I just love metropolitan scenes and capturing various moments in time, it is as they say 'we take pictures to go back in time and revisit old moments'. Here is one photo I've taken with my iPhone's amazing camera which I also have as my wallpaper ",
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Traveling',
    info:
      'I love traveling to new cities in the US. I mainly travel back and forth from my residence in NYC and Houston. Ive also been to 7/50 states. Only 43 left to go, and eventually Mexico and South America as well. ',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Lets colllaborate!',
  btn: 'Email me',
  email: 'h_q75@yahoo.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/morningstar6_/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/hasanaq',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/hasanq1',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
