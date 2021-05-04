import React, { useEffect, useState } from "react";
import { Col, Row, Input, Radio, Button, message } from "antd";
import classes from "../RegistrationForm.module.css";
import FormHeader from "../../Components/FormHeader/FormHeader";
import firebase from "../../Firebase/FirebaseConfig";

const t = [
  { time: "7:00 - 7:30 am", selected: false, tFormat: "0700-0730" },
  { time: "10:00 - 10:30 am", selected: false, tFormat: "1000-1030" },
  { time: "4:00 - 4:30 pm", selected: false, tFormat: "1600-1630" },
  { time: "7:00 - 7:30 pm", selected: false, tFormat: "1900-1930" },
  { time: "9:00 - 9:30 pm", selected: false, tFormat: "2100-2130" },
  { time: "11:00 - 11:30 pm", selected: false, tFormat: "2300-2330" },
];

var db = firebase.firestore();

export default function BreathingSessionRegistration(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [age, setAge] = useState("");
  const [stressed, setStressed] = useState("");
  const [timeSlot, setTimeSlot] = useState(t);
  const [loading, setLoading] = useState(false);

  const onChangeHandler = (e, type) => {
    if (type === "name") {
      setName(e.target.value);
    } else if (type === "mobileNumber") {
      setMobileNumber(e.target.value);
    } else if (type === "age") {
      setAge(e.target.value);
    } else if (type === "stressed") {
      setStressed(e.target.value);
    } else if (type === "timeSlot") {
      setTimeSlot(e.target.value);
    }
  };

  const TimeSelector = (Index) => {
    let newState = timeSlot.map((item, index) => {
      if (index === Index) {
        return {
          time: item.time,
          selected: !item.selected,
          tFormat: item.tFormat,
        };
      }
      return item;
    });
    setTimeSlot(newState);
  };

  const submitHandler = () => {
    if (name === "") return message.error("Name Required");
    if (mobileNumber === "") return message.error("Mobile Number Required");
    if (stressed === "") return message.error("Fill All The Details");
    if (timeSlot === "") return message.error("Time Slot Required");
    setLoading(true);

    var selectedTime = [];
    for (var i = 0; i < timeSlot.length; i++) {
      if (timeSlot[i].selected) {
        selectedTime.push(timeSlot[i].tFormat);
      }
    }

    db.collection("BreathingSessions")
      .add({
        name: name,
        phone: mobileNumber,
        age: age,
        timeSlot: selectedTime.join(","),
        stressed: stressed,
        timestamp: new Date(),
      })
      .then((docRef) => {
        setLoading(false);
        props.history.push("/breathing-session-registered/" + docRef.id);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        message.error("Something went wrong");
      });
  };
  return (
    <Row justify='center'>
      <Col lg={8} sm={16} xs={23}>
        <div className={classes.body}>
          <FormHeader
            title='Free Breathing Sessions'
            onBackPress={() => props.history.push("/")}
          />
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
                buttonStyle='solid'
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

              <div className={classes.formField} style={{ height: "auto" }}>
                <p>What you are Feeling ?</p>
                <Radio.Group
                  size='large'
                  buttonStyle='solid'
                  onChange={(e) => onChangeHandler(e, "stressed")}
                  className={classes.patientGroup}>
                  <Radio.Button className={classes.radioButton1} value='no'>
                    I am feeling fine
                  </Radio.Button>
                  <br />
                  <br />
                  <Radio.Button
                    className={classes.radioButton1}
                    style={{ marginTop: "10px", width: "100%" }}
                    value='yes'>
                    I feel stressed
                  </Radio.Button>
                </Radio.Group>
              </div>
              <p>Select your time slot</p>
              <p>
                Typically we are running two batches -<br />
                <span style={{ color: "orangered" }}>Mon to Wed</span> &{" "}
                <span style={{ color: "orangered" }}>Thurs-Sat</span>
                <br />
                Select your preferred time slot to join any of the Above batches
              </p>

              <Row className={classes.symptomsBox}>
                {timeSlot.map((item, index) => (
                  <Col
                    onClick={() => TimeSelector(index)}
                    key={index}
                    className={classes.breathing_time}
                    span={11}>
                    <div
                      className={
                        item.selected
                          ? classes.breathing_timeSlot_selected
                          : classes.breathing_timeSlot
                      }>
                      <p
                        style={{
                          marginBottom: "0",
                          fontSize: "11px",
                          padding: "0 .3rem ",
                        }}>
                        {item.time}
                      </p>
                    </div>
                  </Col>
                ))}
              </Row>
              <br />
              <Button
                loading={loading}
                block
                className={classes.Button}
                onClick={() => submitHandler()}>
                Register Now
              </Button>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
}
