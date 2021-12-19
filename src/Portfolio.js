import './Style.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import CurriculumVitae from './components/CurriculumVitae';
import Contact from './components/Contact';
import Header from './components/header/Header';
import NotFound from './components/404';
import Proyects from './components/Proyects';

function Portfolio() {
  return (
    <Router>
      <>
        <Header />
      <Routes>
          <Route path="/contact" element={<Contact />}>
          </Route>
          <Route path="/proyects" element={<Proyects />}>
          </Route>
          <Route path="/cv" element={<CurriculumVitae />}>
          </Route>
          <Route path="/aboutMe" element={<AboutMe />}>
          </Route>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    </Router>
  );
}

export default Portfolio;
