import { Col, Row, Input, Radio, Button, Select } from "antd";
import React, { useState, useEffect } from "react";
import classes from "../RegistrationForm.module.css";
import "firebase/firestore";
import { message } from "antd";
import firebase from "../../Firebase/FirebaseConfig";
import states from '../DonorRegistration/states.json'
import { locations } from '../../Constants/location'
import FormHeader from "../../Components/FormHeader/FormHeader";

const { Option } = Select;

var db = firebase.firestore();

export default function FoodRegistration(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    const [name, setName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [checked, setChecked] = useState(false);
    const [location, setLocation] = useState("");
    const [streetNumber, setStreetNumber] = useState("");
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

    };


    const submitHandler = () => {
        if (name === "") return message.error("Name Required");
        if (mobileNumber === "") return message.error("Valid Mobile Number Required");
        if (location === "") return message.error("Location Required");
        if (streetNumber === "") return message.error("Street Number Required");
        setLoading(true)
        db.collection("OxygenCylinders")
            .add({
                name: name,
                phone: mobileNumber,
                streetNumber: streetNumber,
                verified: "no",
                location: location,
                timestamp: new Date()
            })
            .then((docRef) => {
                setLoading(false)
                props.history.push('/oxygen-cylinder-registered/'+docRef.id)
            })
            .catch((error) => {
                setLoading(false)
                message.error("Something went wrong")
            });
    };
    return (
        <div className={classes.body}>
            <Row justify="center" >
                <Col lg={8} sm={16} xs={23}>
                    <FormHeader title="Share lead for O2 cylinder" onBackPress={() => props.history.push('/')} />
                </Col>
            </Row>
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
                <Col lg={8} sm={16} xs={20}>
                    <br/>
                    <h2><b>Cylinder Location Details</b></h2>
                </Col>
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
                        <p className={classes.title}>Select District</p>
                        <Select
                            placeholder='Select District'
                            listHeight={570}
                            style={{ width: "100%" }}
                            onChange={(e) => onChangeHandler(e, "location")}>
                            {locations.map((loc) => {
                                return <Option value={loc}>{loc}</Option>;
                            })}
                        </Select>
                    </div>
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
