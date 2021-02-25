import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import about from "./images/2.jpg";
import insignia from "./images/ssi.png";
import campbell from "./images/campbell.jpg";
import amu from "./images/amu.png";
import phoenix from "./images/UofPx.jpg";
import sniper from "./images/sniper.jpg";
import jts from "./images/jts.jpg";
import ball from "./images/ball.jpg";
import camilla from "./images/camilla.jpg";
import scuba from "./images/scuba.jpg";
import jump from "./images/jump.jpg";

function About() {
  return (
    <div>
      <Hero >
        <h1>Welcome To My About Page</h1>
        <Row>
          <Col size="md-5">
            <img src={about} style={{ width: 300, height: 200 }} alt="reaper" />
          </Col>
          <Col size="md-5">
            <img src={jump} style={{ width: 220, height: 220 }} alt="reaper" />
          </Col>
        </Row>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1 style={{ textAlign: "center" }}>My Past Profession</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              I started my career in the Marines as a Rifleman and became a Marine Scout Sniper.  I then went into the Army and ended up in the Special Operations Community.  It has greatly influenced how I think, how I act, and how I am motivated.
            </p>
          </Col>
        </Row>
      </Container>
      <Hero>
        <h2>My Past Life</h2>
        <img src={insignia} style={{ width: 250, height: 195 }} alt="patch" />
        <Row>
          <Col size="md-4">
            <img src={sniper} style={{ width: 300, height: 200 }} alt="ss" />
            <p>
              I was a military (USMC and Army Infantry) Sniper for 10 years
            </p>
          </Col>
          <Col size="md-4">
            <p style={{ paddingTop: 15 }}>
              I volounteered for Special Forces and became a Special Forces Medical Sergeant.  I spent the next 20 years in the SF community in one capacity or another.
          </p>
          </Col>
          <Col size="md-4">
            <p>
              I retired in 2013 and started Jeger Tactical Solutions in 2020
          </p>
            <img src={jts} style={{ width: 250, height: 150, marginTop: 20, alignItems: "center" }} alt="jts" />
          </Col>
        </Row>
      </Hero>
      <Hero >
        <h2 style={{ marginTop: 15 }}>I Also Have Some College</h2>
        <Row>
          <Col size="md-4">
            <p>
              Bachelors of Health Science, Minor in Biology
            </p>
            <img src={campbell} style={{ width: 300, height: 200 }} alt="CU" />
          </Col>
          <Col size="md-4">
            <p>
              Masters in Security Management, Concentration in Terrorism Studies
            </p>
            <img src={amu} style={{ width: 300, height: 200 }} alt="AMU" />
          </Col>
          <Col size="md-4">
            <p>
              Masters In Business Administration, Project Management Certification
            </p>
            <img src={phoenix} style={{ width: 300, height: 200 }} alt="UofPx" />
          </Col>
        </Row>
      </Hero>
      <Hero>
        <h2 style={{ marginTop: 15 }}>I Have a Few Pastimes</h2>
        <Row>
          <Col size="md-4">
            <p>
              My Best Friend is My Wife Lorie
            </p>
            <img src={ball} style={{ width: 300, height: 300 }} alt="wife" />
          </Col>
          <Col size="md-4">
            <p>
              I do need therapy.  My "wind therapy" is a 2018 Road King Special I named Camilla
            </p>
            <img src={camilla} style={{ width: 300, height: 150 }} alt="HD" />
          </Col>
          <Col size="md-4">
            <p>
              I also like to scuba dive when I find time.  I am open water, advanced open water, rescue diver, nitrox, and a scuba training assistant certified.
            </p>
            <img src={scuba} style={{ width: 300, height: 300 }} alt="dive" />
          </Col>
        </Row>
      </Hero>
    </div>
  );
}

export default About;
