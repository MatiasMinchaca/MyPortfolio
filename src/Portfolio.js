import './Style.css';
import React, {
  lazy,
  Suspense
} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/header/Header';
import ButtonScrollTop from './components/bottonScrollTop/ButtonScrollTop';
import ButtonContact from './components/buttonContact/ButtonContact';
import Loading from './components/loading/Loading';

const Home = lazy(() => import('./routes/home/Home'));
const AboutMe = lazy(() => import('./routes/about/AboutMe'));
const Contact = lazy(() => import('./routes/contact/Contact'));
const Technologies = lazy(() => import('./routes/Technologies/Technologies'));
const NotFound = lazy(() => import('./routes/404'));
const Footer = lazy(() => import('./components/footer/Footer'));

function Portfolio() {

  window.onscroll = () => {
    if (document.documentElement.scrollTop > 200) {
      document.getElementById('buttonScrollTop').style.opacity = 1
      document.getElementById('buttonScrollTop').style.zIndex = 10
    } else {
      document.getElementById('buttonScrollTop').style.opacity = 0
      document.getElementById('buttonScrollTop').style.zIndex = -1
    }
  }

  return (
    <Router>
      <Header />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/contact" element={<Contact />}>
          </Route>
          <Route path="/technologies" element={<Technologies />}>
          </Route>
          <Route path="/aboutMe" element={<AboutMe />}>
          </Route>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Suspense>
      <ButtonContact />
      <ButtonScrollTop />
    </Router>
  );
}

export default Portfolio;
