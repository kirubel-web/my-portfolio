export const profile = {
  name: 'Kirubel Alemu',
  firstName: 'Kirubel',
  role: 'Software Developer',
  photo: '/images/profile.webp',
  resume: 'https://drive.google.com/file/d/1Bok0tqbh5pwe77zsZasGPtrOD7XBqaKB/view?usp=sharing',
  email: 'kirubelalemu119@gmail.com',
  phone: '+251 968078877',
}

export const socials = [
  { label: 'GitHub', icon: 'github', href: 'https://github.com/kirubel-web' },
  { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/kirubel-alemu--' },
  { label: 'X', icon: 'x', href: 'https://x.com/code_japi' },
  { label: 'Telegram', icon: 'telegram', href: 'https://t.me/code_japi' },
  { label: 'Medium', icon: 'medium', href: 'https://code-japi.medium.com' },
  { label: 'DEV', icon: 'dev', href: 'https://dev.to/code_japi' },
]

export const skills = [
  { group: 'Languages', items: ['Python', 'JavaScript', 'Java', 'PHP', 'SQL'] },
  { group: 'Frameworks', items: ['Django', 'Django REST Framework', 'Flask', 'React', 'JavaFX'] },
  { group: 'Data & automation', items: ['MySQL', 'Pandas', 'Selenium', 'BeautifulSoup'] },
  { group: 'Web', items: ['HTML5', 'CSS', 'jQuery', 'REST APIs'] },
]

export const categories = ['All', 'Web', 'Backend', 'Automation', 'Desktop', 'Games']

export const projects = [
  {
    title: 'AirBnB Clone',
    description:
      'A full-stack web application that mimics the core functionality of AirBnB: users can search places and book a stay.',
    image: '/images/hbnb_logo.webp',
    tags: ['Flask', 'jQuery', 'MySQL', 'HTML5', 'CSS'],
    category: 'Web',
    link: 'https://github.com/kirubel-web/AirBnB_clone_v4',
  },
  {
    title: 'Student Management System',
    description:
      'A Java desktop app for managing student records: add, update, delete and search students.',
    image: '/images/dashboard.webp',
    tags: ['Java', 'JavaFX', 'SceneBuilder'],
    category: 'Desktop',
    link: 'https://github.com/kirubel-web/Student_Managment',
  },
  {
    title: 'Yegna Bus Booking',
    description:
      'An online booking system that lets travellers self-book seats and pay through the website.',
    image: '/images/yegna.webp',
    tags: ['PHP', 'HTML5', 'CSS'],
    category: 'Web',
    link: 'https://github.com/kirubel-web/Yegana-Frontend',
  },
  {
    title: 'Blog API',
    description:
      'A Django REST Framework API for a blog, exposing endpoints for full CRUD operations.',
    image: '/images/blog.webp',
    tags: ['Python', 'Django', 'Django REST Framework'],
    category: 'Backend',
    link: 'https://github.com/kirubel-web/blogapi',
  },
  {
    title: 'Space News',
    description:
      'A React app that pulls from a space news API to show the latest trending space stories.',
    image: '/images/spacenews.webp',
    tags: ['React', 'JavaScript', 'HTML5'],
    category: 'Web',
    link: 'https://github.com/kirubel-web/Space-News-React',
  },
  {
    title: 'Audible Bestsellers Scraper',
    description:
      'A Python script that scrapes book titles, authors and lengths from Audible and saves them to CSV.',
    image: '/images/audible.webp',
    tags: ['Python', 'Selenium', 'Pandas'],
    category: 'Automation',
    link: 'https://github.com/kirubel-web/audible-scraper',
  },
  {
    title: 'Movie Transcript Scraper',
    description:
      'Crawls a script site, collects links to every movie transcript and saves each one to a text file.',
    image: '/images/movietranscript.webp',
    tags: ['Python', 'BeautifulSoup'],
    category: 'Automation',
    link: 'https://github.com/kirubel-web/ScriptMiner',
  },
  {
    title: 'Calculator',
    description: 'A small Django web app I built to learn the framework end to end.',
    image: '/images/calculator.webp',
    tags: ['Python', 'Django'],
    category: 'Web',
    link: 'https://github.com/kirubel-web/calculator-django',
  },
  {
    title: 'Dice Game',
    description: 'A two-player dice game in vanilla JavaScript, built to practise DOM manipulation.',
    image: '/images/dice.webp',
    tags: ['JavaScript', 'HTML5', 'CSS'],
    category: 'Games',
    link: 'https://github.com/kirubel-web/Dice_Game',
  },
  {
    title: 'Guess My Number',
    description: 'A number-guessing game with scores and high scores, written in vanilla JavaScript.',
    image: '/images/guess.webp',
    tags: ['JavaScript', 'HTML5', 'CSS'],
    category: 'Games',
    link: 'https://github.com/kirubel-web/Guess_my_num',
  },
]
