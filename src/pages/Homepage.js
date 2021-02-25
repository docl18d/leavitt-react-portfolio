import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import resume from "./images/leavitt.pdf";
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
            <h1 style={{ textAlign: "center" }}>Welcome My Portfolio Page!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              So there I was. Retired after 32 years of being an action figure.  But rather than just sit around, I figured there was something else I could do.  The only thing is that I just didn't want to work for anyone else.  So I looked at how to be my own boss.  Coding is the answer.  So I turned a new page and started Full Flex Coding Boot Camp.
            </p>
            <p>
              Hit the <strong>"Portfolio"</strong> button to see some of my entry level coding assignments.
            </p>
            <p>
              To Learn more about me and my professional accomplishments hit the <strong>"About"</strong> button.  This will show you my professional education, my civilian education, hobbies, and who I am.  I have a resume there for you to look at as well.
            </p>
            <p>
              I wrote a book.  To get information about my book hit the <strong>"Book"</strong> button.
            </p>
          </Col>
        </Row>
        <Row>
          <Col size="md-3">
            <a href={resume} target="blank">
              <i class="fas fa-envelope-open-text"></i>Resume</a>
          </Col>
          <Col size="md-3">
            <a href="https://www.linkedin.com/in/adrein-leavitt-a1b43617/" target="blank">
              Linkedin
              </a>
              </Col>
            <Col size="md-3">
            <a href="https://github.com/docl18d" target="blank">
              GitHub
              </a>
            </Col>
            <Col size="md-3">
              <a href="mailto:adrein.leavitt@gmail.com" target="blank">
              Email
                </a>
            </Col>
          </Row>
      </Container>
    </div >
  );
}

export default Homepage;