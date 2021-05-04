import React, { useState, useEffect } from "react";
import classes from "../RegistrationForm.module.css";
import { Col, Row, Input, Radio, Button, Select } from "antd";
import "firebase/firestore";
import { message } from "antd";
import firebase from "../../Firebase/FirebaseConfig";
import FormHeader from "../../Components/FormHeader/FormHeader";



var db = firebase.firestore();


export default function PlasmaRecipientForm(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    const [name, setName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [saturationLevel, setSaturationLevel] = useState("");
    const [loading, setLoading] = useState(false)


    // OnChangeHandler for "name", "mobileNumber"
    const onChangeHandler = (e, type) => {
        if (type === "name") {
            setName(e.target.value);
        } else if (type === "mobileNumber") {
            setMobileNumber(e.target.value);
        }
        else if (type === "saturationLevel") {
            setSaturationLevel(e.target.value)
        }
    };

    const submitHandler = () => {
        if (name === "") return message.error("Name Required");
        if (mobileNumber === "") return message.error("Mobile Number Required");
        if (saturationLevel === "") return message.error("O2 Saturation Level Required");

        setLoading(true)

        db.collection("Patients")
            .add({
                name: name,
                phone: mobileNumber,
                saturationLevel: saturationLevel,
                timestamp: new Date()
            })
            .then((docRef) => {
                setLoading(false)
                props.history.push('/freeconsultation')
            })
            .catch((error) => {
                setLoading(false)
                message.error("Something went wrong")
            });
    };


    return (
        <Row justify="center" >
            <Col lg={8} sm={16} xs={23}>
                <div className={classes.body}>
                    <FormHeader title="Register As A Patient" onBackPress={() => props.history.push('/')} />
                    
                    <Row className={classes.formBox}>
                        <div style={{ width: "100vw" }}>
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
                            <div className={classes.formField}>
                                <p className={classes.title}>Oxygen Saturation without any support</p>
                                <Input
                                    type='text'
                                    onChange={(e) => onChangeHandler(e, "saturationLevel")}
                                    className={classes.inputField}
                                    placeholder='Enter Oxygen Saturation'
                                />
                            </div>
                            <Button loading={loading} block className={classes.Button} onClick={() => submitHandler()}>Register Now</Button>
                            <br /><br />
                        </div>
                    </Row>
                </div>
            </Col>
        </Row>
    );
}
