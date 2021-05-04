import { Col, Row, Input, Radio, Button, Select } from "antd";
import React, { useState, useEffect } from "react";
import classes from "../RegistrationForm.module.css";
import "firebase/firestore";
import { message } from "antd";
import firebase from "../../Firebase/FirebaseConfig";
import { locations } from "../../Constants/location";
import FormHeader from "../../Components/FormHeader/FormHeader";

const { Option } = Select;

var db = firebase.firestore();

export default function LabTestCentersRegistration(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [location, setLocation] = useState("");
  const [charges, setCharges] = useState("");
  const [homeTest, setHomeTest] = useState("");
  const [loading, setLoading] = useState(false);

  // OnChangeHandler for "name", "mobileNumber"
  const onChangeHandler = (e, type) => {
    if (type === "name") {
      setName(e.target.value);
    } else if (type === "mobileNumber") {
      setMobileNumber(e.target.value);
    } else if (type === "charges") {
        setCharges(e.target.value);
    } else if (type === "location") {
      setLocation(e);
    } else if (type === "homeTest") {
        setHomeTest(e.target.value);
    }
  };

  const submitHandler = () => {
    if (name === "") return message.error("Name Required");
    if (mobileNumber === "" || mobileNumber.length !== 10)
      return message.error("Mobile Number Required");
    if (location === "") return message.error("District Required");
    if (homeTest === "") return message.error("Fill All Field");
    setLoading(true);
    db.collection("LabTestCenters")
      .add({
        name: name,
        phone: mobileNumber,
        charges,
        homeTest,
        location: location,
        timestamp: new Date(),
      })
      .then((docRef) => {
        setLoading(false);
        props.history.push("/Lab-Test-Center-registered/" + docRef.id);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error)
        message.error("Something went wrong");
      });
  };
  return (
    <div className={classes.body}>
      <Row justify='center'>
        <Col lg={8} sm={16} xs={23}>
          <FormHeader
            title='Lab Test'
            onBackPress={() => props.history.push("/")}
          />
        </Col>
      </Row>
      <Row justify='center'>
        <Col className={classes.formBox} lg={8} sm={16} xs={23}>
          <div className={classes.formField}>
            <p className={classes.title}>enter name of the food distributor</p>
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
            <p className={classes.title}>select district</p>
            <Select
              placeholder='Select Location'
              style={{ width: "100%" }}
              listHeight={450}
              onChange={(e) => onChangeHandler(e, "location")}>
              {locations.map((loc) => {
                return <Option value={loc}>{loc}</Option>;
              })}
            </Select>
          </div>
          <div className={classes.formField}>
            <p className={classes.title}>Price</p>
            <Input
              type='text'
              class='alphanumericOnly'
              onkeyup="this.value=this.value.replace(/[^a-zA-Z0-9]/g, '')"
              onChange={(e) => onChangeHandler(e, "charges")}
              className={classes.inputField}
              placeholder='Enter Price'
            />
          </div>
        </Col>
      </Row>
      <br/>
      <Row justify='center'>
        <Col className={classes.formBox} lg={8} sm={16} xs={23}>
          <p>Do they provide Home Test Facility?</p>
          <Radio.Group
            size='large'
            buttonStyle='solid'
            onChange={(e) => onChangeHandler(e, "homeTest")}
            className={classes.FoodradioGroup}>
            <Radio.Button className={classes.radioButton} value='yes'>
              Yes
            </Radio.Button>
            <Radio.Button className={classes.radioButton} value='no'>
              No
            </Radio.Button>
          </Radio.Group>
        </Col>
      </Row>
      <br />
      <Row justify='center'>
        <Col lg={8} sm={16} xs={20}>
          <Button
            loading={loading}
            block
            className={classes.Button}
            onClick={submitHandler}>
            Register Information
          </Button>
        </Col>
      </Row>
      <br />
      <br />
    </div>
  );
}



 