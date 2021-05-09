import React, { useState } from "react";
import classes from "../RegistrationForm.module.css";
import BeforeForm from "./Before/BeforeForm";
import { Button, Col, message, Row } from "antd";
import firebase from "../../Firebase/FirebaseConfig";
import "firebase/firestore";
import AfterForm from "./After/AfterForm";
import FormHeader from "../../Components/FormHeader/FormHeader";

var db = firebase.firestore();


export default function PlasmaDonorForm(props) {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [location, setLocation] = useState("");
    const [bloodGroup, setBloodGroup] = useState("");
    const [validAge, setvalidAge] = useState(false)
    const [covidPositive, setCovidPositive] = useState(false)
    const [recovered, setrecovered] = useState(false)
    const [date, setDate] = useState(null);
    const [checked, setChecked] = useState(false)
    const [loading, setLoading] = useState(false)
    const [step, setStep] = useState(0);
    // OnChangeHandler for "name", "mobileNumber"
    const onChangeHandler = (e, type) => {
        if (type === "name") {
            setName(e.target.value);
        } else if (type === "mobileNumber") {
            setMobileNumber(e.target.value);
        }
    };
    const stepHandler = (val) => {
        if (checkForm1Status() === "Success") setStep(val);
    };
    const checkForm1Status = () => {
        if (name === "") return message.error("Name Required");
        if (mobileNumber === "") return message.error("Mobile Number Required");
        if (gender === "") return message.error("Gender Required");
        if (location === "") return message.error("location Required");
        return "Success";
    };
    const dateHandler = (date, dateString) => {
        setDate(dateString);
    };


    const submitHandler = () => {
        if (bloodGroup === "") return message.error("Blood Group Required");

        if (validAge === false) return message.error("Valid Age Required");

         
        if (date === "") return message.error("Date Required");

        if (recovered == false) return message.error("You need to get Fully Recovered And Free Of Symptoms");

        if (checked === false) return message.error("Checkbox Empty");

        setLoading(true)
        db.collection("Donors")
            .add({
                name: name,
                phone: mobileNumber,
                gender: gender,
                location: location,
                bloodGroup: bloodGroup,
                screeningDate: date,
                timestamp: new Date(),
            })
            .then((docRef) => {
                setLoading(false)
                props.history.push("/donor-registered/"+docRef.id)
            })
            .catch((error) => {
                setLoading(false)
                console.error("Error adding document: ", error);
            });
    };


    return <>
        <div className={classes.body}>
            <Row justify="center" >
                <Col lg={8} sm={16} xs={23}>
                    <FormHeader title="Register As A Donor" onBackPress={() => props.history.push('/')} />
                </Col>
            </Row>
            <Row justify="center" >
                <Col className={classes.formBox} lg={8} sm={16} xs={23}>
                    {step === 0 ?
                        <BeforeForm
                            namePhoneHandler={onChangeHandler}
                            onGenderChange={setGender}
                            onLocationChange={setLocation}
                            onStepHandler={stepHandler}
                        />
                        :
                        <AfterForm
                            onBloodChange={setBloodGroup}
                            onDateChange={dateHandler}
                            onCheckedHandler={setChecked}
                            onSubmitHandler={submitHandler}
                            onSetvalidAge={setvalidAge}
                            onSetrecovered={setrecovered}

                        />}
                    <Button loading={loading} onClick={step === 0 ? () => stepHandler(1) : submitHandler} block className={classes.Button}>
                        {step === 0 ?
                            "Continue" :
                            "Register Now"}
                    </Button>
                </Col>
            </Row>

        </div>
    </>;
}