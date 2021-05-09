import React, { useState, useEffect } from "react";
import InfoCard from "../../Components/InfoCard/InfoCard";
import classes from "../RegistrationForm.module.css";
import { Col, Row, Select, Spin } from "antd";
import firebase from "../../Firebase/FirebaseConfig";
import { LoadingOutlined } from "@ant-design/icons";
import { locations } from "../../Constants/location";
import FormHeader from "../../Components/FormHeader/FormHeader";

import "firebase/firestore";
// import "firebase/analytics";
import { checkVerified, timeDifference } from "../DoctorsList/functions";





const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

var db = firebase.firestore();

const { Option } = Select;

export default function OxygenCylinderList(props) {
  const [completeOclList, setCompleteOclList] = useState([]);
  const [oclList, setOclList] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [location, setLocation] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
    // firebase.analytics().logEvent('goal_completion', { name: 'lever_puzzle'});
    var oclArr = [];
    db.collection("OxygenCylinders").orderBy("timestamp", "desc")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let ago = timeDifference(doc.data().timestamp);
          oclArr.push({ ...doc.data(), ago: ago });
        });
        setCompleteOclList(checkVerified(oclArr, "ocl"));
        setOclList(checkVerified(oclArr, "ocl"));
        setLoadingData(false);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, []);

  const onLocationChange = (value) => {
    if (value === "Entire Delhi/NCR" || value === "Entire Delhi") {
      setOclList(completeOclList);
      setLocation(value);
      return;
    }
    var oclArr = completeOclList.filter((ocl, index) => ocl.location === value);
    setOclList(oclArr);
    setLocation(value);
  };
  return (
    <div className={classes.body}>
      <Row justify='center'>
        <Col lg={8} sm={16} xs={23}>
          <FormHeader
            title='Oxygen Cylinders List'
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
        {oclList.map((ocl, index) => (
          <Col key={index} lg={7} md={8} sm={15} xs={24}>
            <InfoCard
              name={ocl.name}
              phone={ocl.phone}
              type='ocl'
              location={ocl.location}
              verified={ocl.verified}
              ago={ocl.ago}
            />
          </Col>
        ))}
        {!oclList.length && !loadingData && (
          <p>
            {" "}
            Oxygen Cylinders Supplier <br />
            Not Found for {location}
          </p>
        )}
        {loadingData && <Spin indicator={antIcon} />}
      </Row>
    </div>
  );
}
