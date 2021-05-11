import React, { useState } from "react";
import classes from "./section.module.css";
import plasma from "../../Assets/Icons/Group 159525.svg";
import oxygen from "../../Assets/Icons/oxygen-tank.svg";
import food from "../../Assets/Icons/food.svg";
import lab from "../../Assets/Icons/flask.svg";
import stethoscope from "../../Assets/Icons/stethoscope (1).svg";
import ayurveda from "../../Assets/Icons/ayurveda.svg";
import homeClasses from "./Home.module.css";
import sd from "../../Assets/Icons/stethoscope (1).svg";
import thermometer from "../../Assets/Svgs/thermometer.svg";
import heartbeat from "../../Assets/Svgs/heartbeat.svg";
import Group from "../../Assets/Svgs/Group 159507.svg";
import medical from "../../Assets/Svgs/medical-report.svg";
import application from "../../Assets/Svgs/application.svg";
import hospitalBeds from "../../Assets/Svgs/hospitalBeds.svg";
import pills from "../../Assets/Svgs/pills.svg";
import homeCare from "../../Assets/Icons/homeCare.svg";
import dissociative from "../../Assets/Icons/dissociative.svg";
import { Col, Row, Modal, Button } from "antd";

export default function Section2({ changeRoute }) {
  const redirect = (link) => {
    window.location.href = link;
  };
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <Row className={classes.formBox}>
        <Col>
          <h1 style={{ fontSize: "20px" }} className={classes.superText}>
            I <span className={classes.spanText}>Need Help </span> With
          </h1>
          <br />
        </Col>

        <Row className={classes.symptomsBox}>
          <Col
            onClick={showModal}
            justify='center'
            className={classes.selected}>
            <label style={{ textAlign: "center" }} for='fever'>
              <img src={stethoscope} />
              <div className={classes.text}>Doctor Consultation</div>
            </label>
          </Col>
          <Col
            onClick={() => changeRoute("register/recipient")}
            justify='center'
            className={classes.selected}>
            <label style={{ textAlign: "center" }} for='fever'>
              <img src={plasma} />
              <div className={classes.text}> Plasma Donors </div>
            </label>
          </Col>
          <Col
            onClick={() => changeRoute("/oxygenCylinders")}
            justify='center'
            className={classes.selected}>
            <label style={{ textAlign: "center" }} for='fever'>
              <img src={oxygen} />
              <div className={classes.text}>Refill O2 Cylinder</div>
            </label>
          </Col>
          <Col
            onClick={() => changeRoute("/food")}
            justify='center'
            className={classes.selected}>
            <label style={{ textAlign: "center" }} for='fever'>
              <img src={food} />
              <div className={classes.text}> Food Delivery </div>
            </label>
          </Col>
          <Col
            onClick={() => changeRoute("/labtestcenters")}
            justify='center'
            className={classes.selected}>
            <label style={{ textAlign: "center" }} for='fever'>
              <img src={lab} />
              <div className={classes.text}> Lab Tests </div>
            </label>
          </Col>
          <Col
            onClick={() =>
              redirect(
                "https://docs.google.com/forms/d/e/1FAIpQLScE3iEAxAUGqzsLDVEHlHM7nJvQvVAk7pW4Kks0B4yn5f4kZQ/viewform"
              )
            }
            justify='center'
            className={classes.selected}>
            <label style={{ textAlign: "center" }} for='fever'>
              <img style={{ margin: "auto" }} src={ayurveda} />
              <div className={classes.text}>Ayurvedic Consultation</div>
            </label>
          </Col>
          <Col
            onClick={() => changeRoute("/hospitalBeds")}
            justify='center'
            className={classes.selected}>
            <label style={{ textAlign: "center" }} for='fever'>
              <img src={hospitalBeds} />
              <div className={classes.text}> Hospital Beds </div>
            </label>
          </Col>
          <Col
            onClick={() => changeRoute("/medicalStores")}
            justify='center'
            className={classes.selected}>
            <label style={{ textAlign: "center" }} for='fever'>
              <img src={pills} />
              <div className={classes.text}> Medical Stores </div>
            </label>
          </Col>
          <Col
            onClick={() => changeRoute("/homeCare")}
            justify='center'
            className={classes.selected}>
            <label style={{ textAlign: "center" }} for='fever'>
              <img src={homeCare} />
              <div className={classes.text}> Home Care </div>
            </label>
          </Col>
          <Col
            onClick={() => changeRoute("/register/breating-session")}
            justify='center'
            className={classes.selected}>
            <label style={{ textAlign: "center" }} for='fever'>
              <img src={dissociative} />
              <div className={classes.text}> Fight Anxiety and Stress </div>
            </label>
          </Col>
        </Row>
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
          Yes, I agree
        </Button>
        <Button
          onClick={handleCancel}
          block
          className={homeClasses.actionButton2}>
          No, I disagree
        </Button>
      </Modal>
    </>
  );
}
