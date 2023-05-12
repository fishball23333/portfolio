import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import me from '../../assets/me.jpg'
import './about.css'
const About = () => {
  return (
    <div id = "About">
    <Container  fluid className="bg-secondary">
      <Row>
        {/* <Col className = " col1" md={10} xs={11}> */}
        <Col md={6} sm = {12}className="px-0">
          <Image fluid rounded={true} src={me} alt="myself" className='myself'/>
        </Col>
        <Col md={6} sm={12} >        
          <h1>About</h1>
          <h4>Hi, my name is Binwei Yu, a new graduate of Computer Programming program in Seneca College. </h4>
          <h4>In my previous two year study period, I have explored and mastered many programming languages and skills, and those skills can be found in the specific section in the page below. </h4>
          <h4>I have strong desire and passion for improving and learning more on programming-related skills, and I'm really addicted to coding throughout my recent two years of study period and I love solving programming puzzles all day long in front of my computer. </h4>
          <h4>I'm looking forward to becoming a professional software developer, and I believe my hard work in this field will get paid off one day, and I will be the useful contributor for the company if I have a chance to get hired. </h4>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default About