// A null repo/demo means no link — never render a "#" placeholder.
// Distrito Cerveza's links stay null until real URLs are provided.
export const projects = [
  {
    id: 'distrito-cerveza',
    title: 'Distrito Cerveza',
    description:
      'E-commerce for home-brewing supplies. Built with React, Vite and Redux Toolkit, ' +
      'consuming a separate Express API (PostgreSQL via Prisma for products and orders, ' +
      'MongoDB for reviews and wishlists). Product catalog with search, sort and category ' +
      'filtering; product detail pages with reviews and ratings; registration and login with ' +
      'httpOnly-cookie sessions; cart and wishlist synced with the backend with stock ' +
      'validation; Stripe checkout in test mode; and an admin panel for product CRUD with ' +
      'Cloudinary image uploads.',
    why: "I co-founded and ran the real Distrito Cerveza shop in Argentina — this is the online store my own shop never had.",
    stack: [
      'React',
      'Vite',
      'React Router',
      'Redux Toolkit',
      'Axios',
      'Express',
      'Prisma',
      'PostgreSQL',
      'MongoDB',
      'Stripe',
    ],
    status: 'Completed',
    repo: null,
    demo: null,
    image: null,
  },
  {
    id: 'tools-dashboard',
    title: 'Tools Dashboard',
    description:
      'A web app with four integrated tools: digital clock, weather station, password ' +
      'generator and link list. Dark theme with an amber accent.',
    stack: ['HTML', 'CSS', 'JavaScript', 'APIs'],
    status: 'Completed',
    repo: 'https://github.com/enzorabossi95/project-break-dashboard1',
    demo: 'https://enzorabossi95.github.io/project-break-dashboard1/',
    image: null,
  },
]
