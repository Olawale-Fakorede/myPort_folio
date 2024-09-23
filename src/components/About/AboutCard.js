import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="purple">Olawale Fakorede </span>
            from <span className="purple"> Nigeria.</span>
            <br />
            I am a full stack developer with great strength in Backend. I am
            also a good at frontend. In upskilling myself I have taken up tutoring jobs
            to improve my knowlegde of the coding I just learnt about and learning more.
            <br />
            My education life started as an Agricultural & Bio-Enivronmental Engineer, but presently
            finished as a Full stack Web Developer and willingly to improve my knowledgein the tech areas
            by getting a MSc. in Computer Science.
            <br />
            <br />
            Apart from coding, some other activities that I love doing!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Play Games
            </li>
            <li className="about-activity">
              <ImPointRight /> PLaying Basketball
            </li>
            <li className="about-activity">
              <ImPointRight /> Watch Tech related movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p> */}
          {/* <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
