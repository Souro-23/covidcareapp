import { Button, Col, Row } from 'antd'
import React from 'react'
import classes from './Home.module.css'
export default function Home() {
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
                        <p>We are helping connect the <span><b>donors</b></span> with the <span><b>recipients</b></span> during this tough COVID pandemic times</p>
                    </div>
                </Col>
            </Row>
            <br />
            <br />
            <Row justify="center" gutter={[32, 32]}>
                <Col lg={8} md={11} sm={11} xs={20}>
                    <div className={classes.actionCard}>
                        <h1>Relax!</h1>
                        <p > Let us know what you’re looking for?</p>
                        <Button block className={classes.actionButton}>
                            I am looking for Plasma Donors
                        </Button>
                        <Button block className={classes.actionButton2}>
                            I am looking for Plasma Donors
                        </Button>
                    </div>
                </Col>
                <Col lg={8} md={11} sm={11} xs={20}>
                    <div className={classes.actionCard}>
                        <h1>People Need Your Help, Urgently!</h1>
                        <p style={{textAlign:"left"}}> How can you help?</p>
                        <Button block className={classes.actionButton}>
                            I want to donate Plasma
                        </Button>
                        <Button block className={classes.actionButton2}>
                            I can help as a consultant/doctor
                        </Button>
                        <Button block className={classes.actionButton2}>
                            I want to volunteer/help
                        </Button>
                    </div>

                </Col>
            </Row>
            <br/>
            <Row justify="center" >
                <Col sm={16} xs={20}>
                    <h2><b>What all you can do at home to fight this pandemic?</b></h2>
                </Col>
            </Row>
            <br/>
            <br/>
            <Row justify="center" gutter={[32, 32]} >
                <Col lg={5} md={11} sm={11} xs={20}>
                    <div className={classes.actionCard1}>
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
                        <p>Based on German Research, taking Kabasur,  
                        along with amruth and tulsi which has 
                        efficiency of 85% to fight COVID</p>
                        <Button block className={classes.actionButton2}>
                            Want To Know More
                        </Button>
                    </div>
                </Col>
                <Col lg={5} md={11} sm={11} xs={20}>
                    <div className={classes.actionCard}>
                        <p>Call on <b style={{color:"black"}}>080-676-12338</b> where teachers
                        counsellors people undergoing stress and  
                        anxiety during the lockdown</p>
                        <Button block className={classes.actionButton2}>
                            Call Now
                        </Button>
                    </div>
                </Col>
            </Row>
            <br/>
        </>
    )
}
