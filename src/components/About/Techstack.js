import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import {
  SiTailwindcss,
  SiExpress,
  SiNextdotjs,
} from "react-icons/si";
import { MdHtml } from "react-icons/md";
import { FaCss3 , FaBootstrap } from "react-icons/fa";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdHtml />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaBootstrap/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
           <SiExpress />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        
      </Col>
      <Col xs={4} md={2} className="tech-icons">
       
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        
      </Col> */}
    </Row>
  );
}

export default Techstack;
