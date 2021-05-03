import { Button, Col, Row, Modal } from "antd";
import React, { useState } from "react";
import classes from "./Home.module.css";
import help from "../../Assets/Svgs/help.svg";
import heart from "../../Assets/Svgs/heart.svg";
import medicine from "../../Assets/Svgs/Image7.png";
import call from "../../Assets/Svgs/Icon material-call.svg";
import Section0 from "./Section0";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";

export default function Home(props) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        console.log("hello")
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
                    {/* <div className={classes.title}>
                        <h1 >NCRfightsCOVID’19</h1>
                    </div> 
                    
                    icon section
                    
                    */}
                </Col>
            </Row>
            <br />
            <Row justify='center'>
                <Col sm={16} xs={24}>
                    <Section0 />
                </Col>
            </Row>
            <br />
            <Row >
                <Col lg={8} md={11} sm={11} xs={20}>
                    <Section1 />
                </Col>
            </Row>
            <br />
            <Row >
                <Col lg={8} md={11} sm={11} xs={20}>
                    <Section2 changeRoute={changeRoute} />
                </Col>
            </Row>
            <Row justify="center" >
                <Col sm={16} xs={24}>
                    <Section3 />
                </Col>
            </Row>
            <Row >
                <Col lg={8} md={11} sm={11} xs={20}>
                    <Section4 showModal={showModal} changeRoute={changeRoute} />
                </Col>
            </Row>
            <br />
            <Row gutter={[0, 24]} justify="center">
                <Col lg={5} md={11} sm={11} xs={20}>
                    <div className={classes.actionCard}>
                        <h1 style={{ textAlign: "center", marginBottom: "0px" }}>KABASUR <span style={{ color: "orangered" }}>KUDINEER</span></h1>
                        <h4 style={{ fontSize: "10px", textAlign: "center", color: "#ADADAD" }}>EFFECTIVE MEDICINE TO FIGHT COVID - 19</h4>
                        <div className={classes.iconContainer}>
                            <img src={medicine} className={classes.homeIconsSmall} />
                        </div>
                        <br />
                        <p>Based on German Research, taking Kabasur,
                        along with amruth and tulsi which has
                        efficiency of 85% to fight COVID</p>
                        <Button block className={classes.actionButton4}>
                            Want To Know More
                        </Button>
                    </div>
                </Col>
                <Col lg={5} md={11} sm={11} xs={20}>
                    <div className={classes.actionCard}>
                        <div className={classes.iconContainer}>
                            <img src={call} className={classes.homeIconsSmall} />
                        </div>
                        <br />
                        <p>Call on <b style={{ color: "black" }}>080-676-12338</b> where teachers
                        counsellors people undergoing stress and
                        anxiety during the lockdown</p>
                        <Button block className={classes.actionButton4}  >
                            Call Now
                        </Button>
                    </div>
                </Col>
            </Row>
            <br />
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
