import React, { useState, useEffect } from "react";
import InfoCard from "../../Components/InfoCard/InfoCard";
import classes from "../RegistrationForm.module.css";
import { Col, Row, Spin } from "antd";
import firebase from "../../Firebase/FirebaseConfig";
import "firebase/firestore";
import { LoadingOutlined } from "@ant-design/icons";
import { checkAvailability } from "./functions";
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

var db = firebase.firestore();

export default function DoctorsList() {
  const [doctorsList, setDoctorsList] = useState([]);
  useEffect(() => {
    var docArr = [];
    db.collection("Doctors")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          docArr.push(doc.data());
        });
        setDoctorsList(checkAvailability(docArr));
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, []);

  return (
    <div className={classes.body}>
      <div className={classes.formTitle}>
        <h1>List of Available Doctors</h1>
      </div>
      <Row justify='center' gutter={[8, 8]}>
        {doctorsList.length !== 0 &&
          doctorsList.map((doctor, index) => (
            <Col key={index} lg={7} md={8} sm={15} xs={24}>
              <InfoCard
                name={doctor.name}
                phone={doctor.whatsappNo}
                type='doctors'
                available={doctor.isAvailable}
              />
            </Col>
          ))}
        {!doctorsList.length && <Spin indicator={antIcon} />}
      </Row>
    </div>
  );
}
