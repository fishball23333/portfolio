import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import me from '../../assets/me.jpg'
import './about.css'
const About = () => {
  return (
    <>
    <Container  fluid className="bg-secondary">
      <Row>
        {/* <Col className = " col1" md={10} xs={11}> */}
        <Col md={6} sm={6} className="d-none d-sm-block px-0">
          <Image fluid rounded={true} src={me} alt="myself" className='myself'/>
        </Col>
        <Col md={6} sm={6} >        
          <h1>About</h1>
          <p>Hi visitor, my name is Binwei Yu, currently a 2nd year Seneca student studying Computer Programming & Analysis. </p>
          <p>In this two year study period, I have explored and mastered many programming languages and skills, and those skills can be found in the specific section in the page below. </p>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default About