import { Layout } from '../components/Layout/Layout.jsx'
import { HomePage } from '../pages/HomePage/HomePage.jsx'
import { WorkPage } from '../pages/WorkPage/WorkPage.jsx'
import { AboutPage } from '../pages/AboutPage/AboutPage.jsx'
import { NotesPage } from '../pages/NotesPage/NotesPage.jsx'
import { CheatsheetPage } from '../pages/CheatsheetPage/CheatsheetPage.jsx'
import { ResourcesPage } from '../pages/ResourcesPage/ResourcesPage.jsx'
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage.jsx'

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'work', element: <WorkPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'notes', element: <NotesPage /> },
      { path: 'notes/:slug', element: <CheatsheetPage /> },
      { path: 'resources', element: <ResourcesPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]
