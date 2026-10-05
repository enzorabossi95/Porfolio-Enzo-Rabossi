import { createBrowserRouter } from 'react-router-dom'
import { routes } from './routes.jsx'

// Vite exposes the resolved build `base` (from VITE_BASE) as BASE_URL. On
// GitHub Pages the site is served from a /Porfolio-Enzo-Rabossi/ subpath, so
// every <Link>-generated href needs that prefix — without it, navigation
// would target the domain root instead of the deployed subpath.
const base = import.meta.env.BASE_URL
const basename = base === '/' ? undefined : base.replace(/\/$/, '')

export const router = createBrowserRouter(routes, { basename })
