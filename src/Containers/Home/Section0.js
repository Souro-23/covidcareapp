import { Button, Col, Row, Modal, Carousel } from "antd";
import React, { useState, useEffect } from "react";
import classes from "./Section0.module.css";
import bannerTank from "../../Assets/Svgs/bannerTank.svg";
import bannerPlasma from "../../Assets/Svgs/bannerPlasma.svg";
import { getNodeText } from "@testing-library/dom";

export default function Section0({ changeRoute, showModal }) {
  return (
    <div>
      <Carousel
        dotPosition={"bottom"}
        dots={classes.carouselDots}
        // autoplay={true}
      >
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
        <div className={classes.banner3}>
          <p className={classes.carouselText31}>POST - COVID</p>
          <p className={classes.carouselText32}>REHABILITATION</p>
          <p className={classes.carouselText33}>
            With Medidation, Breath and Yoga
          </p>
          <p className={classes.carouselText34}>3-DAY FREE ONLINE</p>
          <p className={classes.carouselText35}>PROGRAMME</p>
          <Button onClick={showModal} className={classes.carouselText36}>
            Register For Free
          </Button>
          <div className={classes.bannerImage2}>
            <img src={bannerPlasma} alt='plasma icon' />
          </div>
        </div>
      </Carousel>
    </div>
  );
}

// <div className={classes.banner3}>
//           <p className={classes.carouselText31}>POST - COVID</p>
//           <p className={classes.carouselText32}>REHABILITATION</p>
//           <p className={classes.carouselText33}>
//             With Medidation, Breathe and Yoga
//           </p>
//           <p className={classes.carouselText34}>3-DAY FREE ONLINE</p>
//           <p className={classes.carouselText35}>PROGRAMME</p>
//           <Button onClick={showModal} className={classes.carouselText36}>
//             Register For Free
//           </Button>
//           <div className={classes.bannerImage2}>
//             <img src={bannerPlasma} alt='plasma icon' />
//           </div>
//         </div>
