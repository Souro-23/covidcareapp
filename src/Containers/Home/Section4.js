import React from 'react'
import classes from "./section.module.css"
import plasma from "../../Assets/Icons/Group 159525.svg"
import oxygen from "../../Assets/Icons/oxygen-tank.svg"
import food from "../../Assets/Icons/food.svg"
import lab from "../../Assets/Icons/flask.svg"

import { Col, Row } from "antd";

export default function Section4({
    showModal,
    changeRoute
}) {
    return (
        <Row className={classes.formBox}>
            <Col>
                <h1 style={{ fontSize: '20px' }} className={classes.superText}>I  <span className={classes.spanText}>Want To Help </span>With </h1>
                {/* <p className={classes.subText}>Currently available in NCR</p> */}
                <br/>

            </Col>
            <Row className={classes.symptomsBox}>
                <Col onClick={showModal}  justify="center" className={classes.selected}>
                    <label style={{ textAlign: 'center' }} >
                        <img src={plasma} />
                        <div  className={classes.text}> Donate Plasma </div>
                    </label>
                </Col>
                <Col onClick={() => changeRoute('/register/Oxygen-cylinders-supply')} justify="center" className={classes.selected}>
                    <label style={{ textAlign: 'center' }}>
                        <img src={oxygen} />
                        <div className={classes.text}> Refill O2 Cylinder </div>
                    </label>
                </Col>
                <Col onClick={() => changeRoute('/register/food-suply')} justify="center" className={classes.selected}>
                    <label style={{ textAlign: 'center' }}>
                        <img src={food} />
                        <div className={classes.text}> Food Delivery </div>
                    </label>
                </Col>
                <Col onClick={() => changeRoute("/register/lab-test-centers")} justify="center" className={classes.selected}>
                    <label style={{ textAlign: 'center' }} for="fever">

                        <img src={lab} />
                        <div className={classes.text}> Lab Tests </div>
                    </label>
                </Col>
            </Row>

        </Row>

    )
}
