import { Button, Col, Row } from 'antd'
import React from 'react'
import classes from '../../Containers/Home/Home.module.css'
import icon from "../../Assets/Svgs/Congratulations1.svg"
export default function SubmitPageRecipient(props) {
    return (
        <Row justify="center">
            <Col style={{backgroundColor:"white", padding:"20px", marginTop:"40px"}} md={6} sm={16} xs={18}>
                <div className={classes.title1}>
                    <h1>Request Registered</h1>
                </div>
                <br />
                <img src={icon} style={{height:"130px", width:"100%"}} />
                <br/><br/>
                <div className={classes.content}>
                    <h1>We have registered your Request.</h1>
                    <h2>Our team will reach out to you soon!</h2>
                </div>
                <br /><br />
                <Button onClick={() =>props.history.push("/")} block className={classes.actionButton}>
                    Go to Homescreen
                </Button>
            </Col>
        </Row>
    )
}
