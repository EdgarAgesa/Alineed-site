import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blogs from '../src/components/Blog';
import Home from '../src/components/Home';
import NavBar from './components/Navbar';
import About from './components/About';


const AppRoutes = () => {
  return (
    <Router>
        <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
