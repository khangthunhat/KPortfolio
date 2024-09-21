import React from "react";
import { Container, Row } from "react-bootstrap";
import Behance from "./Behance";

import Particle from "../Particle";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="photography-section">
        <Particle />
        <Container>
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <h1 className="project-heading">
              My <strong className="purple">Photography project</strong>
            </h1>
            <p style={{ color: "white" }}>
              Here are a few projects I've worked on recently.
            </p>
            <Behance />
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default ResumeNew;
