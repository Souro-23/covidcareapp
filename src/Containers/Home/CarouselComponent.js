import { Button, Col, Row, Modal, Carousel  } from 'antd'
import React, { useState } from 'react'
import classes from './Home.module.css'
import help from "../../Assets/Svgs/help.svg";
import heart from '../../Assets/Svgs/heart.svg'
import medicine from '../../Assets/Svgs/Image7.png'
import call from '../../Assets/Svgs/Icon material-call.svg'
export default function CarouselComponent(props) {
    return (
         <div justify-content="center" className={classes.actionCardCarousal}>
         <Carousel autoplay dotPosition={'bottom'}>
         <Row justify="center" >
             <Col lg={5} md={11} sm={11} xs={20}>
                 <h1 className={classes.carouselText1}>
                 DONATE USED O2 CYLINDERS
                 </h1>
                 <p className={classes.carouselText2}>
                 Recovered Indiviuals & Acquaintance of unfortunately deceased individuals who have cylinders with them. Help us in reaching out to them.
                 </p>
                <Button className={classes.carouselText3}>
                  Share Contact
                </Button>
             </Col>
             </Row>
             <Row justify="center" >
                 <Col lg={5} md={11} sm={11} xs={20}>
                     <div className={classes.actionCardCarousal}>
                     <h1 className={classes.carouselText1}>
                     DONATE BLOOD PLASMA
                     </h1>
                     <p className={classes.carouselText2}>
                            INSPIRE OTHERS BECOME A SUPER-HERO  </p>
                         <Button className={classes.carouselText3}>
                             Donate Plasma
                         </Button>
                     </div>
                 </Col>
                 </Row>
             </Carousel>
             </div>

    )
}
