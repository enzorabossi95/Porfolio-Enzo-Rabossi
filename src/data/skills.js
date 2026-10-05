// Translated from the legacy site's skills list. Categories (frontend/backend/tooling/design)
// are new — the legacy list was flat — and feed the About page's stack blocks below.
export const skills = [
  {
    name: 'HTML5',
    icon: 'https://cdn.simpleicons.org/html5/ff5c00',
    level: 'advanced',
    description: 'Semantic, accessible structure for web applications.',
    tags: ['Semantics', 'Accessibility', 'SEO'],
    category: 'frontend',
  },
  {
    name: 'CSS3',
    icon: 'https://cdn.simpleicons.org/css/ff5c00',
    level: 'advanced',
    description: 'Styling, CSS variables, Flexbox, Grid and responsive design.',
    tags: ['Flexbox', 'Grid', 'Responsive'],
    category: 'frontend',
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.simpleicons.org/javascript/ff5c00',
    level: 'intermediate',
    description: 'DOM manipulation, ES6+, modules and application logic.',
    tags: ['ES6', 'DOM', 'Modules'],
    category: 'frontend',
  },
  {
    name: 'Flexbox',
    icon: 'https://cdn.simpleicons.org/css/ff5c00',
    level: 'advanced',
    description: 'One-dimensional layout system for aligning elements.',
    tags: ['Layout', 'Alignment', 'CSS'],
    category: 'frontend',
  },
  {
    name: 'CSS Grid',
    icon: 'https://cdn.simpleicons.org/css/ff5c00',
    level: 'intermediate',
    description: 'Two-dimensional layout system for complex structures.',
    tags: ['Layout', 'Grid', 'CSS'],
    category: 'frontend',
  },
  {
    name: 'Responsive Design',
    icon: 'https://cdn.simpleicons.org/css/ff5c00',
    level: 'advanced',
    description: 'Design that adapts to different screen sizes with media queries.',
    tags: ['Mobile', 'Media Queries', 'UX'],
    category: 'frontend',
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.simpleicons.org/nodedotjs/ff5c00',
    level: 'basic',
    description: 'JavaScript runtime for the server side.',
    tags: ['Backend', 'npm', 'Server'],
    category: 'backend',
  },
  {
    name: 'Postman',
    icon: 'https://cdn.simpleicons.org/postman/ff5c00',
    level: 'basic',
    description: 'Testing and documenting REST APIs.',
    tags: ['APIs', 'Testing', 'REST'],
    category: 'backend',
  },
  {
    name: 'Git',
    icon: 'https://cdn.simpleicons.org/git/ff5c00',
    level: 'intermediate',
    description: 'Version control: commits, branches and working with GitHub.',
    tags: ['GitHub', 'Commits', 'Branches'],
    category: 'tooling',
  },
  {
    name: 'GitHub',
    icon: 'https://cdn.simpleicons.org/github/ff5c00',
    level: 'intermediate',
    description: 'Remote repositories, GitHub Pages and collaboration.',
    tags: ['Repositories', 'Pages', 'Open Source'],
    category: 'tooling',
  },
  {
    name: 'npm',
    icon: 'https://cdn.simpleicons.org/npm/ff5c00',
    level: 'basic',
    description: 'Package manager for installing and managing dependencies.',
    tags: ['Packages', 'Dependencies', 'CLI'],
    category: 'tooling',
  },
  {
    name: 'Markdown',
    icon: 'https://cdn.simpleicons.org/markdown/ff5c00',
    level: 'advanced',
    description: 'Markup language for documentation and README files.',
    tags: ['Documentation', 'README', 'GitHub'],
    category: 'tooling',
  },
  {
    name: 'Cloudinary',
    icon: 'https://cdn.simpleicons.org/cloudinary/ff5c00',
    level: 'basic',
    description: 'Image management and optimization in the cloud.',
    tags: ['Images', 'Cloud', 'CDN'],
    category: 'tooling',
  },
  {
    name: 'Chrome DevTools',
    icon: 'https://cdn.simpleicons.org/googlechrome/ff5c00',
    level: 'intermediate',
    description: 'Browser tools for debugging and optimizing web apps.',
    tags: ['Debug', 'Performance', 'Inspector'],
    category: 'tooling',
  },
  {
    name: 'Figma',
    icon: 'https://cdn.simpleicons.org/figma/ff5c00',
    level: 'basic',
    description: 'Interface design and prototyping for web projects.',
    tags: ['UI', 'Prototyping', 'Design'],
    category: 'design',
  },
]

// Short summary blocks for the About page (Frontend/Backend/Data/Tooling, numbered 01-04 in
// the reference's Design/Development style). Draft copy — confirm wording before shipping.
export const stackBlocks = [
  {
    id: 'frontend',
    title: 'Frontend',
    paragraph:
      'HTML, CSS and JavaScript, from semantic markup to responsive layouts with Flexbox ' +
      'and Grid. Currently building interfaces in React.',
  },
  {
    id: 'backend',
    title: 'Backend',
    paragraph: 'Node.js and Express, with REST APIs tested and documented in Postman.',
  },
  {
    id: 'data',
    title: 'Data',
    paragraph:
      'Relational schemas with PostgreSQL and Prisma, plus MongoDB for less structured ' +
      'data — both from building the Distrito Cerveza backend.',
  },
  {
    id: 'tooling',
    title: 'Tooling',
    paragraph:
      'Git and GitHub for version control, npm for dependencies, Chrome DevTools for ' +
      'debugging, and Figma for interface design.',
  },
]
