import React from 'react'
import classes from "./section.module.css"

import plasma from "../../Assets/Icons/blood.svg"
import oxygen from "../../Assets/Icons/oxygen-tank.svg"
import food from "../../Assets/Icons/food.svg"
import lab from "../../Assets/Icons/flask.svg"

import { Col,Row } from "antd";


export default function Section2() {
    return (
        <Row className={classes.formBox}>
        <Col>
            <p className={classes.subTitle}>What are you looking for?</p>
        </Col>
        <Row className={classes.symptomsBox}>
        <Col style={{backgroundColor:'#2F61F5'}} justify="center" className={classes.selected}>
            <label style={{ textAlign: 'center' }} for="fever">
                <img src={plasma} />
                <div style={{color:'white'}} className={classes.text}> Plasma Donors </div>
            </label>
        </Col>
        <Col justify="center" className={classes.selected}>
            <label style={{ textAlign: 'center' }} for="fever">
                <img src={oxygen} />
                <div className={classes.text}> Oxygen Cylinder </div>
            </label>
        </Col>
        <Col justify="center" className={classes.selected}>
            <label style={{ textAlign: 'center' }} for="fever">
                <img src={food} />
                <div className={classes.text}> Food Delivery </div>
            </label>
        </Col>
        <Col justify="center" className={classes.selected}>
            <label style={{ textAlign: 'center' }} for="fever">
                <img src={lab} />
                <div className={classes.text}> Lab Tests </div>
            </label>
        </Col>
        </Row>
    </Row>
    )
}
