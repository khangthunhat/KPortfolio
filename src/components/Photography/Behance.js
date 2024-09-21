import React from "react";
import { Row, Col } from "react-bootstrap";

function Behance() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "80px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <iframe
          title="Behance Project Embed"
          src="https://www.behance.net/embed/project/194789535?ilo0=1"
          height="310"
          width="400"
          allowfullscreen
          lazyload
          frameborder="0"
          allow="clipboard-write"
          refererPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <iframe
          title="Behance Project Embed"
          src="https://www.behance.net/embed/project/208193371?ilo0=1"
          height="310"
          width="400"
          allowfullscreen
          lazyload
          frameborder="0"
          allow="clipboard-write"
          refererPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </Col>
    </Row>
  );
}

export default Behance;
