import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import background from "./images/1.jpeg";

function Homepage() {
  return (
    <div>
      <Hero backgroundImage={background}>
        <h1>Adrein Leavitt</h1>
        <h2>Sergeant Major (Special Forces, Retired), MSM, MBA</h2>
        <h2>Student, Full Flex MERN Stack</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome My Portfolio Page!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              So there I was. Retired after 26 years of being an action figure.  But rather than just sit around, I figured there was something else I could do.  The only thing is that I just didn't want to work for anyone else.  So I looked at how to be my own boss.  Coding is the answer.  So I turned a new page and started Full Flex Coding Boot Camp.
            </p>
            <p>
              Hit the "Portfolio" button to see some of my entry level coding assignments.
            </p>
            <p>
              To Learn more about me and my professional accomplishments hit the "About" button.  This will show you my professional education, my civilian education, hobbies, and who I am.  I have a resume there for you to look at as well.
            </p>
            <p>
              I wrote a book.  To get information about my book hit the "Book" button.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Homepage;