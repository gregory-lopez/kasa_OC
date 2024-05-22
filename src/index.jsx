import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router} from 'react-router-dom'
import RoutersApp from './components/RouteursApp'
import Header from './components/Header'
import Footer from './components/Footer'
import './styles/index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <RoutersApp />
      <Footer />
    </Router>
  </React.StrictMode>
);
