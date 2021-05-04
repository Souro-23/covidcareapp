import React, { useState, useEffect } from "react";
import classes from "../RegistrationForm.module.css";
import { Col, Row, Spin, Button } from "antd";
import firebase from "../../Firebase/FirebaseConfig";
import "firebase/firestore";
import {
  checkAvailability,
  countAvailableDoctors,
} from "../DoctorsList/functions";
import { LoadingOutlined } from "@ant-design/icons";
import FormHeader from "../../Components/FormHeader/FormHeader";
import WhatsApp from "../../Assets/Svgs/WhatsApp.png";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

var db = firebase.firestore();

export default function SaturationList(props) {
  const [availableDoctors, setAvailableDoctors] = useState(0);
  const [whatsappGroup, setWhatsappGroup] = useState([]);
  useEffect(() => {
    getDoctorsCount();
    getWhatsAppInfo();
  }, []);

  const getDoctorsCount = () => {
    var docArr = [];
    db.collection("Doctors")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          docArr.push(doc.data());
        });
        setAvailableDoctors(countAvailableDoctors(checkAvailability(docArr)));
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  };

  const getWhatsAppInfo = () => {
    var whatsappArr = [];
    db.collection("WhatsAppGroupLinks")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          whatsappArr.push(doc.data());
        });
        setWhatsappGroup(whatsappArr);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  };

  return (
    <div className={classes.body}>
      <Row justify='center'>
        <Col lg={8} sm={16} xs={23}>
          <FormHeader
            title='Select Saturation Level'
            onBackPress={() => props.history.push("/")}
          />
        </Col>
      </Row>
      <Row>
        <div className={classes.availableHeader}>
          {availableDoctors} Doctors Available Now
        </div>
      </Row>
      <Row justify='center' gutter={[8, 8]}>
        {whatsappGroup.map((wts, index) => (
          <Col key={index} lg={7} md={8} sm={15} xs={24}>
            <div className={classes.saturationCard}>
              <p>{wts.name}</p>
              <a target='blank' href={wts.link}>
                <Button
                  className={classes.saturationButton}
                  icon={
                    <img
                      src={WhatsApp}
                      style={{
                        height: "20px",
                        width: "20px",
                        paddingRight: "2px",
                      }}
                      alt='WhatsApp Logo'
                    />
                  }>
                  Join Group
                </Button>
              </a>
            </div>
          </Col>
        ))}

        {!availableDoctors === 0 && <Spin indicator={antIcon} />}
      </Row>
    </div>
  );
}
