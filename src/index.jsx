import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { MycontexteProvider } from './components/Mycontexte';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MycontexteProvider>
    <App />
    </MycontexteProvider>
  </React.StrictMode>
);
