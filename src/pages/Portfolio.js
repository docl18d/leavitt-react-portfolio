import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import ts from "./images/ts.png";
import calm from "./images/calm.png";
import camp from "./images/camp.png";
import background from "./images/beach.jpg";
import directory from "./images/directory.png";
import construction from "./images/construction.jpg";

function Portfolio() {
  return (
    <div>
      <Hero backgroundImage={background}>
        <h1>Portfolios</h1>
        <h2>It has been a challanging road...but here we are</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1 style={{ textAlign: "center" }}>These are Pretty Basic Programs using HTML, CSS, JS, JQ, and Express</h1>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row m={2}>
          <Col size="md-4">
            <h5 class="center">Group Project, National Parks Outdoor Camping Assistant</h5>
            <img src={camp} style={{ width: 250, height: 195 }} alt="camp" />
            <p class="light center ">Our national Parks are a great place to forge memories and grow friendships. Here you can find information about the parks such as hours of operation, fees, and if they are pet friendly. Additionally, we have provided a place for you to check the weather as well. Click on 'Plan Your Trip' to find information about a park. You can search by state. If you need help trying to figure out what to bring click on the prep lists. If you would like to see our favorites, click on the gallery link</p>
            <div class="center">
              <a href="https://chloewils.github.io/weatherNationalParks/"
                class="center btn waves-effect waves-green" type="submit" name="action"
                target="blank">Web Link
                  </a>
            </div>
          </Col>
          <Col size="md-4">
            <h5 class="center">Horiseon Demo Page</h5>
            <img src={calm} style={{ width: 250, height: 195 }} alt="calm" />
            <p class="light center ">This was an example of a code refactor assignment.  The code did not work and required visual repairs.</p>
            <div class="center">
              <a href=" https://docl18d.github.io/horiseon/"
                class="center btn waves-effect waves-green" type="submit" name="action"
                target="blank">Web Link
                  </a>
            </div>
          </Col>
          <Col size="md-4">
            <div class="icon-block">
              <h5 class="center">Password Generator</h5>
              <img src={ts} style={{ width: 250, height: 195 }} alt="ts" />
              <p class="light center ">Create an application that generates a random password based on user-selected criteria.
                            This app will run in the browser ...</p>
              <div class="center">
                <a href="https://docl18d.github.io/leavittPasswordGenerator/"
                  class="center btn waves-effect waves-green" type="submit" name="action"
                  target="blank">Web Link
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Hero>
        <Row>
        <Col size="md-12">
          <h3 style={{ textAlign: "center" }}>I am placing my more advanced apps here as I finish them.  These use React JS with databases and are deployed using Heroku</h3>
       </Col>
       <Col size="md-5">
          <div class="center">
          <a href="https://leavitt-emp-dir.herokuapp.com/"
            class="center btn waves-effect waves-green" type="submit" name="action"
            target="blank">Employee Directory Web Link
                </a>
                <p>
               This is an employee directory created with with React. An employee or manager would benefit greatly from being able to view non-sensitive data about other employees especially if it can filter by an employees name.
                </p>
          <img className="image-responsive" src={directory} style={{ width: 250, height: 195 }} alt="ts" />
          <div class="icon-block">
            <h5 class="center">Employee Directory</h5>
            
          </div>
        </div>
        </Col>
        <Col size="md-5">
          <div class="center">
          <a href="https://leavitt-emp-dir.herokuapp.com/"
            class="center btn waves-effect waves-green" type="submit" name="action"
            target="blank">
              </a>
              <p>
              Work In Progres
              </p>
          <img src={construction} style={{ width: 250, height: 195 }} alt="ts" />
          <div class="icon-block">
            <h5 class="center">Apps in progress</h5>
            <p class="light center ">These are still being written and will be added once they are done.</p>
          </div>
        </div>
        </Col>
        </Row>
      </Hero>
    </div >
  );
}

export default Portfolio;