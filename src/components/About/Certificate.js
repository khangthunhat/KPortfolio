
import React from "react";
import { Row, Col } from "react-bootstrap";

function Cirtificate() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <Col xs={4} md={2} className="tech-icons">
        
        <a
          href="https://www.credly.com/badges/df73e43c-bc6c-4683-90d7-bf2aac24f64a/public_url"
          target="_blank" 
          rel="noopener noreferrer" 
        >
          <img
            src="https://images.credly.com/size/680x680/images/d41de2b7-cbc2-47ec-bcf1-ebecbe83872f/GCC_badge_DA_1000x1000.png"
            alt="Cirtificate"
            className="img-fluid"
          />
        </a>
        <h6>Google Data Analytics Professional Certificate</h6>
      </Col>
    </Row>
  );
}

export default Cirtificate;
