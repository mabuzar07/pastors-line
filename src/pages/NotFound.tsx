import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const NotFoundPage = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6} className="text-center">
          <h1>404 - Page Not Found</h1>
          <p>The page you are looking for does not exist.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFoundPage;
