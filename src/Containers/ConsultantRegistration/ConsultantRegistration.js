import React, { useState } from "react";
import classes from "../RegistrationForm.module.css";
import { Button, Col, Input, message, Row } from "antd";
import firebase from "../../Firebase/FirebaseConfig";
import "firebase/firestore";

const slots = [
    {time:"6am - 12pm", session:"Morning"},
    {time:"12am - 6pm", session:"Morning"},
    {time:"6pm - 12am", session:"Morning"},
    {time:"12am - 6am", session:"Morning"},
];


export default function ConsultantRegistration(props) {
    const [name, setName] = useState("");
    const [whatsappNo, setWhatsappNo] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [MCINumber, setMCINumber] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [slot, setSlot] = useState("");
    const [consultTime, setConsultTime] = useState(false);



    const onChangeHandler = (e, type) => {
        if (type === "name") {
            setName(e.target.value);
        } else if (type === "mobileNumber") {
            setMobileNumber(e.target.value);
        } else if (type === "whatsappNo") {
            setWhatsappNo(e.target.value);
        }
        else if (type === "MCINumber") {
            setMCINumber(e.target.value);
        } else if (type === "specialization") {
            setSpecialization(e.target.value);
        }
    };
    return (
        <div className={classes.body}>
            <div className={classes.formTitle}>
                <h1>Register As A Counsellor/Doctor</h1>
            </div>
            <Row justify="center" >
                <Col lg={8} sm={16} xs={20}>
                    <h2><b>Basic Details</b></h2>
                </Col>
            </Row>

            <Row justify="center" >
                <Col className={classes.formBox} lg={8} sm={16} xs={23}>
                    <div className={classes.formField}>
                        <p className={classes.title}>name</p>
                        <Input
                            type='text'
                            onChange={(e) => onChangeHandler(e, "name")}
                            className={classes.inputField}
                            placeholder='Enter your Name'
                        />
                    </div>
                    <div className={classes.formField}>
                        <p className={classes.title}>whatsapp number</p>
                        <Input
                            type='number'
                            onChange={(e) => onChangeHandler(e, "mobileNumber")}
                            className={classes.inputField}
                            placeholder='Enter your Mobile Number'
                        />
                    </div>
                    <div className={classes.formField}>
                        <p className={classes.title}>alternative phone number <small style={{ color: "grey" }}>(optional)</small></p>
                        <Input
                            type='number'
                            onChange={(e) => onChangeHandler(e, "mobileNumber")}
                            className={classes.inputField}
                            placeholder='Enter your Mobile Number'
                        />
                    </div>
                </Col>
            </Row>
            <Row justify="center" >
                <Col lg={8} sm={16} xs={20}>
                    <br />
                    <h2><b>Occupational details</b></h2>
                </Col>
            </Row>

            <Row justify="center" >
                <Col className={classes.formBox} lg={8} sm={16} xs={23}>
                    <div className={classes.formField}>
                        <p className={classes.title}>MCI NUMBER</p>
                        <Input
                            type='number'
                            onChange={(e) => onChangeHandler(e, "MCINumber")}
                            className={classes.inputField}
                            placeholder='Enter your MCI Number'
                        />
                    </div>
                    <div className={classes.formField}>
                        <p>In What You Specialize?</p>
                        <Input
                            type='text'
                            onChange={(e) => onChangeHandler(e, "specialization")}
                            className={classes.inputField}
                            placeholder='Select your specialization'
                        />
                    </div>

                </Col>
            </Row>
            <Row justify="center" >
                <Col lg={8} sm={16} xs={20}>
                    <br />
                    <h2><b>Availability Details</b></h2>
                </Col>
            </Row>
            <Row justify="center" >
                <Col className={classes.formBox} lg={8} sm={16} xs={23}>
                    <div className={classes.formField} style={{height:"auto"}} >
                        <p>Select a slot when You Will Be Available For Consultation ?</p>
                        <Row gutter={[10,10]}>
                        {slots.map(slot=>(
                            <Col span={8}>
                                <div className={classes.timeSlot}  style={{width:"100%",textAlign:"center",backgroundColor:"#A8A8A829", border:"1px solid #C9C9C9", borderRadius:"3px"}} >                  
                                    <p style={{marginBottom:"0", fontWeight:"600"}}>{slot.time}</p>
                                    <small>{slot.session}</small>
                                </div>
                            </Col>
                        ))}
                        </Row>
                    </div>
                </Col>
            </Row>
            <br/>
            <Row justify="center" >
                <Col lg={8} sm={16} xs={20}>
                    <Button
                        block
                        onClick={()=>props.history.push('/consultant-registered')}
                        className={classes.Button}>
                        Register Now
                        </Button>
                </Col>
            </Row>
            <br/><br/>
            
        </div>
    )
}
