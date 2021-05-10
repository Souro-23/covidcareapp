import { Button, Col, Row, Modal, Carousel } from "antd";
import React, { useState, useEffect } from "react";
import classes from "./Section0.module.css";
import bannerTank from "../../Assets/Svgs/bannerTank.svg";
import bannerPlasma from "../../Assets/Svgs/bannerPlasma.svg";
import bannerPostCovid from "../../Assets/Svgs/bannerPostCovid.svg";
import bannerHomeCare from "../../Assets/Svgs/bannerHomeCare.svg";
import bannerPrevention from "../../Assets/Svgs/bannerPrevention.svg";
import { getNodeText } from "@testing-library/dom";

export default function Section0({ changeRoute, showModal }) {
  return (   
    <div>
      <Carousel
        dotPosition={"bottom"}
        dots={classes.carouselDots}  
        autoplay={true}
        >
        <div className={classes.banner1}>
          <p className={classes.carouselText11}>DONATE</p>
          <p className={classes.carouselText12}>USED O2 CYLINDERS</p>
          <p className={classes.carouselText13}>
          Reaching out to recovered patients <br/>and /or kin of deceased patients <br/>for recovery of used cylinders.
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
          <p className={classes.carouselText23}>INSPIRE OTHERS TO</p>
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
            With Meditation, Breath and Yoga
          </p>
          <p className={classes.carouselText34}>3- DAY FREE ONLINE</p>
          <p className={classes.carouselText35}>PROGRAMME</p>
          <a target="_blank" href="https://www.artofliving.org/in-en/search/course#distance=50&sSearch=India&st=&lat=&lng=&ctype=555888&acol=0&c=in&cc=&d1=&d2=&time=&course_language=&gtag="><Button   className={classes.carouselText36}>
            Register For Free
          </Button></a>
          <div className={classes.bannerImage3}>
            <img src={bannerPostCovid} alt='Post covid icon' />
          </div>
        </div>
        <div className={classes.banner4}>
          <p className={classes.carouselText41}>IMMUNITY</p>
          <p className={classes.carouselText42}>BOOST & PREVENTION</p>
          <p className={classes.carouselText43}>
            With Meditation, Breath and Yoga
          </p>
          <p className={classes.carouselText44}>3- DAY FREE ONLINE</p>
          <p className={classes.carouselText45}>PROGRAMME</p>
          <a target="_blank" href="https://www.artofliving.org/in-en/search/course#distance=50&sSearch=India&st=&lat=&lng=&ctype=435533&acol=0&c=in&cc=&d1=&d2=&time=&course_language=&gtag="><Button  className={classes.carouselText46}>
            Register For Free
          </Button></a>
          <div className={classes.bannerImage4}>
            <img src={bannerPrevention} alt='prevention icon' />
          </div>
        </div>
        <div className={classes.banner5}>
          <p className={classes.carouselText51}>HOME</p>
          <p className={classes.carouselText52}>ISOLATION & CARE</p>
          <p className={classes.carouselText53}>
            With Meditation, Breath and Yoga
          </p>
          <p className={classes.carouselText54}>3- DAY FREE ONLINE</p>
          <p className={classes.carouselText55}>PROGRAMME</p>
          <a target="_blank" href="https://www.artofliving.org/in-en/search/course#distance=50&sSearch=India&st=&lat=&lng=&ctype=555881&acol=0&c=in&cc=&d1=&d2=&time=&course_language=&gtag="><Button   className={classes.carouselText56}>
            Register For Free
          </Button></a>
          <div className={classes.bannerImage5}>
            <img src={bannerHomeCare} alt='prevention icon' />
          </div>
        </div>
      </Carousel>
    </div>
  );
}
