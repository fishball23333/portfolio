// rafce

import React from 'react'
import './App.css'
import MyNav from './components/nav/Nav'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Education from './components/education/Education'
import Experience from './components/experience/Experience'
import 'bootstrap/dist/css/bootstrap.min.css';

import "react-vertical-timeline-component/style.min.css"

const App = () => {
  return (
    <>
        <MyNav />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Contact />
    </>
  )
}

export default App