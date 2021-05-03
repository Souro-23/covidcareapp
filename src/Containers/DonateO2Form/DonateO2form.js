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

export default function FreeO2CylinderRegistration(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);

  // OnChangeHandler for "name", "mobileNumber"
  const onChangeHandler = (e, type) => {
    if (type === "name") {
      setName(e.target.value);
    } else if (type === "mobileNumber") {
      setMobileNumber(e.target.value);
    } 
    else if (type === "location") {
      setLocation(e);
    } 
  };

  const submitHandler = () => {
    if (name === "") return message.error("Name Required");
    if (mobileNumber === "" || mobileNumber.length !== 10)
      return message.error("Mobile Number Required");
    if (location === "") return message.error("District Required");
    
    setLoading(true);
    db.collection("OxygenCylinderContacts")
      .add({
        name: name,
        phone: mobileNumber,
        location: location,
        timestamp: new Date(),
      })
      .then((docRef) => {
        setLoading(false);
        props.history.push("/Donate-o2Cylinder-registered/" + docRef.id);
      })
      .catch((error) => {
        setLoading(false);
        message.error("Something went wrong");
      });
  };
  return (
    <div className={classes.body}>
      <Row justify='center'>
        <Col lg={8} sm={16} xs={23}>
          <FormHeader
            title='Donate Oxygen Cylinders'
            onBackPress={() => props.history.push("/")}
          />
        </Col>
      </Row>

      <Row justify='center'>
        <Col className={classes.formBox} lg={8} sm={16} xs={23}>
          <div className={classes.formField}>
            <p className={classes.title}>Name</p>
            <Input
              type='text'
              onChange={(e) => onChangeHandler(e, "name")}
              className={classes.inputField}
              placeholder='Enter your Name'
            />
          </div>

          <div className={classes.formField}>
            <p className={classes.title}>Mobile number</p>
            <Input
              type='number'
              onChange={(e) => onChangeHandler(e, "mobileNumber")}
              className={classes.inputField}
              placeholder='Enter your Mobile Number'
            />
          </div>
          <div className={classes.formField}>
            <p className={classes.title}>select Location</p>
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
          <Button
            loading={loading}
            block
            className={classes.Button}
            onClick={submitHandler}>
            Register Information
          </Button>
        </Col>
      </Row>
       
       
      
    </div>
  );
}
