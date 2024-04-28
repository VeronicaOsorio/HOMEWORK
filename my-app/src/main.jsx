import React from "react";
import ReatDOM from 'react-dom/client'

import App from './App.jsx'
import './index.css'
import './App.css'

ReatDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
)