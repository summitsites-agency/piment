import React from 'react'
import ReactDOM from 'react-dom/client'

// Fonts are installed with npm, so they load instantly (no Google Fonts request).
import '@fontsource-variable/fraunces'
import '@fontsource-variable/instrument-sans'
import '@fontsource/space-mono/400.css'
import '@fontsource/space-mono/700.css'

import './index.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
