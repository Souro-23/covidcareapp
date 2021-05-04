import { Button, Col, Row, Modal, Carousel } from "antd";
import React, { useState, useEffect } from "react";
import classes from "./Section0.module.css";
import bannerTank from "../../Assets/Svgs/bannerTank.svg";
import bannerPlasma from "../../Assets/Svgs/bannerPlasma.svg";
import { getNodeText } from "@testing-library/dom";

export default function Section0({ changeRoute, showModal }) {
  // const setDelay = () => {
  //   setTimeout(() => {
  //     next()
  //     console.log("Delay -> 3");
  //   }, 3000);
  // };

  // useEffect(() => {
  //   setInterval(() => {
  //     Carousel.next();
  //   }, 5000);
  // }, []);
  return (
    <div justify-content='center' className={classes.actionCardCarousal}>
      <Carousel dotPosition={"bottom"} autoplay={true}>
        <div className={classes.banner1}>
          <p className={classes.carouselText11}>DONATE</p>
          <p className={classes.carouselText12}>USED O2 CYLINDERS</p>
          <p className={classes.carouselText13}>
            Recovered Indiviuals & Acquaintance
          </p>
          <p className={classes.carouselText13}>
            of unfortunately deceased individuals
          </p>
          <p className={classes.carouselText13}>
            who have cylinders with them.
          </p>
          <p className={classes.carouselText13}>
            {" "}
            Help us in reaching out to them.
          </p>
          <Button
            onClick={() => changeRoute("/register/donate-o2-cylinders")}
            className={classes.carouselText14}>
            Share Contact
          </Button>
          <div className={classes.bannerImage1}>
            <img src={bannerTank} alt='O2 Tank' />
          </div>
          <br />
          <br />
          <br />
        </div>
        <div className={classes.banner2}>
          <h1 className={classes.carouselText21}>DONATE</h1>
          <h2 className={classes.carouselText22}>BLOOD PLASMA</h2>
          <p className={classes.carouselText23}>INSPIRE OTHERS</p>
          <p className={classes.carouselText23}>BECOME A SUPER-HERO</p>
          <Button onClick={showModal} className={classes.carouselText24}>
            Donate Plasma
          </Button>
          <div className={classes.bannerImage2}>
            <img src={bannerPlasma} alt='plasma icon' />
          </div>
        </div>
      </Carousel>
    </div>
  );
}
