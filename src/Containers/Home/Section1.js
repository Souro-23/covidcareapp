import React, { useState } from "react";
import classes from "./section.module.css";
import homeClasses from "./Home.module.css";
import fc from "../../Assets/Icons/communication (1).svg";
import sd from "../../Assets/Icons/stethoscope (1).svg";
import bs from "../../Assets/Icons/Group 159434.svg";
import tt from "../../Assets/Icons/Page-1.svg";
import hc from "../../Assets/Icons/safety-suit (1).svg";
import vc from "../../Assets/Icons/smartphone.svg";
import thermometer from "../../Assets/Svgs/thermometer.svg";
import heartbeat from "../../Assets/Svgs/heartbeat.svg";
import Group from "../../Assets/Svgs/Group 159507.svg";
import medical from "../../Assets/Svgs/medical-report.svg";
import application from "../../Assets/Svgs/application.svg";

import { Col, Row, Button, Modal } from "antd";

export default function Section1(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    console.log("hello");
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const changeRoute = (route) => {
    props.history.push(route);
  };
  return (
    <>
      <Row className={classes.formBox}>
        <Col>
          <h1 className={classes.superText}>
            Are you a <br />
            <span className={classes.spanText}>covid</span> patient?
          </h1>
          <p className={classes.subText}>We have got your back in this</p>
        </Col>
        <Row className={classes.symptomsBox}>
          <Col justify='center' className={classes.selectedcheckBox1}>
            <label style={{ textAlign: "center" }} for='fever'>
              <img src={fc} />
              <div className={classes.text}> Free Consultation </div>
            </label>
          </Col>
          <Col justify='center' className={classes.selectedcheckBox1}>
            <label style={{ textAlign: "center" }} for='fever'>
              <img src={sd} />
              <div className={classes.text}> Special Doctors </div>
            </label>
          </Col>
          <Col justify='center' className={classes.selectedcheckBox1}>
            <label style={{ textAlign: "center" }} for='fever'>
              <img src={bs} />
              <div className={classes.text}> Breathing Sessions </div>
            </label>
          </Col>
          <Col justify='center' className={classes.selectedcheckBox1}>
            <label style={{ textAlign: "center" }} for='fever'>
              <img src={tt} />
              <div className={classes.text}> Tips & Tricks </div>
            </label>
          </Col>
          <Col justify='center' className={classes.selectedcheckBox1}>
            <label style={{ textAlign: "center" }} for='fever'>
              <img src={hc} />
              <div className={classes.text}> Home Consultation </div>
            </label>
          </Col>
          <Col justify='center' className={classes.selectedcheckBox1}>
            <label style={{ textAlign: "center" }} for='fever'>
              <img src={vc} />
              <div className={classes.text}> Video Call </div>
            </label>
          </Col>
        </Row>
        <Button onClick={showModal} block className={classes.Button}>
          Consult Now
        </Button>
      </Row>
      <Modal
        title={null}
        style={{ top: 20 }}
        className={homeClasses.modal}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        closeIcon={<ion-icon name='close-outline'></ion-icon>}>
        <div className={homeClasses.title1}>
          <p style={{ textAlign: "left !important", marginLeft: "0px" }}>
            Eligibility Criteria
          </p>
        </div>
        <p>
          <b>Dear patient,</b>
          <br />
          We are happy to help you.
        </p>
        <div className={homeClasses.content}>
          <ul>
            <li>
              When you opt for teleconsultation, it is imperative you realize
              its limitations.
            </li>
            <li>
              The consultation is a medical advise as per the clinical judgement
              of the doctor.
            </li>
            <li> I am healthy and feeling excited to donate plasma </li>
            <li>
              You are requested to call the doctors in their specified time
              slots <span style={{ color: "orangered" }}>ONLY</span>
            </li>
            <li>
              After your consultation, if you wish you to consult the same
              doctor again; it is advisable to join the group at the same time
              on the next day.
            </li>
            <li>
              If you need to consult same doctor again on the same day, we
              cannot ensure a <span style={{ color: "orangered" }}>free</span>{" "}
              consultation with the same doctor. But, free consultation with
              another doctor can be arranged in the same way.
            </li>
            <li>
              You are advised to keep your these vitals ready before calling :
            </li>
          </ul>
          <div
            style={{
              padding: "0 20px",
              display: "flex",
              justifyContent: "center",
            }}>
            <Col justify='center' className={classes.iconBox1}>
              <label style={{ textAlign: "center" }} for='fever'>
                <img src={thermometer} />
                <div className={classes.text}>Temperature</div>
              </label>
            </Col>
            <Col justify='center' className={classes.iconBox1}>
              <label style={{ textAlign: "center" }} for='fever'>
                <img src={Group} />
                <div className={classes.text}>O2 Level</div>
              </label>
            </Col>
            <Col justify='center' className={classes.iconBox1}>
              <label style={{ textAlign: "center" }} for='fever'>
                <img src={heartbeat} />
                <div className={classes.text}>Pulse</div>
              </label>
            </Col>
          </div>
          <ul>
            <li>
              You are advised to keep your these reports (if you have) ready
              before calling
            </li>
          </ul>
          <div
            style={{
              padding: "0 20px",
              display: "flex",
              justifyContent: "center",
            }}>
            <Col justify='center' className={classes.iconBox1}>
              <label style={{ textAlign: "center" }} for='fever'>
                <img src={medical} />
                <div className={classes.text}>Covid Report</div>
              </label>
            </Col>
            <Col justify='center' className={classes.iconBox1}>
              <label style={{ textAlign: "center" }} for='fever'>
                <img src={sd} />
                <div className={classes.text}>CT Scan</div>
              </label>
            </Col>
            <Col justify='center' className={classes.iconBox1}>
              <label style={{ textAlign: "center" }} for='fever'>
                <img src={application} />
                <div className={classes.text}>Other Reports</div>
              </label>
            </Col>
          </div>
        </div>
        <br />
        <Button
          onClick={() => changeRoute("/register/patient")}
          block
          className={homeClasses.actionButton}>
          Yes, I am eligible
        </Button>
        <Button
          onClick={handleCancel}   
          block
          className={homeClasses.actionButton2}>
          I am not eligible
        </Button>
      </Modal>
    </>
  );
}
