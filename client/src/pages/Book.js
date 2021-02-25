import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import background from "./images/CC.png";
import book from "./images/Chronos.pdf"

function Book() {
  return (
    <div>
      <Hero>
        <img src={background} style={{ width: 800, height: 500 }} alt="reaper" />
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1 style={{ textAlign: "center" }}>Chronos Curvature</h1>
            <h2 style={{ textAlign: "center" }}>By Adrein Leavitt</h2>
          </Col>
        </Row>
        <Row>
          <Col size="md-5">
            <h5>
              So.  I wrote a book and finished it a few months ago.  I have included chapter 1 for you to read.  If you like it I have included the Amazon link.
          </h5>
            <a href={book} target="blank">
              <i class="fas fa-envelope-open-text"></i>Chronos Curvature</a>
          </Col>
          <Col size="md-5">
            <a href="https://www.amazon.com/Chronos-Curvature-2-Book-Series/dp/B08L83XKW3/ref=sr_1_3?dchild=1&keywords=Chronos+Curvature&qid=1614216937&sr=8-3"  target="blank">
              Amazon Link</a>
             
            <h5>
              If you liked Chapter 1 you  can click on the Amazon Link.  Amazon only allows you to publish 500 pages through them so I had to make two parts.  The adventure begins with part one.
          </h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Book;