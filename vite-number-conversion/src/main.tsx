import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { HashRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>  //这个玩意会导致useeffect空数组，执行两次
    <HashRouter>
    <App />
    </HashRouter>
  // </React.StrictMode>
)
