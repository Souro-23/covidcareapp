import { Button, Col, Row, Modal } from "antd";
import React, { useState } from "react";
import classes from "./Home.module.css";
import artOfLiving from "../../Assets/Images/artOfLiving.png";
import Section0 from "./Section0";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";

export default function Home(props) {
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
      <Row>
        <Col sm={24} xs={24}>
          <div
            style={{
              backgroundColor: "white",
              paddingTop: "15px",
              display: "flex",
              justifyContent: "center",
            }}>
            <img src={artOfLiving} width='100px' height='42px' />
          </div>
          <h1 style={{
            textAlign: "center",
            color: "grey",
            backgroundColor: "white",
            fontSize: "9px",
            padding: " 5px 0"
          }}>
            Delhi Volunteers Initiative</h1>
        </Col>
      </Row>
      <Row justify='center' className={classes.bannerSectionRow}>
        <Col lg={10} md={14} sm={20} xs={24}>
          <Section0 showModal={showModal} changeRoute={changeRoute} />
        </Col>
      </Row>
      <br />
      <Section2 changeRoute={changeRoute} />
      <br />
      <Section4 showModal={showModal} changeRoute={changeRoute} />
      <br />
      <Section1 {...props} />
      <br />

      <Row justify='center'>
        <Col lg={10} md={14} sm={20} xs={24}>
          <Section3 changeRoute={changeRoute} />
        </Col>
      </Row>
      <br />
      <Row  justify='center'>
        <Col lg={10} md={14} sm={20} xs={24}>
          <div className={classes.actionCard}>
            <h1
              style={{
                textAlign: "left",
                marginBottom: "0px",
                lineHeight: "25px",
              }}>
              <span style={{ color: "orangered" }}>IMMUNITY </span>KIT
            </h1>
            <h4
              style={{
                fontSize: "10px",
                textAlign: "left",
                color: "#ADADAD",
              }}>
              EFFECTIVE MEDICINE TO FIGHT COVID - 19
            </h4>

            <br />
            <p style={{ textAlign: "left" }}>
              Based on German Research, taking Kabasur Kudineer, Shakti Drops, Turmeric Plus, Tulsi & Amruth along with amruth and tulsi which has an efficiency of 85% to fight COVID
            </p>
            <a target='_blank' href='https://chat.whatsapp.com/G8ll70Iyfnf6MNkAvUkPAm'>
              <Button block className={classes.actionButton4}>
                Chat Now to know more
              </Button>
            </a>
          </div>
        </Col>
      </Row>
      <br/>
      <Row   justify='center'>
        <Col lg={10} md={14} sm={20} xs={24}>
          <div className={classes.actionCard}>
            <h1
              style={{
                textAlign: "left",
                marginBottom: "0px",
                lineHeight: "25px",
              }}>
              <span style={{ color: "orangered" }}>ANXIETY </span>HELPLINE NUMBER
            </h1>
            <br />
            <p style={{ textAlign: "left" }}>
              Call on <b style={{ color: "black" }}>080-676-12338</b> where
              teachers counsellors people undergoing stress and anxiety during
              the lockdown
            </p>
            <a href='tel:8067612338'>
              <Button block className={classes.actionButton4}>
                Call Now
              </Button>
            </a>
          </div>
        </Col>
      </Row>
      <Modal
        title={null}
        className={classes.modal}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        closeIcon={<ion-icon name='close-outline'></ion-icon>}>
        <div className={classes.title1}>
          <p>Eligibility Criteria</p>
        </div>
        <br />
        <div className={classes.content}>
          <ul>
            <li>
              {" "}
              I was a{" "}
              <span style={{ color: "red" }}>
                <b>COVID</b>
              </span>{" "}
              Positive patient
            </li>
            <li> I am now negative after infection </li>
            <li> I have been cured for 14 days </li>
            <li> I am healthy and feeling excited to donate plasma </li>
            <li> I am between 18-60 years of age </li>
          </ul>
        </div>
        <br />
        <br />
        <Button
          onClick={() => changeRoute("register/donor")}
          block
          className={classes.actionButton}>
          Yes, I am eligible
        </Button>
        <Button onClick={handleCancel} block className={classes.actionButton2}>
          I am not eligible
        </Button>
      </Modal>
    </>
  );
}
