// rafce

import React from 'react'
import './index.css'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'
import Testimonials from './components/testimonials/Testimonials'
import "bootstrap/dist/css/bootstrap.min.css"
const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
    </>
  )
}

export default App