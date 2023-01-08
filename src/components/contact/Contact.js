import React from 'react'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import './contact.css'

const Contact = () => {
  return (
    <div className='contact' id ="contact">
      <h1 className>Contact</h1>
      <a href="https://www.linkedin.com/in/binwei-yu">
        <FontAwesomeIcon icon = {faLinkedin} className="icon fa-3x"></FontAwesomeIcon>
      </a>
      <a href="mailto:markyu132@gmail.com">
        <FontAwesomeIcon icon = {faEnvelope} className="icon fa-3x"></FontAwesomeIcon>
      </a>      
    </div>
  )
}

export default Contact