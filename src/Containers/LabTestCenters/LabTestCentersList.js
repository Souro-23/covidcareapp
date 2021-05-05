import React, { useState, useEffect } from "react";
import InfoCard from "../../Components/InfoCard/InfoCard";
import classes from "../RegistrationForm.module.css";
import { Col, Row, Select, Spin } from "antd";
import firebase from "../../Firebase/FirebaseConfig";
import { locations } from "../../Constants/location";
import { LoadingOutlined } from "@ant-design/icons";
import "firebase/firestore";
import { checkVerified, timeDifference } from "../DoctorsList/functions";
import FormHeader from "../../Components/FormHeader/FormHeader";

var db = firebase.firestore();

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const { Option } = Select;

export default function LabTestCentersList(props) {
  const [completeLabTestCentersList, setCompleteLabTestCentersList] = useState(
    []
  );
  const [labList, setLabList] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [location, setLocation] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);

    var labArr = [];
    db.collection("LabTestCenters")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let ago = timeDifference(doc.data().timestamp);
          labArr.push({ ...doc.data(), ago: ago });
        });
        setCompleteLabTestCentersList(checkVerified(labArr, "lab"));
        setLabList(checkVerified(labArr, "lab"));
        setLoadingData(false);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, []);

  const onLocationChange = (value) => {
    if (value === "Entire Delhi/NCR" || value === "Entire Delhi") {
      setLabList(completeLabTestCentersList);
      setLocation(value);
      return;
    }
    var labArr = completeLabTestCentersList.filter(
      (lab) => lab.location === value
    );
    setLabList(labArr);
    setLocation(value);
  };

  return (
    <div className={classes.body}>
      <Row justify='center'>
        <Col lg={8} sm={16} xs={23}>
          <FormHeader
            title='Lab Test Centers'
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
        {labList.map((lab, index) => (
          <Col key={index} lg={7} md={8} sm={15} xs={24}>
            <InfoCard
              name={lab.name}
              phone={lab.phone}
              type='lab'
              location={lab.location}
              homeTest={lab.homeTest}
              ago={lab.ago}
              charges={lab.charges}
            />
          </Col>
        ))}
        {!labList.length && !loadingData && (
          <p>Lab Test Centers Not Found for {location}</p>
        )}
        {loadingData && <Spin indicator={antIcon} />}
      </Row>
    </div>
  );
}
