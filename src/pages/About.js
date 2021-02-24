import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import background from "./images/1.jpeg";

function About() {
  return (
    <div>
      <Hero >
        <h1>Adrein Leavitt</h1>
        <h2>Sergeant Major (Special Forces, Retired), MSM, MBA</h2>
        <h2>Student, Full Flex MERN Stack</h2>
        <img src={background} alt="reaper"/>
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
             I am retired from the Army.  I started out In the Marines as a Rifleman.  
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

export default About;
