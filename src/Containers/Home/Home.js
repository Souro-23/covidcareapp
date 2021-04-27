import { Button, Col, Row, Modal } from 'antd'
import React, { useState } from 'react'
import classes from './Home.module.css'
import help from "../../Assets/Svgs/help.svg";
import heart from '../../Assets/Svgs/heart.svg'
import medicine from '../../Assets/Svgs/Image7.png'
import call from '../../Assets/Svgs/Icon material-call.svg'
export default function Home(props) {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const changeRoute = (route) => {
        props.history.push(route)
    }
    return (
        <>
            <Row >
                <Col sm={24} xs={24}>
                    <div className={classes.title}>
                        <h1 >NCRfightsCOVID’19</h1>
                    </div>
                </Col>
            </Row>
            <br />
            <Row justify="center" >
                <Col sm={16} xs={20}>
                    <div className={classes.introCard}>
                        <img src={help} className={classes.homeIcons} />
                        <p>We are helping connect the <span><b>donors</b></span> with the <span><b>recipients</b></span> during this tough COVID pandemic times</p>
                    </div>
                </Col>
            </Row>
            <br />
            <br />
            <Row gutter={[32,32]} justify="center">
                <Col lg={8} md={11} sm={11} xs={20}>
                    <div className={classes.actionCard}>
                       
                        <p style={{ textAlign: "left" }}> Let us know what you’re looking for?</p>
                        <Button onClick={() => changeRoute("register/recipient")} block className={classes.actionButton}>
                            I am looking for Plasma Donors
                        </Button>
                        <Button onClick={() => changeRoute('/register/patient')} block className={classes.actionButton2}>
                            I need a counsellor or doctor
                        </Button>
                        <Button onClick={() => changeRoute('/oxygenCylinders')} block className={classes.actionButton2}>
                            I am looking for oxygen cylinder
                        </Button>
                        <Button onClick={() => changeRoute('/food')} block className={classes.actionButton2}>
                            I am looking for food delivery
                        </Button>


                    </div>
                </Col>
                <Col lg={8} md={11} sm={11} xs={20}>
                    <div className={classes.actionCard}>
                         
                        <p style={{ textAlign: "left" }}> How can you help?</p>
                        <Button block className={classes.actionButton} onClick={showModal}>
                            I want to donate Plasma
                        </Button>
                        <Button onClick={() => changeRoute('/register/consultant')} block className={classes.actionButton2}>
                            I can help as a consultant/doctor
                        </Button>
                        <Button onClick={() => changeRoute('/register/Oxygen-cylinders-supply')} block className={classes.actionButton2}>
                            I can get Oxygen Cylinders
                        </Button>
                        <Button onClick={() => changeRoute('/register/food-suply')} block className={classes.actionButton2}>
                            I can help with food delivery
                        </Button>
                    </div>

                </Col>
            </Row>
            <br />
            <Row justify="center" >
                <Col sm={16} xs={20}>
                    <h2><b>What all you can do at home to fight this pandemic?</b></h2>
                </Col>
            </Row>
            <br />
            <Row justify="center" gutter={[32, 32]} >
                <Col lg={5} md={11} sm={11} xs={20}>

                    <div className={classes.actionCard1}>
                        <img src={heart} className={classes.homeIcons} />
                        <br/>
                        <p> Learn Powerful Breathing Techniques like to help your
                        lungs fight the deadly disease and boost your immunity
                        and fight stress/anxiety</p>
                        <Button block className={classes.actionButton3}>
                            Want To Know More
                        </Button>
                    </div>
                </Col>
                <Col lg={5} md={11} sm={11} xs={20}>
                    <div className={classes.actionCard}>
                        <div className={classes.iconContainer}>
                            <img src={medicine} className={classes.homeIconsSmall} />
                        </div>
                        <br/>
                        <p>Based on German Research, taking Kabasur,
                        along with amruth and tulsi which has
                        efficiency of 85% to fight COVID</p>
                        <Button block className={classes.actionButton4}>
                            Want To Know More
                        </Button>
                    </div>
                </Col>
                <Col lg={5} md={11} sm={11} xs={20}>
                    <div className={classes.actionCard}>
                    <div className={classes.iconContainer}>
                            <img src={call} className={classes.homeIconsSmall} />
                        </div>
                        <br/>
                        <p>Call on <b style={{ color: "black" }}>080-676-12338</b> where teachers
                        counsellors people undergoing stress and
                        anxiety during the lockdown</p>
                        <Button block className={classes.actionButton4}  >
                            Call Now
                        </Button>
                    </div>
                </Col>
            </Row>
            <br />
            <Modal
                title={null}
                className={classes.modal}
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
                closeIcon={<ion-icon name="close-outline"></ion-icon>}>
                <div className={classes.title1}>
                    <p>Eligibility Criteria</p>
                </div>
                <br />
                <div className={classes.content}>
                    <ul>
                        <li> I was a <span style={{ color: "red" }}><b>COVID</b></span> Positive patient</li>
                        <li> I am now negative after infection </li>
                        <li> I have been cured for 14 days </li>
                        <li> I am healthy and feeling excited to donate plasma </li>
                        <li> I am between 18-60 years of age </li>
                    </ul>
                </div>
                <br /><br />
                <Button onClick={() => changeRoute("register/donor")} block className={classes.actionButton}>
                    Yes, I am eligible
                        </Button>
                <Button onClick={handleCancel} block className={classes.actionButton2}>
                    I am not eligible
                        </Button>
            </Modal>
        </>
    )
}
