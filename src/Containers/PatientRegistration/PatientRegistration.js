import React, { useEffect, useState } from "react";
import classes from "../RegistrationForm.module.css";
import { Col, Row, Input, Radio, Button, Select, Checkbox } from "antd";
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


const { Option } = Select;


var db = firebase.firestore();




export default function PlasmaRecipientForm(props) {

    const symptom=[
        {
            name:"Fever",
            selected:false,
            image:fever
        },
        {
            name:"Cough",
            selected:false,
            image:cough
        },
        {
            name:"Loss of Smell",
            selected:false,
            image:nose
        },
        {
            name:"Loss of Taste",
            selected:false,
            image:taste
        },
        {
            name:"Sore Throat",
            selected:false,
            image:sore
        },
        {
            name:"Loss of Breath",
            selected:false,
            image:lungs
        },
        {
            name:"Dizziness",
            selected:false,
            image:dizziness
        },
        {
            name:"Headache",
            selected:false,
            image:headache
        },
        {
            name:"Fatigue",
            selected:false,
            image:fatigue
        },
        {
            name:"Anxiety",
            selected:false,
            image:anxiety
        },
        {
            name:"Diarrhoea",
            selected:false,
            image:diarrhea
        },
        {
            name:"Body Pain",
            selected:false,
            image:bodypain
        }
    ]
    
    const [symptoms, setSymptoms] = useState(symptom)
    const [name, setName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [emailid, setEmailId] = useState("");
    const [age, setAge] = useState("");
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
    

    

    const symptomHandler=(Index)=>{
        console.log("i am being touched")
        let newstate =symptoms.map((item, index)=>{
            if(index == Index ){
                console.log("i am same for index",index)
                return {
                    name:item.name,
                    selected:!item.selected,
                    image:item.image
                } 
            }
            console.log("i am different")
            return item
        })
        console.log(newstate,"in patient")
    
        setSymptoms(newstate)
    }

    const submitHandler = () => {
        if (name === "") return message.error("Name Required");
        if (mobileNumber === "") return message.error("Mobile Number Required");
        if (emailid === "") return message.error("Email Id Required");
            var noofsymptoms =0;
            var selectedsymptoms=[];
        for(var i=0;i<symptoms.length;i++){
            if(symptoms[i].selected){
                noofsymptoms = noofsymptoms+ 1;
                selectedsymptoms.push(symptoms[i].name);
            }
        }
        if(noofsymptoms===0){
            message.error("You don't have any symptoms");
        }
        console.log(selectedsymptoms);
        return;
        db.collection("Recipient")
            .add({
                name: name,
                mobileNumber: mobileNumber,
                emailid: emailid,
                age: age,
                result: result,
                symptoms: selectedsymptoms,
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
                <Row className={classes.formBox}>
                    <div className={classes.formField}>
                        <p><b>What's Your Age?</b></p>
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
                <br />

                <Row className={classes.formBox}>
                    <div className={classes.formField} style={{ height: "auto" }}>
                        <p><b>Have You Tested Positive For Coronavirus?</b></p>
                        <Radio.Group
                            buttonStyle="solid"
                            onChange={(e) => onChangeHandler(e, "result")}
                            className={classes.radioGroup}>
                            <Radio.Button className={classes.radioButton1} value='Yes'>
                                Yes, Tested positive for Coronavirus.
                            </Radio.Button>
                            <br /><br />
                            <Radio.Button className={classes.radioButton1} style={{ marginTop: "10px", width: "100%" }} value='No'>
                                No, but I have symptoms.
                            </Radio.Button>
                        </Radio.Group>
                    </div>

                </Row>
                <br />
                <Row className={classes.formBox}>
                    <div className={classes.formField} style={{ height: "auto" }}>
                    <Row>
                        {
                            symptoms.map((item,index)=>(
                                    <Col key={index} onClick={()=>symptomHandler(index)} justify="center" span={7}   className={item.selected?classes.selectedcheckBox1:classes.checkBox1}>
                                            <label  style={{textAlign:'center'}}  for="fever">
                                                {/* <Checkbox value="Fever">Fever</Checkbox> */}
                                                <img src={item.image} />
                                                {/* <input type="checkbox" id="fever" style={{display:'none'}} /> */}
                                                <div className={classes.text}> {item.name} </div>
                                            </label>
                                    </Col>
                            ))
                        }
                    </Row>
                    </div>
                </Row>
                <br />
                <Row justify="center" >
                    <Col lg={8} sm={16} xs={20}>
                        <Button block className={classes.Button} onClick={() => submitHandler()}>
                            Register Now
                    </Button>
                    </Col>
                </Row>
                <br/><br/>

            </div>
        </>
    );
}
