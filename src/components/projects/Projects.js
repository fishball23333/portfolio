import React from 'react'
import Table from "react-bootstrap/Table"
import './projects.css'


const Projects = () => {
  return (

    
    <div className='projects' id="projects">
      <h1>
        Projects
      </h1>
       <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Project Name</th>
          <th>Description</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='align-middle'>1</td>
          <td className='align-middle'>Home-meal website </td>
          <td>
            <p>The data of food menu and user accounts are fetched from personal database from MongoDB</p>
            <p>A session with special authorities for a logged-in customer or a clerk can be hosted</p>
            <p>User can receive an email whenever making an order, making a registration, by using SendGrid</p>
          </td>
          <td className='align-middle'>
            <a href = "http://web-demo.herokuapp.com/">http://web-demo.herokuapp.com/</a>
          </td>
        </tr>

        <tr>
          <td className='align-middle'>2</td>
          <td className='align-middle'>AWS microservices  </td>
          <td>
            <p>Developed a web hosted on ECS that can interact with different AWS services including DynamoDB and S3 for maintaining uploaded user files in different data types </p>

          </td>
          <td className='align-middle'>
            Currently unavailable due to AWS student account might get expired
          </td>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}



export default Projects