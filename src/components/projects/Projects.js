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