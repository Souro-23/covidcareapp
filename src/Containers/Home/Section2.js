import React from 'react'
import classes from "./section.module.css"

import plasma from "../../Assets/Icons/Group 159525.svg"
import oxygen from "../../Assets/Icons/oxygen-tank.svg"
import food from "../../Assets/Icons/food.svg"
import lab from "../../Assets/Icons/flask.svg"

import { Col, Row } from "antd";


export default function Section2({
    changeRoute
}) {
    return (
        <Row className={classes.formBox}>
            <Col style={{ marginBottom: '1rem' }}>
                <h1 style={{ fontSize: '20px' }} className={classes.superText}>We are there to<br /> <span className={classes.spanText}>Help you out with</span> </h1>
                 
            </Col>
            
            <Row className={classes.symptomsBox}>
                <Col onClick={() => changeRoute("register/recipient")}  justify="center" className={classes.selected}>
                    <label style={{ textAlign: 'center' }} for="fever">
                        <img src={plasma} />
                        <div className={classes.text}> Plasma Donors </div>
                    </label>
                </Col>
                <Col onClick={() => changeRoute('/oxygenCylinders')} justify="center" className={classes.selected}>
                    <label style={{ textAlign: 'center' }} for="fever">
                        <img src={oxygen} />
                        <div className={classes.text}> Oxygen Cylinder </div>
                    </label>
                </Col>
                <Col onClick={() => changeRoute('/food')} justify="center" className={classes.selected}>
                    <label style={{ textAlign: 'center' }} for="fever">
                        <img src={food} />
                        <div className={classes.text}> Food Delivery </div>
                    </label>
                </Col>
                <Col onClick={() => changeRoute('/labtestcenters')} justify="center" className={classes.selected}>
                    <label style={{ textAlign: 'center' }} for="fever">
                        <img src={lab} />
                        <div className={classes.text}> Lab Tests </div>
                    </label>
                </Col>
            </Row>
        </Row>
    )
}
