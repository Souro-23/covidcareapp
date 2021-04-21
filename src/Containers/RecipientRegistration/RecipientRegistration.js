import React, { useState } from "react";
import classes from "../RegistrationForm.module.css";
import BeforeForm from "./Before/BeforeForm";
import AfterForm from "./After/AfterForm";
import { message } from "antd";
import firebase from "../../Firebase/FirebaseConfig";
import "firebase/firestore";

var db = firebase.firestore();

export default function PlasmaRecipientForm(props) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [state, setState] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [location, setLocation] = useState("");
  const [covidPositive, setCovidPositive] = useState(null);
  const [date, setDate] = useState("");
  const [checked, setChecked] = useState(false);
  const [step, setStep] = useState(0);

  // OnChangeHandler for "name", "mobileNumber"
  const onChangeHandler = (e, type) => {
    if (type === "name") {
      setName(e.target.value);
    } else if (type === "mobileNumber") {
      setMobileNumber(e.target.value);
    }
  };

  const dateHandler = (date, dateString) => {
    setDate(dateString);
  };

  const stepHandler = (val) => {
    if (checkForm1Status() === "Success") setStep(val);
  };

  const checkForm1Status = () => {
    if (name === "") return message.error("Name Required");
    if (mobileNumber === "") return message.error("Mobile Number Required");
    if (gender === "") return message.error("Gender Required");
    if (state === "") return message.error("State Required");
    return "Success";
  };
  const submitHandler = () => {
    if (bloodGroup === "") return message.error("Blood Group Required");

    if (location === "") return message.error("Location Required");

    if (covidPositive === null)
      return message.error("CovidReport Status Required");

    if (date === "") return message.error("Date Required");

    if (checked === false) return message.error("Checkbox empty");

    db.collection("Recipient")
      .add({
        name: name,
        mobileNumber: mobileNumber,
        gender: gender,
        state: state,
        bloodGroup: bloodGroup,
        covidPositive: covidPositive,
        location: location,
        date: date,
        timestamp: new Date(),
      })
      .then((docRef) => {
        props.history.push('/recipient-registered')
      })
      .catch((error) => {
        message.error("Something went wrong")
      });
  };
  return (
    <>
      <div className={classes.body}>
        <div className={classes.formTitle}>
          <h1>Register As A Recipient</h1>
        </div>
        {step === 0 ? (
          <BeforeForm
            namePhoneHandler={onChangeHandler}
            onGenderChange={setGender}
            onStateChange={setState}
            onStepHandler={stepHandler}
          />
        ) : (
          <AfterForm
            onBloodChange={setBloodGroup}
            onLocationChange={setLocation}
            onCovidPositiveChange={setCovidPositive}
            onDateChange={dateHandler}
            onCheckedHandler={setChecked}
            onSubmitHandler={submitHandler}
          />
        )}
      </div>
    </>
  );
}
