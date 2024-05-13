// App.jsx
// import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import EmailIndex from './pages/EmailIndex';
import EmailDetails from './pages/EmailDetails';

import AppHeader from './cmps/AppHeader';
import AppFooter from './cmps/AppFooter';
import NavBar from './cmps/NavBar';


import './assets/css/index.css';
// import Sent from './components/Sent';
// Import other pages/components

function App() {
  return (
    <Router>
      <section className="main-app">
        <main className="container">
          <Routes>
            <Route path="/" element={<EmailIndex />} />
            <Route path="/:mailStatus" element={<EmailIndex />} >
                <Route path={`/:mailStatus/:emailId`} element={<EmailDetails />} />
                {/* <Route path={`/:mailStatus/compose`} element={<EmailCompose />} /> */}
            </Route>
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        </main>
        {/* <AppFooter /> */}
      </section>
  </Router>
  );
}

export default App;
