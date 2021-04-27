import { Button, Col, Row } from 'antd'
import React from 'react'
import classes from '../../Containers/Home/Home.module.css'
import icon from "../../Assets/Svgs/Congratulations1.svg"
import { copytoClipboard } from './Functions'
export default function SubmitPageRecipient(props) {

    
    return (
        <Row justify="center">
            <Col style={{ backgroundColor: "white", padding: "20px", marginTop: "40px" }} md={6} sm={16} xs={18}>
                <div className={classes.title1}>
                    <h1>Request Registered</h1>
                </div>
                <br />
                <img src={icon} style={{ height: "130px", width: "100%" }} />
                <br /><br />
                <div className={classes.content}>
                    <h1>Take Screenshot or copy this Reference Id</h1>
                    <p onClick={()=>copytoClipboard(props.match.params.docId)} style={{color:"green" , textAlign:"center", fontWeight:"bold" , cursor:"pointer"}}>{props.match.params.docId}</p>
                    
                    <h1>We have registered your Request.</h1>
                    <h2>Our team will reach out to you soon!</h2>

                </div>





                <br />
                <Button onClick={() => props.history.push("/")} block className={classes.actionButton5}>
                    Go to Homescreen
                </Button>
            </Col>
        </Row>
    )
}
