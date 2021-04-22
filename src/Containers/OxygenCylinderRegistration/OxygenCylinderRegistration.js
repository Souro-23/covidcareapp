import { Col, Row } from "antd";
import React, { useState } from "react";
import classes from "../RegistrationForm.module.css";
export default function OxygenCylinderRegistration() {
    return (
        <div className={classes.body}>
            <div className={classes.formTitle}>
                <h1>Avail Oxygen Cylinder</h1>
            </div>
            <Row justify="center" >
                <Col className={classes.formBox} lg={8} sm={16} xs={23}>
                    {/* Oxygen Cylinder Registration Form */}
                </Col>
            </Row>
            </div>
    )
}
