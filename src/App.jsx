import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Menu from './components/Menu';
import About from './components/About';
import Book from './components/Book';
import ScrollToTop from './components/ScrollToTop'

import "./styles/main.css";
import "./styles/media-queries.css";



const App = () => {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/menu" element={<Menu />}/>
        <Route path="/book" element={<Book />}/>
      </Routes> 
      <Footer />
    </Router>
  )
}

export default App;
