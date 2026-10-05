// GitHub Pages has no server-side rewrites: an unmatched path (e.g. a deep
// link to /work, or one of the legacy redirect pages after the base is
// applied) gets served dist/404.html verbatim. Making that file an exact
// copy of index.html lets the SPA boot and React Router take over client-side
// for any path, instead of showing an actual 404.
import { copyFileSync } from 'node:fs'

copyFileSync('dist/index.html', 'dist/404.html')
