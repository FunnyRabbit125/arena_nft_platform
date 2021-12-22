import React from "react";
import { Container,Row,Col } from 'react-bootstrap';

function RoadMap(props) {

  return (
    <section id="RoadMap">
      <h1 className="text-white mb-5">ROADMAP</h1><br></br>
      <div className="roadMap_lineWrapper mt-5">
        {/* roadmap content */}
      <Container>
        <Row className="mb-5">
        <Col md={6} className="middle-center">
        <div className="content_item_1">
            <h2 className="text-white mt-5">Q4 2021</h2>
            <h3 className="text-white mt-5"> + Mint Warriors<br></br>
             + Stake Warriors<br></br>
             + Earn + Trade SILVER</h3>
          </div>
        </Col>
        <Col md={4}>
           <img
          className="img-fluid"
          src={require("../../assets/img/roadmap-q4.png").default}
          alt="users"
           />
        </Col>
        </Row>
        <Row className="mb-5">
        <Col md={4}>
        <img
          className="img-fluid"
          src={require("../../assets/img/roadmap-q1.png").default}
          alt="users"
           />
        </Col>
        <Col md={3}></Col>
        <Col md={3} className="middle-center">
             <div className="content_item_2">
            <h2 className="text-white mt-5">Q1 2022</h2>
            <h3 className="text-white mt-5">
            + ARENA MODE LAUNCH<br></br>
            + Earn/Steal Warriors
            </h3>
          </div>
        </Col>
        </Row>
        <Row>
        <Col md={6} className="middle-center">
        <div className="content_item_3">
            <h2 className="text-white mt-5">Q2 2022</h2>
            <h3 className="text-white mt-5">
            + 2nd Generation Warriors <br></br>+ New Abilities <br></br>+ Land + Addons
            </h3>
          </div>
        </Col>
        <Col md={4}>
           <img
          className="img-fluid"
          src={require("../../assets/img/roadmap-q2.png").default}
          alt="users"
           />
        </Col>
       </Row>
       </Container>
      </div>
    </section>
  );
}

export default RoadMap;
