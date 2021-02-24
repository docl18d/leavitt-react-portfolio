import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Book() {
  return (
    <div>
      <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
        <h1>Pupster</h1>
        <h2>They're the Good Boys and Girls</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To Pupster!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
               mattis.
            </p>
            <p>
               nibh.
            </p>
            <p>
              
              massa.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Book;