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

export default function MedicalStoresList(props) {
  const [completeMedicalStoresList, setCompleteMedicalStoresList] = useState(
    []
  );
  const [medicalStoresList, setMedicalStoresList] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [location, setLocation] = useState("");
  useEffect(() => {
    var medicalStoresArr = [];
    db.collection("MedicalStores")
      .orderBy("timestamp", "desc")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let ago = timeDifference(doc.data().timestamp);
          medicalStoresArr.push({ ...doc.data(), ago: ago });
        });
        setCompleteMedicalStoresList(medicalStoresArr);
        setMedicalStoresList(medicalStoresArr);
        setLoadingData(false);
        window.scrollTo(0, 0);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, []);

  const onLocationChange = (value) => {
    if (value === "Entire Delhi/NCR" || value === "Entire Delhi") {
      setMedicalStoresList(completeMedicalStoresList);
      setLocation(value);
      return;
    }
    var medicalStoresArr = completeMedicalStoresList.filter(
      (medicalStore) =>
        medicalStore.location !== "" && medicalStore.location === value
    );
    setMedicalStoresList(medicalStoresArr);
    setLocation(value);
  };

  return (
    <div className={classes.body}>
      <Row justify='center'>
        <Col lg={8} sm={16} xs={23}>
          <FormHeader
            title='Medical Stores'
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
        {medicalStoresList.map((medicalStore, index) => (
          <Col key={index} lg={7} md={8} sm={15} xs={24}>
            <InfoCard
              name={medicalStore.name}
              phone={medicalStore.phone}
              location={medicalStore.location}
              streetNumber={medicalStore.streetNumber}
              ago={medicalStore.ago}
              medicines={medicalStore.medicines}
              type='MedicalStores'
            />
          </Col>
        ))}
        {!medicalStoresList.length && !loadingData && (
          <p>Medical Stores Not Found for {location}</p>
        )}
        {loadingData && <Spin indicator={antIcon} />}
      </Row>
    </div>
  );
}
