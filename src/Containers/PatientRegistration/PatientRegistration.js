import React, { useState } from "react";
import classes from "../RegistrationForm.module.css";
import { Col, Row, Input, Radio, Button, Select, Checkbox } from "antd";
import "firebase/firestore";
import { message } from "antd";
import firebase from "../../Firebase/FirebaseConfig";
const { Option } = Select;

var db = firebase.firestore();

export default function PlasmaRecipientForm(props) {
    const [name, setName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [emailid, setEmailId] = useState("");
    const [age, setAge] = useState("");
    const [symptoms, setSymptom] = useState("");
    const [result, setResult] = useState("");
    const [checked, setChecked] = useState(false);

    // OnChangeHandler for "name", "mobileNumber"
    const onChangeHandler = (e, type) => {
        if (type === "name") {
            setName(e.target.value);
        } else if (type === "mobileNumber") {
            setMobileNumber(e.target.value);
        } else if (type === "emailid") {
            setEmailId(e.target.value);
        }
    };


    const submitHandler = () => {
        if (name === "") return message.error("Name Required");
        if (mobileNumber === "") return message.error("Mobile Number Required");
        if (emailid === "") return message.error("Email Id Required");
        db.collection("Recipient")
            .add({
                name: name,
                mobileNumber: mobileNumber,
                emailid:emailid,
                age: age,
                result: result,
                symptoms: symptoms,
            })
            .then((docRef) => {
                props.history.push('/patient-registered')
            })
            .catch((error) => {
                message.error("Something went wrong")
            });
    };


    return (
        <>
            <div className={classes.body}>
                <div className={classes.formTitle}>
                    <h1>Register As A Patient</h1>
                </div>
                <Row className={classes.formBox}>
                    <div style={{ width: "100vw" }}>
                        <div className={classes.formField}>
                            <p className={classes.title}>name</p>
                            <Input
                                type='text'
                                onChange={(e) => onChangeHandler(e, "name")}
                                className={classes.inputFieldChanC}
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
                            <p className={classes.title}>email id</p>
                            <Input
                                type='email'
                                // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                onChange={(e) => onChangeHandler(e, "emailid")}
                                className={classes.inputField}
                                placeholder='Enter your Email ID'
                            />
                        </div>
                    </div>
                </Row>
            </div>
            <div className={classes.body}>
                <div className={classes.formTitle}>
                    <h1>COVID Details</h1>
                </div>
                <Row className={classes.formBox}>
                    <div className={classes.formField}>
                        <p className={classes.title}>what's your age?</p>
                        <Radio.Group
                            size='large'
                            buttonStyle="solid"
                            onChange={(e) => onChangeHandler(e, "age")}
                            className={classes.radioGroup}>
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
                    </div>
                </Row>
                <Row className={classes.formBox}>
                    <div className={classes.formField}>
                        <p className={classes.title}>Have You Tested Positive For Coronavirus?</p>
                        <Radio.Group
                            size='large'
                            buttonStyle="solid"
                            onChange={(e) => onChangeHandler(e, "result")}
                            className={classes.radioGroup}>
                            <Radio.Button className={classes.radioButton1} value='Yes'>
                                Yes, Tested positive for Coronavirus.
                            </Radio.Button>
                            <br /><br />
                            <Radio.Button className={classes.radioButton1} value='No'>
                                No, but I have symptoms.
                            </Radio.Button>
                        </Radio.Group>
                    </div>
                    <br />
                </Row>
                <Row className={classes.formBox}>
                    <div className={classes.formField}>
                        <Checkbox.Group style={{ width: '100%' }} onChange={(e) => onChangeHandler(e, "symptoms")}>
                            <Row>
                                <Col span={8}>
                                    <Checkbox value="Fever">Fever</Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="Cough">Cough</Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="Loss of Smell">Loss of Smell</Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="Loss of Taste">Loss of Taste</Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="Sore Throat">Sore Throat</Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="Loss of Breath">Loss of Breath</Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="Dizziness">Dizziness</Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="Headache">Headache</Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="Fatigue">Fatigue</Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="Anxiety">Anxiety</Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="Diarrhoea">Diarrhoea</Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="Body Pain">Body Pain</Checkbox>
                                </Col>
                            </Row>
                        </Checkbox.Group>
                    </div>
                </Row>
                <br />
                <Row className={classes.formBox}>
                    <Button block className={classes.Button} onClick={submitHandler}>
                        Register Now
                    </Button>
                </Row>

            </div>
        </>
    );
}
