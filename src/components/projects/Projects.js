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
          <td className='align-middle'>File Storage and Converter</td>
          <td>
            <p> •	Implemented unit test, integration test and CI/CD pipeline throughout software development life cycle Utilized multiple AWS services (e.g. Cognito, EC2, ECS, DynamoDB, S3) and microservices architecture </p>
            <p> •	Handled users authorization and authentication </p>
            <p> •	Developed REST APIs for users to add/read/update/delete large files to databases</p>
            <p> •	Allowed users to convert specific file types to other supported types </p>
            <p> •	Implemented unit test, integration test and CI/CD pipeline throughout software development life cycle</p>

          </td>
          <td className='align-middle'>
            Currently unavailable due to AWS student account is expired
          </td>
        
        </tr>
        <tr>

          <td className='align-middle'>2</td>
          <td className='align-middle'>Home Meal Website</td>
          <td>
            <p> •	Provided functionalities for both users and admins to sign up and log in/out, only admins to add/update/delete menu, and users to make orders. </p>
            <p> •	Sent registration and order confirmation notification emails using SendGrid APIs </p>
            <p> •	Stored menu and user management data in MongoDB</p>
          </td>
          <td className='align-middle'>
            Currently unavailable due to AWS student account is expired
          </td>
        </tr>

        <tr>
          <td className='align-middle'>3</td>
          <td className='align-middle'>Kanban Board</td>
          <td>
             <p> • Implemented an simple kanban board web app based on vite which provides the functionality to drag an order to the different stage </p>
             <p> • Allowed users to order and check history items from the local database served by "JSON server" </p>
          </td>
          <td className='align-middle'>
            repository link: <a href="https://github.com/fishball23333/viteLearning">https://github.com/fishball23333/viteLearning</a>
          </td>
        </tr>

        <tr>
          <td className='align-middle'>4</td>
          <td className='align-middle'>PERN stack simple demonstration</td>
          <td>
             <p> • Implemented an simple web app based on PERN stack with the ability to perform the basic CRUD operations</p>
          </td>
          <td className='align-middle'>
            repository link: <a href="https://github.com/fishball23333/pern_learning">https://github.com/fishball23333/pern_learning</a>
          </td>
        </tr>

      </tbody>
    </Table>
    </div>
  )
}



export default Projects
