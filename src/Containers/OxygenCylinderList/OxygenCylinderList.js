import React, { useState, useEffect } from "react";
import InfoCard from "../../Components/InfoCard/InfoCard";
import classes from "../RegistrationForm.module.css";
import { Col, Row, Select, Spin, Empty } from "antd";
import firebase from "../../Firebase/FirebaseConfig";
import { LoadingOutlined } from "@ant-design/icons";
import { locations } from "../../Constants/location";

import "firebase/firestore";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

var db = firebase.firestore();

const { Option } = Select;

export default function OxygenCylinderList() {
  const [completeOclList, setCompleteOclList] = useState([]);
  const [oclList, setOclList] = useState([]);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    console.log("Effect Called");
    var oclArr = [];
    db.collection("OxygenCylinders")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          oclArr.push(doc.data());
        });
        setLoadingData(false);
        setCompleteOclList(oclArr);
        setOclList(oclArr);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, []);

  const onLocationChange = (value) => {
    var oclArr = completeOclList.filter((ocl, index) => ocl.location === value);
    setOclList(oclArr);
  };
  return (
    <div className={classes.body}>
      <div className={classes.formTitle}>
        <h1>Oxygen Cylinders List</h1>
      </div>
      <div className={classes.select}>
        <Select
          placeholder='Select Location'
          style={{ width: "100%" }}
          showSearch
          onChange={onLocationChange}>
          {locations.map((loc) => {
            return <Option value={loc}>{loc}</Option>;
          })}
        </Select>
      </div>
      <Row justify='center' gutter={[8, 8]}>
        {oclList.map((ocl, index) => (
          <Col lg={7} md={8} sm={15} xs={24}>
            <InfoCard
              name={ocl.name}
              phone={ocl.phone}
              type='ocl'
              location={ocl.location}
              verified={ocl.verified}
            />
          </Col>
        ))}
        {!oclList.length && !loadingData && (
          <Empty description='Oxygen Cylinder Supplier Not Found In This Region' />
        )}
        {loadingData && <Spin indicator={antIcon} />}
      </Row>
    </div>
  );
}