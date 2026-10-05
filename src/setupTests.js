import '@testing-library/jest-dom/vitest'

// jsdom doesn't implement scrollTo; useScrollToHash calls it on every route render.
window.scrollTo = () => {}
