
import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import cplusplus from '../../assets/skills/c++.png'
import python from '../../assets/skills/python.png'
import javascript from "../../assets/skills/javascript.png"
import css from "../../assets/skills/css.png"
import html from "../../assets/skills/html.png"
import bash from "../../assets/skills/bash.png"
import node from "../../assets/webFramework/node.png"
import react from "../../assets/webFramework/react.png"
import postgres from "../../assets/database/postgres.png"
import oraclesql from "../../assets/database/oraclesql.png"
import mongoDB from "../../assets/database/mongoDB.png"
import aws from "../../assets/database/aws.png"
import docker from "../../assets/tools/docker.png"
import git from "../../assets/tools/git.png"
import azure from "../../assets/skills/azure.png"
import typescript from '../../assets/skills/typescript.png'
import vue from '../../assets/skills/vue.png'
import c from '../../assets/skills/c.png'
import gRPC from '../../assets/skills/gRPC.png'
import expressjs from '../../assets/skills/expressjs.png'
import './skills.css'
const Skills = () => {
  return (
    <div className='skills pt-5' id = "skills">
      <h1 >My Skills</h1>
      <Container fluid>
        <Row>
          <h2 className='subtitle'>programming languages</h2>
          {/* <Col md={3} className="d-none d-md-block px-0"></Col> */}
          <Col sm = {2} md = {2}>
            <Card className = "skills">
              <Card.Img variant = "top" alt = "c" src={c}/>
              <Card.Title>C</Card.Title>
            </Card>
          </Col>
          <Col sm = {2} md = {2}>
            <Card className = "skills">
              <Card.Img variant = "top" alt = "c++" src={cplusplus}/>
              <Card.Title>C++</Card.Title>
            </Card>
          </Col>
          <Col sm = {2} md={2}>
            <Card className = "skills">
              <Card.Img variant = "top" alt = "python" src={python}/>
              <Card.Title>Python</Card.Title>
            </Card>
          </Col>
          <Col sm = {2} md={2}>
            <Card className = "skills">
              <Card.Img variant = "top" alt = "typescript" src={typescript}/>
              <Card.Title>Typescript</Card.Title>
            </Card>
          </Col>
          <Col sm = {2} md={2}>
            <Card className = "skills">
              <Card.Img variant = "top" alt = "javascript" src={javascript}/>
              <Card.Title>Javascript</Card.Title>
            </Card>            
          </Col>

          <Col sm = {2} md={2}>
            <Card className = "skills">
              <Card.Img variant = "top" alt = "bash" src={bash}/>
              <Card.Title>bash</Card.Title>
            </Card>               
          </Col>
          {/* <Col md={3} className="d-none d-md-block px-0"></Col> */}
        </Row>
        <Row >
          <h2 className='subtitle'>Web Front End skills</h2>
          <Col md={2} sm ={2}></Col>

          <Col sm = {2} md={2}>
            <Card className = "skills">
              <Card.Img variant = "top" alt = "react" src={react}/>
              <Card.Title>React</Card.Title>
            </Card>
          </Col>
          <Col sm = {2} md={2}>
            <Card className = "skills">
              <Card.Img variant = "top" alt = "vue" src={vue}/>
              <Card.Title>Vue</Card.Title>
            </Card>
          </Col>
          <Col sm = {2} md={2}>
            <Card className = "skills">
              <Card.Img variant = "top" alt = "CSS" src={css}/>
              <Card.Title>CSS</Card.Title>
            </Card>   
          </Col>
          <Col sm = {2} md={2}>
            <Card className = "skills">
              <Card.Img variant = "top" alt = "html" src={html}/>
              <Card.Title>HTML</Card.Title>
            </Card>               
          </Col>
          <Col md={2} sm={2}></Col>
        </Row>


        <Row>
          <h2 className='subtitle'>Web Back End Skills</h2>  
          <Col md={4} sm ={4}></Col>
          <Col sm = {2} md={2}>
            <Card className = "skills">
              <Card.Img variant = "top" alt = "express" src={expressjs}/>
              <Card.Title>Express.js</Card.Title>
            </Card>
          </Col>
          <Col sm = {2} md={2}>
            <Card className = "skills">
              <Card.Img variant = "top" alt = "gRPC" src={gRPC}/>
              <Card.Title>gRPC (based on node.js)</Card.Title>
            </Card>
          </Col>
        </Row>
        <Row>
          <h2 className='subtitle'>Database</h2>         
          <Col md={2} sm = {2}></Col>           
          <Col md={2} sm = {2}>
            <Card className = "skills">
              <Card.Img variant = "top" alt = "postgres" src={postgres}/>
              <Card.Title>postgreSQL</Card.Title>
            </Card>
          </Col>
          <Col md={2} sm = {2}>
            <Card className = "skills">
              <Card.Img variant = "top" alt = "oracle" src={oraclesql}/>
              <Card.Title>oracle SQL</Card.Title>
            </Card>
          </Col>
          <Col md={2} sm = {2}>
            <Card className = "skills">
              <Card.Img variant = "top" alt = "mongoDB" src={mongoDB}/>
              <Card.Title>mongoDB</Card.Title>
            </Card>
          </Col>
          <Col md={2} sm = {2}>
            <Card className = "skills">
              <Card.Img variant = "top" alt = "aws" src={aws}/>
              <Card.Title>dynamoDB & S3</Card.Title>
            </Card>
          </Col>
          <Col md={2} sm = {2}></Col>        
        </Row>

        <Row>
          <h2 className='subtitle'>Tools</h2>  
          <Col md = {4} sm = {4}></Col>  
          <Col md={2} sm = {2}>
            <Card className = "skills">
              <Card.Img variant = "top" alt = "docker" src={docker}/>
              <Card.Title>docker</Card.Title>
            </Card>
          </Col>
          <Col md={2} sm = {2}>
            <Card className = "skills">
              <Card.Img variant = "top" alt = "git" src={git}/>
              <Card.Title>git</Card.Title>
            </Card>
          </Col>
          <Col md = {4} sm = {4}></Col>  
        </Row>
        <Row>
          <h2 className='subtitle'>Cloud Services</h2>  
          <Col md = {4} sm = {4}></Col>  
          <Col md={2} sm = {2}>
            <Card className = "skills">
              <Card.Img variant = "top" alt = "azure" src={azure}/>
              <Card.Title>azure</Card.Title>
            </Card>
          </Col>
          <Col md={2} sm = {2}>
            <Card className = "skills">
              <Card.Img variant = "top" alt = "aws" src={aws}/>
              <Card.Title>aws</Card.Title>
            </Card>
          </Col>
          <Col md = {4} sm = {4}></Col>  
        </Row>
      </Container>
    </div>
  )
}

export default Skills