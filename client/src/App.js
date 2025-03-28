import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import BenevolentForm from './components/form/formLoans';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import GoogleLogin from './components/auth/GoogleLogin';
import PrivacyPolicy from './components/privacyPolicy/privacyPolicy';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/form" element={<BenevolentForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/google-login" element={<GoogleLogin />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;