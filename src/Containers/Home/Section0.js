import { Button, Col, Row, Modal, Carousel } from "antd";
import React, { useState } from "react";
import classes from "./Section0.module.css";
import help from "../../Assets/Svgs/help.svg";
import heart from "../../Assets/Svgs/heart.svg";
import medicine from "../../Assets/Svgs/Image7.png";
import call from "../../Assets/Svgs/Icon material-call.svg";

export default function Section0({ changeRoute, showModal }) {
  return (
    <div justify-content='center' className={classes.actionCardCarousal}>
      <Carousel dotPosition={"bottom"}>
        <Row justify='center'>
          <Col lg={5} md={11} sm={11} xs={20}>
            <h1 className={classes.carouselText11}>DONATE</h1>
            <h2 className={classes.carouselText12}>USED O2 CYLINDERS</h2>
            <p className={classes.carouselText13}>
              Recovered Indiviuals & Acquaintance of unfortunately deceased
              individuals who have cylinders with them. Help us in reaching out
              to them.
            </p>
            <Button
              onClick={() => changeRoute("/register/donate-o2-cylinders")}
              className={classes.carouselText14}>
              Share Contact
            </Button>
            <br />
            <br />
            <br />
          </Col>
        </Row>
        <Row justify='center'>
          <Col lg={5} md={11} sm={11} xs={20}>
            <h1 className={classes.carouselText21}>DONATE</h1>
            <h2 className={classes.carouselText22}>BLOOD PLASMA</h2>
            <p className={classes.carouselText23}>INSPIRE OTHERS</p>
            <p className={classes.carouselText23}>BECOME A SUPER-HERO</p>
            <Button onClick={showModal} className={classes.carouselText24}>
              Donate Plasma
            </Button>
          </Col>
        </Row>
      </Carousel>
    </div>
  );
}
