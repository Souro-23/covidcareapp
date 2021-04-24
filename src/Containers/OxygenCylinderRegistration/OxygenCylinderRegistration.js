import { Col, Row, Input, Radio, Button, Select } from "antd";
import React, { useState } from "react";
import classes from "../RegistrationForm.module.css";
import "firebase/firestore";
import { message } from "antd";
import firebase from "../../Firebase/FirebaseConfig";
import states from '../DonorRegistration/states.json'
import {locations} from '../../Constants/location'

const { Option } = Select;

var db = firebase.firestore();

export default function FoodRegistration(props) {

    const [name, setName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [checked, setChecked] = useState(false);
    const [location, setLocation] = useState("");
    const [streetNumber, setStreetNumber] = useState("");
    const [isVerified, setIsVerified] = useState("");
    const [state, setSate] = useState("");
    const [loading, setLoading] = useState(false)




    // OnChangeHandler for "name", "mobileNumber"
    const onChangeHandler = (e, type) => {
        if (type === "name") {
            setName(e.target.value);
        } else if (type === "mobileNumber") {
            setMobileNumber(e.target.value);
        }
        else if (type === "streetNumber") {
            setStreetNumber(e.target.value);
        }
        else if (type === "location") {
             setLocation(e);
           
        }
        else if (type === "state") {
            setSate(e);
        }
        else if (type === "isVerified") {
            setIsVerified(e.target.value);
        }

    };


    const submitHandler = () => {
        if (name === "") return message.error("Name Required");
        if (mobileNumber === "" ||  mobileNumber.length!==10 ) return message.error("Valid Mobile Number Required");
        if (state === "") return message.error("State Required");
        if (location === "") return message.error("District Required");
        if (streetNumber === "") return message.error("Street Number Required");
        if (isVerified === "") return message.error("Fill All Field");
        setLoading(true)
        db.collection("OxygenCylinders")
            .add({
                name: name,
                phone: mobileNumber,
                state: state,
                streetNumber: streetNumber,
                verified: isVerified,
                location: location,
            })
            .then((docRef) => {
                setLoading(false)
                props.history.push('/oxygen-cylinder-registered')
            })
            .catch((error) => {
                setLoading(false)
                message.error("Something went wrong")
            });
    };
    return (
        <div className={classes.body}>
            <div className={classes.formTitle}>
                <h1>Avail Oxygen Cylinders</h1>
                <h1> Basic Details </h1>
            </div>

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
                        <p className={classes.title}>mobile number</p>
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
                <div className={classes.formTitle}>
                    <h1>Cylinder Location Details</h1>
                </div>
            </Row>
            <Row justify="center">
                <Col className={classes.formBox} lg={8} sm={16} xs={23}>
                    <div className={classes.formField}>
                        <p className={classes.title}>street/home Number</p>
                        <Input
                            type="text"
                            class="alphanumericOnly"
                            onkeyup="this.value=this.value.replace(/[^a-zA-Z0-9]/g, '')"
                            onChange={(e) => onChangeHandler(e, "streetNumber")}
                            className={classes.inputField}
                            placeholder='Enter Street/Home number'
                        />
                    </div>

                    <div className={classes.formField}>
                        <p className={classes.title}>select district</p>
                        <Select
                            placeholder='Select District'
                            showSearch
                            style={{ width: "100%" }}
                            onChange={(e) => onChangeHandler(e, "location")}>
                            {locations.map((loc) => {
                                return <Option value={loc}>{loc}</Option>;
                            })}
                        </Select>
                    </div>

                    <div className={classes.formField}>
                        <p className={classes.title}>
                            select your state
                    </p>

                        <Select showSearch placeholder="Select state" style={{ width: '100%' }} onChange={(e) => onChangeHandler(e, "state")}>
                            {states.map(state => {
                                return (
                                    <Option value={state.key}>{state.name}</Option>
                                )
                            })
                            }
                        </Select>

                    </div>
                </Col>
            </Row>
            <br/>
            <Row justify="center">
                <Col className={classes.formBox} lg={8} sm={16} xs={23}>
                <p>Is the above Information verified?</p>
                    <Radio.Group
                        size='large'
                        buttonStyle="solid"
                        onChange={(e) => onChangeHandler(e, "isVerified")}
                        className={classes.radioGroup}>
                        <Radio.Button className={classes.radioButton} value='Yes'>
                            Yes
                        </Radio.Button>
                        <Radio.Button className={classes.radioButton} value='No'>
                            No
                        </Radio.Button>
                    </Radio.Group>
                </Col>
            </Row>
            <br />
            <Row justify="center" >
                <Col lg={8} sm={16} xs={20}>
                    <Button loading={loading} block className={classes.Button} onClick={submitHandler}>
                        Register Information
                    </Button>
                </Col>
            </Row>
            <br /><br />
        </div >
    )
}
