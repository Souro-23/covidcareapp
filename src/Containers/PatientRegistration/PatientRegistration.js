import React, {  useState,useEffect } from "react";
import classes from "../RegistrationForm.module.css";
import { Col, Row, Input, Radio, Button, Select } from "antd";
import "firebase/firestore";
import { message } from "antd";
import firebase from "../../Firebase/FirebaseConfig";


// images
import anxiety from "./images/anxiety.svg";
import bodypain from "./images/bodypain.svg";
import cough from "./images/cough.svg"
import diarrhea from "./images/diarrhea.svg";
import dizziness from "./images/dizziness.svg";
import fatigue from "./images/fatigue.svg";
import fever from "./images/fever.svg";
import headache from "./images/headache.svg";
import lungs from "./images/lungs.svg";
import nose from "./images/nose.svg";
import sore from "./images/sore.svg";
import taste from "./images/taste.svg";



var db = firebase.firestore();


export default function PlasmaRecipientForm(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const symptom = [
        {
            name: "Fever",
            selected: false,
            image: fever
        },
        {
            name: "Cough",
            selected: false,
            image: cough
        },
        {
            name: "Loss of Smell",
            selected: false,
            image: nose
        },
        {
            name: "Loss of Taste",
            selected: false,
            image: taste
        },
        {
            name: "Sore Throat",
            selected: false,
            image: sore
        },
        {
            name: "Loss of Breath",
            selected: false,
            image: lungs
        },
        {
            name: "Dizziness",
            selected: false,
            image: dizziness
        },
        {
            name: "Headache",
            selected: false,
            image: headache
        },
        {
            name: "Fatigue",
            selected: false,
            image: fatigue
        },
        {
            name: "Anxiety",
            selected: false,
            image: anxiety
        },
        {
            name: "Diarrhoea",
            selected: false,
            image: diarrhea
        },
        {
            name: "Body Pain",
            selected: false,
            image: bodypain
        }
    ]

    const [symptoms, setSymptoms] = useState(symptom)
    const [name, setName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [emailid, setEmailId] = useState("");
    const [age, setAge] = useState("");
    const [result, setResult] = useState(false);
    const [loading, setLoading] = useState(false)

    const [have, setHave] = useState(false)


    // OnChangeHandler for "name", "mobileNumber"
    const onChangeHandler = (e, type) => {
        if (type === "name") {
            setName(e.target.value);
        } else if (type === "mobileNumber") {
            setMobileNumber(e.target.value);
        } else if (type === "emailid") {
            setEmailId(e.target.value);
        }
        else if (type === "age") {
            setAge(e.target.value)
        }
        else if(type==="result"){
            setResult(e.target.value)
        }
    };

    const symptomHandler = (Index) => {
        let newstate = symptoms.map((item, index) => {
            if (index == Index) {
                return {
                    name: item.name,
                    selected: !item.selected,
                    image: item.image
                }
            }

            return item
        })
        setSymptoms(newstate)
    }

    const submitHandler = () => {
        if (name === "") return message.error("Name Required");
        if (mobileNumber === "") return message.error("Mobile Number Required");
        if (emailid === "") return message.error("Email Id Required");
        if(result===false) return message.error("Please Fill All The Details")
        var noofsymptoms = 0;
        var selectedsymptoms = [];
        for (var i = 0; i < symptoms.length; i++) {
            if (symptoms[i].selected) {
                noofsymptoms = noofsymptoms + 1;
                selectedsymptoms.push(symptoms[i].name);
            }
        }
        setLoading(true)

        db.collection("Patients")
            .add({
                name: name,
                mobileNumber: mobileNumber,
                emailid: emailid,
                age: age,
                testedPositive: result,
                symptoms: selectedsymptoms,
            })
            .then((docRef) => {
                setLoading(false)
                props.history.push('/patient-registered')
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
                    <div className={classes.formBox}>
                        <div className={classes.formField}>
                            <p><b>What's Your Age?</b></p>
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
                        </div>
                    </div>
                    <br />

                    <Row className={classes.formBox}>
                        <div className={classes.formField} style={{ height: "auto" }}>
                            <p><b>Have You Tested Positive For Coronavirus?</b></p>
                            <Radio.Group
                                size="large"
                                buttonStyle="solid"
                                onChange={(e) => onChangeHandler(e, "result")}
                                className={classes.patientGroup}
                                >
                                <Radio.Button onClick={()=>setHave(false)} className={classes.radioButton1} value='Yes'>
                                    Yes, Tested positive for Coronavirus.
                            </Radio.Button>
                                <br /><br />
                                <Radio.Button onClick={()=>setHave(true)} className={classes.radioButton1} style={{ marginTop: "10px", width: "100%" }} value='No'>
                                    No, but I have symptoms.
                            </Radio.Button>
                            </Radio.Group>
                        </div>

                    </Row>
                    <br />
                    {have?
                    <Row className={classes.formBox}>
                        <div  style={{ height: "auto" }}>
                            <Row className={classes.symptomsBox}>
                                {
                                    symptoms.map((item, index) => (
                                        <Col key={index} onClick={() => symptomHandler(index)} justify="center" span={7} className={item.selected ? classes.selectedcheckBox1 : classes.checkBox1}>
                                            <label style={{ textAlign: 'center' }} for="fever">
                                                <img src={item.image} />
                                                <div className={classes.text}> {item.name} </div>
                                            </label>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </div>
                    </Row>
                    :
                    null
                    }
                    <br />
                    <Row justify="center" >
                        <Col lg={8} sm={16} xs={20}>
                            <Button loading={loading} block className={classes.Button} onClick={() => submitHandler()}>
                                Register Now
                    </Button>
                        </Col>
                    </Row>
                    <br /><br />

                </div>
            </Col>
        </Row>
    );
}
