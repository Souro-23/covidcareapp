import React, { useState } from 'react'
import classes from "./section.module.css"
import fc from "../../Assets/Icons/communication (1).svg"
import sd from "../../Assets/Icons/stethoscope (1).svg"
import bs from "../../Assets/Icons/Group 159434.svg"
import tt from "../../Assets/Icons/Page-1.svg"
import hc from "../../Assets/Icons/safety-suit (1).svg"
import vc from "../../Assets/Icons/smartphone.svg"

import { Col, Row, Button, Modal } from "antd";

export default function Section1(props) {
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
            <Row className={classes.formBox}>
                <Col>
                    <h1 className={classes.superText}>Are you a <br /><span className={classes.spanText}>covid</span> patient?</h1>
                    <p className={classes.subText}>We have got your back in this</p>
                </Col>
                <Row className={classes.symptomsBox}>
                    <Col justify="center" className={classes.selectedcheckBox1}>
                        <label style={{ textAlign: 'center' }} for="fever">
                            <img src={fc} />
                            <div className={classes.text}> Free Consultation </div>
                        </label>
                    </Col>
                    <Col justify="center" className={classes.selectedcheckBox1}>
                        <label style={{ textAlign: 'center' }} for="fever">
                            <img src={sd} />
                            <div className={classes.text}> Special Doctors </div>
                        </label>
                    </Col>
                    <Col justify="center" className={classes.selectedcheckBox1}>
                        <label style={{ textAlign: 'center' }} for="fever">
                            <img src={bs} />
                            <div className={classes.text}> Breathing Sessions </div>
                        </label>
                    </Col>
                    <Col justify="center" className={classes.selectedcheckBox1}>
                        <label style={{ textAlign: 'center' }} for="fever">
                            <img src={tt} />
                            <div className={classes.text}> Tips & Tricks </div>
                        </label>
                    </Col>
                    <Col justify="center" className={classes.selectedcheckBox1}>
                        <label style={{ textAlign: 'center' }} for="fever">
                            <img src={hc} />
                            <div className={classes.text}> Home Consultation </div>
                        </label>
                    </Col>
                    <Col justify="center" className={classes.selectedcheckBox1}>
                        <label style={{ textAlign: 'center' }} for="fever">
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
                    onClick={() => changeRoute("freeconsultation")}
                    block
                    className={classes.actionButton}>
                    Yes, I am eligible
        </Button>
                <Button onClick={handleCancel} block className={classes.actionButton2}>
                    I am not eligible
        </Button>
            </Modal>

        </>

    )
}
