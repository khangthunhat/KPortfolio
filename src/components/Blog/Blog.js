import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import commingSoon from "../../Assets/working.svg"; 

function Blog() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "60px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Comming <strong className="purple">Soon</strong>
            </h1>
            <img
              width="100%"
              height="100"
              src={commingSoon}
              alt="home pic"
              className="img-fluid"
              style={{ maxHeight: "400px" }}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Blog;
