import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import GoDoc from "../../Assets/Projects/GoDoc.png";
import faceAttendance from "../../Assets/Projects/FaceAtten.png";
import supplyChange from "../../Assets/Projects/SupplyChange.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GoDoc}
              isBlog={false}
              title="GoDoc"
              description="GoDoc provides access to a vast collection of courses and resources across various fields. Learn easily, share knowledge without limits, and join the community to build a future of knowledge!"
              ghLink="https://github.com/khangthunhat/LearningSystem.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={faceAttendance}
              isBlog={false}
              title="Face Attendance"
              description="This system automates attendance tracking using facial recognition. Built with Python and Flask, it captures faces via webcam, processes them with OpenCV, and tracks attendance in real-time through a web interface."
              ghLink="https://github.com/khangthunhat/face-attendance-system.git"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={supplyChange}
              isBlog={false}
              title="Supply Change Analytics"
              description="This project uses Power BI to analyze and visualize supply chain data, offering real-time insights into inventory, supplier performance, and delivery. Interactive dashboards help optimize operations and improve decision-making."
              ghLink="https://github.com/khangthunhat/Supply-Chain-PowerBI-Analytics.git"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
