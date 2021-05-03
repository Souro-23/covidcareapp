import React, { useState } from 'react'
import { Col, Row, Input, Radio, Button, message } from "antd";
import classes from "../RegistrationForm.module.css";
import FormHeader from "../../Components/FormHeader/FormHeader";
import firebase from "../../Firebase/FirebaseConfig";


var db = firebase.firestore();




export default function BreathingSessionRegistration(props) {
    const [name, setName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [age, setAge] = useState("");
    const [stressed, setStressed] = useState("");
    const [timeSlot, setTimeSlot] = useState("")
    const [loading, setLoading] = useState(false)

    const [have, setHave] = useState(false)
    const onChangeHandler = (e, type) => {
        if (type === "name") {
            setName(e.target.value);
        } else if (type === "mobileNumber") {
            setMobileNumber(e.target.value);
        }
        else if (type === "age") {
            setAge(e.target.value)
        }
        else if (type === "stressed") {
            setStressed(e.target.value)
        }
        else if (type === "timeSlot") {
            setTimeSlot(e.target.value)
        }
    };
    const submitHandler = () => {
        if (name === "") return message.error("Name Required");
        if (mobileNumber === "") return message.error("Mobile Number Required");
        if(stressed==="") return message.error("Fill All The Details")
        if(timeSlot==="") return message.error("Time Slot Required")
        setLoading(true)

        db.collection("BreathingSessions")
            .add({
                name: name,
                phone: mobileNumber,
                age: age,
                timeSlot:timeSlot,
                stressed:stressed,
                timestamp: new Date()
            })
            .then((docRef) => {
                setLoading(false)
                props.history.push('/breathing-session-registered/'+docRef.id)
            })
            .catch((error) => {
                setLoading(false)
                console.log(error)
                message.error("Something went wrong")
            });
    };
    return (
        <Row justify="center" >
            <Col lg={8} sm={16} xs={23}>
                <div className={classes.body}>
                    <FormHeader title="Free Breathing Sessions" onBackPress={() => props.history.push('/')} />
                    <Row className={classes.formBox}>
                        <Col>
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
                                <p className={classes.title}>mobile number</p>
                                <Input
                                    type='number'
                                    onChange={(e) => onChangeHandler(e, "mobileNumber")}
                                    className={classes.inputField}
                                    placeholder='Enter your Mobile Number'
                                />
                            </div>
                            <p>What's Your Age?</p>
                            <Radio.Group
                                size='large'
                                buttonStyle="solid"
                                onChange={(e) => onChangeHandler(e, "age")}
                                className={classes.radioGroup}
                            >
                                <Radio.Button className={classes.radioButton} value='18-35'>
                                    18-35
                                </Radio.Button>
                                <Radio.Button className={classes.radioButton} value='35-50'>
                                    35-50
                                </Radio.Button>
                                <Radio.Button className={classes.radioButton} value='50+'>
                                    50+
                                </Radio.Button>
                            </Radio.Group>

                            <div className={classes.formField} style={{ height: "auto" }}>
                                <p>What you are Feeling ?</p>
                                <Radio.Group
                                    size="large"
                                    buttonStyle="solid"
                                    onChange={(e) => onChangeHandler(e, "stressed")}
                                    className={classes.patientGroup}
                                >
                                    <Radio.Button onClick={() => setHave(false)} className={classes.radioButton1} value='no'>
                                        <p style={{ width: "250px" }}>I am feeling fine</p>
                                    </Radio.Button>
                                    <br /><br />
                                    <Radio.Button onClick={() => setHave(true)} className={classes.radioButton1} style={{ marginTop: "10px", width: "100%" }} value='yes'>
                                        I feel stressed
                            </Radio.Button>
                                </Radio.Group>
                            </div>
                            <p>Select your time slot</p>
                            <p>Typically we are running two batches -<br />
                                <span style={{ color: "orangered" }}>mon to wed</span>  & <span style={{ color: "orangered" }}>Thurs-sat</span>
                                <br />
                        Select your preferred time slot to join any of the Above batches</p>
                            <Radio.Group
                                size="large"
                                buttonStyle="solid"
                                onChange={(e) => onChangeHandler(e, "timeSlot")}
                                style={{width:"100%"}}
                            >

                                <div style={{display:"flex", width:"100%"}}>
                                    <Radio.Button style={{ width: "50%" }} onClick={() => setHave(false)} className={classes.radioButton} value='0700-0730'>
                                        <small>7:00 - 7:30 am</small>
                                    </Radio.Button>
                                    <Radio.Button style={{ width: "50%" }} onClick={() => setHave(true)} className={classes.radioButton} value='1000-1030'>
                                        <small>10:00 - 10:30 am</small>
                                    </Radio.Button>
                                </div>
                                <div style={{display:"flex", width:"100%", marginTop:"10px"}}>
                                <Radio.Button style={{ width: "50%" }} onClick={() => setHave(false)} className={classes.radioButton} value='1600-1630'>
                                    <small>4:00 - 4:30 pm</small>
                                </Radio.Button>
                                 <Radio.Button style={{width:"50%"}}  onClick={() => setHave(true)} className={classes.radioButton} value='1900-1930'>
                                <small>7:00 - 7:30 pm</small>
                            </Radio.Button>
                                </div>
                                <div style={{display:"flex", width:"100%", marginTop:"10px"}}>
                                <Radio.Button style={{width:"50%"}}  onClick={() => setHave(false)} className={classes.radioButton}  value='2100-2130'>
                                <small>9:00 - 9:30 pm</small>
                            </Radio.Button>
                                <Radio.Button style={{width:"50%"}}  onClick={() => setHave(true)} className={classes.radioButton} value='2300-2330'>
                                <small>11:00 - 11:30 pm</small>
                            </Radio.Button>
                                </div>

                            </Radio.Group>
                            <br/><br/>
                            <Button loading={loading} block className={classes.Button} onClick={() => submitHandler()}>
                        Register Now
                    </Button>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    )
}
