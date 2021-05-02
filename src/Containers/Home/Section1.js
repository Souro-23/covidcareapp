import React from 'react'
import classes from "./section.module.css"
import fc from "../../Assets/Icons/communication (1).svg"
import sd from "../../Assets/Icons/stethoscope (1).svg"
import bs from "../../Assets/Icons/Group 159434.svg"
import tt from "../../Assets/Icons/Page-1.svg"
import hc from "../../Assets/Icons/safety-suit (1).svg"
import vc from "../../Assets/Icons/smartphone.svg"

import { Col,Row ,Button} from "antd";

export default function Section1() {
    return (
    <Row className={classes.formBox}>
        <Col>
            <h1 className={classes.superText}>Are you a <span className={classes.spanText}>covid</span> patient?</h1>
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
        <Button block className={classes.Button}>
            Consult Now
        </Button>
    </Row>
    )
}
