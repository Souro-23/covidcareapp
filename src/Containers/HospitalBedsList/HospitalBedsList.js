import React, { useState, useEffect } from "react";
import InfoCard from "../../Components/InfoCard/InfoCard";
import classes from "../RegistrationForm.module.css";
import { Col, Row, Select, Spin } from "antd";
import firebase from "../../Firebase/FirebaseConfig";
import { locations } from "../../Constants/location";
import { LoadingOutlined } from "@ant-design/icons";
import "firebase/firestore";
import { timeDifference } from "../DoctorsList/functions";
import FormHeader from "../../Components/FormHeader/FormHeader";

var db = firebase.firestore();

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const { Option } = Select;

export default function HospitalBedsList(props) {
  const [completeHospitalBedsList, setCompleteHospitalBedsList] = useState([]);
  const [hospitalBedsList, setHospitalBedsList] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [location, setLocation] = useState("");
  useEffect(() => {
    var hospitalBedArr = [];
    db.collection("HospitalBeds")
      .orderBy("timestamp", "desc")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let ago = timeDifference(doc.data().timestamp);
          hospitalBedArr.push({ ...doc.data(), ago: ago });
        });
        setCompleteHospitalBedsList(hospitalBedArr);
        setHospitalBedsList(hospitalBedArr);
        setLoadingData(false);
        window.scrollTo(0, 0);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, []);

  const onLocationChange = (value) => {
    if (value === "Entire Delhi/NCR" || value === "Entire Delhi") {
      setHospitalBedsList(completeHospitalBedsList);
      setLocation(value);
      return;
    }
    var hospitalBedsArr = completeHospitalBedsList.filter(
      (hospitalBed) =>
        hospitalBed.location !== "" && hospitalBed.location === value
    );
    setHospitalBedsList(hospitalBedsArr);
    setLocation(value);
  };

  return (
    <div className={classes.body}>
      <Row justify='center'>
        <Col lg={8} sm={16} xs={23}>
          <FormHeader
            title='Hospital Beds'
            onBackPress={() => props.history.push("/")}
          />
        </Col>
      </Row>
      <div className={classes.select}>
        <Select
          placeholder='Select Location'
          style={{ width: "100%" }}
          listHeight={570}
          onChange={onLocationChange}>
          {locations.map((loc) => {
            return <Option value={loc}>{loc}</Option>;
          })}
        </Select>
      </div>
      <Row justify='center' gutter={[8, 8]}>
        {hospitalBedsList.map((hospitalBed, index) => (
          <Col key={index} lg={7} md={8} sm={15} xs={24}>
            <InfoCard
              name={hospitalBed.name}
              phone={hospitalBed.phone}
              location={hospitalBed.location}
              streetNumber={hospitalBed.streetNumber}
              ago={hospitalBed.ago}
              bedsInfo={hospitalBed.bedsInfo}
              type='HospitalBeds'
            />
          </Col>
        ))}
        {!hospitalBedsList.length && !loadingData && (
          <p>Hospital Beds Not Found for {location}</p>
        )}
        {loadingData && <Spin indicator={antIcon} />}
      </Row>
    </div>
  );
}
