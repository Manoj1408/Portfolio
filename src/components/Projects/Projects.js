import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Memories from "../../Assets/Projects/Memories.png";
import CryptoTracker from "../../Assets/Projects/CryptoTracker.png";
import Podifyweb from "../../Assets/Projects/Podifyweb.png";
import TodoList from "../../Assets/Projects/TodoList.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Personal <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={6} className="project-card">
            <ProjectCard
              imgPath={Podifyweb}
              isBlog={false}
              title="Podifyweb"
              description="PodifyWeb is a fully functional podcast web application built using React.js and Firebase (BAAS). The application features a secure user login and authentication system implemented with Firebase Authentication, ensuring restricted access to authorized users. It includes a custom audio player that allows users to browse, play, and control podcast episodes effortlessly. Additionally, the platform integrates a podcast creation feature, enabling users to upload and publish their own podcast episodes. Efficient state management is achieved through Redux Toolkit, ensuring a seamless user experience throughout the application."
              ghLink="https://github.com/Manoj1408/Podcast"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={Memories}
              isBlog={false}
              title="Memories"
              description="Memories a fully functional web application built using the MERN stack where users can create a post like in Instagram. User authentication and authorization: Implemented user login and authentication features using bcrypt and JWT token, ensuring secure access to the application allowing user login using Gmail and google account. Post creation and deletion: Users can create a post and delete it later. Post liking: Users can like other users' posts."
              ghLink="https://github.com/Manoj1408/Memories"
            />
          </Col>

         

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={CryptoTracker}
              isBlog={false}
              title="CryptoTracker"
              description="CryptoTracker is a web application that allows users to log in and explore all available cryptocurrencies. The app features a bookmarking system, enabling users to easily save their preferred cryptocurrencies for quick access. Additionally, CryptoTracker includes a comparison feature, allowing users to compare up to three different cryptocurrencies side by side, providing a comprehensive analysis tool for informed decision-making."
              ghLink="https://github.com/Manoj1408/CryptoTracker"    
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={TodoList}
              isBlog={false}
              title="TodoList"
              description="The TodoList application allows users to log in and create tasks, with each task connected to a database. Users can categorize tasks into three states: Todo, In Process, and Completed. The app also features options to delete and edit tasks, providing a comprehensive tool for managing and tracking to-do items effectively."
              ghLink="https://github.com/Manoj1408/Pesto_Todo"
            />
          </Col>

         

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
